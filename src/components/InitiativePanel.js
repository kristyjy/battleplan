import React from 'react';
import { ListGroup, Button, ButtonGroup } from 'reactstrap';
import Combatant from './Combatant';
import {getHighestInitiative, getNextInOrder, getPreviousInOrder} from '../utils/turnOrderHelper';
import * as roll from '../utils/diceHelper';
import {getModifierFromAbilityScore} from '../utils/infoFormatHelper';
import './InitiativePanel.scss';

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
        <ButtonGroup className="turn-order justify-content-between">
          <Button onClick={() => { this.retractTurnOrder(); }}>&lt;</Button>
          <h2 className="turn-order-heading">Turn Order</h2>
          <Button onClick={() => { this.advanceTurnOrder(); }}>&gt;</Button>
        </ButtonGroup>
      );
    } else {
      return (
        <ButtonGroup>
          <Button onClick={() => { this.startCombat(); }}>Start Combat</Button>
          <Button onClick={() => { this.rollInitiative(); }}>Roll Initiative For NPCs</Button>
        </ButtonGroup>
      );
    }
  }

  startCombat() {
    this.setState({
      combatStarted: true
    });
    this.props.actions.updateCurrentTurn(getHighestInitiative(this.props.combatants));
  }

  rollInitiative() {
    for (var i=0; i < this.props.combatants.length; i++) {
      const updatedCombatant = {
        ...this.props.combatants[i],
        'initiative': roll.d20(1) + getModifierFromAbilityScore(this.props.combatants[i].dexterity)
      };
      this.props.actions.updateCombatant(updatedCombatant);
    }
    //roll.rollDiceFromString('2d6 + 5d8');
    this.sortCombatants();
  }

  advanceTurnOrder() {
    this.props.actions.updateCurrentTurn(getNextInOrder(this.props.combatants, this.props.currentTurn));
    this.sortCombatants();
  }

  retractTurnOrder() {
    this.props.actions.updateCurrentTurn(getPreviousInOrder(this.props.combatants, this.props.currentTurn));
    this.sortCombatants();
  }

  render() {
    const {combatants, currentTurn} = this.props;
    return (
      <div className="initiative-panel col-md-5">
        {this.renderControls()}
        <ListGroup>
          {this.renderCombatants(combatants, currentTurn)}
        </ListGroup>
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
