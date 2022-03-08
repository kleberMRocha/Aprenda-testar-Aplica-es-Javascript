module.exports.sum = (num1, num2) => {

    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (Number.isNaN(n1) || Number.isNaN(n2)) throw new Error('The type should be Int');

    return n1 + n2;
}