// calculate the number of days between two dates

const isLeap = (year) => {
  if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else if (year % 4 === 0) return true;
  else return false;
};

const DateToDay = (dd, mm, yyyy) => {
  return Math.floor(
    365 * (yyyy - 1) +
      (yyyy - 1) / 4 -
      (yyyy - 1) / 100 +
      ((yyyy - 1) / 400 +
        dd +
        (367 * mm - 362) / 12 +
        (mm <= 2 ? 0 : isLeap(yyyy) ? -1 : -2))
  );
};



const DateDayDifference = (date1, date2) => {
  if (typeof date1 !== "string" && typeof date2 !== "string") {
    return new TypeError("Argument is not string");
  }

  // extract first date
  const [firstDateDay, firstDateMonth, firstDateYear] = date1
    .split("/")
    .map((ele) => Number(ele));

  // extract the second date
  const [secDateDay, secDateMonth, secDateYear] = date2
    .split("/")
    .map((ele) => Number(ele));

  // check the both date validation
  if (
    firstDateDay < 0 ||
    firstDateDay > 31 ||
    firstDateMonth < 0 ||
    firstDateMonth > 12 ||
    secDateDay < 0 ||
    secDateDay > 31 ||
    secDateMonth < 0 ||
    secDateMonth > 12
  ) {
    return new TypeError("Date is of unvalid format..");
  }
  return Math.abs(
    DateToDay(secDateDay, secDateMonth, secDateYear) -
      DateToDay(firstDateDay, firstDateMonth, firstDateYear)
  );
};
let diff = DateDayDifference("22/06/2000", "01/06/2022"); //7928
console.log(diff);
// export { DateDayDifference };
