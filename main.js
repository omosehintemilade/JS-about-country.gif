// // alert('hello')
// var anim = document.querySelector('.anim')
// var animInner = document.querySelector('.anim-inner')
// var countries = document.querySelectorAll('.countries')
// let madrido = countries[3]
// console.log(madrido);
var capitals = document.querySelectorAll('.capitals')
console.log(capitals);

var london = document.querySelector('.London')
var madrid = document.querySelector('.Madrid')
var paris = document.querySelector('.paris')
var barcelona = document.querySelector('.barcelona')
var aboutCountry = document.querySelector('.aboutcountry')

// countries.addEventListener('mouseover', toggleItem)
// countries.addEventListener('mouseout', turnOffToggleItem)

capitals.forEach(function(item) {
    item.addEventListener('mouseover', function() {

        toggleItem(this)
    })
})

capitals.forEach(function(turnOffToggleParameter) {
    turnOffToggleParameter.addEventListener('mouseout', function() {
        turnOffToggleItem(this)
    })
})


// countries.addEventListener('mouseout', turnOffToggleItem)
// london.addEventListener('mouseover', toggleItem)
// london.addEventListener('mouseout', turnOffToggleItem)

// madrid.addEventListener('mouseover', toggleItem)



function toggleItem(item) {
    // console.log(e)
    var anim = item.querySelector('.anim')
    var animInner = item.querySelector('.anim-inner')
    if (animInner.classList.contains('anim-switch-off')) {
        animInner.classList.remove('anim-switch-off')
        animInner.classList.add('anim-switch-on')
    } else {
        animInner.classList.add('anim-switch-on')
    }
    item.querySelector(".aboutcountry").style.display = "block";

    item.querySelector(".aboutcountry").style.transition = "all 5s";
    let plusIcon = item.querySelector(".fa-plus")
    let minusIcon = item.querySelector(".fa-minus")

    if (plusIcon.style.display = "block") {
        plusIcon.style.display = "none"
        minusIcon.style.display = "block"
    } else {
        minusIcon.style.display = "block"
    }
}



function turnOffToggleItem(turnOffToggleParameter) {
    var anim = turnOffToggleParameter.querySelector('.anim')
    var animInner = turnOffToggleParameter.querySelector('.anim-inner')
    if (animInner.classList.contains('anim-switch-on')) {
        animInner.classList.remove('anim-switch-on')
        animInner.classList.add('anim-switch-off')
    } else {
        animInner.classList.add('anim-switch-off')
    }
    turnOffToggleParameter.querySelector(".aboutcountry").style.display = "none";
    turnOffToggleParameter.querySelector(".fa-minus").style.display = "block";


    let plusIcon = document.querySelector(".fa-plus")
    let minusIcon = document.querySelector(".fa-minus")


    if (minusIcon.style.display = "block") {
        minusIcon.style.display = "none"
        plusIcon.style.display = "block"
    } else {
        plusIcon.style.display = "block"
    }
}