import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/battleScreenActions';
import InitiativePanel from '../components/InitiativePanel';
//import FuelSavingsForm from '../components/FuelSavingsForm';

/*export const BattleScreen = (props) => {
  return (
    <FuelSavingsForm
      saveFuelSavings={props.actions.saveFuelSavings}
      calculateFuelSavings={props.actions.calculateFuelSavings}
      fuelSavings={props.fuelSavings}
    />
  );
};*/

export const BattleScreen = (props) => {
  return (
    <div className="battle-screen">
      <InitiativePanel combatants={props.combatants} />
    </div>
  );
};

BattleScreen.propTypes = {
  actions: PropTypes.object.isRequired,
  combatants: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    combatants: state.battleScreen.combatants
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleScreen);
