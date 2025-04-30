let choice = prompt("Виберіть напій");

switch (choice) {
  case "Кава":
    alert("Ваш вибір Кава");
    break;
  case "Чай":
    alert("Ваш вибір Чай");
    break;
  case "Сік":
    alert("Ваш вибір Сік");
    break;
  default:
    alert("Виберіть один із варіантів 'Кава' 'Чай' 'Сік'");
}



let weekDay = prompt("Введіть сьогоднішній день тижня");

switch (weekDay) {
  case "Понеділок":
    alert("робочий день");
    break;
  case "Вівторок":
    alert("робочий день");
    break;
  case "Середа":
    alert("робочий день");
    break;
  case "Четвер":
    alert("робочий день");
    break;
  case "П'ятниця":
    alert("робочий день");
    break;
  case "Субота":
    alert("вихідний день");
    break;
  case "Неділя":
    alert("вихідний день");
    break;
  default:
    alert("Виберіть назву дня тижня")
}



let numberMonth = prompt("Введіть номер місяця");

switch (numberMonth) {
  case "1":
    alert("Зима");
    break;
  case "2":
    alert("Зима");
    break;
  case "3":
    alert("Весна");
    break;
  case "4":
    alert("Весна");
    break;
  case "5":
    alert("Весна");
    break;
  case "6":
    alert("Літо");
    break;
  case "7":
    alert("Літо");
    break;
  case "8":
    alert("Літо");
    break;
  case "9":
    alert("Осінь");
    break;
  case "10":
    alert("Осінь");
    break;
  case "11":
    alert("Осінь");
    break;
  case "12":
    alert("Зима");
    break;
  default:
    alert("Введіть число");
}



let color = prompt("введіть колір");

switch (color) {
  case "Червоний":
    alert("стоп");
    break;
  case "Жовтий":
    alert("чекати");
    break;
  case "Зелений":
    alert("йти");
    break;
  default:
    alert("Вибраний колір непідходить виберіть між Червоним Жовтим і Зеленим");
}



const number1 = parseFloat(prompt("Введіть 1 число"));
const number2 = parseFloat(prompt("Введіть 2 число"));
const operator = prompt("Введіть оператор -, +, /, *,");
let result;

switch (operator) {
  case "+":
    result = number1 + number2
    break;
  case "-":
    result = number1 - number2
    break;
  case "*":
    result = number1 * number2
    break;
  case "/":
    if (number2 !== 0) {
      result = number1 / number2;
    } else {
      alert("Помилка на 0 ділити неможна");
      result = "некоректна операція";
    }
    break;
  default:
    alert("Введіть числа і оператор");
}

alert(`Результат ${result}`);