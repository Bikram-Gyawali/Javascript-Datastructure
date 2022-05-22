/**
 * in computing natural sort order is the ordering of strings in alphabetical order except that multi-digit numbers are treated atimically, id as if they were a single character
 *
 * Natural Sort Order
 * has been promoted as being more human-friendly ("natural") than machine  result .
 *
 * eg in alphabetical sorting ( z11 ) would be sorted before ( z2 ) becusse the 1 in the first string is taken as account as smaller  than 2 ,
 * but in natural sorting (z2) is sorted before because (2) is treated smaller than (11) in (z11)
 *
 * let  = [ "b12" , "b8" ]
 *
 * 1. Alphabetical Sorting : ["b12","b8"]
 * 2. Natural Sorting : ["b8","b12"]
 *
 *  for alphaNumericalSorting we make use of localeCompare() function of js , this method returns a number indicating whether a reference string comes beofre of after or is the same as given in sort order
 *
 * The new locales and options argument let applications specify the language whose sort orer shuld be used and customize the behavioour og the function.
 * In orther implementations, which ignore the locales andoptions atguments, the locale and sort order used are entirely implementation- dependent.
 *
 * */

const alphaNumericalSorting = (a, b) => {
  return a.localeCompare(b, undefined, { numeric: true });
};

console.log(alphaNumericalSorting("bik12","bik31"));// -1

console.log(alphaNumericalSorting("bik1","bik0")); // 0

console.log(alphaNumericalSorting("bik31","bik12")); // 1