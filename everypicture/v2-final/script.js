(function () {
    'use script'
    console.log('running js');

    const mySections = document.querySelectorAll('section');

    // hide every section except 1 to correspond to disc 1
    document.querySelector('.box').addEventListener('click', function() {
        mySections[0].className = "showing";
        mySections[1].className = "hidden";
        mySections[2].className = "hidden";
    });
    // hide every section except 2 to correspond to disc 2
    document.querySelector('.fairytopia').addEventListener('click', function() {
        mySections[0].className = "hidden";
        mySections[1].className = "showing";
        mySections[2].className = "hidden";

    });
    // hide every section except 3 to correspond to disc 3 NEED TO WORK ON THIS BC IT WONT WORK

    // hide every section except 4 to correspond to disc 4
    document.querySelector('.flushedaway').addEventListener('click', function() {
        mySections[0].className = "hidden";
        mySections[1].className = "hidden";
        mySections[2].className = "showing";

    });

    

}());