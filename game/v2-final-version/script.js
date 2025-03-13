( function (){
    'use script'
    console.log('read js');

    //in js capture al child small divis, call it playpieces
    const playPieces = document.querySelectorAll('.playPieces');
    const bttn = document.querySelector('button');


    // Gets the game started
    bttn.addEventListener('click', function(event){
        event.preventDefault();
        playPieces.className = 'white';
    });

})()
//html add all child divs



//loop thrugh node list of play pieces

//add a random to chamge specific play pieces to white class .white 
