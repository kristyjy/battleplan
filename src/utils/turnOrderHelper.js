export function getHighestInitiative(combatants) {
  let highest = null;
  combatants.forEach(function(combatant) {
    if (highest === null || combatant.initiative > highest) {
      highest = combatant.initiative;
    }
  });
  return highest;
}

export function getNextInOrder(combatants, currentTurn) {
  let lower = combatants.filter(combatant => combatant.initiative < currentTurn);
  let highestOfLow = getHighestInitiative(lower);
  return highestOfLow !== null ? highestOfLow : getHighestInitiative(combatants);
}

export function getPreviousInOrder(combatants) {
  return combatants[combatants.length - 1].initiative;
}
