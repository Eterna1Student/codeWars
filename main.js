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

/* //Do you speak "English"?

const sentence = "eNglisH"

function spEng(sentence){
    const str = 'english'
    return console.log(sentence.toLowerCase().includes(str))
  }

  spEng(sentence)

  const sentence = "abcEnglishdef"

    function spEng(sentence){
        const str = 'english'
        const result = sentence.toLowerCase().search(str) 
        return console.log(result > -1 ? true : false)
    }

  spEng(sentence)
*/

/* // The 'if' function

const bool = true
function func1() {
    return console.log("True")
} 
function func2() {
    return console.log("False")
} 


function _if(bool, func1, func2) {
  // if (bool === true) {
  //   return func1()
  // } else {
  //   return func2()
  // }
  return bool ? func1() : func2()
}

_if(bool, func1, func2)*/

/* //Exclamation marks series #1
const string = "Hi!!!"

function remove(string) {
  const arr = string.split('')
  const newArr = arr[arr.length -1] === '!' ? arr.pop() : string
  console.log(arr.join(''))
}

remove(string)*/

/* // Define a card suit

const card = 'Q♦'

function defineSuit(card) {
  switch(card[card.length-1]) {
    case '♣':  
      return console.log('clubs')
      break

    case '♦':  
      return console.log('diamonds')
      break

    case '♥':  
      return console.log('hearts')
      break

    case '♠':  
      return console.log('spades')
      break
  }
}

defineSuit(card)
*/

const a = 1
const b = 10


function between(a, b) {
  let arr = []
  for (let index = a; index <= b; index++) {
    arr.push(index)
  }
  return arr
}

between(a, b)

