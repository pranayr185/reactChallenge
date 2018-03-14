import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import HomePage from 'containers/HomePage';
import DetailsPage from 'components/DetailsPage';
import NumberPage from 'containers/NumberPage';
import './styles.less';

import store from '../../store/company-details-store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <div className="app__header">
              <div className="app__header-title">
                <Link to="/">Loreum Ipsum</Link>
              </div>
            </div>
            <Route exact path="/" component={HomePage} />
            <Route path="/details/:companyname" component={DetailsPage} />
            <Route path="/number" component={NumberPage} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
