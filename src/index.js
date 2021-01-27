module.exports = function toReadable (number) {
  const ones = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
  };

  const teens = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen'
  }

  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  }

  function readableTeens(num) {
    return teens[num - 10];
  }

  function readableOnes(num) {
    return ones[num];
  }

  function readableTens(num) {
    if (num % 10 === 0) {
      return tens[num / 10];
    } else {
      return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`;
    }
  }

  function readableHundreds(num) {
    if (num % 100 === 0) {
      return `${ones[num / 100]} hundred`;
    } else {
      return `${ones[Math.floor(num / 100)]} hundred ${toReadable(num % 100)}`;
    }
  }

  if (number === 0) {
    return 'zero';
  } else if (number <= 10) {
    return readableOnes(number);
  } else if (number > 10 && number < 20) {
    return readableTeens(number);
  } else if (number >= 20 && number < 100) {
    return readableTens(number);
  } else if (number >= 100 && number < 1000) {
    return readableHundreds(number)
  }
}
