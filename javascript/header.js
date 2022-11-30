
$(function () {

    // Navbar
    // search bar and nav profiles
    const menuIcon = $("header form .bi-list")
    const searchIcon = $("header form .bi-search")
    const closeIcon = $("header form .bi-x")
    const searchInput = $("header form .search")

    // nav profile buttons
    const navProfile = $("header .profile")
    const navProfileButtons = $("header .profile button")
    const shortcutsPanel = $(".shortcuts-panel")
    const notificationsPanel = $(".notifications-panel")
    const profilePanel = $(".profile-panel")
    const btnChangeTheme = $("header .profile button:first-child")

    // notification panel badge and close button
    const notiRow = $(".notifications-panel .row")
    const readStatus = $(".notifications-panel div .notification-status span")
    const btnCloseNotification = $(".notifications-panel div .notification-status .bi")
    const btnReadAll = $(".notifications-panel .row:first-child .bi")

    // theme settings
    if (localStorage.currentTheme != undefined) {

        if (localStorage.currentTheme == "light") {
            setTheme("light")

        }
        else {
            setTheme("dark")
            btnChangeTheme.attr('title', 'Light theme');
        }

    }
    else {
        localStorage.currentTheme = "light"
        btnChangeTheme.attr('title', 'Dark theme');
    }


    menuIcon.on({
        click: (e) => {
            e.stopPropagation()
            $("body div .offcanvas")
                .attr("style", "width:17rem !important")
        }
    })

    searchIcon.on({
        click: () => {

            changeSearchInput()
            searchInput.trigger("focus")
        }
    })

    searchInput.on({
        focus: () => {
            changeSearchInput()
        },
        blur: () => {


            if ($(window).outerWidth() <= 768) {
                if (searchInput.val() != "") {
                    navProfile.css("display", "none")
                }
                else {
                    $("header form").css("width", "fit-content")
                    navProfile.css("display", "inline-flex")
                    searchInput.css("display", "none")
                    closeIcon.css("display", "none")
                    searchIcon.css("display", "")
                }

            }
            else {
                navProfile.css("display", "inline-flex")
                searchIcon.css("display", "")
                closeIcon.css("display", "none")
                $("header form").css("width", "fit-content")

                searchInput.attr("placeholder", "Search (Ctrl+/)")
                searchInput.css({
                    "width": "fit-content"
                })
            }

        }
    })



    closeIcon.on("mousedown", () => {
        searchInput.val("")
        searchInput.trigger("blur")

        if ($(window).outerWidth() <= 768) {
            searchInput.css("display", "none")
        }
    })


    $(document).on("click", () => {

        shortcutsPanel.fadeOut()
        notificationsPanel.fadeOut()
        profilePanel.fadeOut()
    })

    navProfileButtons[0].addEventListener("click", () => {
        toggleTheme()
    })

    navProfileButtons[1].addEventListener("click", (e) => {
        e.stopPropagation() // limits event to button only (stop click event from continuing down to body)
        shortcutsPanel.fadeToggle()
        notificationsPanel.fadeOut()
        profilePanel.fadeOut()
    })

    navProfileButtons[2].addEventListener("click", (e) => {
        e.stopPropagation()
        notificationsPanel.fadeToggle()
        shortcutsPanel.fadeOut()
        profilePanel.fadeOut()

    })

    navProfileButtons[3].addEventListener("click", (e) => {
        e.stopPropagation()
        profilePanel.fadeToggle()
        shortcutsPanel.fadeOut()
        notificationsPanel.fadeOut()

    })

    shortcutsPanel.add(notificationsPanel).add(profilePanel).on("click", (e) => {
        e.stopPropagation()
    })



    // notification panel

    // if (localStorage.readAll == undefined) {
    //     localStorage.readAll = false
    // }
    // else {
    //     readStatus.css("display", "none")
    // }

    btnReadAll.on("click", () => {
        // localStorage.readAll = true
        readStatus.css("display", "none")
    })



    for (let i = 0; i < notiRow.length; i++) {

        if (i > 0) {
            notiRow[i].addEventListener("mouseover", () => {

                btnCloseNotification[i - 1].style.display = "block"

                btnCloseNotification[i - 1].addEventListener("click", () => {
                    notiRow[i].style.display = "none"
                })


            })
        }


    }

    notiRow.on("mouseleave", () => {


        btnCloseNotification.css("display", "none")
    })

    // panel profile


    // functions
    function changeSearchInput() {

        navProfile.css("display", "none")
        $("header form").css("width", "100%")


        searchInput.css({ "width": "100%" })
        searchInput.css({ "display": "inline" })
        searchInput.attr("placeholder", "Search...")
        searchIcon.css("display", "none")
        closeIcon.css("display", "inline")



    }

    function toggleTheme() {

        if (localStorage.currentTheme == "light") {
            setTheme("dark")

        }
        else {
            setTheme("light")
        }

    }

    function setTheme(theme) {
        if (theme == "light") {
            $("#switcherId").attr("href", "../css/themes/lightTheme.css")
            btnChangeTheme.attr('title', 'Dark theme');
        } else if (theme == "dark") {
            $("#switcherId").attr("href", "../css/themes/darkTheme.css")
            btnChangeTheme.attr('title', 'Light theme');
        }
        localStorage.currentTheme = theme;
    }

})
