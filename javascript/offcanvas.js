
$(() => {

    const body = $("body")
    const btnCloseCanvas = $("body div .offcanvas .offcanvas-header .close-canvas-button")

    const divButton = $(".offcanvas .offcanvas-body .div-button")
    const offcanvas = $(".offcanvas")
    const accordionButtons = $(".offcanvas .accordion-body button")

    // accordions
    const accordions = $(".offcanvas .offcanvas-body .accordion .accordion-collapse")
    let openAccordions = new Array(accordions.length)
    let firstAccordionOpen = false;

    body.add(btnCloseCanvas).on("click", () => {

        if ($(window).outerWidth() <= 1200) {
            console.log("first")
            offcanvas.attr("style", "width: 0 !important")
        }
    })

    $(offcanvas).on({

        mouseenter: () => {

            if (openAccordions.length > 0) {
                openAccordions.forEach((v, i) => {
                    $(accordions[v]).addClass("show")

                })

            }


        },

        mouseleave: () => {

            if (($(window).outerWidth() > 1200)) {
                openAccordions.forEach((v, i) => {
                    openAccordions = new Array(accordions.length)
                })

                accordions.each((i) => {
                    if ($(accordions[i]).hasClass("show")) {

                        console.log(accordions[i].innerText)
                        if (i == 0) {
                            firstAccordionOpen = true
                        }
                        else {
                            firstAccordionOpen = false
                        }
                        openAccordions.push(i)
                        $(accordions[i]).removeClass("show")

                    }
                })

                openAccordions.forEach((v, i) => {
                    console.log(v)
                })
            }

        }

    })

    divButton.on({
        click: () => {
            window.location.href = "../placeholder.html"
        }

    })

    offcanvas.on({
        click: (e) => {
            e.stopPropagation()

        }
    })

    accordionButtons.on({
        click: () => {
            window.location.href = "../placeholder.html"
        }
    })



})


