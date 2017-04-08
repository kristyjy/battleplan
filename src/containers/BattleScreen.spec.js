// TODO: Write test for Battle Screen container
import React from 'react';
import {shallow} from 'enzyme';
import {BattleScreen} from './BattleScreen';
import InitiativePanel from '../components/InitiativePanel';

describe('<BattleScreen />', () => {
  it('should contain <InitiativePanel />', () => {
    const actions = {
      addCombatant: () => { }
    };
    const combatants = [];
    const currentTurn = 50;
    const wrapper = shallow(<BattleScreen actions={actions} combatants={combatants} currentTurn={currentTurn} />);

    expect(wrapper.find(InitiativePanel).length).toEqual(1);
  });
});

/*import React from 'react';
import {shallow} from 'enzyme';
import {FuelSavingsPage} from './FuelSavingsPage';
import FuelSavingsForm from '../components/FuelSavingsForm';

describe('<FuelSavingsPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    const actions = {
      saveFuelSavings: () => { },
      calculateFuelSavings: () => { }
    };
    const fuelSavings = {};
    const wrapper = shallow(<FuelSavingsPage actions={actions} fuelSavings={fuelSavings}/>);

    expect(wrapper.find(FuelSavingsForm).length).toEqual(1);
  });
});*/
