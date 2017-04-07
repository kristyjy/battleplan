import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddCombatantForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      combatantName: '',
      initiative: 0
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeInitiative = this.handleChangeInitiative.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      combatantName: e.target.value
    });
  }

  handleChangeInitiative(e) {
    this.setState({
      initiative: parseInt(e.target.value)
    });
  }

  handleSubmit() {
    if (this.state.combatantName !== "") {
      const combatantInitiative = this.state.initiative === "" ? 0 : this.state.initiative;

      this.props.actions.addCombatant({
        'name': this.state.combatantName,
        'initiative': combatantInitiative
      });
      this.props.actions.sortCombatants();
    }
  }

  render() {
    return (
      <div className="add-combatant-form">
        <h2>Add PC</h2>
        <Form>
          <FormGroup>
            <Label for="name">Character Name</Label>
            <Input type="text" name="name" id="name" placeholder="Grog Strongjaw" onChange={this.handleChangeName} />
          </FormGroup>
          <FormGroup>
            <Label for="name">Initiative</Label>
            <Input type="number" name="initiative" id="initiative" placeholder="20" onChange={this.handleChangeInitiative}/>
          </FormGroup>
          <Button onClick={() => { this.handleSubmit(); }}>Add Combatant</Button>
        </Form>
      </div>
    );
  }
}

AddCombatantForm.propTypes = {
  actions   : React.PropTypes.object.isRequired
};

export default AddCombatantForm;
