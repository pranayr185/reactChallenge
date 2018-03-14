import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CompanyCard extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let { companies } = this.props.companyDetails;
        let companiesXML = [];

        if(companies){

            companiesXML = companies.map((company) => {
                return <Link key={company.name} to={ "/details/" + company.name } >
                        <div className="all-companies-wrap company-card-info">
                            <div className="company-heading card-head">
                                <h2 className="heading-title">{company.name}</h2>
                            </div>
                            <div className="company-cards-info-wrapper">
                                
                                <div className="company-address">
                                    <div>
                                        <label><strong>Address</strong></label>
                                    </div>
                                    <p>{company.address}</p>
                                </div>
                                <div className="company-revenue">
                                    <div>
                                        <label><strong>Revenue</strong></label>
                                    </div>
                                    <p>{company.revenue}</p>
                                </div>
                                <div className="company-phone">
                                    <div>
                                        <label><strong>Phone</strong></label>
                                    </div>
                                    <p>{company.phone}</p>
                                </div>
                            </div>
                        </div>
                </Link>
            });

        }

        return(
         <div>
             {companiesXML}
         </div> 
        )
    }

}