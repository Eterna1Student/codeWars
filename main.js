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

/* // What is between?
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
*/

/* //Fuel Calculator: Total Cost

 const litres = 5
 const pricePerLitre = 5.6
 let result
 if(litres < 2){
    result = litres * pricePerLitre
 } else if (litres >= 2 && litres < 4){
    result = litres * (pricePerLitre - 0.05)
 } else if (litres >= 4 && litres < 6){
    result = litres * (pricePerLitre - 0.10)
 } else if (litres >= 6 && litres < 8){
    result = litres * (pricePerLitre - 0.15)
 } else if (litres >= 8 && litres < 10){
    result = litres * (pricePerLitre - 0.20)
 } else if (litres >= 10){
    result = litres * (pricePerLitre - 0.25)
 }

 console.log(Number(result.toFixed(2)))*/

/* // How old will I be in 2099?

  // const currentDate = new Date().getFullYear()
  // const birthday = currentDate - 4


function calculateAge(a, b) {
      let age 
      if (a < b) {
        age = b - a
        if (age === 1) {
          console.log(`You are ${age} year old.`)
        } else {
          console.log(`You are ${age} years old.`)
        }
      } else if (a > b) {
        age = a - b
        if (age === 1) {
          console.log(`You will be born in ${age} year.`)
        } else {
          console.log(`You will be born in ${age} years.`) 
        }
      } else if (a === b) {
        console.log("You were born this very year!") 
      }
  }

  calculateAge(2024, 2024) */

/* // How many stairs will Suzuki climb in 20 years?

const s = [
  [
    6737, 7244, 5776, 9826, 7057, 9247, 5842,
    5484, 6543, 5153, 6832, 8274, 7148, 6152,
    5940, 8040, 9174, 7555, 7682, 5252, 8793,
    8837, 7320, 8478, 6063, 5751, 9716, 5085,
    7315, 7859, 6628, 5425, 6331, 7097, 6249,
    8381, 5936, 8496, 6934, 8347, 7036, 6421,
    6510, 5821, 8602, 5312, 7836, 8032, 9871,
    5990, 6309, 7825
  ],
  [
    9175, 7883, 7596, 8635, 9274, 9675, 5603,
    6863, 6442, 9500, 7468, 9719, 6648, 8180,
    7944, 5190, 6209, 7175, 5984, 9737, 5548,
    6803, 9254, 5932, 7360, 9221, 5702, 5252,
    7041, 7287, 5185, 9139, 7187, 8855, 9310,
    9105, 9769, 9679, 7842, 7466, 7321, 6785,
    8770, 8108, 7985, 5186, 9021, 9098, 6099,
    5828, 7217, 9387
  ],
  [
    8646, 6945, 6364, 9563, 5627, 5068, 9157,
    9439, 5681, 8674, 6379, 8292, 7552, 5370,
    7579, 9851, 8520, 5881, 7138, 7890, 6016,
    5630, 5985, 9758, 8415, 7313, 7761, 9853,
    7937, 9268, 7888, 6589, 9366, 9867, 5093,
    6684, 8793, 8116, 8493, 5265, 5815, 7191,
    9515, 7825, 9508, 6878, 7180, 8756, 5717,
    7555, 9447, 7703
  ],
  [
    6353, 9605, 5464, 9752, 9915, 7446, 9419,
    6520, 7438, 6512, 7102, 5047, 6601, 8303,
    9118, 5093, 8463, 7116, 7378, 9738, 9998,
    7125, 6445, 6031, 8710, 5182, 9142, 9415,
    9710, 7342, 9425, 7927, 9030, 7742, 8394,
    9652, 5783, 7698, 9492, 6973, 6531, 7698,
    8994, 8058, 6406, 5738, 7500, 8357, 7378,
    9598, 5405, 9493
  ],
  [
    6149, 6439, 9899, 5897, 8589, 7627, 6348,
    9625, 9490, 5502, 5723, 8197, 9866, 6609,
    6308, 7163, 9726, 7222, 7549, 6203, 5876,
    8836, 6442, 6752, 8695, 8402, 9638, 9925,
    5508, 8636, 5226, 9941, 8936, 5047, 6445,
    8063, 6083, 7383, 7548, 5066, 7107, 6911,
    9302, 5202, 7487, 5593, 8620, 8858, 5360,
    6638, 8012, 8701
  ],
  [
    5000, 5642, 9143, 7731, 8477, 8000, 7411,
    8813, 8288, 5637, 6244, 6589, 6362, 6200,
    6781, 8371, 7082, 5348, 8842, 9513, 5896,
    6628, 8164, 8473, 5663, 9501, 9177, 8384,
    8229, 8781, 9160, 6955, 9407, 7443, 8934,
    8072, 8942, 6859, 5617, 5078, 8910, 6732,
    9848, 8951, 9407, 6699, 9842, 7455, 8720,
    5725, 6960, 5127
  ],
  [
    5448, 8041, 6573, 8104, 6208, 5912, 7927,
    8909, 7000, 5059, 6412, 6354, 8943, 5460,
    9979, 5379, 8501, 6831, 7022, 7575, 5828,
    5354, 5115, 9625, 7795, 7003, 5524, 9870,
    6591, 8616, 5163, 6656, 8150, 8826, 6875,
    5242, 9585, 9649, 9838, 7150, 6567, 8524,
    7613, 7809, 5562, 7799, 7179, 5184, 7960,
    9455, 5633, 9085
  ]
]

 function stairsIn20(s){
  let newArr = []
  s.forEach(el => {
    newArr.push(el.reduce((acc, steps) => acc + steps, 0))
  })
  console.log(newArr.reduce((acc, el)=> acc + el, 0))
}
stairsIn20(s)*/

/* // Double Char
  const str = 'Abcd'
 function doubleChar(str) {
  const arr = str.split('')
  const newArr = arr.reduce(function (res, current, index, array) {
        return res.concat([current, current])
    }, []);
    return console.log(newArr.join(''))
}

doubleChar(str)*/

/* //Returning Strings

 function greet(name){

  console.log(`Hello, ${name} how are you doing today?`)
}

greet('Oleg')*/

/* // If you can't beat 'em, join 'em!

function cantBeatSoJoin(arr) {
  // Сначала отсортируем внутренние массивы по убыванию суммы их элементов
  arr.sort((a, b) => b.reduce((acc, cur) => acc + cur, 0) - a.reduce((acc, cur) => acc + cur, 0))
  // Затем объединим отсортированные массивы в один
  let result = arr.flat();
  return result;
}

console.log(cantBeatSoJoin([[1,2], [3,4], [5,6], [7,8], [9]]))

arr.sort((a, b) => {
  let sum1 = b.reduce((acc, cur) => acc + cur, 0)
  let sum2 = a.reduce((acc, cur) => acc + cur, 0)
  return b-a
})*/

 // Isograms 

const str = 'Dermatoglyphicsss'

function isIsogram(str){
  const arr = str.toLowerCase().split('')
  const newArr = arr.filter((value, index) => arr.indexOf(value) === index)
  console.log(arr.join('') == newArr.join(''))
}

isIsogram(str)