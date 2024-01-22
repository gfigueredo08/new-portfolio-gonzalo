document.getElementById('toggleFooter').addEventListener('click', function() {
    var footer = document.querySelector('footer');
    footer.style.display = (footer.style.display === 'none' || footer.style.display === '') ? 'block' : 'none';
});
