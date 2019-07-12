import React from 'react'

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project title - {id}</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reprehenderit doloribus amet aspernatur sed, tenetur in nulla repellendus modi porro omnis necessitatibus harum possimus dolorum, pariatur ducimus? Ex, quas quos.</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div className="">Posted by the Net Ninja</div>
					<div className="">July 10, 2019</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
