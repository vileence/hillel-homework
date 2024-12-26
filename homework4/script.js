console.log("Завдання 1:")

let number = 1;
 const secondNumber = 7;

while(number <= 10){
    const result = secondNumber * number;
    console.log("7 * " + number + " = " + result);
    number++;
}

console.log("Завдання 2:")


function converter(hrn, dollars) {
    const usd = 42;  
    dollars = hrn / usd;
    console.log(`У вас є ${hrn} гривень, якщо ви хочете купити долар, то за ${hrn} ви отримаєте ${dollars} доларів!`);
}

converter(2500);
converter(5700);
converter(28000);


