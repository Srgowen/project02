// Function to toggle visibility
function toggleVisibility(elementId, header) {
    var element = document.getElementById(elementId);

    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        header.classList.add('active');
    } else {
        element.classList.add('hidden');
        header.classList.remove('active');
    }
}
