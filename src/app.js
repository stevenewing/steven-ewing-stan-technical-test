import React from 'react';
import { render } from 'react-dom';
import { App } from 'components/app';

const [node] = document.getElementsByTagName('main');

render(<App />, node);
