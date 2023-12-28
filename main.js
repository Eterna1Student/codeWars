/* //Multiply the number

const num = -2

function multiplyNumber(num) {
    const numLength = Math.abs(num).toString().length
    const res = num * (5**numLength)
    return console.log(res);
}

multiplyNumber(num)
*/

 // Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

const string = '!Hi !Hi'

function remove (string) {
    const arr = string.split('')
    const newArr = arr.filter((el) => el === '!' ? el === '' : el)
    newArr.push('!')

    return newArr.join('')
  }
 

  remove (string)
  

