// errors.js
const showError = (message) => {
  let errorElement = document.querySelector('.error-message');
  if (!errorElement) {
    errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    document.body.prepend(errorElement); // أو حطها وين تحب بالصفحة
  }
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
};

const hideError = () => {
  const errorElement = document.querySelector('.error-message');
  if (errorElement) {
    errorElement.classList.add('hidden');
  }
};

export { showError, hideError };
