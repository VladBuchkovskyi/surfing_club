$(document).ready(function() {

  const shopSlider = $("#shopSlider");

    shopSlider.owlCarousel({
      items: 3,
      loop:true,
      dots: false,
      margin: 2,
      smartSpeed: 500
    });


  // Go to the next item
  $('#shopSliderRight').click(function() {
    shopSlider.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('#shopSliderLeft').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    shopSlider.trigger('prev.owl.carousel');
  })

//
//   headerSlider.on("changed.owl.carousel", function(event) {
//
//     $('.slide-controls-number__active').text(event.item.index + 1);
//     $('.slide-controls-number__total').text(event.item.count);
//   });
//
});
