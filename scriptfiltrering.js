// Her skal vi skrive vores søge-, sortering- og filtreringskoder
function filtrerProdukter() {
    // Lokal vaiabel som er en kopi af en produktlisten.
    let filteredProducts = [...products];
    //-------Håndtering af søgefelt (foreningsmængde)------//
    const searchText = document.getElementById("search-input").value.toLowerCase().trim();
    if (searchText) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)
        );
    }
    //-------Håndtering af filtreringspanel------//
    const categories = Array.from(document.querySelectorAll('input[name="catagory"]:checked')).map(cb => cb.value);
    const colors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);
    const minMinutter = parseFloat(document.getElementById('min-minutter').value);
    const maxMinutter = parseFloat(document.getElementById('max-minutter').value);
    const rating = document.querySelector('input[name="rating"]:checked')?.value || null;
    //-------Filtrér på kategori, farve, pris, rating------//
    if (categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => categories.includes(product.category)
        );
    }
    if (colors.length > 0) {
        filteredProducts = filteredProducts.filter(product => colors.includes(product.color)
        );
    }
    if (!isNaN(minMinutter)) {
        filteredProducts = filteredProducts.filter(product => product.minutter >= minMinutter
        );
    }
    if (!isNaN(maxMinutter)) {
        filteredProducts = filteredProducts.filter(product => product.minutter <= maxMinutter
        );
    }
    if (rating !== null) {
        filteredProducts = filteredProducts.filter(product => product.rating >= rating
        );
    }
    //-------Håndtering af predefineret sortering------//
    const sorterEfter = document.getElementById("predefined-search").value;
    if (sorterEfter && sorterEfter === "popularer") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    if (sorterEfter && sorterEfter === "minutter-stigende") {
        filteredProducts.sort((a, b) => a.minutter - b.minutter);
    }
    if (sorterEfter && sorterEfter === "minutter-faldende") {
        filteredProducts.sort((a, b) => b.minutter - a.minutter);
    }
    //sender filtrering til kort her//
    displayProducts(filteredProducts);
};
//-------Eventlisteners, hvornår skal funktionen køre?------//
document.getElementById("search-input").addEventListener("input", filtrerProdukter);
document.getElementById("predefined-search").addEventListener("change", filtrerProdukter);
document.getElementById('apply-filters').addEventListener('click', function () {
    filtrerProdukter();
    closeFilterPanel();
});
