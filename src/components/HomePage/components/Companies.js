import React, { Component } from 'react';

import CompanyCard from './CompanyCard';

import store from '../../../store/company-details-store/store';

import { connect } from 'react-redux';


const NoCompaniesReview = () => {
	return(
		<div>
			<p>Sorry no companies for review.</p>
		</div>
	)
}

class Companies extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let {companyDetails} = this.props;
        let { companies } = companyDetails;

        return(
         <section id="allCompanies">
            <div className="all-companies-wrap">
             <div className="company-heading">
                <h2 className="heading-title">Companies</h2>
             </div>
             <div className="company-cards-wrapper">
                {
                    companies.length > 0 
                    ?
                    <CompanyCard 
                        companyDetails={companyDetails}
                    />
                    :
                    <NoCompaniesReview />
                }
             </div>
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

export default connect(mapStateToProps)(Companies);

