import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
	state = {
		title: '',
		content: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createProject(this.state)
	}

	render() {
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Create New Project</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange}/>
					</div>
					<div className="input-field">
						<label htmlFor="content">Project Content</label>
						<textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
					</div>
					<div className="input-field">
						<button className="btn pink lighted-1 z-depth-0">Create Project</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => {dispatch(createProject(project))}
	}
}

//We must pass null because we don't have mapStateToProps, so mapDispatchToProps is the second.
export default connect(null, mapDispatchToProps)(CreateProject)
