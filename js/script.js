$(() => {
    $('#mainNav').css('visibility', 'visible')
        // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        navbarCollapsible.classList.add('navbar-shrink')
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // project-filter
    $('.filter h6').filter('.all').addClass('filter-border')

    $('.filter').on('click', '.all', function() {
        $('.filter-border').removeClass('filter-border');
        $('.filter h6').filter('.all').addClass('filter-border')

        $('.hide-filter').removeClass('hide-filter');
    });
    $('.filter').on('click', '.tech-art', function() {
        $('.filter-border').removeClass('filter-border');
        $('.filter h6').filter('.tech-art').addClass('filter-border')

        $('.hide-filter').removeClass('hide-filter');
        $('#project li').not('.tech-art').addClass('hide-filter');
    });
    $('.filter').on('click', '.art-show', function() {
        $('.filter-border').removeClass('filter-border');
        $('.filter h6').filter('.art-show').addClass('filter-border')

        $('.hide-filter').removeClass('hide-filter');
        $('#project li').not('.art-show').addClass('hide-filter');
    });
    $('.filter').on('click', '.interactive', function() {
        $('.filter-border').removeClass('filter-border');
        $('.filter h6').filter('.interactive').addClass('filter-border')


        $('.hide-filter').removeClass('hide-filter');
        $('#project li').not('.interactive').addClass('hide-filter');
    });
    $('.filter').on('click', '.co-play', function() {
        $('.filter-border').removeClass('filter-border');
        $('.filter h6').filter('.co-play').addClass('filter-border')


        $('.hide-filter').removeClass('hide-filter');
        $('#project li').not('.co-play').addClass('hide-filter');
    });

    $('.filter').on('click', '.el-fence', function() {
        $('.filter-border').removeClass('filter-border');
        $('.filter h6').filter('.el-fence').addClass('filter-border')


        $('.hide-filter').removeClass('hide-filter');
        $('#project li').not('.el-fence').addClass('hide-filter');
    });


});