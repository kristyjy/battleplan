import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/battleScreenActions';
import InitiativePanel from '../components/InitiativePanel';
import MainPanel from './MainPanel';

export const BattleScreen = (props) => {
  return (
    <div className="battle-screen row">
      <InitiativePanel
        combatants={props.combatants}
        currentTurn={props.currentTurn}
        actions={props.actions}
        />
      <MainPanel
        combatants={props.combatants}
        actions={props.actions}
        currentTurn={props.currentTurn}
        />
    </div>
  );
};

BattleScreen.propTypes = {
  actions: PropTypes.object.isRequired,
  combatants: PropTypes.array.isRequired,
  currentTurn: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    combatants: state.battleScreen.combatants,
    currentTurn: state.battleScreen.currentTurn
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
