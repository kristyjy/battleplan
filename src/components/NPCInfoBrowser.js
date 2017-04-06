import React from 'react';
//import { Button } from 'reactstrap';
//import './InitiativePanel.scss'

class NPCInfoBrowser extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="npc-info-browser">
        NPC Info
      </div>
    );
  }
}

NPCInfoBrowser.propTypes = {
  combatants     : React.PropTypes.array.isRequired,
  actions   : React.PropTypes.object.isRequired
};

export default NPCInfoBrowser;
