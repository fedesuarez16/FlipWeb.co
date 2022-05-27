




window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

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
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const emailBtn = document.querySelector("#submitButton1");
    emailBtn.addEventListener("click", () => {

        console.log("awdawdawdg");
        const templateParams = {
            email:document.getElementById("email").value,
            message:document.getElementById("message").value,
            name:document.getElementById("name").value,
            phone:document.getElementById("phone").value
            
        }
        console.log(templateParams);



        emailjs.send('service_qne58zn', 'template_2ftnirk', templateParams)
            .then( (res) => {
                console.log(res)
                swal({
                    title: "Tu Mensaje se envio correctamente",
                    text: "Te responderemos a la brevedad",
                    icon: "success",
                    button: "cerrar",
                  });

                

            })
            .catch( (err) => {
                console.log(`Error ${err}`);
                swal({
                    title: "Tu mensaje no se pudo enviar",
                    text: "intentalo mas tarde o envianos un email a hello@flipwebco.com",
                    icon: "warning",
                    button: "cerrar",
                  });

            })
    })

});


