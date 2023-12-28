/* //Multiply the number

const num = -2

function multiplyNumber(num) {
    const numLength = Math.abs(num).toString().length
    const res = num * (5**numLength)
    return console.log(res);
}

multiplyNumber(num)
*/

/* // Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

const string = '!Hi !Hi'

function remove (string) {
    const arr = string.split('')
    const newArr = arr.filter((el) => el === '!' ? el === '' : el)
    newArr.push('!')

    return newArr.join('')
  }
 

  remove (string)
  */

 /* // Exclamation marks series #6

const s = "!!!Hi !!hi!!! !hi"
const n = 3

function remove(s,n){
    while (n > 0) {
        s = s.replace('!', '');
        n--;
      }
      return console.log(s)
}

remove(s,n)
*/



//Do you speak "English"?

const sentence = "eNglisH"

function spEng(sentence){
    const str = 'english'
    return console.log(sentence.toLowerCase().includes(str))
  }

  spEng(sentence)