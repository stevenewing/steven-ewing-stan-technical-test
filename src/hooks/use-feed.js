import { useCallback, useEffect, useState } from 'react';

export const initialState = { data: [], error: false, loading: false };

export const useFeed = (url, query = { programType: 'movie' }) => {
  // Use a single React.useState hook to avoid unnecesary rerendering of components.
  const [state, setState] = useState(initialState);

  // Avoid unncesarily recreating the fetchData function on every render by caching it via React.useCallback.
  const fetchData = useCallback(async () => {
    try {
      setState({
        ...initialState,
        loading: true
      });

      const response = await fetch(url);
      const json = await response.json();

      setState({
        ...initialState,
        data: json.entries
          // Filter by release year and program type.
          .filter(item => item.releaseYear >= 2010 && item.programType === query.programType)
          // Limit the amount of items displayed to 21.
          .filter((item, index) => index < 21)
          // Only return the data that is required.
          .map(item => ({
            image: item.images['Poster Art'].url,
            title: item.title.trim()
          }))
          // Sort the data by title in ascending order.
          .sort((firstItem, secondItem) => {
            if (firstItem.title < secondItem.title) {
              return -1;
            }

            if (firstItem.title > secondItem.title) {
              return 1;
            }

            return 0;
          })
      });
    } catch (caughtError) {
      // console.error(caughtError);

      setState({
        ...initialState,
        error: true
      });
    }
  }, [url, query.programType]);

  useEffect(() => fetchData(), [fetchData]);

  return state;
};
