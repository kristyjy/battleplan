import React from 'react';
import { ListGroupItem, Collapse, Button} from 'reactstrap';
import NPCStatBlock from './NPCStatBlock';
import classNames from 'classnames';

class MonsterManualItem extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
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
      <ListGroupItem className={listItemClasses} onClick={() => { this.toggle(); }}>{item.name} <Button size="sm">Add NPC</Button></ListGroupItem>
      <Collapse isOpen={this.state.collapse}>
        <NPCStatBlock item={item} />
      </Collapse>
      </div>
    );
  }
}

MonsterManualItem.propTypes = {
  item     : React.PropTypes.object.isRequired
};

export default MonsterManualItem;
