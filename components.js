function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'header.html');
    loadComponent('sidebar', 'sidebar.html');
    loadComponent('footer', 'footer.html');
});
