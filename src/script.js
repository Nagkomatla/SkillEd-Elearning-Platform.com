// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }



function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

// For switching between navigation menus in mobile mode
var i = 2;
function switchTAB() {
	var x = document.getElementById("list-switch");
	if(i%2 == 0) {
		document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
		document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
	}else {
		document.getElementById("list-switch").style= "display: none;";
		document.getElementById("search-switch").style= "display: none;";
	}
	i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");

function register() {
  x.style.transform = "translateX(-100%)";
  x.style.opacity = "0";
  x.style.visibility = "hidden";
  y.style.transform = "translateX(0)";
  y.style.opacity = "1";
  y.style.visibility = "visible";
  z.style.left = "calc(50% + 5px)";
  b.classList.add("active");
  a.classList.remove("active");
}

function login() {
  x.style.transform = "translateX(0)";
  x.style.opacity = "1";
  x.style.visibility = "visible";
  y.style.transform = "translateX(100%)";
  y.style.opacity = "0";
  y.style.visibility = "hidden";
  z.style.left = "5px";
  a.classList.add("active");
  b.classList.remove("active");
}

// Password toggle functionality
function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleIcon = passwordInput.nextElementSibling;
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}
  
// CheckBox Function
function goFurther(){
  const submitBtn = document.getElementById('btnSubmit');
  if (document.getElementById("chkAgree").checked == true) {
    submitBtn.classList.add('enabled');
    submitBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    submitBtn.style.color = 'white';
    submitBtn.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
  } else {
    submitBtn.classList.remove('enabled');
    submitBtn.style.background = '#e9ecef';
    submitBtn.style.color = '#6c757d';
    submitBtn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
  }
}

function google() {
  	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}

// QUIZ Page
function quizt(frame) {
  document.getElementById('f1').style='display: none;';
  document.getElementById('f2').style='display: none;';
  document.getElementById('f3').style='display: none;';
  document.getElementById('f4').style='display: none;';
  document.getElementById('f5').style='display: none;';
  document.getElementById('f6').style='display: none;';
  document.getElementById('f7').style='display: none;';
  document.getElementById('f8').style='display: none;';
  document.getElementById('f9').style='display: none;';
  document.getElementById('f10').style='display: none;';
  document.getElementById('f11').style='display: none;';
  if(frame == 1) document.getElementById('f1').style = 'display: block';
  else if(frame == 2) document.getElementById('f2').style = 'display: block';
  else if(frame == 3) document.getElementById('f3').style = 'display: block';
  else if(frame == 4) document.getElementById('f4').style = 'display: block';
  else if(frame == 5) document.getElementById('f5').style = 'display: block';
  else if(frame == 6) document.getElementById('f6').style = 'display: block';
  else if(frame == 7) document.getElementById('f7').style = 'display: block';
  else if(frame == 8) document.getElementById('f8').style = 'display: block';
  else if(frame == 9) document.getElementById('f9').style = 'display: block';
  else if(frame == 10) document.getElementById('f10').style = 'display: block';
  else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
  else alert('error');
}

function startquiz() {
  document.getElementById('title').style = 'display: none;'; 

  document.getElementById('panel').style = 'display: inline-flex;'; 
  document.getElementById('left').style = 'display: block;'; 
  document.getElementById('right').style = 'display: block;'; 
}
function searchdisplay() {
  document.getElementById('searchpanel').style.display="block";
}

function display(n) {
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var s1 = document.getElementById('s1');
  var s2 = document.getElementById('s2');
  var s3 = document.getElementById('s3');
  var s4 = document.getElementById('s4');

  img1.style = 'display: none;';
  img2.style = 'display: none;';
  img3.style = 'display: none;';
  img4.style = 'display: none;';
  s1.style = 'background: #DF2771; color: #FFF;';
  s2.style = 'background: #DF2771; color: #FFF;';
  s3.style = 'background: #DF2771; color: #FFF;';
  s4.style = 'background: #DF2771; color: #FFF;';

  if(n==1) {
    img1.style = 'display: block;';
    s1.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==2) {
    img2.style = 'display: block;';
    s2.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==3) {
    img3.style = 'display: block;';
    s3.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==4) {
    img4.style = 'display: block;';
    s4.style = 'background: #E5E8EF; color: #DF2771;';
  } 
}


function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if(side==0) {
    menu.style = 'transform: translateX(0vh); position:fixed;';
  }
  else {
    menu.style = 'transform: translateX(-100%);';
  }
  side++;
}
 document.addEventListener("DOMContentLoaded", () => {
      const faders = document.querySelectorAll('.fade-in');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.15
      });

      faders.forEach(fade => observer.observe(fade));
    });

const toTopBtn = document.getElementById("toTopBtn");

if (toTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll(".data");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      count = Math.floor(target * easedProgress);
      counter.innerText = count;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// Trigger animation when in viewport
if (document.querySelector(".extra")) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  });

  observer.observe(document.querySelector(".extra"));
}

// Enhanced login form functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize login form as active
  if (document.getElementById('login')) {
    login();
  }
  
  // Add floating label effect
  const inputFields = document.querySelectorAll('.input-field');
  inputFields.forEach(field => {
    field.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });
  
  // Real-time password strength indicator
  const passwordField = document.getElementById('reg-password');
  if (passwordField) {
    passwordField.addEventListener('input', function() {
      checkPasswordStrength(this.value);
    });
  }
  
  // Confirm password validation
  const confirmPasswordField = document.getElementById('confirm-password');
  if (confirmPasswordField) {
    confirmPasswordField.addEventListener('input', function() {
      validatePasswordMatch();
    });
  }
});

function checkPasswordStrength(password) {
  const strength = {
    weak: password.length < 6,
    medium: password.length >= 6 && password.length < 10,
    strong: password.length >= 10 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)
  };
  
  console.log('Password strength:', strength);
}

function validatePasswordMatch() {
  const password = document.getElementById('reg-password');
  const confirmPassword = document.getElementById('confirm-password');
  
  if (password && confirmPassword) {
    if (password.value !== confirmPassword.value && confirmPassword.value.length > 0) {
      confirmPassword.parentElement.style.borderColor = '#ff4757';
    } else {
      confirmPassword.parentElement.style.borderColor = '';
    }
  }
}
