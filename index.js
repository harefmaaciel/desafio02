function calcularRank(vitorias, derrotas) {
    const saldoRankeadas = vitorias - derrotas;
    let resultado;

    if (vitorias < 10) {
        resultado = "Nive Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        resultado = "Nivel Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        resultado = "Nivel Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        resultado = "Nuivel Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        resultado = "NIvel Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        resultado = "Nivel Lendário";
    } else {
        resultado = "NIvel Imortal";
    }

    return resultado;
}

// Exemplo de uso da função
const vitorias = 100;
const derrotas = 20;
const resultadoRankeadas = calcularRank(vitorias, derrotas);
console.log(`Resultado das rankeadas: ${resultadoRankeadas}`);
