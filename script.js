let burgerButton = document.querySelector('.burger');
let sidebar = document.querySelector('.sidebar')
let backdrop = document.querySelector('.backdrop')

let handleNavToggle = () => {
    burgerButton.classList.toggle('toggle')
    sidebar.classList.toggle('sideBarShow')
    backdrop.classList.toggle('backdropShow')
}

burgerButton.addEventListener('click', handleNavToggle)
backdrop.addEventListener('click', handleNavToggle)

let sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', handleNavToggle)
})

let ratings = document.querySelectorAll('.skillCard .ratings')
console.log(ratings);

ratings.forEach(rating => {
    let starRating = rating.getAttribute('rating')    //Getting number of stars to be filled in particular card

    for (let i = 0; i < 5; i++) {
        let star = document.createElement('img');
        star.src = './Assets/star.svg';
        star.alt = 'star'
        star.classList.add('star')

        if (i < starRating)
            star.classList.add('active')

        rating.appendChild(star)
    }

})

let backToTop = document.querySelector('.backToTop')
window.onscroll = () => {
    if (window.innerWidth < 750) {
        let headerHeight = document.getElementById('home').offsetHeight;
        // console.log(window.scrollY)
        console.log(headerHeight)
        if (window.scrollY > headerHeight)
            backToTop.style.display = 'block';
        else
            backToTop.style.display = 'none';
    }
    else
        backToTop.style.display = 'none';

}