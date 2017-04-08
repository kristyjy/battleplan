import React from 'react';
import { ListGroupItem, Badge, ButtonGroup, Button, Tooltip, Input } from 'reactstrap';
import './Combatant.scss';

class Combatant extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateInitiative = this.updateInitiative.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  updateInitiative(e) {
    if (e && e.target.value !== "") {
      const updatedCombatant = {...this.props.combatant, 'initiative': parseInt(e.target.value)};
      this.props.actions.updateCombatant(updatedCombatant);
      this.props.actions.sortCombatants();
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  getClasses(isCurrentTurn) {
    return isCurrentTurn ? "justify-content-between currentTurn" : "justify-content-between";
  }

  render() {
    const {combatant, isCurrentTurn} = this.props;
    return (
      <ListGroupItem className={this.getClasses(isCurrentTurn)}>
        <Badge pill id={"initiativeBadge"+combatant.id}>{combatant.initiative}</Badge>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} autohide={false} target={"initiativeBadge"+combatant.id} toggle={this.toggle}>
          <Input
            type="number"
            name={"initiativeInput"+combatant.id}
            id={"initiativeInput"+combatant.id}
            defaultValue={combatant.initiative}
            onChange={this.updateInitiative}/>
        </Tooltip>
        {combatant.name}
        <ButtonGroup size="sm">
          <Button>KO</Button>
          <Button>Dead</Button>
        </ButtonGroup>
      </ListGroupItem>
    );
  }
}

Combatant.propTypes = {
  combatant     : React.PropTypes.object.isRequired,
  isCurrentTurn : React.PropTypes.bool,
  actions   : React.PropTypes.object.isRequired
};

export default Combatant;
