




var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
          
        });
    }
});

function openLightbox(index) {
    const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg",
    "images/image17.jpg",
    "images/image18.jpg",
    "images/image19.jpg",
    "images/image20.jpg",
    "images/image21.jpg",
    "images/image22.jpg",
    "images/image23.jpg",
    "images/image24.jpg",
    "images/image25.jpg",
    "images/image26.jpg",
    "images/image27.jpg",
    "images/image28.jpg",
    "images/image29.jpg",
    "images/image30.jpg",
      ];

      const lightbox = document.getElementById("lightbox");
      const lightboxImage = document.getElementById("lightboxImage");

      lightboxImage.src = images[index];
      lightbox.style.display = "block";
    }

    function closeLightbox() {
      const lightbox = document.getElementById("lightbox");
      lightbox.style.display = "none";
    }
