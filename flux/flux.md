# FLUX

一般都是从parent Component 通过props 传递方法到 child component，来更新state tree. 

数据单向流的设计模式。 

![工作原理](./flux-simple-diagram.png)

1. actions /action creator 

  action 负责定义所有的改变state的行为。 如果想改变state，只能通过action

  actionCreator 将action 送给dispatcher

  const update = {
    type: 'ADD',
    payload: {
      text: 'do something'
    }
  }

  appDispatcher.dispatch(update);

 2. Dispatcher 

   Dispatcher 是flux架构的核心，每个app只有一个dispatcher . 通过API 让store 可以注册 callback function .

   并且向所有的store发送action 事件。 

 3. stores

   一个app通常会有一个store, 

 4. view(contrller views)
    