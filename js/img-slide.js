var repeat = function(activeClass)
{
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repaeter = () => {
        setTimeout(function() {
            slides[i].classList.add('active');
            
        })
    }
}