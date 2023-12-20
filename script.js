function firstWord(s) {
  // your code here
	if (!str.trim()) {
        return '';
    }

    // Split the string by spaces
    const words = str.trim().split(' ');

    // Return the first word
    return words[0];

}

// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(str));
