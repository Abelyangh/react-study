let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state // 没有修改，返回原来的对象
  }
}

function createStore(state, stateChanger) {
  const getState = () => state;
  
  let listeners = [];
  const subscribe = (listener) => listeners.push(listener);

  const dispatch = (action) =>  {
     state = stateChanger(state, action);
     listeners.forEach((listener) => listener())
  };

  return {getState, dispatch, subscribe};
}

export const store = createStore( appState,stateChanger);
