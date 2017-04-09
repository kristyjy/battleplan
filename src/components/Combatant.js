import React from 'react';
import { ListGroupItem, Badge, ButtonGroup, Button, Tooltip, Input } from 'reactstrap';
import './Combatant.scss';
import classNames from 'classnames';

class Combatant extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateInitiative = this.updateInitiative.bind(this);
    this.toggleIsKO = this.toggleIsKO.bind(this);
    this.toggleIsDead = this.toggleIsDead.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  updateInitiative(e) {
    if (e && e.target.value !== "") {
      const updatedCombatant = {
        ...this.props.combatant,
        'initiative': parseInt(e.target.value)
      };
      this.props.actions.updateCombatant(updatedCombatant);
      this.props.actions.sortCombatants();
    }
  }

  toggleIsKO() {
    const updatedCombatant = {
      ...this.props.combatant,
      'isKO': !this.props.combatant.isKO,
      'isDead': false
    };
    this.props.actions.updateCombatant(updatedCombatant);
    this.props.actions.sortCombatants();
  }

  toggleIsDead() {
    const updatedCombatant = {
      ...this.props.combatant,
      'isKO': false,
      'isDead': !this.props.combatant.isDead
    };
    this.props.actions.updateCombatant(updatedCombatant);
    this.props.actions.sortCombatants();
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    const {combatant, isCurrentTurn} = this.props;
    const classes = classNames({
      'combatant': true,
			'justify-content-between': true,
      'currentTurn': isCurrentTurn,
      'combatant-dead': combatant.isDead,
      'combatant-ko': combatant.isKO
    });
    const koBtnClasses = classNames({
      "ko-toggle": true,
      "ko-toggle-on": combatant.isKO
    });
    const deadBtnClasses = classNames({
      "dead-toggle": true,
      "dead-toggle-on": combatant.isDead
    });
    return (
      <ListGroupItem className={classes}>
        <Badge pill id={"initiativeBadge"+combatant.id}>{combatant.initiative}</Badge>
        <Tooltip placement="right"
          isOpen={this.state.tooltipOpen}
          autohide={false}
          target={"initiativeBadge"+combatant.id}
          toggle={this.toggle}>
          <Input
            type="number"
            name={"initiativeInput"+combatant.id}
            id={"initiativeInput"+combatant.id}
            defaultValue={combatant.initiative}
            onChange={this.updateInitiative}/>
        </Tooltip>
        {combatant.name}
        <ButtonGroup size="sm">
          <Button
            className={koBtnClasses}
            onClick={() => { this.toggleIsKO(); }}>KO</Button>
          <Button
            className={deadBtnClasses}
            onClick={() => { this.toggleIsDead(); }}>Dead</Button>
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
