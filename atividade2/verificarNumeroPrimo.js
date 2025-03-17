function verificarNumeroPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

// ex:
const testes = [0, 1, 2, 3, 7, 83, 100, 991, 104729, 14348907];
testes.forEach(num => {
    console.log(`verificarNumeroPrimo(${num}) = ${verificarNumeroPrimo(num)}`);
});