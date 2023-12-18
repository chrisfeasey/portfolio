const headerTitle = document.getElementById('header-title');

headerTitle.addEventListener('mousedown', function() {
    this.textContent = 'John Does Not';
});

headerTitle.addEventListener('mouseup', function() {
    this.textContent = 'John Doe';
});

headerTitle.addEventListener('mouseleave', function() {
    this.textContent = 'John Doe';
});

const myImage = document.getElementById('johnImage');

myImage.addEventListener('click', function() {
    this.classList.toggle('enlarged-image');
});
