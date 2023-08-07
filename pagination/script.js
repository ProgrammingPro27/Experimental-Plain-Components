function Pagination(parent) {
    this.maxAmountOfVisibleButtons = 5;
    this.itemsCount = 60;
    this.itemsPerPage = 5;
    let numberOfTotalPages = Math.ceil(this.itemsCount / this.itemsPerPage);

    if (numberOfTotalPages < 1) {
        numberOfTotalPages = 1
    }

    console.log(numberOfTotalPages)

    this.wrapper = document.createElement("DIV");
    this.wrapper.classList = "paginationWrapper";

    let leftButton = document.createElement("I");
    leftButton.classList = "fa-solid fa-chevron-left dirButton";

    let rightButton = document.createElement("I");
    rightButton.classList = "fa-solid fa-chevron-right dirButton";

    this.wrapper.append(leftButton);

    if (numberOfTotalPages < this.maxAmountOfVisibleButtons) {
        this.maxAmountOfVisibleButtons = numberOfTotalPages
    }

    for (let i = 1; i <= this.maxAmountOfVisibleButtons; i++) {
        let pageButton = document.createElement("BUTTON");
        pageButton.classList = "pageButton";
        pageButton.innerHTML = i;
        this.wrapper.append(pageButton);
    }

    function updateButtons(operation) {
        let allButtons = document.getElementsByClassName("pageButton");
        for (item of allButtons) {
            let num = Number(item.innerHTML);
            if (operation == "-") {
                if (num <= 1) {
                    return;
                }
                item.innerHTML = Number(item.innerHTML) - 1
            } else {
                if (Number(allButtons[allButtons.length - 1].innerHTML) >= numberOfTotalPages) {
                    return;
                }
                item.innerHTML = Number(item.innerHTML) + 1
            }
        }
    }

    leftButton.addEventListener("click", function () {
        updateButtons("-")
    })
    rightButton.addEventListener("click", function () {
        updateButtons("+")
    })

    this.wrapper.append(rightButton);
    parent.append(this.wrapper);
}