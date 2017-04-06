import React, {PropTypes} from 'react';
import AddCombatantForm from '../components/AddCombatantForm';

export const MainPanel = (props) => {

  return (
    <div className="main-screen col-md-7">
      <AddCombatantForm actions={props.actions} />
    </div>
  );
};

MainPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  combatants: PropTypes.array.isRequired
};

export default MainPanel;
