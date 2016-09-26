import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    applications: state.applications,
    edus: state.edus,
    exps: state.exps,
    questions: state.questions
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
