import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainPage from '../../components/main/MainPage';
import getTeamProfilesProcess from '../thunks/getTeamProfilesProcess';

function mapStateToProps(state, ownProps) {
  return {
    teamProfiles: state.teamProfiles,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_teamProfiles: () => {
      dispatch(getTeamProfilesProcess());
    },
  };
}

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(connectToStore)(withRouter(MainPage));
