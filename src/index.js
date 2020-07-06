import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
	return (
		<div className="ui container comments">
			<div className="comment">
					<a href="/" ckassName="avatar">
					<img alt="avatar" src={faker.image.avatar()} />
					</a>
				<div className="content">
						<a href="/" className="author">
							Sam
						</a>
					<div className="ametadata">
						<span className="date">Today at 6:00pm</span>
					</div>
					<div className="text">Nice Blog Post!</div>
			 	</div>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'))