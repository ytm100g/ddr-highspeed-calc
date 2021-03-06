function calcModyfyNumber(fitSpeed, bpm, isPremium = false) {

  let MODIFY_NUMBERS = [
    1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5,
    5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0
  ]; // https://p.eagate.573.jp/game/ddr/ddra20/p/howto/option_list.html
  const PREMIUM_MODIFY_NUMBERS = [
    0.25, 0.5, 0.75, 1.25, 1.75, 2.25, 2.75, 3.25, 3.75
  ];

  // input is only 1~65535
  if (!(fitSpeed >= 1 && fitSpeed <= 65535 &&
    bpm >= 1 && bpm <= 65535)) {
    throw new Error("input is only 1~65535");
  }

  if (isPremium) {
    MODIFY_NUMBERS =
      MODIFY_NUMBERS.concat(PREMIUM_MODIFY_NUMBERS)
    MODIFY_NUMBERS.sort();
  }

  let i = 0;
  while (fitSpeed > bpm * MODIFY_NUMBERS[i] &&
    MODIFY_NUMBERS.length !== i + 1) {
    i++;
  }
  const result = {
    current: {
      modifyNumber: MODIFY_NUMBERS[i],
      revisionSpeed: bpm * MODIFY_NUMBERS[i]
    }
  };
  if (result.current.revisionSpeed !== fitSpeed &&
    i >= 1 && MODIFY_NUMBERS.length !== i + 1) {
    result.before = {
      modifyNumber: MODIFY_NUMBERS[i - 1],
      revisionSpeed: bpm * MODIFY_NUMBERS[i - 1]
    };
  }
  return result;
}

module.exports = {
  calcModyfyNumber: calcModyfyNumber
};