(function ($) {
"use strict";


/*==================================================================
[ Focus Contact2 ]*/
$('.input100').each(function(){
$(this).on('blur', function(){
if($(this).val().trim() != "") {
  $(this).addClass('has-val');
}
else {
  $(this).removeClass('has-val');
}
})
})


/*==================================================================
[ Validate ]*/
var name = $('.validate-input input[name="name"]');
var email = $('.validate-input input[name="email"]');
var message = $('.validate-input textarea[name="message"]');


$('.validate-form').on('submit',function(){
  var check = true;

if($(name).val().trim() == ''){
showValidate(name);
  check=false;
}


if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
showValidate(email);
  check=false;
}

if($(message).val().trim() == ''){
showValidate(message);
  check=false;
}

return check;
});


$('.validate-form .input100').each(function(){
$(this).focus(function(){
hideValidate(this);
});
});

function showValidate(input) {
  var thisAlert = $(input).parent();

  $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
  var thisAlert = $(input).parent();

  $(thisAlert).removeClass('alert-validate');
}})

const homePage = document.querySelector('[data-home]');
const aboutPage = document.querySelector('[data-about]');
const companyLink = document.querySelector('[data-link-company]');
const headerSection = document.querySelector('[data-header]');
const homeLink = document.querySelector('[data-link-home]');
const aboutLink = document.querySelector('[data-link-about]');
const sections = [homePage, headerSection];

aboutLink.addEventListener('click', () => {
  sections.forEach(section => section.classList.add('inactive'));
  aboutPage.classList.remove('inactive');
  homeLink.classList.remove('active');
  companyLink.classList.add('active');
});

homeLink.addEventListener('click', () => {
  sections.forEach(section => section.classList.remove('inactive'));
  companyLink.classList.remove('active');
  homeLink.classList.add('active');
  aboutPage.classList.add('inactive');
});