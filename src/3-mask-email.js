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


