function SideMenu(parent, side) {
    this.wrapper = document.createElement("DIV")
    this.wrapper.className = "menuWrapper"

    let sideMenuControl = document.createElement("DIV");
    sideMenuControl.className = "sideMenuControl"

    let hamburgerMenu = document.createElement("I");
    hamburgerMenu.classList = "fa-solid fa-bars hamburgerMenu"
    sideMenuControl.appendChild(hamburgerMenu)

    if (side == "right") {
        this.wrapper.style.marginLeft = "auto"
    }else{
        sideMenuControl.style.justifyContent ="flex-start"
    }

    this.wrapper.appendChild(sideMenuControl)

    let wrapp = this.wrapper
    let previousWidth = wrapp.style.width
    hamburgerMenu.addEventListener("click", function () {
        if (hamburgerMenu.classList == "fa-solid fa-bars hamburgerMenu") {
            hamburgerMenu.classList = "fa-solid fa-hamburger hamburgerMenu"
            wrapp.style.width = "0%"
        } else {
            hamburgerMenu.classList = "fa-solid fa-bars hamburgerMenu"
            wrapp.style.width = previousWidth
        }
    })

    this.sideMenuContentWrapper = document.createElement("DIV");
    this.sideMenuContentWrapper.className = "sideMenuContentWrapper"

    this.wrapper.appendChild(this.sideMenuContentWrapper)

    parent.appendChild(this.wrapper)
}
SideMenu.prototype.createSideMenu = function (name) {
    let subMenu = document.createElement("DIV")
    subMenu.className = "subMenuWrapper"

    let layerName = document.createElement("DIV");
    layerName.className = "layerName"
    layerName.textContent = name

    subMenu.appendChild(layerName)

    let showHideButton = document.createElement("I");
    showHideButton.classList = "fa-solid fa-eye subMenuWrapperShowHideButton"
    subMenu.appendChild(showHideButton)

    let layerContent = document.createElement("DIV");
    layerContent.className = "layerContent"
    subMenu.appendChild(layerContent)

    showHideButton.addEventListener("click", function () {
        if (showHideButton.classList == "fa-solid fa-eye subMenuWrapperShowHideButton") {
            showHideButton.classList = "fa-solid fa-eye-slash subMenuWrapperShowHideButton"
            subMenu.style.height = "400px";
            layerContent.style.height = "calc(100% - 60px)";
        } else {
            showHideButton.classList = "fa-solid fa-eye subMenuWrapperShowHideButton"
            subMenu.style.height = "60px";
            layerContent.style.height = "0%";
        }
    })

    this.sideMenuContentWrapper.appendChild(subMenu)
    return this;
}