let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');



addEventListener("scroll", (event) => {
    card1.className = 'slideUp' + ' card';
    card2.className = 'slideUp' + ' card';
    card3.className = 'slideUp' + ' card';
});

onscroll = (event) => {};