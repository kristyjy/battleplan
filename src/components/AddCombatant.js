import React from 'react';
import AddCombatantForm from '../components/AddCombatantForm';
import MonsterManualList from '../components/MonsterManualList';

class AddCombatant extends React.Component {

  render() {
    return (
      <div className="add-combatant">
        <h1>Add Combatant</h1>
        <div className="row">
          <div className="col-md-5">
            <AddCombatantForm actions={this.props.actions} />
          </div>
          <div className="col-md-7">
            <MonsterManualList actions={this.props.actions} />
          </div>
        </div>
      </div>
    );
  }
}

AddCombatant.propTypes = {
  actions   : React.PropTypes.object.isRequired
};

export default AddCombatant;
