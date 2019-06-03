import React, { Component } from 'react';

import Comment from './Comment';

class CommentList extends Component{
	constructor() {
		super();
		
	}
	render() {
				return (<div>
			{this.props.comments.map((comment, i)=> {
               return (<Comment comment = {comment} key={i}/>);
			})}
			</div>);
	}
}

export default CommentList;