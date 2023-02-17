// Variable for the Moment.JS function to set the date and sets the format
const date = moment().format("Do MMMM YYYY")
// Variable to target the HTML element
const dateHTML = document.getElementById("date")
// Attaches the date to the HTML
dateHTML.append(date)

// Hamburger Menu Variables


// function toggleHamburger() {
//     const hamburgerMenu = document.getElementById('dropdown-content')
//     const dropBtn = document.getElementById('dropBtn')
//     dropBtn.addEventListener('click', function(){
//     if (hamburgerMenu.style.display === "block") {
//         hamburgerMenu.style.display = "none"
//     } else {
//         hamburgerMenu.style.display = "block"
//     }
// })
// }






// Variables for the show more elements, and sets the initial text of the button
const showMoreBtns = document.querySelectorAll('.show-more-btn')
const showMoreContent = document.querySelectorAll('.show-more-content')  

// Loops all the Show More Buttons, sets the text to show more, and hides the content element until triggered.
for (let i = 0; i < showMoreBtns.length; i++) {
    showMoreContent[i].style.display = 'none' 
    showMoreBtns[i].textContent = 'Show More'
    // Adds a click function to the Show More button. Once it displays information, it changes the button to Show Less. Alternates as necessary.
    showMoreBtns[i].addEventListener('click', function() { 
          if (showMoreContent[i].style.display === 'none') {  
                 showMoreContent[i].style.display = 'block'
                 showMoreBtns[i].textContent = 'Show Less'
             } else {
                 showMoreContent[i].style.display = 'none'
                 showMoreBtns[i].textContent = 'Show More'
      }
     })
}


