export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export const capitalizeEachWord = (str) => {
  // Split the input string into an array of words
  const words = str.split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back together into a single string
  const resultString = capitalizedWords.join(' ');

  return resultString;
}
