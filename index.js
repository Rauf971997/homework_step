// Задание 1
/* const titles = ['Заголовок 1', 'Очень длинный заголовок во всей книжке', 'Заголовок 2'];
const pages = [10, 20, 123456789012345];

for (let i = 0; i < titles.length; i++) {
  const title = titles[i];
  const page = String(pages[i]);
  const dotsCount = 20 - title.length - page.length;
  const entry = title + '.'.repeat(dotsCount > 0 ? dotsCount : 1) + page;
  console.log(entry);
}
 */


// ЗАдание 2
/* const obj = {
  name: 'Rauf',
  surname: 'Baghirov',
  group: 233
};

while (true) {
  const userInput = prompt("Введите название поля:");
  
  if (userInput === null) {
    break;
  }
  
  const fieldName = userInput.toLowerCase();
  const isFieldExists = fieldName in obj;

  console.log(`${userInput} = ${isFieldExists}`);
} */




// Задание 3

while (true) {
  const userInput = prompt("Введите строку:");
  
 if (userInput === null) {
    break;
  }
   
 let reversedString = '';

  for (let i = userInput.length - 1; i >= 0; i--) {
    const letters = userInput[i];
    if (letters === letters.toLowerCase()) {
      reversedString += letters.toUpperCase();
    } else {
      reversedString += letters.toLowerCase();
    }
  }

  console.log(`${userInput} -> ${reversedString}`);
}