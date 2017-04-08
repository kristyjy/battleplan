import React from 'react';
import { ListGroup, Button, ButtonGroup } from 'reactstrap';
import Combatant from './Combatant';
import {getHighestInitiative, getNextInOrder, getPreviousInOrder} from '../utils/turnOrderHelper';

class InitiativePanel extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.renderCombatants = this.renderCombatants.bind(this);
    this.renderControls = this.renderControls.bind(this);
    this.startCombat = this.startCombat.bind(this);
    this.advanceTurnOrder = this.advanceTurnOrder.bind(this);
    this.retractTurnOrder = this.retractTurnOrder.bind(this);
    this.state = {
      combatStarted: false
    };
  }

  sortCombatants() {
    this.props.actions.sortCombatants();
  }

  renderCombatants(combatants, currentTurn) {
    return combatants.map((combatant) =>
        <Combatant
          key={combatant.id}
          combatant={combatant}
          actions={this.props.actions}
          isCurrentTurn={combatant.initiative === currentTurn} />
    );
  }

  renderControls() {
    if (this.state.combatStarted) {
      return (
        <ButtonGroup>
          <Button onClick={() => { this.retractTurnOrder(); }}>Previous Turn</Button>
          <Button onClick={() => { this.advanceTurnOrder(); }}>Next Turn</Button>
        </ButtonGroup>
      );
    } else {
      return (
        <Button onClick={() => { this.startCombat(); }}>Start Combat</Button>
      );
    }
  }

  startCombat() {
    this.setState({
      combatStarted: true
    });
    this.props.actions.updateCurrentTurn(getHighestInitiative(this.props.combatants));
  }

  advanceTurnOrder() {
    this.props.actions.updateCurrentTurn(getNextInOrder(this.props.combatants, this.props.currentTurn));
    this.sortCombatants();
  }

  retractTurnOrder() {
    this.props.actions.updateCurrentTurn(getPreviousInOrder(this.props.combatants));
    this.sortCombatants();
  }

  render() {
    const {combatants, currentTurn} = this.props;
    return (
      <div className="initiative-panel col-md-5">
        <ListGroup>
          {this.renderCombatants(combatants, currentTurn)}
        </ListGroup>
        {this.renderControls()}
      </div>
    );
  }
}

InitiativePanel.propTypes = {
  combatants     : React.PropTypes.array.isRequired,
  currentTurn    : React.PropTypes.number.isRequired,
  actions   : React.PropTypes.object.isRequired
};

export default InitiativePanel;
