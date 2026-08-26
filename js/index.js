const btn = document.getElementById("btn");
const menu = document.querySelector("#menu");
const search = document.getElementById("search");
const propertytype = document.getElementById("propertytype");
const location1 = document.getElementById("location1");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const favbtn = document.querySelectorAll(".fav-btn");
const subscribeEmail = document.getElementById("subscribeEmail");
const subscribeForm = document.getElementById("subscribeForm");
const propertyCards = document.querySelectorAll(".property-card");
if (btn && menu) {
    btn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });
}
if (
    search &&
    propertytype &&
    location1 &&
    minPrice &&
    maxPrice
) {
    search.addEventListener("click", function () {
        const oldErrors = document.querySelectorAll(".err-pt");
        oldErrors.forEach(function (error) {
            error.remove();
        });

        let valid = true;

        if (propertytype.value === "") {
            propertytype.style.border = "1px solid red";
            const error = document.createElement("p");
            error.textContent = "Please select property type";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-pt"
            );
            propertytype.parentElement.append(error);
            valid = false;
        } else {
            propertytype.style.border = "1px solid #d1d5db";
        }

        if (location1.value === "") {
            location1.style.border = "1px solid red";
            const error = document.createElement("p");
            error.textContent = "Please select location";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-pt"
            );
            location1.parentElement.append(error);
            valid = false;
        } else {
            location1.style.border = "1px solid #d1d5db";
        }

        if (minPrice.value === "") {
            minPrice.style.border = "1px solid red";
            const error = document.createElement("p");
            error.textContent = "Please select minimum price";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-pt"
            );
            minPrice.parentElement.append(error);
            valid = false;
        } else {
            minPrice.style.border = "1px solid #d1d5db";
        }

        if (maxPrice.value === "") {
            maxPrice.style.border = "1px solid red";
            const error = document.createElement("p");
            error.textContent = "Please select maximum price";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-pt"
            );
            maxPrice.parentElement.append(error);
            valid = false;
        } else {
            maxPrice.style.border = "1px solid #d1d5db";
        }

        if (!valid) {
            return;
        }

        const typeValue = propertytype.value.toLowerCase();
        const locationValue = location1.value.toLowerCase();
        const minValue = Number(minPrice.value);
        const maxValue = Number(maxPrice.value);

        const searchData = {
            type: typeValue,
            location: locationValue,
            minPrice: minValue,
            maxPrice: maxValue
        };

        localStorage.setItem(
            "propertySearch",
            JSON.stringify(searchData)
        );

        propertyCards.forEach(function (card) {
            const cardType =
                card.dataset.type.toLowerCase();
            const cardLocation =
                card.dataset.location.toLowerCase();
            const cardPrice =
                Number(card.dataset.price);

            if (
                cardType === typeValue &&
                cardLocation === locationValue &&
                cardPrice >= minValue &&
                cardPrice <= maxValue
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        const propertiesSection =
            document.getElementById("properties");
        if (propertiesSection) {
            propertiesSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

if (propertytype) {
    propertytype.addEventListener("change", function () {
        if (propertytype.value !== "") {
            propertytype.style.border =
                "1px solid #d1d5db";
            const error =
                propertytype.parentElement
                    .querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }

        propertyCards.forEach(function (card) {
            card.classList.remove("hidden");
        });
    });
}

if (location1) {
    location1.addEventListener("change", function () {
        if (location1.value !== "") {
            location1.style.border =
                "1px solid #d1d5db";
            const error =
                location1.parentElement
                    .querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }
    });
}

if (minPrice) {
    minPrice.addEventListener("input", function () {
        if (minPrice.value !== "") {
            minPrice.style.border =
                "1px solid #d1d5db";
            const error =
                minPrice.parentElement
                    .querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }
    });
}

if (maxPrice) {
    maxPrice.addEventListener("input", function () {
        if (maxPrice.value !== "") {
            maxPrice.style.border =
                "1px solid #d1d5db";
            const error =
                maxPrice.parentElement
                    .querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }
    });
}

favbtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const icon = btn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");
            icon.classList.toggle("text-red-500");
        }
    });
});

if (subscribeForm && subscribeEmail) {
    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const existingError =
            subscribeForm.parentElement
                .querySelector(".err-sub");
        if (existingError) {
            existingError.remove();
        }
        const emailValue =
            subscribeEmail.value.trim();

        if (emailValue === "") {
            subscribeEmail.style.border =
                "1px solid red";
            const error =
                document.createElement("p");
            error.textContent =
                "Please enter email";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-sub",
                "w-full",
                "ml-4"
            );
            subscribeEmail.parentElement
                .append(error);
        } else if (
            !emailValue.includes("@") ||
            !emailValue.includes(".")
        ) {
            subscribeEmail.style.border =
                "1px solid red";
            const error =
                document.createElement("p");
            error.textContent =
                "Please enter a valid email address";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-sub",
                "w-full",
                "ml-4"
            );
            subscribeEmail.parentElement
                .append(error);
        } else {
            subscribeEmail.style.border =
                "none";
            subscribeForm.reset();
        }
    });
}

if (subscribeEmail) {
    subscribeEmail.addEventListener("input", function () {
        const emailValue =
            subscribeEmail.value.trim();
        if (emailValue !== "") {
            subscribeEmail.style.border =
                "none";
            const error =
                subscribeForm.parentElement
                    .querySelector(".err-sub");
            if (error) {
                error.remove();
            }
        }
    });
}

window.addEventListener("DOMContentLoaded", function () {
    const savedSearch =
        localStorage.getItem("propertySearch");
    if (!savedSearch) {
        return;
    }
    const searchData =
        JSON.parse(savedSearch);

    if (propertytype) {
        propertytype.value = searchData.type;
    }
    if (location1) {
        location1.value = searchData.location;
    }
    if (minPrice) {
        minPrice.value = searchData.minPrice;
    }
    if (maxPrice) {
        maxPrice.value = searchData.maxPrice;
    }

    propertyCards.forEach(function (card) {
        const cardType =
            card.dataset.type.toLowerCase();
        const cardLocation =
            card.dataset.location.toLowerCase();
        const cardPrice =
            Number(card.dataset.price);

        if (
            cardType === searchData.type &&
            cardLocation === searchData.location &&
            cardPrice >= searchData.minPrice &&
            cardPrice <= searchData.maxPrice
        ) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});