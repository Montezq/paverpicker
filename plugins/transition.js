export default defineNuxtPlugin(() => {
  if (process.client) {
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

    const handleResize = () => {
      if (window.innerWidth > 560) {
        document.querySelectorAll('*').forEach(el => {
          el.style.transition = 'all 0s ease';
        });

        setTimeout(() => {
          document.querySelectorAll('*').forEach(el => {
            el.style.transition = '';
          });
        }, 1000);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
  }
});