import * as actionTypes from '../actions/action-types';
import * as action from '../actions/actions';

import store from '../store/company-details-store/store';

const initialState = {
        companies: [],
        persons: [],
        name: "",
        address: "",
        revenue: "",
        phone: "",
        employer: ""
}

let CompanyDetailsReducer = ( state = initialState, action) => {

    switch(action.type){

        case actionTypes.SET_NAME:
            state = Object.assign({}, state, { name: action.payload });
            return state;
            break;
        case actionTypes.SET_ADDRESS:
            state = Object.assign({}, state, { address: action.payload });
            return state;
            break;
        case actionTypes.SET_REVENUE:
            state = Object.assign({}, state, { revenue: action.payload });
            return state;
            break;
        case actionTypes.SET_PHONE:
            state = Object.assign({}, state, { phone: action.payload });
            return state;
            break;
        case actionTypes.SET_EMPLOYER:
            console.log(action.payload);
            state = Object.assign({}, state, { employer: action.payload });
            return state;
            break;
        case actionTypes.ADD_COMPANIES:

            let companiesArr = state.companies;
            let companiesDetails = action.payload;

            if(companiesArr.length > 0){

                for(let i in companiesArr){
                    if(companiesArr[i].name === companiesDetails.name){
                        console.log('error');
                    }else{
                        companiesArr.push(companiesDetails);
                    }
                }
            }else{
                companiesArr.push(companiesDetails);            
            }

            state = Object.assign({}, state, { companies: companiesArr });
            return state;
            break;
        case actionTypes.ADD_PERSON:

            let personArr = state.persons;
            let personDetails = action.payload;

            if(personArr.length > 0){

                for(let i in personArr){
                    if(personArr[i].name === personDetails.name){
                        console.log('error');
                    }else{
                        personArr.push(personDetails);
                    }
                }
            }else{          
                personArr.push(personDetails);            
            }            

            state = Object.assign({}, state, { persons: personArr });
            return state;
            break;
    }

    return state;
}

export default CompanyDetailsReducer;
