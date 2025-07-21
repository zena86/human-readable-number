module.exports = function toReadable(number) {
  const arr0to9 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const arr10to19 = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const arrEndTy = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const numStr = number.toString();

  if (numStr.length === 3) {
    const secondPart = +numStr.substring(numStr.length - 2);
    return `${arr0to9[+numStr[0]]} hundred${secondPart > 0 ? ` ${toReadable(secondPart)}` : ''}`;
  }
  if (number <= 99 && number > 19) {
    const secondPart = +numStr.substring(numStr.length - 1);
    return (
      arrEndTy[+numStr[0] - 2] +
      (secondPart > 0 ? ` ${toReadable(secondPart)}` : '')
    );
  }
  if (number >= 10 && number <= 19) {
    return arr10to19[number % 10];
  }
  if (number >= 0 && number <= 9) {
    return arr0to9[number];
  }
  return '';
};
