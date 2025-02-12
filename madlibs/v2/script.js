(function() {
    'use strict';
    console.log('reading js');

    const mySections = document.querySelectorAll('section');
    const myBg = document.querySelector('body');
    const myTitle = document.querySelector('header');

    document.querySelector('#goone').addEventListener('click', function() {
        mySections[0].className = "hidden";
        mySections[1].className = "showing";
        myBg.className = "orange";
        myTitle.className = 'yellowtitle';
    });

    document.querySelector('#gotwo').addEventListener('click', function() {
        mySections[1].className = "hidden";
        mySections[2].className = "showing";
        myBg.className = "yellow";
        myTitle.className = 'orangetitle';
    });

    document.querySelector('#gothree').addEventListener('click', function() {
        mySections[2].className = "hidden";
        mySections[3].className = "showing";
        myBg.className = "orange";
        myTitle.className = 'yellowtitle';
    });

    document.querySelector('#gofour').addEventListener('click', function() {
        mySections[3].className = "hidden";
        mySections[4].className = "showing";
        myBg.className = "yellow";
        myTitle.className = 'orangetitle';
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        mySections[4].className = "hidden";
        mySections[5].className = "showing";
        myBg.className = "yellow";
        myTitle.className = 'orangetitle';
    });

}());