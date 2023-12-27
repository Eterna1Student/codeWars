//Multiply the number

const num = -2

function multiplyNumber(num) {
    const numLength = Math.abs(num).toString().length
    const res = num * (5**numLength)
    return console.log(res);
}

multiplyNumber(num)
