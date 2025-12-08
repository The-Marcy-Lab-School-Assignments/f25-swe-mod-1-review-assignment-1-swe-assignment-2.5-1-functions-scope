const maskEmail = (email) => {
  email = email.trim();

  let symbolIndex = email.indexOf("@");
  if (symbolIndex == 1) {
    return email;
  }

  let domain = email.slice(symbolIndex);
  return `${email[0]}***${domain}`;
};

console.log(maskEmail("maya.rodriguez@example.com"));
// "m***@example.com"

console.log(maskEmail("  abc@example.com"));
// "a***@example.com"

console.log(maskEmail("j@example.com"));
// "j@example.com" (too short to mask)
