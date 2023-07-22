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
    } else {
        sideMenuControl.style.justifyContent = "flex-start"
    }

    parent.appendChild(sideMenuControl)

    let wrapp = this.wrapper

    hamburgerMenu.addEventListener("click", function () {
        if (hamburgerMenu.classList == "fa-solid fa-bars hamburgerMenu") {
            hamburgerMenu.classList = "fa-solid fa-hamburger hamburgerMenu"
            if (side == "right") {
                wrapp.style.marginRight = `-100%`
            } else {
                wrapp.style.marginLeft = `-100%`
            }
        } else {
            hamburgerMenu.classList = "fa-solid fa-bars hamburgerMenu"
             if (side == "right") {
                wrapp.style.marginRight = `0%`
            } else {
                wrapp.style.marginLeft = `0%`
            }
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

    let showHideButton = document.createElement("I");
    showHideButton.classList = "fa-solid fa-eye subMenuWrapperShowHideButton"

    let contentWrapper = document.createElement("DIV");
    contentWrapper.className = "contentWrapper"

    contentWrapper.appendChild(layerName)
    contentWrapper.appendChild(showHideButton)

    let layerContent = document.createElement("DIV");
    layerContent.className = "layerContent"
    subMenu.appendChild(contentWrapper)
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
};
