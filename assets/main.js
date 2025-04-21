document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropbtn");
    const content = dropdown.querySelector(".dropdown-content");

    button.addEventListener("click", function (e) {
      e.preventDefault();

      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.querySelector(".dropdown-content").classList.remove("show");
          d.querySelector(".dropbtn").classList.remove("active");
        }
      });

      content.classList.toggle("show");
      button.classList.toggle("active");
    });
  });

  window.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(dropdown => {
        dropdown.querySelector(".dropdown-content").classList.remove("show");
        dropdown.querySelector(".dropbtn").classList.remove("active");
      });
    }
  });
});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })
}

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);

let btns = document.querySelectorAll('.btn_filter')
let descs = document.querySelectorAll('.desc')
let imgs = document.querySelectorAll('.img_filter')

btns.forEach((btn, index) => {
  btn.onclick = () => {
    document.querySelector('.btn_filter.active').classList.remove('active')
    btn.classList.add('active')
    document.querySelector('.desc.active').classList.remove('active')
    descs[index].classList.add('active')
    document.querySelector('.img_filter.active').classList.remove('active')
    imgs[index].classList.add('active')
  }
})

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("modal");
  const modalLog = document.getElementById("modal_log");
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      hideModal();
    }
  });
  
  modalLog.addEventListener('click', function(e) {
    if (e.target === modalLog) {
      hideModalLog();
    }
  });
  
  window.showModal = function() {
    modal.style.display = "block";
    modalLog.style.display = "none";
  };
  
  window.hideModal = function() {
    modal.style.display = "none";
  };
  
  window.showModalLog = function() {
    modalLog.style.display = "block";
    modal.style.display = "none";
  };
  
  window.hideModalLog = function() {
    modalLog.style.display = "none";
  };
});