import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mSP = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mDP = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mSP, mDP)(SessionForm);
