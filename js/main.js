'use strict';
// ①タイプした文字をコンソールに表示させる
// ②ウインドウに表示させた単語の文字と一致したタイプをしたらポイント、ミスタイプしたらミスとする。ポイントとなったら次の文字に移る
// ③正解した文字の表示を変える
// ④複数の単語に対応させ、一つの単語を打ち終わったら、次の単語に行くようにする
// ⑤画面をクリックしたら、ゲームをスタートさせる
// ⑥タイマーを表示させ、動くようにする。
// ⑦タイマーがマイナスになるので、その不具合を修正する
// ⑧スタートして、クリックすると、タイマーが元に戻ってしまうので、修正する。
// ⑨スタートする前に、タイピングすると反応してしまうので、修正する
// ⑩アラートにスコアやミスの値を表示させる
// ⑪リプレイができるようにする

let words=['apple', 'sky', 'blue'];
let loc;
let score;
let miss;
let startTime;
let timeLimit = 3 * 1000;
let isPlaying = false;

const scoreLabel = document.getElementById('score');
const missLabel = document.getElementById('miss');
const target = document.getElementById('target');
const timerLabel = document.getElementById('timer');

let word;




function updateTarget() {
 let placeholder = '';
  for(let i = 0; i < loc; i++) {
    placeholder += '_';
  }
  target.textContent = placeholder + word.substring(loc);
}

function updateTimer() {
 let timeLeft = timeLimit + startTime- Date.now();
timerLabel.textContent = (timeLeft/1000).toFixed(2);
let timeOutId = setTimeout(() => {
updateTimer();
}, 10);
if(timeLeft < 0) {
  isPlaying = false;
  clearTimeout(timeOutId);
  setTimeout(() => {

    showResult();
  }, 100);
  timerLabel.textContent = '0.00';
  target.textContent = 'click to replay';

 }
}

function showResult() {
 let accuracy = score + miss === 0 ? 0 : score/(score + miss) *100;
 alert(`${score} letters, ${miss} misses, ${accuracy}% accuracy!`);
}

window.addEventListener('keydown', (e) => {
  if(isPlaying === false) {
    return;
  }
  if(word[loc] === e.key) {
    loc++;
    if(loc === word.length) {
      word = words[Math.floor(Math.random() * words.length)];
      loc = 0;
    }
    updateTarget();
    score++;
    scoreLabel.textContent = score;
  }else {

    miss++;
    missLabel.textContent = miss;
  }
});

window.addEventListener('click',() => {
if(isPlaying ===true) {
  return;
}
isPlaying = true;
loc = 0;
score = 0;
 miss = 0;
 scoreLabel.textContent = score;
 missLabel.textContent = miss;
 word = words[Math.floor(Math.random() * words.length)];
  target.textContent = word;
  startTime = Date.now();
  updateTimer();
});







// つまづいたポイント
// textContent忘れる
// let const 忘れる
// function つけ忘れる
// subStringの使い方
// toFixedの使い方


















// {
//   'use strict';

//   {
//     const words = [
//       'apple',
//       'sky',
//       'blue',
//       'middle',
//       'set',
//     ];
//     let word;
//     let loc;
//     let score;
//     let miss;
//     const timeLimit = 3 * 1000;
//     let startTime;
//     let isPlaying = false;
  
//     const target = document.getElementById('target');
//     const scoreLabel = document.getElementById('score');
//     const missLabel = document.getElementById('miss');
//     const timerLabel = document.getElementById('timer');
  
//     function updateTarget() {
//       let placeholder = '';
//       for (let i = 0; i < loc; i++) {
//         placeholder += '_';
//       }
//       target.textContent = placeholder + word.substring(loc);
//     }
  
//     function updateTimer() {
//       const timeLeft = startTime + timeLimit - Date.now();
//       timerLabel.textContent = (timeLeft / 1000).toFixed(2);
  
//       const timeoutId = setTimeout(() => {
//         updateTimer();
//       }, 10);
  
//       if (timeLeft < 0) {
//         isPlaying = false;
  
//         clearTimeout(timeoutId);
//         timerLabel.textContent = '0.00';
//         setTimeout(() => {
//           showResult();
//         }, 100);
  
//         target.textContent = 'click to replay';
//       }
//     }
  
//     function showResult() {
//       const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
//       alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
//     }
  
//     window.addEventListener('click', () => {
//       if (isPlaying === true) {
//         return;
//       }
//       isPlaying = true;
  
//       loc = 0;
//       score = 0;
//       miss = 0;
//       scoreLabel.textContent = score;
//       missLabel.textContent = miss;
//       word = words[Math.floor(Math.random() * words.length)];
  
//       target.textContent = word;
//       startTime = Date.now();
//       updateTimer();
//     });
  
//     window.addEventListener('keydown', e => {
//       if (isPlaying !== true) {
//         return;
//       }
  
//       if (e.key === word[loc]) {
//         loc++;
//         if (loc === word.length) {
//           word = words[Math.floor(Math.random() * words.length)];
//           loc = 0;
//         }
//         updateTarget();
//         score++;
//         scoreLabel.textContent = score;
//       } else {
//         miss++;
//         missLabel.textContent = miss;
//       }
//     });
//   }