import React from 'react';
import { ListGroupItem, Badge, ButtonGroup, Button, Tooltip, Input, Progress, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import './Combatant.scss';
import classNames from 'classnames';

class Combatant extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateInitiative = this.updateInitiative.bind(this);
    this.updateHP = this.updateHP.bind(this);
    this.toggleIsKO = this.toggleIsKO.bind(this);
    this.toggleIsDead = this.toggleIsDead.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleHpForm = this.toggleHpForm.bind(this);
    this.handleChangeDamage = this.handleChangeDamage.bind(this);
    this.state = {
      tooltipOpen: false,
      hpFormOpen: false,
      damage: -4
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

  handleChangeDamage(e) {
    this.setState({
      damage: e.target.value
    });
  }

  updateHP() {
    let newHP = this.props.combatant.current_hp + parseInt(this.state.damage);
    if (newHP > this.props.combatant.hit_points) {
      newHP = this.props.combatant.hit_points;
    }
    else if (newHP < 0) {
      newHP = 0;
    }
    const updatedCombatant = {
      ...this.props.combatant,
      'current_hp': newHP,
      'isDead': newHP <= 0 ? true : false
    };
    this.props.actions.updateCombatant(updatedCombatant);
    this.props.actions.sortCombatants();
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

  toggleHpForm() {
    this.setState({
      hpFormOpen: !this.state.hpFormOpen,
    });
  }

  renderCombatantControls(combatant, koBtnClasses, deadBtnClasses) {
    if (combatant.creature_type === 'npc') {
      return (
        <div className="combatantHp">
          {combatant.current_hp}/{combatant.hit_points}
        </div>
      );
    }
    else {
      return (
        <ButtonGroup size="sm">
          <Button
            className={koBtnClasses}
            onClick={() => { this.toggleIsKO(); }}>KO</Button>
          <Button
            className={deadBtnClasses}
            onClick={() => { this.toggleIsDead(); }}>Dead</Button>
        </ButtonGroup>
      );
    }
  }

  renderHpBar(type, current, total, id) {
    if (type === 'npc') {
      let percent = (current / total) * 100;
      return (
        <div className="combatant-hp-bar">
          <Progress id={"hp_form_"+id} onClick={() => { this.toggleHpForm(); }} value={percent} />
          <Popover placement="bottom" isOpen={this.state.hpFormOpen} target={"hp_form_"+id} toggle={this.toggleHpForm}>
            <PopoverTitle>Update HP</PopoverTitle>
            <PopoverContent>
              <Input
                type="number"
                name={"damage"+id}
                id={"damage"+id}
                defaultValue={this.state.damage}
                onChange={this.handleChangeDamage} />
                <Button
                  onClick={() => { this.updateHP(); }}>Submit</Button>
            </PopoverContent>
          </Popover>
        </div>
      );
    }
    return null;
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
        {this.renderCombatantControls(combatant, koBtnClasses, deadBtnClasses)}
        {this.renderHpBar(combatant.creature_type, combatant.current_hp, combatant.hit_points, combatant.id)}
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
