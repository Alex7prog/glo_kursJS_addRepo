/******************************************
        Lesson 06 adv
*******************************************/
"use strict";

// функция определения значения на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
// функция игра - поиск числа
function gameFindNumber(range) {
  
  // количество попыток в игре
  const gameTry = 10;
  const strGameBegin = 'Угадай число от 1 до ' + range + '. (' + gameTry + ' попыток)' ;

  // используем рандом для числа которое будем искать
  let randomNumber = Math.floor(Math.random() * range) + 1;
  //console.log('randomNumber: ', randomNumber);
  // попытки пользователя
  let userTry = 0;
  
  // функция выбора и проверки числа
  function FindNumber(infoStr) {
    // получаем число от пользователя
    let userNumber = prompt(infoStr);
    
    switch (true) {  
      case (userNumber === null):
        alert('Игра окончена! Использовано попыток: ' 
              + userTry + '.');
        return;
      case (!isNumber(userNumber)):
        return FindNumber('Введите число!, осталось попыток: ' 
                          + (gameTry - userTry) + '.');
      case (userNumber > range):
        return FindNumber('Загаданное число не может быть больше ' 
                          + range + ', попробуйте еще раз. Осталось попыток: ' + (gameTry - userTry) + '.');
      case (userNumber < randomNumber):
        userTry++;
        return FindNumber('Загаданное число больше, попробуйте еще раз. Осталось попыток: ' 
                          + (gameTry - userTry) + '.');
      case (userNumber > randomNumber):
        userTry++;
        return FindNumber('Загаданное число меньше, попробуйте еще раз. Осталось попыток: ' 
                          + (gameTry - userTry) + '.');
      case (userNumber == randomNumber):
        userTry++;
        if (confirm('Поздравляю, Вы угадали!!! Отгадали за '  + userTry +  ' попыток. ' 
                    + 'Хотите продолжить ? (OK) Выйти (Отмена)')) {
          gameFindNumber(range);
        } 
      default:
        return;
    }

  } // конец function gameFindNumber

  FindNumber(strGameBegin);

}
// диапозон поиска числа
const gameNumberRange = 100;

// функция-игра - поиск числа 
gameFindNumber(gameNumberRange);
