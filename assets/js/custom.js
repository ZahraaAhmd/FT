/**** 
 * slack slider  
 * features slider 
 */

$('.solutions-slider').slick({
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    centerMode: true,
    centerPadding: '10%',
    slidesToShow:3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                centerPadding: '10%',
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '5%',
                slidesToScroll: 1
            }
        }
    ]
});
$('.digitalize-slider').slick({
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    centerMode: true,
    centerPadding: '75px',
    slidesToShow:4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                centerPadding: '10%',
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '5%',
                slidesToScroll: 1
            }
        }
    ]
});
$(document).ready(function() {
    /*
     * make slick slider container padding left as other content
     */
    let Screenwidth = $(window).width();
    let padding = Screenwidth - 1230;
    if (Screenwidth > 1230) {
        $(".slider-container").css("padding-left", padding / 2);
    }
})