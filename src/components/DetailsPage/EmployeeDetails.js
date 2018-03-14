import React, { Component } from 'react';

export default class EmployeeDetails extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let { personDetails } = this.props;

        let personDetailsXML = personDetails.map((item) => {

                return <div key={item.name} className="employee-cards-wrapper">
                        <div className="person-name-wrap">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="person-info">
                            <div>
                                <label><strong>Address:</strong></label>
                            </div>
                            <p>{item.address}</p>
                        </div>
                    </div>
        });

        return(
         <section id="allCompanies"> 
                <div className="all-companies-wrap">
                    <div className="company-heading">
                        <h2 className="heading-title">Employees</h2>
                    </div>
                    <div style={{margin: '30px 0'}}>
                    {
                        personDetailsXML.length > 0
                        ?
                        personDetailsXML
                        :
                        <div>
                            <p>
                                Sorry no employees!
                            </p>
                        </div>
                    }
                    </div>
                </div> 
         </section> 
        )
    }

}