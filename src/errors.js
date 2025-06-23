const showError = (message) => {
  let errorDiv = document.querySelector('#error-message');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.id = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.marginTop = '10px';
    errorDiv.style.fontWeight = 'bold';
    document.querySelector('main').prepend(errorDiv);
  }
  errorDiv.textContent = message;
  errorDiv.classList.remove('hidden');
};

const hideError = () => {
  const errorDiv = document.querySelector('#error-message');
  if (errorDiv) {
    errorDiv.textContent = '';
    errorDiv.classList.add('hidden');
  }
};

export { showError, hideError };
