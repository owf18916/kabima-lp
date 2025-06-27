export function inView(
  node: HTMLElement,
  options = { threshold: 0.2 }
) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      node.classList.add('animate-fade-in-up');
      node.classList.remove('opacity-0');
      observer.unobserve(node);
    }
  }, options);

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
