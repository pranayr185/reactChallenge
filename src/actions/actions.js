import * as actionTypes from './action-types';

export function setName(name){
    return{
        type: actionTypes.SET_NAME,
        payload: name
    }
}

export function setAddress(address){
    return{
        type: actionTypes.SET_ADDRESS,
        payload: address
    }
}

export function setRevenue(revenue){
    return{
        type: actionTypes.SET_REVENUE,
        payload: revenue
    }
}

export function setPhone(phone){
    return{
        type: actionTypes.SET_PHONE,
        payload: phone
    }
}

export function setEmployer(employer){
    return{
        type: actionTypes.SET_EMPLOYER,
        payload: employer
    }
}

export function addCompanies(companyDetails){
    return{
        type: actionTypes.ADD_COMPANIES,
        payload: companyDetails
    }
}

export function addPerson(personDetails){
    return{
        type: actionTypes.ADD_PERSON,
        payload: personDetails
    }
}