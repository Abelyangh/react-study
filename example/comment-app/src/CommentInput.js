import React, { Component } from 'react';

class ComponentInput extends Component{
	constructor() {
		super();
		this.state = {
			username: '',
			content: ''
		}
		this.usernameChangeHandler = (event) => this.setState({
                username: event.target.value
             })

		this.contentChangeHandler = (event) => this.setState({
			content: event.target.value
		})

		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler () {
		if(this.props.onSubmit) {
				const { username, content } = this.state;
				this.props.onSubmit({username, content});
			}
			this.setState({content: ''});
	}

	render() {
		return (
			<div className='comment-input'>
	        <div className='comment-field'>
	          <span className='comment-field-name'>用户名：</span>
	          <div className='comment-field-input'>
	            <input value={this.state.username} onChange={this.usernameChangeHandler}/>
	          </div>
	        </div>
	        <div className='comment-field'>
	          <span className='comment-field-name'>评论内容：</span>
	          <div className='comment-field-input'>
	            <textarea value={this.state.content} onChange={this.contentChangeHandler}/>
	          </div>
	        </div>
	        <div className='comment-field-button'>
	          <button onClick={this.submitHandler}>
	            发布
	          </button>
            </div>
          </div>
          );
	}
}

export default ComponentInput;




