function SidebarToggler(el)
{
    this.sidebar = el;
    this.togglers;
    this.showWhenActive;
    this.isActive;

    this.init();
}

SidebarToggler.init = async function init() {
    console.log('init');
    if (!this.sidebar) return ;
    const windowWidth = window.innerWidth;
    if (windowWidth >= MIN_WIDTH)
        this.sidebar.classList.add('active');
    const togglers = document.querySelectorAll('.sidebar-toggler');
    togglers.forEach((t) => {
        if (t.getAttribute('role') === 'open');
        t.addEventListener('click', toggleSidebar);
    });
    this.togglers = togglers;
};

async function toggleSidebar(e) {
    e.preventDefault();
    const t = e.currentTarget;
    if (!t) return;
    this.sidebar.classList.toggle('active');
    this.isActive = this.sidebar.classList.includes('active');
    if (t.dataset.hide === true && this.isActive)
    {
        t.classList.add('d-none');
        t.classList.remove('d-block');
    } else {
        t.classList.add('d-block');
        t.classList.remove('d-none');
    }
};

SidebarToggler.toggleSidebar = async function toggleSidebar(event) {
    if (!this.showWhenActive)
            this.el.classList.add('d-none');
    this.sidebar.classList.add('active');
}

const MIN_WIDTH = 400;
const sidebar = document.getElementById('sidebar');
new SidebarToggler(sidebar);
