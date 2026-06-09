const navTogglers = document.querySelectorAll('.nav-dropdown-toggler');

navTogglers.forEach((t) => {
    t.addEventListener("click", (event) => {
        const target = event.currentTarget;
        const togglerParent = target.parentElement;
        const dropdownMenuId = target.getAttribute("aria-controls");
        const menu = document.getElementById(dropdownMenuId);
        target.classList.toggle("active");
        menu.classList.toggle("active");
    })
})