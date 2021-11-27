let card1 = {
    number: 55322,
    bank: "My bank",
    name: "Вася",
    surname: "Васин",
    code: 3333,
    account: 2000,
};

let card2 = {
    number: 39484,
    bank: "My bank",
    name: "Петя",
    surname: "Петин",
    code: 2222,
    account: 300,
};

let card3 = {
    number: 34484,
    bank: "My bank",
    name: "Кирилл",
    surname: "Гончаров",
    code: 2112,
    account: 360,
};

let bank = [card1, card2, card3];
let checkTF = false;
let checkCard;
let bankAccount;
let nameB1;
let surnameU1;
let nameU1;
let codeC1;

let cashMashine3 = {
    getMoney: function (numC, codeC) {
        for (let i = 0; i < bank.length; i++) {
            codeC1 = bank[i].code;
            checkCard = bank[i].number;
            if (numC == checkCard && codeC == codeC1) {
                checkTF = true;
                alert("Вы успешно проверены");
                let ques1 = prompt("Введите сумму для вывода");
                console.log(bankAccount);
                console.log(bankAccount - ques1);
                break;
            }
            else {
                checkTF = false;
                // alert("Неверный номер карты. Введите снова");
            }
        }
        checking2();
    },
};
function checking2() {
    if (checkTF == false) {
        alert("Неверный номер карты. Введите снова");
    }
}
cashMashine3.getMoney(prompt("Введите свой номер карточки"), prompt("Введите код карты"));