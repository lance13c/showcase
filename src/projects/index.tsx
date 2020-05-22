import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PetiteProDesk from './petite_pro_desks';

export interface ProjectsProps {}

const Projects: React.SFC<ProjectsProps> = () => {
	return (
		<Router>
			<Switch>
				<Route path="/petite-pro-desks" component={PetiteProDesk} />
			</Switch>
		</Router>
	);
};

export default Projects;
