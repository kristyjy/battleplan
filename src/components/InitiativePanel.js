import React from 'react';
import { ListGroup, ListGroupItem, Badge, ButtonGroup, Button } from 'reactstrap';

class InitiativePanel extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  addCombatant(combatant) {
    this.props.actions.addCombatant(combatant);
  }

  renderCombatants(combatants) {
    let i = 0;
    return combatants.map((combatant) =>
        <ListGroupItem key={i++} className="justify-content-between">
          <Badge pill>{combatant.initiative}</Badge>
          {combatant.name}
          <ButtonGroup size="sm">
            <Button>KO</Button>
            <Button>Dead</Button>
          </ButtonGroup>
        </ListGroupItem>
    );
  }

  render() {
    const {combatants} = this.props;
    return (
      <div className="initiative-panel col-md-5">
        <ListGroup>
          {this.renderCombatants(combatants)}
        </ListGroup>
        <Button onClick={() => { this.addCombatant({'name':'Kristy','initiative': 24}); }}>Add Combatant</Button>
      </div>
    );
  }
}

InitiativePanel.propTypes = {
  combatants     : React.PropTypes.array.isRequired,
  actions   : React.PropTypes.object.isRequired
};

export default InitiativePanel;
