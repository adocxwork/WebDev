function fact1_loop(x) {
    let ans = 1;
    if (x === 0) return 1;
    if (x < 0) returnn - 1;
    for (let i = 1; i <= x; i++) {
        ans *= i;
    }
    return ans;
}

console.log(fact1_loop(6));