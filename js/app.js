var mobileMenuButton = document.getElementById('mobile-menu-button')
var navigation = document.getElementById('navigation')

window.addEventListener('resize', function() {
    navigation.classList.remove('open')
})

mobileMenuButton.addEventListener('click', function() {
    navigation.classList.toggle('open')
})