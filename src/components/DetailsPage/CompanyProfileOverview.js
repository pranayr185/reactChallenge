import React, { Component } from 'react';

export default class CompanyProfileOverview extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let { companyDetails } = this.props;

        let companyProfileXML = companyDetails.map((item) => {     
                               
                return(
                    <div key={item.name} className="profile-overview-wrapper">
                        <div className="profile-overview company-cards-wrapper">
                            <div className="company-address">
                                <div>
                                    <label><strong>Address</strong></label>
                                </div>
                                <p>{item.address}</p>
                            </div>
                            <div className="company-revenue">
                                <div>
                                    <label><strong>Revenue</strong></label>
                                </div>
                                <p>{item.revenue}</p>
                            </div>
                            <div className="company-phone">
                                <div>
                                    <label><strong>Phone</strong></label>
                                </div>
                                <p>{item.phone}</p>
                            </div>
                        </div>
                        <div className="profile-overview">
                            {/* <div className="total-employees">
                                <div>
                                    <label><strong>Total employees</strong></label>
                                </div>
                                <p>10</p>
                            </div> */}
                        </div>
                </div>
                )
            });

        return(
         <section id="allCompanies">
            <div className="all-companies-wrap">
             <div className="company-heading">
                <h2 className="heading-title">Profile Overview</h2>
             </div>
                { companyProfileXML }
            </div>
         </section> 
        )
    }

}

