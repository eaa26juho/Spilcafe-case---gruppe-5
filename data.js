// Nedenstående objektliste udgør løsningens "Grundmængde"
// Variablen "products" er global - dvs. tilgængelig for hele løsningen.
const products = [
    {
        id: 1,
        title: "Partners",
        description: "Et strategisk brætspil, hvor samarbejde og taktik går hånd i hånd. Spil sammen med din makker, få alle dine brikker sikkert i mål, og prøv at læse både modstandernes og makkerens næste træk. Perfekt til spillere, der nyder klassisk strategi med et socialt twist.",
        minutter: 60, /*Dette er de rigtige antal minutter*/
        category: "Brætspil",
        players: "4 personer",
        rating: 4,
        color: "sort",
        rating: 4,
        players: "sort",
        image: "billeder_spiloversigt/spil_partners.svg"
    },
    {
        id: 2,
        title: "Bezzerwizzer",
        description: "Noise-cancelling trådløse hovedtelefoner med 30 timers batteri.",
        minutter: 45,
        category: "Quizspil",
        players: "2-8 personer",
        rating: 4,
        players: "hvid",
        image: "billeder_spiloversigt/spil_bezzerwizzer.svg"
    },
    {
        id: 3,
        title: "Matador",
        description: "100% bomuld T-shirt i forskellige farver og størrelser.",
        minutter: 90,
        category: "Brætspil",
        players: "2-6 personer",
        rating: 4,
        color: "blå",
        image: "billeder_spiloversigt/spil_matador.svg"
    },
    {
        id: 4,
        title: "Sequence",
        description: "Moderne designerstol i ægte læder, perfekt til stuen.",
        minutter: 30,
        category: "Brætspil",
        players: "2-8 personer",
        rating: 5,
        rating: 4,
        color: "brun",
        image: "billeder_spiloversigt/spil_sequence.svg"
    },
    {
        id: 5,
        title: "Alias",
        description: "Lær JavaScript på 30 dage - komplet guide for begyndere.",
        minutter: 45,
        category: "Selskabsspil",
        players: "2-8 personer",
        rating: 4,
        color: "sort",
        image: "billeder_spiloversigt/spil_alias.svg"
    },
    {
        id: 6,
        title: "Spillekort",
        description: "Smartwatch med hjertefrekvensmåler, GPS og 7 dages batteri.",
        minutter: 90,
        category: "Kortspil",
        players: "2-8 personer",
        rating: 5,
        color: "sort",
        image: "billeder_spiloversigt/spil_spillekort.svg"
    },
    {
        id: 7,
        title: "Terninger",
        description: "Klassiske blue jeans i stretchstof, behagelig pasform.",
        minutter: 90,
        category: "Selskabsspil",
        players: "2-8 personer",
        rating: 3,
        rating: 5,
        color: "blå",
        image: "billeder_spiloversigt/spil_terninger.svg"
    },
    {
        id: 8,
        title: "UNO",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 30,
        category: "Kortspil",
        players: "2-8 personer",
        rating: 5,
        rating: 4,
        color: "brun",
        image: "billeder_spiloversigt/spil_uno.svg"
    },
    {
        id: 9,
        title: "Ligretto",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 15,
        category: "Kortspil",
        players: "2-4 personer",
        rating: 5,
        rating: 3,
        color: "brun",
        image: "billeder_spiloversigt/spil_ligretto.svg"
    }, {
        id: 10,
        title: "Flip 7",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 20,
        category: "Kortspil",
        players: "2-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_flip_7.svg"
    }, {
        id: 11,
        title: "The mind",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 20,
        category: "Kortspil",
        players: "2-6 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_the_mind.svg"
    }, {
        id: 12,
        title: "Trivial Pursuit",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 60,
        category: "Quizspil",
        players: "2-6 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_trivial_pursuit.svg"
    }, {
        id: 13,
        title: "Azul",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 30,
        category: "Strategispil",
        players: "2-4 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_azul.svg"
    }, {
        id: 14,
        title: "Det dårlige selskab",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 45,
        category: "Selskabsspil",
        players: "3-6 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_det_daarlige_selskab.svg"
    },
    {
        id: 15,
        title: "Hitster",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 30,
        category: "Quizspil",
        players: "2-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_hitster.svg"
    },
    {
        id: 16,
        title: "Hint",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 45,
        category: "Selskabsspil",
        players: "4-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_hint.svg"
    }, {
        id: 17,
        title: "Codenames",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 15,
        category: "Selskabsspil",
        players: "4-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_codenames.svg"
    },
    {
        id: 18,
        title: "Tegn og gæt",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 45,
        category: "Selskabsspil",
        players: "4-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_tegn_og_gaet.svg"
    },
    {
        id: 19,
        title: "Risk",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 90,
        category: "Strategispil",
        players: "2-6 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_risk.svg"
    },
    {
        id: 20,
        title: "Catan",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 60,
        category: "Strategispil",
        players: "3-4 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_catan.svg"
    },
    {
        id: 21,
        title: "Skak",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        minutter: 30,
        category: "Strategispil",
        players: "2 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_skak.svg"
    }
];
