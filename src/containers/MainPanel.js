import React, {PropTypes} from 'react';
import AddCombatant from '../components/AddCombatant';

export const MainPanel = (props) => {

  return (
    <div className="main-screen col-md-7">
      <AddCombatant actions={props.actions} />
    </div>
  );
};

MainPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  combatants: PropTypes.array.isRequired,
  currentTurn: PropTypes.number
};

export default MainPanel;
