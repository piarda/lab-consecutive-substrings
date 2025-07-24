function consecutiveSubstrings(string) {
  let substrings = []; // Creates array to hold substrings

  for (let start = 0; start < string.length; start++) {     // Loops through start index
    for (let end =start + 1; end <= string.length; end++) { // Loops through end indez
      let substring = string.slice(start, end);             // Extracts the substring
      substrings.push(substring);                           // Adds to the array
    }
  }
  return substrings; // Returns substrings list
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
