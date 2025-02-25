(function () {
    'use script'
    console.log('running js');

    const discSpecial = document.querySelectorAll('.ds');
    const discNormal = document.querySelectorAll('.d');
    const myYap = document.querySelector('.yap');

    discNormal.addEventListener('click', function(){
        myYap.innerHTML = '<p> hello<p>';
    });

} ());