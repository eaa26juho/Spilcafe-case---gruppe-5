// Nedenstående objektliste udgør løsningens "Grundmængde"
// Variablen "products" er global - dvs. tilgængelig for hele løsningen.
const products = [
    {
        id: 1,
        title: "Partners",
        description: "Et strategisk brætspil, hvor samarbejde og taktik går hånd i hånd. Spil sammen med din makker, få alle dine brikker sikkert i mål, og prøv at læse både modstandernes og makkerens næste træk. Perfekt til spillere, der nyder klassisk strategi med et socialt twist.",
        price: 60, /*Dette er de rigtige antal minutter*/
        category: "Selskabspil",
        rating: 5,
        color: "sort",
        image: "billeder_spiloversigt/spil_partners.svg"
    },
    {
        id: 2,
        title: "Bezzerwizzer",
        description: "Noise-cancelling trådløse hovedtelefoner med 30 timers batteri.",
        price: 45,
        category: "elektronik",
        rating: 4,
        color: "hvid",
        image: "billeder_spiloversigt/spil_bezzerwizzer.svg"
    },
    {
        id: 3,
        title: "Matador",
        description: "100% bomuld T-shirt i forskellige farver og størrelser.",
        price: 90 ,
        category: "tøj",
        rating: 4,
        color: "blå",
        image: "https://via.placeholder.com/300x200?text=Bomuld+T-Shirt"
    },
    {
        id: 4,
        title: "Sequence",
        description: "Moderne designerstol i ægte læder, perfekt til stuen.",
        price: 30,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Designerstol"
    },
    {
        id: 5,
        title: "Alias",
        description: "Lær JavaScript på 30 dage - komplet guide for begyndere.",
        price: 45,
        category: "bøger",
        rating: 4,
        color: "sort",
        image: "https://via.placeholder.com/300x200?text=JavaScript+Bog"
    },
    {
        id: 6,
        title: "Spillekort",
        description: "Smartwatch med hjertefrekvensmåler, GPS og 7 dages batteri.",
        price: 90,
        category: "elektronik",
        rating: 5,
        color: "sort",
        image: "https://via.placeholder.com/300x200?text=Smartwatch+Series+7"
    },
    {
        id: 7,
        title: "Terninger",
        description: "Klassiske blue jeans i stretchstof, behagelig pasform.",
        price: 90 ,
        category: "tøj",
        rating: 3,
        color: "blå",
        image: "https://via.placeholder.com/300x200?text=Jeans+Bukser"
    },
    {
        id: 8,
        title: "UNO",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 30,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },
        {
        id: 9,
        title: "Ligretto",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 15,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    {
        id: 10,
        title: "Flip 7",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 20,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    {
        id: 11,
        title: "The mind",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 20,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    {
        id: 12,
        title: "Trivial Pursuit",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 60,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    {
        id: 13,
        title: "Azul",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 30,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    {
        id: 14,
        title: "Det dårlige selskab",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 45,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },   
    {
        id: 15,
        title: "Hitster",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 30,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },
        
    {
        id: 16,
        title: "Hint",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 45,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    {
        id: 17,
        title: "Codenames",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 15,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    
    {
        id: 18,
        title: "Tegn og gæt",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 45,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    
    {
        id: 19,
        title: "Risk",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 90 ,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },
    {


        id: 20,
        title: "Catan",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 60,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },    
    {
        id: 21,
        title: "Skak",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 30,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    }



];
