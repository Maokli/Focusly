//Navbar Animation
  document.getScroll = function() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sy = r.scrollTop || b.scrollTop || 0;
        return  sy;
    }
  }
  let scroll = ()=>{
    let sy = document.getScroll();
    navbar = document.querySelector('.navbar');
    if(sy[1] > 100){
      navbar.classList.add("nav-anim");
    }else{
      navbar.classList.remove("nav-anim");
    }
  }

  //Smooth scroll

  $('.navbar a, .btn').on('click',function(event){
    if(this.hash !== ''){
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-100
      },800
      );
    }

  });

  //Bootstrap animations

  window.sr = ScrollReveal();
  
  sr.reveal('.navbar',{
    duration:2000,
    origin:'bottom'
  });

  sr.reveal('.showas-ontnt',{
    duration:2000,
    origin:'top',
    distance: '300px'
  });

  sr.reveal('.showas-ontnt',{
    duration:2000,
    origin:'top',
    distance: '300px'
  });

  sr.reveal('.showas img',{
    duration:1000,
    origin:'right',
    distance: '300px'
  });

  sr.reveal('.showas .btn',{
    duration:2000,
    delay:2000,
    origin:'bottom'
  });

  sr.reveal('#what .tainr',{
    duration:2000,
    origin:'top',
    distance:'50px'
  });

  
  if(window.matchMedia("(max-width: 500px)").matches){
    sr.reveal('#what .itms',{
      duration:4000,
      distance:'50px',
      origin:'left',
      viewFactor:.4
    });
  }else{
  sr.reveal('#what .itms',{
    duration:4000,
    origin:'bottom',
    viewFactor:.4
  });}

  sr.reveal('#why h2',{
    duration:2000,
    origin:'bottom',
    distance:'50px'
  });

  
  const benefits = document.querySelectorAll('#why .itm');
  benefits.forEach((benefit,index) => {
    if(index%2 === 0){
      benefit.querySelector('.img').classList.add('left');
      benefit.querySelector('.txt').classList.add('right');
    }else{
      benefit.querySelector('.img').classList.add('right');
      benefit.querySelector('.txt').classList.add('left');
    }
  });

  sr.reveal('#why .right',{
    duration:2000,
    origin:'left',
    distance:'300px'
  });

  sr.reveal('#why .left',{
    duration:2000,
    origin:'right',
    distance:'300px'
  });

  sr.reveal('.register-container #register',{
    duration:2000,
    origin:'bottom',
    viewFactor:0.4
  });

  sr.reveal('.register-container #register .btn',{
    duration:2000,
    delay:1000,
    origin:'left',
    distance:'100px'
  });

  sr.reveal('.register-container #register .form-group',{
    duration:2000,
    origin:'right',
    distance:'100px'
  });
