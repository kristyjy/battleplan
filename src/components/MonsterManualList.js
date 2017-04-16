import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup } from 'reactstrap';
import MonsterManualItem from './MonsterManualItem';
import monsters from '../data/monsters';
import './MonsterManual.scss';

class MonsterManualList extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      list: monsters
    };
  }

  renderMonsterManual(list, actions) {
    return list.map((item) =>
        <MonsterManualItem key={item.name+item.type+item.challenge_rating} item={item} />
    );
  }

  render() {
    return (
      <div className="add-npc-combatant">
        <h2>Add NPC</h2>
        <ListGroup className="monster-manual-list">
          {this.renderMonsterManual(this.state.list)}
        </ListGroup>
      </div>
    );
  }
}

MonsterManualList.propTypes = {
  actions   : React.PropTypes.object.isRequired
};

export default MonsterManualList;
