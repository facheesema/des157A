(function() {
    'use strict';
    console.log('reading js');

    const mySections = document.querySelectorAll('section');
    const myBg = document.querySelector('body');

    document.querySelector('#goone').addEventListener('click', function() {
        mySections[0].className = "hidden";
        mySections[1].className = "showing";
        myBg.className = "orange";
    });

    document.querySelector('#gotwo').addEventListener('click', function() {
        mySections[1].className = "hidden";
        mySections[2].className = "showing";
    });

    document.querySelector('#gothree').addEventListener('click', function() {
        mySections[2].className = "hidden";
        mySections[3].className = "showing";
    });

    document.querySelector('#gofour').addEventListener('click', function() {
        mySections[3].className = "hidden";
        mySections[4].className = "showing";
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        mySections[4].className = "hidden";
        mySections[5].className = "showing";
    });

}());