export function viewport(element) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        const children = entry.target.querySelectorAll('.stagger-item');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('is-visible');
          }, index * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  observer.observe(element);
  return { destroy() { observer.disconnect(); } };
}