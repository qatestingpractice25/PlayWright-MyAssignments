//Task1
/*
1. Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word.
*/

function lastWordLen(words)
{
    const arr = words.split(" ");
    const lastWord = arr[arr.length-1];
    return lastWord.length;
}


//Task2
/*
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length
*/

function trimLength(s)
{
    s = s.trim();               // Remove spaces at beginning & end
    const arr1 = s.split(/\s+/);   // Split on ANY number of spaces
    const lastWord1 = arr1[arr1.length-1];
    return lastWord1.length;

}

//Task3
/*
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result
*/

function isAnagram(s1,s2)
{
    // Remove spaces and convert to lowercase
    s1 = s1.replace(/\s+/g, "").toLowerCase();
    s2 = s2.replace(/\s+/g, "").toLowerCase();

    // Convert to array, sort chars, join back into strings
    const sorted1 = s1.split("").sort().join(""); 
    const sorted2 = s2.split("").sort().join("");

    // Compare sorted versions
    return sorted1 === sorted2;
}


console.log(lastWordLen("Hello World Good Morning"));
console.log(trimLength("  Hello  World  this    is   an   example   of    string  "));
console.log(isAnagram("l i s ten", "sil ent")); // true
console.log(isAnagram("hello", "world"));   // false