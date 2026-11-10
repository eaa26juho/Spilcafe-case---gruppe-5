function filtrerProdukter() {
    let filteredProducts = [...products];

    //-------Søgefelt------//
    const searchText = document.getElementById("search-input").value.toLowerCase().trim();
    if (searchText) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)
        );
    }

    //-------Filtreringspanel------//
    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const players = Array.from(document.querySelectorAll('input[name="player"]:checked')).map(cb => cb.value);
    const minutter = Array.from(document.querySelectorAll('input[name="minutter"]:checked')).map(cb => cb.value);
    const minMinutter = parseFloat(document.getElementById('min-minutter').value);
    const maxMinutter = parseFloat(document.getElementById('max-minutter').value);
    const rating = document.querySelector('input[name="rating"]:checked')?.value || null;

    // Inden for en gruppe = ELLER, mellem grupper = OG
    if (categories.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            categories.includes(product.category)
        );
    }

    if (minutter.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            minutter.some(valg => {
                if (valg === "15") return product.minutter <= 15;
                if (valg === "30") return product.minutter === 30;
                if (valg === "45") return product.minutter === 45;
                if (valg === "60") return product.minutter === 60;
                if (valg === "over60") return product.minutter > 60;
            })
        );
    }

    if (players.length > 0) {
        // Spillet vises, hvis BLOT ÉN af dets player-værdier matcher et valgt felt
        filteredProducts = filteredProducts.filter(product =>
            product.player.some(p => players.includes(p))
        );
    }

    if (!isNaN(minMinutter)) {
        filteredProducts = filteredProducts.filter(product => product.minutter >= minMinutter);
    }
    if (!isNaN(maxMinutter)) {
        filteredProducts = filteredProducts.filter(product => product.minutter <= maxMinutter);
    }
    if (rating !== null) {
        filteredProducts = filteredProducts.filter(product => product.rating >= rating);
    }

    //-------Sortering------//
    const sorterEfter = document.getElementById("predefined-search").value;
    if (sorterEfter === "populaere") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    if (sorterEfter === "minutter-stigende") {
        filteredProducts.sort((a, b) => a.minutter - b.minutter);
    }
    if (sorterEfter === "minutter-faldende") {
        filteredProducts.sort((a, b) => b.minutter - a.minutter);
    }

    displayProducts(filteredProducts);
}

//-------Eventlisteners------//
document.getElementById("search-input").addEventListener("input", filtrerProdukter);
document.getElementById("predefined-search").addEventListener("change", filtrerProdukter);
document.getElementById('apply-filters').addEventListener('click', function () {
    filtrerProdukter();
    closeFilterPanel();
});