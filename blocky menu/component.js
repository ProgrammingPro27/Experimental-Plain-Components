function BlockFooterMenu(parent) {
    this.wrapper = document.createElement("DIV");
    this.wrapper.className = "menu"

    parent.appendChild(this.wrapper)
}
BlockFooterMenu.prototype.createBlockMenu = function () {
    let showButton = document.createElement("I");
    showButton.className = "fa-solid fa-caret-up bottomMenuButton"

    let footerBlock = document.createElement("DIV");
    footerBlock.className = "blockMenu"



    let footerBlockContent = document.createElement("DIV");
    footerBlockContent.id = "bottomMenuContentWrapper"
    footerBlock.appendChild(showButton)
    footerBlock.appendChild(footerBlockContent)

    showButton.addEventListener("click", function () {
        if (showButton.className == "fa-solid fa-caret-down bottomMenuButton") {
            showButton.className = "fa-solid fa-caret-up bottomMenuButton"
            footerBlock.style.marginTop = "calc(100vh - 50px)"
        } else {
            showButton.className = "fa-solid fa-caret-down bottomMenuButton"
            footerBlock.style.marginTop = "0vh"
        }
    })
    
    this.wrapper.appendChild(footerBlock)
return this;
}

BlockFooterMenu.prototype.addBlockOption = function (src) {
let wrapper = document.getElementById("bottomMenuContentWrapper");
let frame = new Image();
frame.src = src;
frame.className = "blockFrame"
wrapper.appendChild(frame)
return this;
}