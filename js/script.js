/******************************************
        Lesson 06
*******************************************/
"use strict"

// функция определения значения на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
// функция игра - поиск числа
function gameFindNumber(range) {
  // используем рандом для числа которое будем искать
  const randomNumber = Math.floor(Math.random() * range) + 1;
  //console.log('randomNumber: ', randomNumber);

  return function FindNumber(infoStr) {
    
    let userNumber = prompt(infoStr);

    switch (true) {  
      case (userNumber === null):
        (alert('Игра окончена!'));
        return;
      case (!isNumber(userNumber)):
        return FindNumber('Введите число!');
      case (userNumber > range):
        return FindNumber('Загаданное число не может быть больше ' + range + ', еще раз');
      case (userNumber < randomNumber):
        return FindNumber('Загаданное число больше, еще раз');
      case (userNumber > randomNumber):
        return FindNumber('Загаданное число меньше, еще раз');
      case (userNumber == randomNumber):
        (alert('Поздравляю, Вы угадали!!!'));
        return;
      default:
        return;
    }

  }

}

const numberRange = 100;
let quest = gameFindNumber(100);

quest('Угадай число от 1 до ' + numberRange + ': ');
