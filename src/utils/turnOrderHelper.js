export function getHighestInitiative(combatants) {
  let highest = null;
  combatants.forEach(function(combatant) {
    if ((highest === null || combatant.initiative > highest) && !combatant.isDead) {
      highest = combatant.initiative;
    }
  });
  return highest;
}

export function getLowestInitiative(combatants) {
  let lowest = null;
  combatants.forEach(function(combatant) {
    if ((lowest === null || combatant.initiative < lowest) && !combatant.isDead) {
      lowest = combatant.initiative;
    }
  });
  return lowest;
}

export function getNextInOrder(combatants, currentTurn) {
  let lower = combatants.filter(combatant => combatant.initiative < currentTurn);
  let highestOfLow = getHighestInitiative(lower);
  return highestOfLow !== null ? highestOfLow : getHighestInitiative(combatants);
}

export function getPreviousInOrder(combatants, currentTurn) {
  let higher = combatants.filter(combatant => combatant.initiative > currentTurn);
  let lowestOfHigh = getLowestInitiative(higher);
  return lowestOfHigh !== null ? lowestOfHigh : getLowestInitiative(combatants);
}
