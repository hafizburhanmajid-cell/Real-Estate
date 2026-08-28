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
        const menuIcon = btn.querySelector("i");
        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-xmark");
        }
        const isOpen = !menu.classList.contains("hidden");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (!menu.classList.contains("hidden")) {
                menu.classList.add("hidden");
                const menuIcon = btn.querySelector("i");
                if (menuIcon) {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }
                btn.setAttribute("aria-expanded", "false");
            }
        });
    });
}
function updateNoResultsMessage(visibleCount) {
    const propertiesSection = document.getElementById("properties");
    if (!propertiesSection) return;
    let noResultsMsg = propertiesSection.querySelector(".no-results-msg");
    if (visibleCount === 0) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement("p");
            noResultsMsg.classList.add(
                "no-results-msg",
                "text-center",
                "text-gray-200",
                "text-lg",
                "font-medium",
                "py-10",
                "w-full"
            );
            noResultsMsg.textContent = "No properties found matching your search. Try different filters.";
            propertiesSection.appendChild(noResultsMsg);
        }
    } else if (noResultsMsg) {
        noResultsMsg.remove();
    }
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
        if (
            minPrice.value !== "" &&
            maxPrice.value !== "" &&
            Number(minPrice.value) > Number(maxPrice.value)
        ) {
            maxPrice.style.border = "1px solid red";
            const error = document.createElement("p");
            error.textContent = "Max price must be greater than min price";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-pt"
            );
            maxPrice.parentElement.append(error);
            valid = false;
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
        localStorage.setItem("propertySearch", JSON.stringify(searchData));
        let visibleCount = 0;
        propertyCards.forEach(function (card) {
            const cardType = card.dataset.type.toLowerCase();
            const cardLocation = card.dataset.location.toLowerCase();
            const cardPrice = Number(card.dataset.price);
            if (
                cardType === typeValue &&
                cardLocation === locationValue &&
                cardPrice >= minValue &&
                cardPrice <= maxValue
            ) {
                card.classList.remove("hidden");
                visibleCount++; 
            } else {
                card.classList.add("hidden");
            }
        });
        updateNoResultsMessage(visibleCount);
        const propertiesSection = document.getElementById("properties");
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
            propertytype.style.border = "1px solid #d1d5db";
            const error = propertytype.parentElement.querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }
        propertyCards.forEach(function (card) {
            card.classList.remove("hidden");
        });
        updateNoResultsMessage(propertyCards.length); 
    });
}
if (location1) {
    location1.addEventListener("change", function () {
        if (location1.value !== "") {
            location1.style.border = "1px solid #d1d5db";
            const error = location1.parentElement.querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }
    });
}
if (minPrice) {
    minPrice.addEventListener("input", function () {
        if (minPrice.value !== "") {
            minPrice.style.border = "1px solid #d1d5db";
            const error = minPrice.parentElement.querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }
    });
}
if (maxPrice) {
    maxPrice.addEventListener("input", function () {
        if (maxPrice.value !== "") {
            maxPrice.style.border = "1px solid #d1d5db";
            const error = maxPrice.parentElement.querySelector(".err-pt");
            if (error) {
                error.remove();
            }
        }
    });
}
const FAVORITES_KEY = "favorites";
function getFavoriteIds() {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
}
function saveFavoriteIds(list) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
}
function getFavoriteId(btn, index) {
    const card = btn.closest(".property-card") || btn.parentElement;
    if (card && card.dataset.id) return card.dataset.id;
    const titleEl = card ? card.querySelector("p.font-medium") : null;
    if (titleEl) return titleEl.textContent.trim();
    return "property-" + index;
}
favbtn.forEach(function (btn, index) {
    const favId = getFavoriteId(btn, index); 
    const icon = btn.querySelector("i");
    if (icon && getFavoriteIds().includes(favId)) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "text-red-500");
    }
    btn.addEventListener("click", function () {
        const icon = btn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");
            icon.classList.toggle("text-red-500");
            let favorites = getFavoriteIds();
            const isNowFavorite = icon.classList.contains("fa-solid");
            if (isNowFavorite && !favorites.includes(favId)) {
                favorites.push(favId);
            } else if (!isNowFavorite) {
                favorites = favorites.filter(function (id) {
                    return id !== favId;
                });
            }
            saveFavoriteIds(favorites);
        }
    });
});
if (subscribeForm && subscribeEmail) {
    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const existingError = subscribeForm.parentElement.querySelector(".err-sub");
        if (existingError) {
            existingError.remove();
        }
        const emailValue =
            subscribeEmail.value.trim();
        if (emailValue === "") {
            subscribeEmail.style.border = "1px solid red";
            const error = document.createElement("p");
            error.textContent = "Please enter email";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-sub",
                "w-full",
                "ml-4"
            );
            subscribeEmail.parentElement.append(error);
        } else if (
            !emailValue.includes("@") || !emailValue.includes(".")
        ) {
            subscribeEmail.style.border = "1px solid red";
            const error = document.createElement("p");
            error.textContent = "Please enter a valid email address";
            error.classList.add(
                "text-red-500",
                "text-sm",
                "err-sub",
                "w-full",
                "ml-4"
            );
            subscribeEmail.parentElement.append(error);
        } else {
            subscribeEmail.style.border = "none";
            const successMsg = document.createElement("p");
            successMsg.textContent = "Thanks for subscribing!";
            successMsg.classList.add(
                "text-green-400",
                "text-sm",
                "err-sub",
                "w-full",
                "ml-4"
            );
            subscribeEmail.parentElement.append(successMsg);
            setTimeout(function () {
                successMsg.remove();
            }, 3000);
            subscribeForm.reset();
        }
    });
}
if (subscribeEmail) {
    subscribeEmail.addEventListener("input", function () {
        const emailValue = subscribeEmail.value.trim();
        if (emailValue !== "") {
            subscribeEmail.style.border = "none";
            const error = subscribeForm.parentElement.querySelector(".err-sub");
            if (error) {
                error.remove();
            }
        }
    });
}
window.addEventListener("DOMContentLoaded", function () {
    const savedSearch = localStorage.getItem("propertySearch");
    if (!savedSearch) {
        return;
    }
    const searchData = JSON.parse(savedSearch);
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
    let visibleCount = 0; 
    propertyCards.forEach(function (card) {
        const cardType = card.dataset.type.toLowerCase();
        const cardLocation = card.dataset.location.toLowerCase();
        const cardPrice = Number(card.dataset.price);
        if (
            cardType === searchData.type &&
            cardLocation === searchData.location &&
            cardPrice >= searchData.minPrice &&
            cardPrice <= searchData.maxPrice
        ) {
            card.classList.remove("hidden");
            visibleCount++; 
        } else {
            card.classList.add("hidden");
        }
    });
    updateNoResultsMessage(visibleCount); 
});