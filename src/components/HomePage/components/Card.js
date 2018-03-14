import React, { Component } from 'react';

export default class Card extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="all-companies-wrap company-card-info">
                <div className="company-heading card-head">
                    <h2 className="heading-title">name</h2>
                </div>
                <div className="company-cards-info-wrapper"> 
                    <div className="company-address">
                        <div>
                            <label><strong>Address</strong></label>
                        </div>
                        <p>company info</p>
                    </div>
                </div>
            </div>
        )
    }

}