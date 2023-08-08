/**
 * Solve the linear equation: ax + b = 0
 * @param {Number} a 
 * @param {Number} b 
 * @returns {String} root as a string
 */
function linearEquation(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Many roots";
        } else {
            return "No root";
        }
    } else {
        let x = -b / a;
        return "One root: x = " + x;
    }
}
/**
 * Solve the linear equation: ax2 + bx + c = 0
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c
 * @returns {String} root as a string
 */
function quadraticEquation(a, b, c) {
    if (a === 0) {
        linearEquation(b, c);
    }
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "No root";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return "One root: x = " + x;
    } else {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (b - Math.sqrt(delta)) / (2 * a);
        return "Two roots: x1 = " + x1 + "; x2 = " + x2;
    }
}
function solve() {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let c = document.querySelector('#c').value;  
    const field = document.querySelector('p');
    field.textContent = quadraticEquation(a,b,c);
    field.style.color = "blue";
    field.style.fontWeight = "bold"; 
}

const button = document.querySelector('button');
button.addEventListener('click', solve);