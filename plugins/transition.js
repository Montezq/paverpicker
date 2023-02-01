const handleOrientationChange = () => {
  document.querySelectorAll('*').forEach(el => {
    el.style.transition = 'all 0s ease ';
  });

  setTimeout(() => {
    document.querySelectorAll('*').forEach(el => {
      el.style.transition = '';
    });
  }, 500);
};

export default defineNuxtPlugin(() => {
  window.addEventListener('orientationchange', handleOrientationChange);
});