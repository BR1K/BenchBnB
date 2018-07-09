import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const mSP = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
  };
};

const mDP = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mSP, mDP)(SessionForm);
