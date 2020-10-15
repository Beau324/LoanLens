(function ($) {
  "use strict"; // Start of use strict
 
  // morris donut charts
  if($("#donutMorris").length == 1){
   var $donutData = [
    { label: "Principal", value: 200000 },
    { label: "Interest", value: 50000 },
  ];
  Morris.Donut({
    element: 'donutMorris',
    data: $donutData,
    barSize: 0.1,
    labelColor: '#3e5569',
    resize: true, //defaulted to true
    colors: ['#84BD5A', '#322153']
  });
  } 
  
})(jQuery);
