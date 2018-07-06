import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errors_reducer';
import sessionReducer from './session/session_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: errorsReducer
});

export default rootReducer;
