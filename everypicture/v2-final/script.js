(function () {
    'use script'
    console.log('running js');

    const mySections = document.querySelectorAll('section');

    document.querySelector('.box').addEventListener('click', function() {
        mySections[0].className = "showing";
        mySections[1].className = "hidden";
        mySections[2].className = "hidden";
    });
    document.querySelector('.fairytopia').addEventListener('click', function() {
        mySections[0].className = "hidden";
        mySections[1].className = "showing";
        mySections[2].className = "hidden";

    });
    document.querySelector('.flushedaway').addEventListener('click', function() {
        mySections[0].className = "hidden";
        mySections[1].className = "hidden";
        mySections[2].className = "showing";

    });

    

}());