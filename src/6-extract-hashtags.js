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
