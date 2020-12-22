$(document).scroll(function() {
    $("div.nav-bar").toggleClass("scrolled", $(this).scrollTop() > 30);
});

$(document).ready(function() {
    $("#logo").click(function() {
        alert("The Peddlers: Walkin and Chill !!");
    });
});



var val = "";
$(document).ready(function() {
    $(".place").click(function() {
        val = $(this).val();
        $("." + val).css("visibility", "visible");
        if (val === "1") {
            $("button[value=2]").prop('disabled', true);
        }
        if (val === "2") {
            $("button[value=1]").prop('disabled', true);
        }
    });
    $("div.order form button").click(function() {
        $("div.order").remove();
        $("div.done").removeClass("visible");
        if (val === "1") {
            $(".extra").text("Normal Meal");
        } else {
            $(".extra").text("Special Meal");
        }
    });
})

// delays scroll affects
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2 + 20;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShow = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShow && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));