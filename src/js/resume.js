// Closes responsive menu when a scroll trigger link is clicked
document.querySelectorAll('.js-scroll-trigger').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && typeof bootstrap !== 'undefined') {
      const bsCollapse =
        bootstrap.Collapse.getInstance(navbarCollapse) ||
        new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  });
});

// Enable Bootstrap 5 tooltips
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    new bootstrap.Tooltip(el);
  });
});

// Arrow opacity on scroll
window.addEventListener('scroll', function() {
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.style.opacity = 1 - window.scrollY / 875;
  });
});

// Back to top functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 800) {
      scrollTopButton.style.visibility = 'visible';
      scrollTopButton.style.opacity = '1';
    } else {
      scrollTopButton.style.visibility = 'hidden';
      scrollTopButton.style.opacity = '0';
    }
  });
});

// Skills category dropdown
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('skills-category-dropdown');
  const dropdownItems = document.querySelectorAll(
    '.dropdown-item[data-category]'
  );
  const lists = document.querySelectorAll('.skills-category-list');
  const label = document.getElementById('skills-category-dropdown-label');

  if (dropdown && dropdownItems.length && lists.length && label) {
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        lists.forEach(list => (list.style.display = 'none'));
        const selectedId = this.getAttribute('data-category');
        const selectedList = document.getElementById(selectedId);
        if (selectedList) selectedList.style.display = '';
        label.textContent = this.textContent;
      });
    });
  }
});
