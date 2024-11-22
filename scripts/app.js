let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');



addEventListener("scroll", (event) => {
    card1.className = 'card-img' + ' fadeIn';
    card2.className = 'card-img' + ' fadeIn';
    card3.className = 'card-img' + ' fadeIn';
});

onscroll = (event) => {};