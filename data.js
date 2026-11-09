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
        description: "Bezzerwizzer er et sjovt quizspil, hvor man dyster mod hinanden i forskellige kategorier og tester sin viden.",
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
        description: "Matador er et klassisk strategisk brætspil, hvor man køber grunde, bygger huse og hoteller og prøver at få de andre spillere til at gå fallit.",
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
        description: "Sequence er et sjovt strategisk brætspil, hvor man spiller kort og placerer brikker på spillepladen for at få fem på stribe.",
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
        description: "Alias er et sjovt og tempofyldt holdspil, hvor man skal forklare så mange ord som muligt uden at sige selve ordene, mens holdkammeraterne gætter med.",
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
        description: "Spillekort er et klassisk kortspil, hvor man kan spille mange forskellige spil med venner og familie, fra simple kortlege til strategiske spil.",
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
        description: "Terninger er et klassisk spiltilbehør, der kan bruges til mange forskellige spil, hvor man slår med terningerne og lader heldet afgøre næste træk.",
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
        description: "UNO er et sjovt kortspil, hvor man skal komme af med sine kort ved at matche farver og tal, og være den første til at slippe af med alle sine kort.",
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
        description: "Ligretto er et hurtigt og underholdende kortspil, hvor alle spiller på samme tid og forsøger at komme af med deres kort hurtigst muligt ved at lægge dem i nummerorden.",
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
        description: "Flip 7 er et sjovt og nervepirrende kortspil, hvor man trækker kort og forsøger at samle forskellige tal uden at trække det samme tal to gange.",
        minutter: 20,
        category: "Kortspil",
        players: "2-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_flip_7.svg"
    }, {
        id: 11,
        title: "The mind",
        description: "The Mind er et anderledes og samarbejdsbaseret kortspil, hvor man uden at tale sammen skal lægge sine kort i den rigtige rækkefølge fra lavest til højest.",
        minutter: 20,
        category: "Kortspil",
        players: "2-6 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_the_mind.svg"
    }, {
        id: 12,
        title: "Trivial Pursuit",
        description: "Trivial Pursuit er et underholdende quizspil, hvor man tester sin almenviden i forskellige kategorier og samler brikker ved at svare rigtigt på spørgsmål.",
        minutter: 60,
        category: "Quizspil",
        players: "2-6 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_trivial_pursuit.svg"
    }, {
        id: 13,
        title: "Azul",
        description: "Azul er et strategisk brætspil, hvor man samler farverige fliser og placerer dem på sit spillebræt for at skabe flotte mønstre og samle flest point.",
        minutter: 30,
        category: "Strategispil",
        players: "2-4 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_azul.svg"
    }, {
        id: 14,
        title: "Det dårlige selskab",
        description: "Det Dårlige Selskab er et humoristisk selskabsspil, hvor man skal færdiggøre sætninger med sjove, skæve og ofte upassende svar.",
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
        description: "Hitster er et sjovt musikspil, hvor man skal gætte, hvornår forskellige sange er udgivet, og placere dem i den rigtige rækkefølge på en tidslinje.",
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
        description: "Hint er et sjovt tegne- og gættespil, hvor man skal tegne, mime eller give ledetråde, så ens hold kan gætte de rigtige ord.",
        minutter: 45,
        category: "Selskabsspil",
        players: "4-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_hint.svg"
    }, {
        id: 17,
        title: "Codenames",
        description: "Codenames er et sjovt holdspil, hvor man giver hints med ét ord for at få sit hold til at gætte de rigtige ord på spillepladen uden at ramme modstanderens agenter.",
        minutter: 15,
        category: "Selskabsspil",
        players: "4-8 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_codenames.svg"
    },
    {
        id: 18,
        title: "Tegn & Gæt",
        description: "Tegn & Gæt er et sjovt selskabsspil, hvor man skal tegne forskellige ord og få sine holdkammerater til at gætte, hvad man forestiller.",
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
        description: "Risk er et strategisk brætspil, hvor man kæmper om verdensherredømmet ved at opbygge hære, erobre territorier og besejre sine modstandere.",
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
        description: "Catan er et strategisk brætspil, hvor man samler ressourcer, bygger veje og byer og konkurrerer om at udvikle den bedste bosættelse.",
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
        description: "Skak er et klassisk strategisk brætspil for to personer, hvor man med forskellige brikker forsøger at sætte modstanderens konge skakmat.",
        minutter: 30,
        category: "Strategispil",
        players: "2 personer",
        rating: 5,
        color: "brun",
        image: "billeder_spiloversigt/spil_skak.svg"
    }
];
