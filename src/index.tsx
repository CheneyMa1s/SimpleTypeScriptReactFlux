import * as React from 'react';
import * as ReactDOM from 'react-dom';
import List from './Components/List';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ListStore from './Myflux/Stores';

let store = new ListStore();

store.on('change', (i: string[]) => {
  renderUI(i);
});

renderUI([]);

registerServiceWorker();

function renderUI(i: string[]) {
  ReactDOM.render(<List List={i} />, document.getElementById('root') as HTMLElement);
}