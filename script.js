const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.projects [data-category]');
const count = document.querySelector('.project-count');

filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let visible = 0;
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) visible++;
  });
  count.textContent = `${String(visible).padStart(2, '0')} PROJECTS`;
}));
