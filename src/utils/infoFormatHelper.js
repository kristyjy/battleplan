import React from 'react';
import { Table, CardText } from 'reactstrap';

export function getTypeString(creature) {
  let type = creature.size + ' ' + creature.type;
  type = creature.subtype ? type + ' (' + creature.subtype + ')' : type;
  return type + ', ' + creature.alignment;
}

export function getModifierFromAbilityScore(abilityScore) {
  if (!abilityScore) abilityScore = 1;
  return parseInt((abilityScore / 2)) - 5;
}

export function getFormatedAbilityModFromAbilityScore(abilityScore) {
  let mod = getModifierFromAbilityScore(abilityScore);
  return mod > 0 ? '+'+mod : mod;
}

// TODO: Replace all functions below with components.. why did I do it this way?
export function getAbilityScoreTable(item) {
  return (
    <Table size="sm" className="stats">
      <thead>
        <tr>
          <th className="stats-title">STR</th>
          <th className="stats-title">DEX</th>
          <th className="stats-title">CON</th>
          <th className="stats-title">INT</th>
          <th className="stats-title">WIS</th>
          <th className="stats-title">CHA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.strength} ({getFormatedAbilityModFromAbilityScore(item.strength)})</td>
          <td>{item.dexterity} ({getFormatedAbilityModFromAbilityScore(item.dexterity)})</td>
          <td>{item.constitution} ({getFormatedAbilityModFromAbilityScore(item.constitution)})</td>
          <td>{item.intelligence} ({getFormatedAbilityModFromAbilityScore(item.intelligence)})</td>
          <td>{item.wisdom} ({getFormatedAbilityModFromAbilityScore(item.wisdom)})</td>
          <td>{item.charisma} ({getFormatedAbilityModFromAbilityScore(item.charisma)})</td>
        </tr>
      </tbody>
    </Table>
  );
}

export function getInfoItem(name, item) {
  if (item === '') return null;
  return (
    <CardText><strong>{name}</strong> {item}</CardText>
  );
}

export function getActionsHeading(title, items) {
  if (!items) return null;
  return (
    <h5 className="actions-title">{title}</h5>
  );
}

export function getActions(items) {
  if (!items) return null;
  return items.map((item, k) =>
      <CardText key={k}><strong><i>{item.name}</i></strong> {item.desc}</CardText>
  );
}
