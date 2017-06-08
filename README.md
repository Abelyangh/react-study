# react-study


1. React component create: 

export class Counter extends React.component {
	render () {
      return <h1>counter: {this.props.counter}</h1>
    }
}

2. Component lifecycle :

  Mounting(装配)
      1. constructor()
      2. componentWillMount()
      3. render() 
      4. componentDidMount() 

export class Computer extends React.component {
    constructor(props) {
       super(props);
       this.state = {
         name: props.name
         price: props.price
       }
    }

    componentWillMount() {
    	// you can do rest call. called before render method 
    }
	render() { 

       return <h1>{this.props.name} spent my {this.props.price}</h1>
    }

    componentDidMount() {
    	//推荐在这个地方做异步的请求数据。 让后触发重绘页面。
    }
}



  Updating (更新) by changes to props or state 

      1. componentWillReceiveProps()
      2. shouldComponentUpdate()
      3. componentWillUpdate()
      4. render() 
      5. componentDidUpdate() 

   Unmounting 

      componentWillUnmount() 触发在组件被删除的时候。 

 3. 强制更新UI。 

    1. setState()
    2. forceUpdate()

 4. class properties (类属性)

    1. defaultProps
    2. displayName 

 5. 实例属性
    1. props
    2. state

