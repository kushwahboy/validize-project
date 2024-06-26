$(document).ready(function () {
    $('.nav-btn').on('click', function () {
        $('.menu').toggleClass('active');
        $('body').toggleClass('over-hidden');
    });
});

// hero banner
$(document).ready(function () {
    $('.share-list li').each(function (index) {
        var element = $(this);
        setTimeout(function () {
            element.addClass('active');
        }, index * 800);
    });
});


// Header reveal Js
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('hidden-block');
            header.classList.remove('revealed');
        } else {
            // Scrolling up
            header.classList.remove('hidden-block');
            header.classList.add('revealed');
        }
        lastScrollY = window.scrollY;
    });
});


// 

$(document).ready(function () {
    $('.accordian-title').click(function () {
        var isVisible = $(this).next(".accordian-des").is(":visible");
        $(".accordian-des").slideUp();
        if(!isVisible){
            $(this).next(".accordian-des").slideDown();
        }
    });
});


