import * as diceTypes from '../constants/diceTypes';

export function d20(num) {
  return roll(1, 20, num);
}

export function d12(num) {
  return roll(1, 12, num);
}

export function d10(num) {
  return roll(1, 10, num);
}

export function d8(num) {
  return roll(1, 8, num);
}

export function d6(num) {
  return roll(1, 6, num);
}

export function d4(num) {
  return roll(1, 4, num);
}

export function roll(min, max, num) {
  let total = 0;
  for (let i=0; i < num; i++) {
    let val = Math.floor(Math.random() * (max - min + 1)) + min;
    // TODO: is it important to know what each individual roll is?
    // DEBUG: console.log('Rolling 1d' + max + '. Rolled a ' + val);
    total += val;
  }
  return total;
}

export function rollDiceFromString(str) {
  let strNoSpace = str.replace(' ', '');
  let dice = strNoSpace.split('+');
  let total = 0;
  for (let i = 0; i < dice.length; i++) {
    let d = dice[i].split('d');
    let num = parseInt(d[0]);
    let sides = parseInt(d[1]);
    rollDiceFromInt(sides, num);
  }
}

function rollDiceFromInt(sides, num) {
  switch (sides) {
    case diceTypes.D4:
      return d4(num);
      break;
    case diceTypes.D6:
      return d6(num);
      break;
    case diceTypes.D8:
      return d8(num);
      break;
    case diceTypes.D10:
      return d10(num);
      break;
    case diceTypes.D12:
      return d12(num);
      break;
    case diceTypes.D20:
      return d20(num);
      break;
    default:
      return 0;
  }
}
