const MODIFY_NUMBERS = [
  0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0,
  3.25, 3.5, 3.75, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0
];

function calcModyfyNumber(fitSpeed, bpm) {
  let i = 0;
  while (fitSpeed > bpm * MODIFY_NUMBERS[i]) {
    i++;
  }
  const result = {
    current: {
      modifyNumber: MODIFY_NUMBERS[i],
      revisionSpeed: bpm * MODIFY_NUMBERS[i]
    }
  };
  if (result.current.revisionSpeed != fitSpeed) {
    result.before = {
      modifyNumber: MODIFY_NUMBERS[i-1],
      revisionSpeed: bpm * MODIFY_NUMBERS[i-1]
    };
  }
  return result;
}