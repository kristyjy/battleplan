import React from 'react';
import { ListGroupItem, Collapse, Button} from 'reactstrap';
import NPCStatBlock from './NPCStatBlock';
import classNames from 'classnames';

class MonsterManualItem extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };

    this.addToInitiative = this.addToInitiative.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  addToInitiative(item) {
    this.props.actions.addCombatant({
      ...item,
      'creature_type': 'npc',
      'current_hp': item.hit_points,
      'initiative': 0
    });
    this.props.actions.sortCombatants();
  }

  render() {
    const {item} = this.props;
    const listItemClasses = classNames({
      'monster-manual-list__item': true,
      'monster-manual-list__item--open': this.state.collapse,
      'justify-content-between': true
    });
    return (
      <div>
      <ListGroupItem className={listItemClasses} >
        <Button size="sm" onClick={() => { this.toggle(); }}>Details</Button>
        {item.name}
        <Button size="sm" onClick={() => { this.addToInitiative(item); }}>+</Button>
      </ListGroupItem>
      <Collapse isOpen={this.state.collapse}>
        <NPCStatBlock item={item} />
      </Collapse>
      </div>
    );
  }
}

MonsterManualItem.propTypes = {
  item     : React.PropTypes.object.isRequired,
  actions  : React.PropTypes.object.isRequired
};

export default MonsterManualItem;
