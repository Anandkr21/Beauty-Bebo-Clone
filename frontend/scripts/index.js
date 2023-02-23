


// carousal
function responsiveSlider() {
  const slider = document.querySelector('.container');
  let sliderWidth = slider.offsetWidth / 3;
  const sliderList = document.querySelector('ul');
  let items = sliderList.querySelectorAll('li').length -2 ;
  let count = 1;
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  function prevSlide() {
    if(count > 1) {
      count = count - 2;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }else if(count == 1) {
      count = items - 1;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }
    
  }
  function nextSlide() {
    if(count < items) {
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
      
    }else if(count == items) {
      sliderList.style.left = '0px';
      count = 1;
      
    }
  }
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
  setInterval(function() {
    nextSlide();
  },3000);
}

window.onload = function() {
  responsiveSlider();
}



// navbar 
$(document).ready(function() {
  $("div.dropdown button").click((event) => {
    if($(event.target).next().css('display') == 'flex'){
      $(event.target).next().css('display', 'none');
      $(event.target).children().removeClass('rotate');
    } else if($(event.target).next().css('display') == 'none'){
      $(event.target).next().css('display', 'flex');
      $(event.target).children().addClass('rotate');
    }
  });
  
  $('.hamburger').click(() => {
    if($('nav').css('display') == 'none'){
      $('nav').css('display', 'flex').css('animation-name', 'navAnim').addClass('animInfo').css('animation-duration', '.5s');
      $('.hamburger :nth-child(1)').css('animation-name', 'bar1Anim').addClass('animInfo');
      $('.hamburger :nth-child(2)').css('animation-name', 'bar2Anim').addClass('animInfo');
      $('.hamburger :nth-child(3)').css('animation-name', 'bar3Anim').addClass('animInfo');
    } else if($('nav').css('display') == 'flex'){
      $('nav').css('display', 'none').css('animation-name', 'navAnimReverse').css('animation-duration', '.5s');
      $('.hamburger :nth-child(1)').css('animation-name', 'bar1AnimReverse');
      $('.hamburger :nth-child(2)').css('animation-name', 'bar2AnimReverse');
      $('.hamburger :nth-child(3)').css('animation-name', 'bar3AnimReverse');
    }
  });
  
  if ($(window).width() > 800 ) {
    $('nav').removeClass('animInfo').css('animation-name', 'unset').css('opacity', '1');
}
});




