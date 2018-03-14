import React, { Component } from 'react';

import * as action from '../../../actions/actions'; 
import store from '../../../store/company-details-store/store';

import { connect } from 'react-redux';

// const validation = [
//     {
//         type: "name",
//         isRequired: true
//     }
// ]

class CreateCompany extends Component{

    constructor(props){
        super(props);
        this.handleSetName = this.handleSetName.bind(this);
        this.handleSetAddress = this.handleSetAddress.bind(this);
        this.handleSetRevenue = this.handleSetRevenue.bind(this);
        this.handleSetPhone = this.handleSetPhone.bind(this);
        this.handleCompanySubmit = this.handleCompanySubmit.bind(this);
        // this.validate = this.validate.bind(this);
    }
    
    handleSetName(e){    
        let value = e.target.value;
        store.dispatch(action.setName(value));
    }

    handleSetAddress(e){    
        let value = e.target.value;
        store.dispatch(action.setAddress(value));
    }

    handleSetRevenue(e){    
        let value = e.target.value;
        store.dispatch(action.setRevenue(value));
    }

    handleSetPhone(e){    
        let value = e.target.value;
        store.dispatch(action.setPhone(value));
    }

    handleCompanySubmit(){

        let { name, address, revenue, phone } = this.props;

        let dataToSend = {};

        dataToSend['name'] = name; 
        dataToSend['address'] = address; 
        dataToSend['revenue'] = revenue; 
        dataToSend['phone'] = phone; 

        let nameField = this.refs.name;
        let addressField = this.refs.address;
        let revenueField = this.refs.revenue;
        let phoneField = this.refs.phone;

        if(nameField.value == ''){
            alert('Please enter all fields');
            return false;
        }
        
        if( addressField.value == ''){
            alert('Please enter all fields');
            return false;
        }

        if( revenueField.value == ''){
            alert('Please enter all fields');
            return false;
        }

        if( phoneField.value == ''){
            alert('Please enter all fields');
            return false;
        }else{
            store.dispatch(action.addCompanies(dataToSend));
        }

    }

    render(){

        return(
            <div className="create-company-wrapper">
                <div className="company-heading">
                    <h2 className="heading-title">Create New Company</h2>
                </div>
                <div className="input-details-wrapper">
                    <div className="input-group">
                        <div>
                            <label>Name:</label>
                        </div>
                        <div className="form-control">
                            <input ref="name" type="text" placeholder="Enter Name" onChange={(e) => this.handleSetName(e)}/>
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label>Address:</label>
                        </div>
                        <div className="form-control">
                            <input ref="address" type="text" placeholder="Enter Address" onChange={(e) => this.handleSetAddress(e)}/>
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label>Revenue:</label>
                        </div>
                        <div className="form-control">
                            <input ref="revenue" type="text" placeholder="Enter Revenue" onChange={(e) => this.handleSetRevenue(e)} />
                        </div>
                    </div>
                    <div className="input-group">
                        <div>
                            <label>Phone:</label>
                        </div>
                        <div className="form-control">
                            <input ref="phone" type="text" placeholder="Enter Phone" onChange={(e) => this.handleSetPhone(e)} />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="form-control">
                            <button className="btn-save" onClick={this.handleCompanySubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        companyDetails: store.companyDetails
    }
}

export default connect(mapStateToProps)(CreateCompany);