import React, { Component } from 'react';

import EmployeeDetails from './EmployeeDetails';
import CompanyProfileOverview from './CompanyProfileOverview';

import store from '../../store/company-details-store/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class DetailsPage extends Component{

    constructor(props){
      super(props);
    }

    componentWillMount(){

    }

    render(){

      let { companyname } = this.props.match.params;
      let { companyDetails } = this.props;
      let { companies, persons } = companyDetails;

      let companyDetailsXML = [];
      let personDetailsXML = [];


      for(let i in companies){
          if(companies[i].name == companyname){
              companyDetailsXML.push(companies[i]);
          }
      }

      for(let i in persons){
          if(persons[i].employer == companyname){
              personDetailsXML.push(persons[i]);
          }
      }
     
      return (
        <section id="companyOverview">    
          <div className="company-overview-wrap">
            <CompanyProfileOverview 
              companyDetails={companyDetailsXML}
            />
            <EmployeeDetails
              personDetails={personDetailsXML}
            />
          </div>
          <div className="home-btn-wrap">
            <Link to="/">Click here to go back</Link>
          </div>
        </section>
      )
    }

}

const mapStateToProps = (store) => {
  return {
      companyDetails: store.companyDetails
  }
}

export default connect(mapStateToProps)(DetailsPage);

