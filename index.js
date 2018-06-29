/* eslint-env browser  */

(() => {
  const buttonRow = document.querySelector('.button-row');
  const typed = document.querySelector('.typed');

  const additionalStrings = [
    'Software Engineer',
    'Web Developer',
    'Play Games/Sports',
    'Coffee Lover',
  ];
  const lastLoadedTime = parseInt(localStorage.getItem('lastLoaded'), 10) || 0;
  const lastLoaded = new Date(lastLoadedTime);
  const now = new Date();
  
  const shouldShowStrings = lastLoaded.getYear() < now.getYear()
      || lastLoaded.getMonth() < now.getMonth();

  new Typed('.typed .text', {
    backSpeed: 30,
    onComplete() {
      buttonRow.classList.remove('hidden');
      typed.classList.remove('before-buttons');
      if (shouldShowStrings) {
        localStorage.setItem('lastLoaded', Date.now());
      }
    },
    showCursor: false,
    strings: [].concat(
      shouldShowStrings ? additionalStrings : [],
      'Ankit Gandhi',
    ),
    typeSpeed: 30,
  });

  mdc.autoInit();
})();
