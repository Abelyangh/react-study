# redux
## Introduce
  redux 是一个对于Javascript应用的可以预测的状态容器，虽然是React社区提出来的， 但是可以结合React , Angular,Backbone
  or vue.js
## Three principles
  - 一个应用程序只有一个store,所有的state都是存储在一个对象中。 
  - state是只读的，只能通过actions去改变它。 
  - Reducers创建下一个state，返回当前的store的一个缩影(current state)和一个action
## Core concepts
  1. Workflow
  2. Action
  3. Reducer
  4. Store 
  5. React -redux
  6. Sync  action
  7.  Middleware

  工作原理：

   用户发出去action , reducer 纯函数计算出新的 state , store 会监听到state的变化，触发view的渲染。 
   
   ![alt_text](./dispatch.png)

  Example: 

  ```
    const Redux = require('redux');
    const createStore = Redux.createStore;
    const reducer = (state, action) => {
      switch(action.type) {
         case 'GO':
           state ="GO"; break;
         case ‘STOP’：
           state ='STOP';break;
         case 'CAUTION'：
           state = 'CAUTION'; break;
         default: 
           state = ''; break;
      }
    }

    const store = createStore(reducer);
    const cautionAction = {
         type : 'CAUTION',
         payload: {}
    }
    const goAction = {
         type: 'GO'
    }

    const stopAction = {
         type: 'STOP'
    }

    store.dispatch(stopAction);
    store.dispatch(cautionAction);
    store.dispatch(goAction);
   ```
## Redux  API

  - Object createStore(reducer, initialState) 
  - Object combineReducer(reducer) 合并所有的reducer到一个
  - Object compose(...functions) 构成functions ,从左到右
  - void applyMiddleware(...middlewares) 声明中间件 
  - Object bindActionCreators(actionCtreators, dispatch) 绑定Action到dispatch方法。

  - Object getState() 
  - void  dispatch()
  - replaceReducer(nextReducer)
  - subscribe(functioncallback)  causes redux to call the callback method for every dispatch

## React-Redux
  - Connect 

  ```
  import {connect} from 'react-redux';
  const mapStateToProps = (state) => ({ budgets: values(state.entities.budgets)})
  const mapDispatchToProps = (dispatch) => bindActionCreators(merge({}, BudgetActions, NavigationActions), dispatch)
  connect(mapStateToProps, mapDispatchToProps)(component);

  ```

reference: 
   http://redux.js.org/index.html

   http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

##