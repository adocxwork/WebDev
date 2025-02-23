function countVowel(str) {
    let count = 0;
    for (const e of str) {
        if (e == 'a' || e == 'e' || e == 'i' || e == 'o' || e == 'u') {
            count++;
        }
    }
    return count;
}

const arrowCountVowel = (str) => {
    let count = 0;
    for (const e of str) {
        if (e == 'a' || e == 'e' || e == 'i' || e == 'o' || e == 'u') {
            count++;
        }
    }
    return count;
}

console.log(arrowCountVowel('Hey there, this is aditya'));