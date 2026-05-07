const dropdownTogglers = document.querySelectorAll('.dropdown-toggler');

dropdownTogglers.forEach((t) => {
    t.addEventListener("click", (event) => {
        const target = event.currentTarget;
        const parent = target.parentElement;
        parent.classList.toggle("active");
        //remove active class when clicked on an option
        const options = parent.querySelectorAll('.dropdown-option');
        options.forEach((o) => {
            o.addEventListener("click", () => {
                parent.classList.remove("active");
            }) 
        })
    })
})