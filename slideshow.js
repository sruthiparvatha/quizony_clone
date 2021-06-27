// var slideIndex = 0;
// showSlides(slideIndex+5);
// slideIndex+=5;

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex +=n);
// }



// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("quiz_card_wrapper");
//   console.log("Len"+slides.length);
//   console.log("slideIndex"+slideIndex);
// console.log("n: "+n);
//   if (n > slides.length) {slideIndex-=5}
// console.log("when n> slides"+slideIndex);

//   if (n < 1) {slideIndex = slidesIndex -5}
// //   for (i = 0; i < slides.length; i++) {
// //       slides[i].style.display = "none";
// //   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     }
    

//     for (i = slideIndex; i < n;i++ ) {
//         // slides[i].style.transitionDuration = "1s";
//         slides[i].style.display = "block";


//         }
//         // slides[i-1].style.display = "none";



// //   slides[slideIndex-1].style.display = "block";
// }


$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner'); 
    // var itemsDiv = ('.quiz_card_wrapper'); 
    var itemWidth = 250;
    // $(".quiz_card_wrapper").css('width');
    console.log("ItemWidth1: "+ itemWidth)
    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

   ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.quiz_card_wrapper');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('.main__container').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            // if (bodyWidth >= 1200) {
            //     incno = itemsSplit[3];
            //     itemWidth = sampwidth / incno;
            // }
            // else if (bodyWidth >= 992) {
            //     incno = itemsSplit[2];
            //     itemWidth = sampwidth / incno;
            // }
            // else if (bodyWidth >= 768) {
            //     incno = itemsSplit[1];
            //     itemWidth = sampwidth / incno;
            // }
            // else {
            //     incno = itemsSplit[0];
            //     itemWidth = sampwidth / incno;
            // }
            // console.log("ItemWidth2"+ itemWidth)
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        console.log("stmt1: "+$(el + ' ' + itemsDiv));
        var values = divStyle.match(/-?[\d\.]+/g);
        console.log("Values"+values);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});