const anagrams = (str1, str2) => {
    if(str1.length !== str2.length) { //step 1
        return false;
    }
    let sort1 = str1.split('').sort(); // step 2
    let sort2 = str2.split('').sort();
    return sort1.join('') === sort2.join('');
}