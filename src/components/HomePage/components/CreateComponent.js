import React, { Component } from 'react';

import CreateCompany from './CreateCompany';
import CreateEmployee from './CreateEmployee';

import { connect } from 'react-redux';
import store from '../../../store/company-details-store/store';

class CreateComponent extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let {name, address, revenue, phone, companies, employer} = this.props.companyDetails;

        return(
            <section id="createComponent">
                <div className="create-component-wrap">
                    <CreateCompany
                        name={name}
                        address={address}
                        revenue={revenue}
                        phone={phone}
                        companies={companies}
                    />
                </div>
                {
                    companies.length > 0 &&
                    <div className="create-component-wrap">
                        <CreateEmployee
                            name={name}
                            address={address}
                            companies={companies}
                            employer={employer}
                        />
                    </div>
                }
            </section>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        companyDetails: store.companyDetails
    }
}

export default connect(mapStateToProps)(CreateComponent);