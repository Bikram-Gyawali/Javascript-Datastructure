/*
    Date TO Day Conversion
    this method takes a date in string format and returns the name of a day.
    We first check for the validation of the date...
*/

// lets take march as the first month
const calcMonth = {
  1: 11,
  2: 12,
  3: 1,
  4: 2,
  5: 3,
  6: 4,
  7: 5,
  8: 6,
  9: 7,
  10: 8,
  11: 9,
  12: 10,
};

// weeksday
const daysName = {
  0: "Sun",
  1: "Mon",
  2: "Tues",
  3: "Wed",
  4: "Thurs",
  5: "Fri",
  6: "Sat",
};

const dateToDay = (date) => {
  if (typeof date !== string) {
    return new TypeError("Argument is not a string");
  }

  const [day, month, year] = date.split("/").map((x) => Number(x));

  if (day < 0 || day > 31 || month > 12 || month < 0) {
    return new TypeError("Date is not valid");
  }
  const yearDigit = year % 10;
  const century = Math.floor(year / 100);

  const weekDay = Math.abs(
    (day +
      Math.floor(2.6 * calcMonthList[month] - 0.2) -
      2 * century +
      yearDigit +
      Math.floor(yearDigit / 4) +
      Math.floor(century / 4)) %
      7
  );
  return daysName[weekDay];
};

export { DateToDay };
