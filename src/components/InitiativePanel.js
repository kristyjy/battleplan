import React from 'react';
import { ListGroup, Button } from 'reactstrap';
import Combatant from './Combatant';

class InitiativePanel extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.renderCombatants = this.renderCombatants.bind(this);
  }

  sortCombatants() {
    this.props.actions.sortCombatants();
  }

  renderCombatants(combatants) {
    return combatants.map((combatant) =>
        <Combatant key={combatant.id} combatant={combatant} actions={this.props.actions}/>
    );
  }

  render() {
    const {combatants} = this.props;
    return (
      <div className="initiative-panel col-md-5">
        <ListGroup>
          {this.renderCombatants(combatants)}
        </ListGroup>
        <Button onClick={() => { this.sortCombatants(); }}>Sort Combatants</Button>
      </div>
    );
  }
}

InitiativePanel.propTypes = {
  combatants     : React.PropTypes.array.isRequired,
  actions   : React.PropTypes.object.isRequired
};

export default InitiativePanel;
