// Get references to the HTML elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Add event listener to the search button
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchQuery = searchInput.value.trim();
    if (searchQuery !== '') {
        // Perform search action here (e.g., send request to server, filter data, etc.)
        console.log(`Searching for: ${searchQuery}`);
        // Update search results div with the results
        searchResults.innerHTML = `Results for ${searchQuery}`;
    }
});