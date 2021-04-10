// ------------ ------------ ------------ ------------ ------------ ------------
// Thiết lập Slick Carousel
$('.carouselGiangVien').slick(
  {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: false,
    variableWidth: true
  });

$('.carouselFeedback, .carouselBlog').slick(
  {
    infinite: true,
    autoplay: true,
    speed: 1000,
    centerMode: true,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    asNavFor: '.carouselModal'
  });

$('.carouselModal').slick(
  {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.carouselFeedback'
  });


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm add/remove trạng thái Active khi "click" vào các nút trên Menu
let menuItemActive = [...document.getElementsByClassName("itemMenu")];
let burgerFilling = [...document.getElementsByClassName("burger-filling")];

menuItemActive[0].classList.add("active");

menuItemActive.forEach(function(element) 
  {
    element.addEventListener("click",function()
      {
        element.classList.add("active");
        
        let sibling = menuItemActive[0];
        while (sibling) 
         {
            if (sibling.nodeType === 1 && sibling !== element) 
              {
                sibling.classList.remove("active");
              }
            sibling = sibling.nextSibling
         }
      });
  });


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm add/remove trạng thái Active khi "scroll" qua các vị trí trên trang
window.addEventListener("scroll",function()
  {
    let idOffSet = [document.getElementById("idTrangChu").getBoundingClientRect().top + document.documentElement.scrollTop,
                document.getElementById("idGioiThieu").getBoundingClientRect().top + document.documentElement.scrollTop,
                document.getElementById("idGiangVien").getBoundingClientRect().top + document.documentElement.scrollTop,
                document.getElementById("idNoiDung").getBoundingClientRect().top + document.documentElement.scrollTop,
                document.getElementById("idHocVien").getBoundingClientRect().top + document.documentElement.scrollTop,
                document.getElementById("idLienHe").getBoundingClientRect().top + document.documentElement.scrollTop,
                document.getElementById("idBaiViet").getBoundingClientRect().top + document.documentElement.scrollTop];
    let windowViewpoint = window.pageYOffset + 85;

    menuItemActive.forEach(function(element)
      {
        element.classList.remove("active");
      });

    if (idOffSet[1] > windowViewpoint && windowViewpoint >= idOffSet[0])
      {
        menuItemActive[0].classList.add("active");
      }
    else if (idOffSet[2] > windowViewpoint && windowViewpoint >= idOffSet[1])
      {
        menuItemActive[1].classList.add("active");
      }
    else if (idOffSet[3] > windowViewpoint && windowViewpoint >= idOffSet[2])
      {
        menuItemActive[2].classList.add("active");
      }
    else if (idOffSet[4] > windowViewpoint && windowViewpoint >= idOffSet[3])
      {
        menuItemActive[3].classList.add("active");
      }
    else if (idOffSet[5] > windowViewpoint && windowViewpoint >= idOffSet[4])
      {
        menuItemActive[4].classList.add("active");
      }
    else if (idOffSet[6] > windowViewpoint && windowViewpoint >= idOffSet[5])
      {
        menuItemActive[5].classList.add("active");
      }
    else
      {
        menuItemActive[6].classList.add("active");
      }
  });


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm tạo hiệu ứng cho Humburger menu ------------ ------------
  function hamburgerFunction() 
    {
      document.querySelector(".burger-menu").classList.toggle("burger-menu-toggle");
      document.querySelector(".burger-menu-content").classList.toggle("burger-menu-toggle");
      document.querySelector(".burger-menu-blackscreen").classList.toggle("burger-menu-toggle");
    }


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm ẩn Humburger menu khi ấn vào từng menu con ------------ ------------
  document.querySelectorAll(".burger-menu-content a").forEach(function(element)
    {
      element.addEventListener("click" ,function()
        {
          setTimeout(function(){ hamburgerFunction(); }, 600);
        });
    });


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm ẩn hiện collapse 1 ------------ ------------
  let coll = document.getElementsByClassName("collapsible");
  let i;

  for (i = 0; i < coll.length; i++) 
    {
      coll[i].addEventListener("click", function() 
        {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.display === "block") 
            {
              content.style.display = "none";
            }
          else 
            {
              content.style.display = "block";
            }
        });
    }


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm ẩn hiện collapse 2 ------------ ------------
  let coll2 = document.getElementsByClassName("collapsible2");
  let y;

  for (y = 0; y < coll2.length; y++) 
    {
      coll2[y].addEventListener("click", function() 
        {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.display === "block") 
            {
              content.style.display = "none";
            }
          else 
            {
              content.style.display = "block";
            }
        });
    }


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm hiển thị Video ------------ ------------
  document.querySelector(".imageGiaoTrinh").addEventListener("click", function()
    {
      document.querySelector(".modal").classList.add("show");
      document.querySelector(".videoGiaoTrinh").classList.add("show");
      document.querySelector(".playButtonActive").classList.add("show");
    });


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm hiển thị Feedback ------------ ------------
  document.querySelectorAll(".cardFeedback").forEach(function(element)
    {
      element.addEventListener("click", function()
        {
          document.querySelector(".modal").classList.add("show");
          document.querySelector(".carouselModal").classList.add("show");
        });
    });


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm ẩn Modal và ẩn hình ảnh / video bên trên ------------ ------------
  document.querySelector(".modal").addEventListener("click", function()
    {
      this.classList.remove("show");
      // document.querySelector("#videoGiaoTrinh").stopVideo();
      document.querySelector(".videoGiaoTrinh").classList.remove("show");
      document.querySelector(".playButtonActive").classList.remove("show");
      document.querySelector(".carouselModal").classList.remove("show");
    });