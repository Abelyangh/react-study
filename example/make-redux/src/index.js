import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { store } from './store';

  function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
  }

  function renderTitle (title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
  }

  function renderContent (content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
  }

  store.subscribe(() => renderApp(store.getState()));

  renderApp(store.getState()) // 首次渲染页面

  store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
	store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色


/*ReactDOM.render(
  <App />,
  document.getElementById('root')
); */
