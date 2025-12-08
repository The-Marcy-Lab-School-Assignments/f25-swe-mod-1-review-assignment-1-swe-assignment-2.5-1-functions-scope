const maskEmail = (email) => {
    const trimmed = email.trim()
    const arr = trimmed.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "@") {
            break;
        }
        if (i !== 0) {
            arr[i] = "*"
        }
    }
    const str = arr.join("");
    return str
}


console.log(maskEmail("maya.rodriguez@example.com"));
// "m***@example.com"

console.log(maskEmail("  abc@example.com"));
// "a***@example.com"

console.log(maskEmail("j@example.com"));
// "j@example.com" (too short to mask)