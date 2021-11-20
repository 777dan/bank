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

let bank = [card1, card2];
let checkTF;

let cashMashine3 = {
    // number: 3,
    showBalance: function (card, sum) {
        console.log(card.account);
        console.log(card.account - sum);
    },
    checkUser: function (check) {
        let checkCard;
        for (let i = 0; i < bank.length; i++) {
            checkCard = bank[i].number;
        }
        if (check == checkCard) {
            alert("Ok");
            checkTF = true;
        }
        else {
            alert("No!");
            checkTF = false;
        }
    }
};
if (checkTF == true) {
    cashMashine3.showBalance(card1, prompt("Введите сумму для вывода"));
} else {
    alert("Неверный номер карты");
}
cashMashine3.checkUser(prompt("Введите свой номер карточки"));