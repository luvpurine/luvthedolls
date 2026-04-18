document.getElementById('mainPage').addEventListener('click', function() {
    document.getElementById('abtPopup').style.display = 'none';
    document.getElementById('abtBody').style.overflow = 'visible';
    document.getElementById('abtBody').style.overflowX = 'hidden';
    document.getElementById('bakeryBody').style.filter = 'brightness(50%)';
});