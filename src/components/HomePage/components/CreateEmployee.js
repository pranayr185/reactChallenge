import React, { Component } from 'react';

import * as action from '../../../actions/actions'; 
import store from '../../../store/company-details-store/store';

export default class CreateEmployee extends Component{

    constructor(props){
        super(props);
        this.handleSetName = this.handleSetName.bind(this);
        this.handleSetAddress = this.handleSetAddress.bind(this);
        this.handlePersonSubmit = this.handlePersonSubmit.bind(this);
        this.handleSetEmployer = this.handleSetEmployer.bind(this);
    }

    handleSetName(e){    
        let value = e.target.value;
        store.dispatch(action.setName(value));
    }

    handleSetAddress(e){    
        let value = e.target.value;
        store.dispatch(action.setAddress(value));
    }

    handlePersonSubmit(){

        let { name, address, employer } = this.props;
        let dataToSend = {};

        dataToSend['name'] = name; 
        dataToSend['address'] = address;
        dataToSend['employer'] = employer;

        store.dispatch(action.addPerson(dataToSend));
    }

    handleSetEmployer(e){
        let employer = e.target.value; 
        
        if(employer != undefined){
            store.dispatch(action.setEmployer(employer));
        }else{
            return;
        }       
        
    }

    render(){

        let {companies, employer} = this.props;
        let employerXML = [];
        
        if(companies){
            employerXML = companies.map((company, index) => {
                return <option key={company.name + '_' + index}>{company.name}</option>
            });
        }

        return(
            <div>
                <div className="create-employee-wrapper">
                        <div className="company-heading">
                            <h2 className="heading-title">Create New Person</h2>
                        </div>
                        <div className="input-details-wrapper">
                            <div className="input-group">
                                <div>
                                    <label>Name:</label>
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Enter Name" onChange={(e) => this.handleSetName(e)} />
                                </div>
                            </div>
                            <div className="input-group">
                                <div>
                                    <label>Address:</label>
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Enter Address" onChange={(e) => this.handleSetAddress(e)} />
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="form-control">
                                    <select value={employer} onChange={this.handleSetEmployer}>
                                        {employerXML}
                                    </select>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="form-control">
                                    <button className="btn-save" onClick={this.handlePersonSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>            
        </div>
        )
    }

}