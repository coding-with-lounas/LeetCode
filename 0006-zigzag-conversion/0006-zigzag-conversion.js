/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let T = [];
    for (let i = 0; i < numRows; i++) {
        T[i] = []; // initialiser chaque ligne comme un tableau vide
    }

    let currRow = 0;
    let goingDown = false;

    for (let j = 0; j < s.length; j++) {
        T[currRow].push(s[j]);

        // inverser direction quand on est en haut ou en bas
        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }

    // concatÃ©ner toutes les lignes en une seule chaÃ®ne
    let output = [];
    for (let i = 0; i < numRows; i++) {
        output = output.concat(T[i]);
    }

    return output.join("");
};
