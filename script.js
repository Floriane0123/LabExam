document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', event => {
        alert('Navigation link clicked!!');
    });
});
