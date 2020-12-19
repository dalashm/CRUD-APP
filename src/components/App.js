import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PostIndex from './PostIndex';
import PostNew from './PostNew';
import PostShow from './PostShow';
import '../Main.css';
function App() {
	return (
		<div className="text-light">
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/posts/new" component={PostNew} />
						<Route exact path="/posts/:id" component={PostShow} />
						<Route exact path="/" component={PostIndex} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
