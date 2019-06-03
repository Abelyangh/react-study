import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {

	constructor() {
		super();
		this.state = {
			comments: []
		}
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
	}

	componentDidMount() {
		let comments = this._loadComments();
		if (comments) {
			comments = JSON.parse(comments)
            this.setState({ comments })
		}
	}

	_loadComments() {
		return localStorage.getItem('comments');
	}

	_saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

	handleSubmitComment(comment) {
        this.state.comments.push(comment);
        this.setState({
        	comments: this.state.comments
        });
        this._saveComments(this.state.comments);
    }

	render() {
		return (
			<div className="wrapper">
              <CommentInput onSubmit= {this.handleSubmitComment}/>
              <CommentList comments = {this.state.comments}/>
			</div>
			);
	}
}