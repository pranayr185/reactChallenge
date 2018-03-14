import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

import Companies from './components/Companies';
import CreateComponent from './components/CreateComponent';

const propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	resetNumberToZero: PropTypes.func.isRequired,
};

class HomePage extends Component {
	render() {
		
		return (
			<React.Fragment>
				<div className="home__wrapper">
					<div className="home-widgets-wrapper">
						<div className="home-widgets companies">
							<Companies />
						</div>
						<div className="home-widgets create">
							<CreateComponent />
						</div>
					</div>					
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;