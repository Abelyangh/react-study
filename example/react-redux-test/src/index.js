import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import App from './App';
import './index.css';
import Header from './Header';
import Content from './Content';

import { Provider } from './Provider';

function createStore(reducer) {
	let state = null;
	const listeners = [];

	const subscribe = (listener) => listeners.push(listener);

	const getState = ()=> state; 

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	}

	dispatch({});

	return {getState, subscribe, dispatch};
}

const themeReducer = (state, action) => {
	if(!state) {
		return { themeColor: 'red'};
	}

	switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
} 

const store = createStore(themeReducer);

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

// 把 Provider 作为组件树的根节点
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
