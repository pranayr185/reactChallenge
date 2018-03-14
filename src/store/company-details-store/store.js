import { combineReducers, createStore } from 'redux';
import CompanyDetailsReducer from '../../reducers/CompanyDetailsReducer';

const reducers = combineReducers({
    companyDetails: CompanyDetailsReducer
});

export default createStore(reducers);

