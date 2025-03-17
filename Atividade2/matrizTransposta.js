function transporMatriz(A) {
    console.log('Matriz Original:');
    A.forEach(linha => console.log(linha.join('\t')));

    const transposta = A[0].map((_, colIndex) => A.map(linha => linha[colIndex]));

    console.log('\nMatriz Transposta:');
    transposta.forEach(linha => console.log(linha.join('\t')));
}

// ex:
const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);