export function getTypeString(creature) {
  let type = creature.size + ' ' + creature.type;
  type = creature.subtype ? type + ' (' + creature.subtype + ')' : type;
  return type + ', ' + creature.alignment;
}
