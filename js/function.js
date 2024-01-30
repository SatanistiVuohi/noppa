const diceImage = document.querySelector('img');

//diceImage.src = './images/5.png';


diceImage.addEventListener('click', () => {
       // Arvotaan satunnaisluku välillä 1-6
       const randomNumber = Math.floor(Math.random() * 6) + 1;

       // Asetetaan uusi kuva img-elementille
    
       diceImage.src = './images/' + randomNumber + '.png';
       console.log(diceImage.src);
   
});
