import React from 'react';
import { Card, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import {getTypeString, getAbilityScoreTable, getInfoItem, getActions, getActionsHeading} from '../utils/infoFormatHelper';

class NPCStatBlock extends React.Component {

  render() {
    const {item} = this.props;
    return (
      <Card className="npc-stat-block">
        <CardBlock>
          <CardTitle>{item.name}</CardTitle>
          <CardSubtitle>{getTypeString(item)}</CardSubtitle>
          <hr />
          {getInfoItem('Armor Class', item.armor_class)}
          {getInfoItem('Hit Points', item.hit_points+' ('+item.hit_dice+')')}
          {getInfoItem('Speed', item.speed)}
          <hr />
          {getAbilityScoreTable(item)}
          <hr />
          {getInfoItem('Damage Immunities', item.damage_immunities)}
          {getInfoItem('Damage Resistances', item.damage_resistances)}
          {getInfoItem('Damage Vulnerabilities', item.damage_vulnerabilities)}
          {getInfoItem('Condition Immunities', item.condition_immunities)}
          {getInfoItem('Senses', item.senses)}
          {getInfoItem('Languages', item.languages)}
          {getInfoItem('Challenge', item.challenge_rating)}
          <hr />
          {getActions(item.special_abilities)}
          {getActionsHeading('Actions', item.actions)}
          {getActions(item.actions)}
          {getActionsHeading('Legendary Actions', item.legendary_actions)}
          {getActions(item.legendary_actions)}
          {getActionsHeading('Reactions', item.reactions)}
          {getActions(item.reactions)}
        </CardBlock>
      </Card>
    );
  }
}

NPCStatBlock.propTypes = {
  item     : React.PropTypes.object.isRequired
};

export default NPCStatBlock;
