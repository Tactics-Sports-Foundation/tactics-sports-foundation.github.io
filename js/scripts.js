function toggleMenu() {
    var menu = document.getElementById("myLinks");
    var menuIcon = document.getElementById("menuIcon");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    } else {
        menu.style.display = "block";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


let currentlyOpenContent = null;
let currentlyOpenIcon = null;

document.querySelectorAll('.view-participants-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var content = this.closest('.acheive-card').querySelector('.card-content');
        var icon = this.querySelector('i');

        if (currentlyOpenContent && currentlyOpenContent !== content) {
            currentlyOpenContent.style.display = "none";
            currentlyOpenIcon.classList.remove('fa-chevron-up');
            currentlyOpenIcon.classList.add('fa-chevron-down');
        }

        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "grid";
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            currentlyOpenContent = content;
            currentlyOpenIcon = icon;
        } else {
            content.style.display = "none";
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            currentlyOpenContent = null;
            currentlyOpenIcon = null;
        }
    });
});

// Events
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


