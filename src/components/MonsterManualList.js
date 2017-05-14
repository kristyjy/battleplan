import React from 'react';
//import ReactDOM from 'react-dom';
import { ListGroup, Input } from 'reactstrap';
import MonsterManualItem from './MonsterManualItem';
import monsters from '../data/monsters';
import './MonsterManual.scss';

class MonsterManualList extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      list: monsters,
      filter: ''
    };

    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(search) {
    this.setState({ filter: search.target.value });
  }

  renderMonsterManual(list, actions) {
    return list.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())).map((item) =>
        <MonsterManualItem key={item.name+item.type+item.challenge_rating} item={item} actions={actions} />
    );
  }

  render() {
    return (
      <div className="add-npc-combatant">
        <h2>Add NPC</h2>
        <Input type="search" id="search" name="search" placeholder="Search..." onChange={this.updateFilter}/>
        <ListGroup className="monster-manual-list">
          {this.renderMonsterManual(this.state.list, this.props.actions)}
        </ListGroup>
      </div>
    );
  }
}

MonsterManualList.propTypes = {
  actions   : React.PropTypes.object.isRequired
};

export default MonsterManualList;
