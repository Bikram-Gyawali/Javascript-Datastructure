const palindrome = (str) => {
    let trimmed = str.replace(/[^\w]/g, "");
    return trimmed === trimmed.split('').reverse().join(''); // Steps 1-4
}