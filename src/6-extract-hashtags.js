const extractHashtags = (post) => {
  const arr = []
  const words = post.split(" ");
  for (let i = 0; i < words.length; i++) {
    //let word = words[i];
    if (words[i].includes("#")) {
      arr.push(words[i]);
    }
  }
  return arr
}

console.log(extractHashtags("Love this #coding bootcamp! #javascript #WebDev"));
// ["#coding", "#javascript", "#WebDev"]

console.log(extractHashtags("No hashtags here"));
// []

console.log(extractHashtags("#First word #last-word and #middle123 word"));
// ["#First", "#last-word", "#middle123"]