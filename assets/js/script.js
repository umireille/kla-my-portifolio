const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.side__nav-menu a[href*=' + sectionId + ']').classList.add('side__active')
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
          // console.log(sectionId)
        }else{
            document.querySelector('.side__nav-menu a[href*=' + sectionId + ']').classList.remove('side__active')
             document
               .querySelector(".nav__menu a[href*=" + sectionId + "]")
               .classList.remove("active-link");
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Contact form

function FormValidation() {
  //get all element onto the DOM
  const contactNames = document.getElementById("contact-names").value;
  const contactEmail = document.getElementById("contact-email").value;
  const contactMsg = document.getElementById("contact-msg").value;
  const errorMsg = document.getElementById("contact-error");
  let errorText; // Will hold error msg

  if (contactNames === "" || contactNames.length < 2) {
    errorText = "Ooops! looks like you didn't enter your names";
    errorMsg.innerHTML = errorText;
    return false;
  }
  if (contactEmail === "" || contactEmail.indexOf("@") == -1) {
    errorText = "Ooops! looks like you didn't enter your email correctly!";
    errorMsg.innerHTML = errorText;
    return false;
  }
  if (contactMsg === "" || contactMsg < 30) {
    errorText = "Ooops! looks like you didn't enter your message!";
    errorMsg.innerHTML = errorText;
    return false;
  }
  return true;
}