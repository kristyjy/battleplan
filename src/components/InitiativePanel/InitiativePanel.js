import React from 'react'
import { connect } from 'react-redux'
import { newCombatant } from './modules/combatants'
import { ListGroup, ListGroupItem, Badge, ButtonGroup, Button } from 'reactstrap';
import './InitiativePanel.scss'

const mapStateToProps = (state) => ({
  combatants : state.combatants
})

const mapDispatchToProps = {
  newCombatant : () => newCombatant(newCombatant)
}

class InitiativePanel extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        combatants: [
          {'initiative': 15, 'name': 'Izzy'},
          {'initiative': 11, 'name': 'Nutmeg'}
        ]
      }
    }

  renderCombatants(combatants) {
    var i = 0;
    return combatants.map((combatant) =>
        <ListGroupItem key={i++} className="justify-content-between">
          <Badge pill>{combatant.initiative}</Badge>
          {combatant.name}
          <ButtonGroup size="sm">
            <Button>KO</Button>
            <Button>Dead</Button>
          </ButtonGroup>
        </ListGroupItem>
    )
  }

  render() {
    console.log(this.props);
    return (
      <div className="initiative-panel col-md-5">
        <ListGroup>
          {this.renderCombatants([{'initiative': 10, 'name': 'Izzy'},{'initiative': 13, 'name': 'Nutmeg'}])}
        </ListGroup>
      </div>
    );
  }
}

InitiativePanel.propTypes = {
  combatants     : React.PropTypes.array.isRequired,
  addCombatant   : React.PropTypes.func.isRequired
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitiativePanel)
