/**
 * @param {string} s
 * @return {string}
 */

function shortestPalindrome(s) {
    function calcularArregloDePrefijos(cadena) {
        /**
         * Calcula el arreglo de prefijos para la cadena dada
         */
        const arregloDePrefijos = new Array(cadena.length).fill(0);
        let j = 0;

        for (let i = 1; i < cadena.length; i++) {
            while (j > 0 && cadena[i] !== cadena[j]) {
                j = arregloDePrefijos[j - 1];
            }
            if (cadena[i] === cadena[j]) {
                j++;
            }
            arregloDePrefijos[i] = j;
        }

        return arregloDePrefijos;
    }

    // Crea una cadena combinada con la versión invertida de s
    const sInvertida = s.split('').reverse().join('');
    const cadenaCombinada = s + '#' + sInvertida;

    // Calcula el arreglo de prefijos dada la cadena combinada
    const arregloDePrefijos = calcularArregloDePrefijos(cadenaCombinada);

    // Encuentra la parte no palindrómica más corta al principio de la cadena
    const parteNoPalindromica = s.substring(arregloDePrefijos[arregloDePrefijos.length - 1]);
    const parteNoPalindromicaInvertida = parteNoPalindromica.split('').reverse().join('');

    // Concatenar la parte no palindrómica invertida con la cadena original
    const menorPalindromo = parteNoPalindromicaInvertida + s;

    return menorPalindromo;
}