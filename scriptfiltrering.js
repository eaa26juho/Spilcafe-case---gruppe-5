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
    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const players = Array.from(document.querySelectorAll('input[name="player"]:checked')).map(cb => cb.value);
    const minutes = Array.from(document.querySelectorAll('input[name="minute"]:checked')).map(cb => cb.value);
    const minMinute = parseFloat(document.getElementById('min-minute').value);
    const maxMinute = parseFloat(document.getElementById('max-minute').value);
    const rating = document.querySelector('input[name="rating"]:checked')?.value || null;
    //-------Filtrér på kategori, farve, minutter, rating------//
    if (categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => categories.includes(product.category)
        );
    }
    if (minutes.length > 0) {
    filteredProducts = filteredProducts.filter(product => {
        return minutes.some(minute => {
            if (minute === "15") return product.minute <= 15;
            if (minute === "30") return product.minute === 30;
            if (minute === "45") return product.minute === 45;
            if (minute === "60") return product.minute === 60;
            if (minute === "over60") return product.minute > 60;
        });
    });
}
    if (players.length > 0) {
        filteredProducts = filteredProducts.filter(product => players.includes(product.player)
        );
    }
    if (!isNaN(minMinute)) {
        filteredProducts = filteredProducts.filter(product => product.minute >= minMinute
        );
    }
    if (!isNaN(maxMinute)) {
        filteredProducts = filteredProducts.filter(product => product.minute <= maxMinute
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
    if (sorterEfter && sorterEfter === "minute-stigende") {
        filteredProducts.sort((a, b) => a.minute - b.minute);
    }
    if (sorterEfter && sorterEfter === "minute-faldende") {
        filteredProducts.sort((a, b) => b.minute - a.minute);
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
