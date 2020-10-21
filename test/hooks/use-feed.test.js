import fetchMock from 'fetch-mock';
import { act, renderHook } from '@testing-library/react-hooks';
import mockData from '../../data/mock.json';
import sampleData from '../../data/sample.json';
import { useFeed } from 'hooks/use-feed';

describe('hooks/use-feed.js', () => {
  const sampleDataUrl = 'http://localhost:3000/feeds/sample.json';

  afterEach(() => {
    fetchMock.restore();
  });

  it('handles fetching, filtering and sorting data.', async () => {
    fetchMock.get(sampleDataUrl, sampleData);

    let renderer = null;

    await act(async () => {
      renderer = renderHook(() => useFeed(sampleDataUrl));

      await renderer.waitForNextUpdate();
      await renderer.waitForNextUpdate();
      await renderer.waitForNextUpdate();

      expect(renderer.result.current.data).toEqual(mockData);
    });
  });

  it('handles the error state.', async () => {
    fetchMock.get(sampleDataUrl, 500);

    let renderer = null;

    await act(async () => {
      renderer = renderHook(() => useFeed(sampleDataUrl));

      await renderer.waitForNextUpdate();
      await renderer.waitForNextUpdate();
      await renderer.waitForNextUpdate();

      expect(renderer.result.current.error).toEqual(true);
    });
  });

  it('handles the loading state.', async () => {
    fetchMock.get(sampleDataUrl, {});

    let renderer = null;

    await act(async () => {
      renderer = renderHook(() => useFeed(sampleDataUrl));

      await renderer.waitForNextUpdate();
      await renderer.waitForNextUpdate();

      expect(renderer.result.current.loading).toEqual(true);
    });
  });
});
