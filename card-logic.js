let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorCodeSet1 = [1, 8];
const colorCodeSet2 = [2, 4];
const colorCodeSet3 = [3, 5, 9];
const colorCodeSet4 = [6, 7];
createCard();

function createCard() {
    for (let list of initialArray) {
        const node = document.createElement("div");
        node.className = "card-list";
        const textnode = document.createTextNode(list);
        node.appendChild(textnode);
        document.getElementById("card-left-panel").appendChild(node);
    }
    let screenSize = window.matchMedia("(max-width: 960px)");
    if (screenSize.matches) {
        smallScreenCard();
    } else {
        bigScreenCard();
    }
}

function sortCard() {
    initialArray.sort();
    reassignCardData();
}

const shuffleBtnElement = document.getElementById("shuffleBtn");
shuffleBtnElement.addEventListener("click", function() {
    shuffleCard();
});

const sortBtnElement = document.getElementById("sortBtn");
sortBtnElement.addEventListener("click", function() {
    sortCard();
});

function shuffleCard() {
    initialArray = initialArray.map(value => ({
            value,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(({
            value
        }) => value)
    reassignCardData();
}

function reassignCardData() {
    document.getElementById("card-left-panel").innerHTML = '';
    createCard();
}

function smallScreenCard() {
    let cardList = document.getElementsByClassName("card-list");
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].style.backgroundColor = "#EFEFEF";
        let cardNumber = parseInt(cardList[i].innerHTML);
        if (colorCodeSet1.includes(cardNumber)) {
            cardList[i].style.borderLeft = "11px solid #2B8EAD";
        }
        if (colorCodeSet2.includes(cardNumber)) {
            cardList[i].style.borderLeft = "11px solid #6F98A8";
        }
        if (colorCodeSet3.includes(cardNumber)) {
            cardList[i].style.borderLeft = "11px solid #BFBFBF";
        }
        if (colorCodeSet4.includes(cardNumber)) {
            cardList[i].style.borderLeft = "11px solid #2F454E";
        }
    }
}

function bigScreenCard() {
    let cardList = document.getElementsByClassName("card-list");
    for (let i = 0; i < cardList.length; i++) {
        let cardNumber = parseInt(cardList[i].innerHTML);
        if (colorCodeSet1.includes(cardNumber)) {
            cardList[i].style.backgroundColor = "#6F98A8";
            cardList[i].style.borderLeft = "none";
        }
        if (colorCodeSet2.includes(cardNumber)) {
            cardList[i].style.backgroundColor = "#2B8EAD";
            cardList[i].style.borderLeft = "none";
        }
        if (colorCodeSet3.includes(cardNumber)) {
            cardList[i].style.backgroundColor = "#2F454E";
            cardList[i].style.borderLeft = "none";
        }
        if (colorCodeSet4.includes(cardNumber)) {
            cardList[i].style.backgroundColor = "#BFBFBF";
            cardList[i].style.borderLeft = "none";
        }
    }
}


let screenSize = window.matchMedia("(max-width: 960px)")
screenSize.addListener(resize)

function resize(screenSize) {
    if (screenSize.matches) {
        smallScreenCard();
    } else {
        bigScreenCard();
    }
}
