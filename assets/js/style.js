function activateSection(section) {
    var caddy = document.querySelector('.caddy');
    var golfer = document.querySelector('.golfer');
    
    if (section === 'caddy') {
      caddy.classList.add('active');
      golfer.classList.remove('active');
    } else if (section === 'golfer') {
      caddy.classList.remove('active');
      golfer.classList.add('active');
    }
}
  
// Phone Number

const dropdownContainer = document.querySelector('.dropdown-container');
    const selectedText = document.querySelector('.selected-text');
    const selectedIcon = document.querySelector('.selected-icon');
    const dropdownList = document.querySelector('.dropdown-list');
    const dropdownItems = Array.from(document.querySelectorAll('.dropdown-item'));

    dropdownContainer.addEventListener('click', function () {
      dropdownList.classList.toggle('open');
    });

    dropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const value = item.getAttribute('data-value');
        const text = item.textContent.trim();
        const iconClass = item.querySelector('.flag-icon').classList[1];
        selectedText.textContent = text;
        selectedIcon.className = `flag-icon ${iconClass} selected-icon`;
        dropdownList.classList.remove('open');
      });
    });

    function handleInput(input, nextInput, prevInput) {
      if (input.value.length === 1) {
        nextInput.focus();
      } else if (input.value.length === 0) {
        prevInput.focus();
      }
    }

    function handleInputTwo(input, nextInput, prevInput) {
      if (input.value.length === 1) {
        nextInput.focus();
      } else if (input.value.length === 0) {
        prevInput.focus();
      }
    }

    function handleInputThree(input, nextInput, prevInput) {
      if (input.value.length === 1) {
        nextInput.focus();
      } else if (input.value.length === 0) {
        prevInput.focus();
      }
    }