import React from 'react';
import { ListGroup, ListGroupItem, Badge, ButtonGroup, Button } from 'reactstrap';
//import './InitiativePanel.scss'

class InitiativePanel extends React.Component {

  constructor(props) {
      super(props);
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
      </div>
    );
  }
}

InitiativePanel.propTypes = {
  combatants     : React.PropTypes.array.isRequired
  //addCombatant   : React.PropTypes.func.isRequired
};

export default InitiativePanel;
