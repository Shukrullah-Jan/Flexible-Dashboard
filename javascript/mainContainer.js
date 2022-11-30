

$(() => {

    const expense = $(".grid section .row div small:first-child")
    const profit = $(".grid section .row div small:nth-child(2)")
    const income = $(".grid section .row  button")

    // user analitics panels
    const btnBrowser = $(".grid section div button:first-child")
    const btnOperatingS = $(".grid section div button:nth-child(2)")
    const btnCountry = $(".grid section div button:nth-child(3)")

    const browserPanel = $(".grid section div .browsers")
    const operatingSystemPanel = $(".grid section div .operating-system")
    const countryPanel = $(".grid section div .country")

    browserPanel.css("display", "")
    operatingSystemPanel.css("display", "none")
    countryPanel.css("display", "none")

    expense.on("click", () => {

        expense.addClass("active")
        profit.removeClass("active")
    })
    profit.on("click", () => {

        profit.addClass("active")
        expense.removeClass("active")
    })
    income.on("click", () => {

        income.addClass("active")
        expense.removeClass("active")
        profit.removeClass("active")
    })

    btnBrowser.on("click", () => {

        btnBrowser.addClass("active-btn")
        btnCountry.removeClass("active-btn")
        btnOperatingS.removeClass("active-btn")

        browserPanel.css("display", "")
        operatingSystemPanel.css("display", "none")
        countryPanel.css("display", "none")
    })
    btnOperatingS.on("click", () => {

        btnBrowser.removeClass("active-btn")
        btnCountry.removeClass("active-btn")
        btnOperatingS.addClass("active-btn")

        browserPanel.css("display", "none")
        operatingSystemPanel.css("display", "block")
        countryPanel.css("display", "none")
    })
    btnCountry.on("click", () => {

        btnBrowser.removeClass("active-btn")
        btnCountry.addClass("active-btn")
        btnOperatingS.removeClass("active-btn")

        browserPanel.css("display", "none")
        operatingSystemPanel.css("display", "none")
        countryPanel.css("display", "block")
    })


})