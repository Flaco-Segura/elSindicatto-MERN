const discs = [
    {
        _id: '1',
        name: 'The Amason Twins - Hallelujah! The lord is coming again',
        image: '/images/worst-album-covers-amason-twins.jpg',
        format: 'Vinyl, LP, Album',
        brand: 'Herald',
        category: 'Folk, World, & Country',
        price: 7.24,
        countInStock: 6,
        rating: 1,
        numReviews: 1,
    },
    {
        _id: '2',
        name: 'Anna Russel - In darkest Africa',
        image: '/images/worst-album-covers-anna-russel.jpg',
        format: 'LP, Album, Mono',
        brand: 'Columbia',
        category: 'Comedy',
        price: 1.68,
        countInStock: 22,
        rating: 3.33,
        numReviews: 3,
    },
    {
        _id: '3',
        name: 'The Bee Gees - Life in a tin can',
        image: '/images/worst-album-covers-bee-gees.jpg',
        format: 'LP, Album, Spe',
        brand: 'RSO',
        category: 'Rock',
        price: 1,
        countInStock: 250,
        rating: 3.62,
        numReviews: 210,
    },
    {
        _id: '4',
        name: 'Black Sabbath - Born again',
        image: '/images/worst-album-covers-born-again.jpg',
        format: 'LP, Album',
        brand: 'Vertigo',
        category: 'Rock',
        price: 5.00,
        countInStock: 22,
        rating: 4.02,
        numReviews: 1944,
    },
    {
        _id: '5',
        name: 'Country Church',
        image: '/images/worst-album-covers-country-church.jpg',
        format: 'Vinyl, LP, Album',
        brand: 'Not On Label',
        category: 'Folk, World, & Country',
        price: 33.60,
        countInStock: 0,
        rating: 5,
        numReviews: 2,
    },
    {
        _id: '6',
        name: 'Elna Fredhoy og Rigmor Odum',
        image: '/images/worst-album-covers-elma-fredhey.jpg',
        format: 'LP, Album, Mono',
        brand: 'HEP',
        category: 'Unknown',
        price: 999.99,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
    },
    {
        _id: '7',
        name: 'Fabio - After dark',
        image: '/images/worst-album-covers-fabio-after-dark.jpg',
        format: 'CD, Album, Promo',
        brand: 'Scotty Bros. Records',
        category: 'Funk / Soul, Non-Music',
        price: 6.45,
        countInStock: 4,
        rating: 5,
        numReviews: 4,
    },
    {
        _id: '8',
        name: 'Freddie Gage - All my friends are dead',
        image: '/images/worst-album-covers-freddie-gage.jpg',
        format: 'Vinyl, LP, Album',
        brand: 'Rainbow',
        category: 'Non-Music',
        price: 125.96,
        countInStock: 0,
        rating: 3,
        numReviews: 5,
    },
    {
        _id: '9',
        name: 'The Frivolous F.I.V.E - Sour cream & other delights',
        image: '/images/worst-album-covers-frivolous-five.jpg',
        format: 'LP, Album, Mono',
        brand: 'RCA Victor',
        category: 'Pop',
        price: 10.08,
        countInStock: 10,
        rating: 4.29,
        numReviews: 7,
    },
    {
        _id: '10',
        name: 'Heino - Liebe mutter...',
        image: '/images/worst-album-covers-heino.jpg',
        format: 'LP, Album, Gat',
        brand: 'Columbia',
        category: 'Pop',
        price: 4.32,
        countInStock: 12,
        rating: 3.66,
        numReviews: 15,
    },
    {
        _id: '11',
        name: 'The Faith Tones - Jesus use me',
        image: '/images/worst-album-covers-jesus-use-me.jpg',
        format: 'Vinyl, LP, Album',
        brand: 'Angelous Records',
        category: 'Folk, World, & Country',
        price: 249,
        countInStock: 0,
        rating: 3,
        numReviews: 6,
    },
    {
        _id: '12',
        name: 'Jim Post - I love my life',
        image: '/images/worst-album-covers-jim-post.jpg',
        format: 'LP, Album',
        brand: 'Mountain Railroad Records',
        category: 'Folk, World, & Country',
        price: 2.52,
        countInStock: 13,
        rating: 4.5,
        numReviews: 2,
    },
    {
        _id: '13',
        name: 'Ken - By request only',
        image: '/images/worst-album-covers-ken.jpg',
        format: 'Vinyl, LP, Album, Stereo',
        brand: 'Ken Snyder',
        category: 'Funk / Soul, Pop',
        price: 126.00,
        countInStock: 0,
        rating: 4.4,
        numReviews: 5,
    },
    {
        _id: '14',
        name: 'Kevin Rowland - My beauty',
        image: '/images/worst-album-covers-kevin-rowland.jpg',
        format: 'CD, Album',
        brand: 'Creation Records',
        category: 'Rock, Pop',
        price: 7,
        countInStock: 37,
        rating: 4.2,
        numReviews: 55,
    },
    {
        _id: '15',
        name: "Kjell Kraghe och Rick Löw's Orkester - Wind i seglen",
        image: '/images/worst-album-covers-kjell-kraghe.jpg',
        format: 'LP, Album',
        brand: 'Koster',
        category: 'Folk, World, & Country',
        price: 5.83,
        countInStock: 4,
        rating: 3,
        numReviews: 1,
    },
    {
        _id: '16',
        name: 'The Ministers Quartet - Let me touch him',
        image: '/images/worst-album-covers-let-me-touch-him.jpg',
        format: 'Vinyl, LP, Album, Stereo',
        brand: 'Not On Label',
        category: 'Folk, World, & Country',
        price: 999.99,
        countInStock: 0,
        rating: 3,
        numReviews: 4,
    },
    {
        _id: '17',
        name: 'Crosby Stills Nash - Live it up',
        image: '/images/worst-album-covers-live-it-up.jpg',
        format: 'Unknown',
        brand: 'Not On Label',
        category: 'Unknown',
        price: 999.99,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
    },
    {
        _id: '18',
        name: 'The Louvin Brothers - Satan is real',
        image: '/images/worst-album-covers-louvin-brothers.jpg',
        format: 'LP, Album, Mono',
        brand: 'Capitol Records',
        category: 'Folk, World, & Country',
        price: 3.90,
        countInStock: 21,
        rating: 4.42,
        numReviews: 208,
    },
    {
        _id: '19',
        name: 'Maddy Genets et son ensemble - Acropolis',
        image: '/images/worst-album-covers-maddy-genets.jpg',
        format: '7", EP',
        brand: "Le Kiosque d'Orphée",
        category: 'Pop',
        price: 999.99,
        countInStock: 0,
        rating: 3,
        numReviews: 2,
    },
    {
        _id: '20',
        name: 'ManOwar - Anthology',
        image: '/images/worst-album-covers-manowar.jpg',
        format: 'CD, Compilation',
        brand: 'Connoisseur Collection',
        category: 'Rock',
        price: 3.32,
        countInStock: 23,
        rating: 3.43,
        numReviews: 28,
    },
    {
        _id: '21',
        name: 'Millie Jackson - Back to the s@#t!',
        image: '/images/worst-album-covers-millie-jackson.jpg',
        format: 'CD, Album',
        brand: 'Jive',
        category: 'Funk / Soul, Pop',
        price: 4.00,
        countInStock: 80,
        rating: 3.77,
        numReviews: 31,
    },
    {
        _id: '22',
        name: 'Orleans - Waking and dreaming',
        image: '/images/worst-album-covers-orleans.jpg',
        format: 'Vinyl, 7", 45 RPM, Single, Promo',
        brand: 'Asylum Records',
        category: 'Rock',
        price: 21.00,
        countInStock: 1,
        rating: 5,
        numReviews: 1,
    },
    {
        _id: '23',
        name: 'Paddy Roberts - Songs for gay dogs',
        image: '/images/worst-album-covers-paddy-roberts.jpg',
        format: 'LP, Album, Mono',
        brand: 'Decca',
        category: 'Jazz',
        price: 9.90,
        countInStock: 13,
        rating: 3.14,
        numReviews: 7,
    },
    {
        _id: '24',
        name: 'Prince - Sexuality',
        image: '/images/worst-album-covers-prince.jpg',
        format: '12", Maxi, Ltd',
        brand: 'Warner Bros',
        category: 'Funk / Soul',
        price: 12.60,
        countInStock: 29,
        rating: 4.44,
        numReviews: 57,
    },
    {
        _id: '25',
        name: 'Swamp Dogg - Rat on!',
        image: '/images/worst-album-covers-rat-on.jpg',
        format: 'LP, Album',
        brand: 'Elektra',
        category: 'Funk / Soul',
        price: 8.40,
        countInStock: 66,
        rating: 4.22,
        numReviews: 77,
    },
    {
        _id: '26',
        name: 'Richard & Willie - Funky honkey, nasty nigger',
        image: '/images/worst-album-covers-richard-willie.jpg',
        format: 'Vinyl, LP, Album',
        brand: 'Laff Records',
        category: 'Non-Music',
        price: 30.00,
        countInStock: 7,
        rating: 4.43,
        numReviews: 7,
    },
    {
        _id: '27',
        name: 'Ted Nugent - Scream dream',
        image: '/images/worst-album-covers-scream-dream.jpg',
        format: 'LP, Album, San',
        brand: 'Epic',
        category: 'Rock',
        price: 0.83,
        countInStock: 353,
        rating: 3.71,
        numReviews: 376,
    },
    {
        _id: '28',
        name: 'Svetlana Gruebbersolvik - My lips are for blowing',
        image: '/images/worst-album-covers-svetlana.jpg',
        format: 'Unknown',
        brand: 'Not On Label',
        category: 'Unknown',
        price: 999.99,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
    },
    {
        _id: '29',
        name: 'Dick Black and his band - A taste of Dick Black',
        image: '/images/worst-album-covers-taste-of.jpg',
        format: 'CD, Album',
        brand: 'ELM',
        category: 'Folk, World, & Country',
        price: 1.11,
        countInStock: 0,
        rating: 2.67,
        numReviews: 3,
    },
    {
        _id: '30',
        name: 'The Handsome Beasts - Beastiality',
        image: '/images/worst-album-covers-the-handsome-beast.jpg',
        format: 'LP, Album',
        brand: 'Heavy Metal Records',
        category: 'Rock',
        price: 14.00,
        countInStock: 43,
        rating: 3.81,
        numReviews: 42,
    },
    {
        _id: '31',
        name: 'Tino - Por primera vez',
        image: '/images/worst-album-covers-tino.jpg',
        format: 'Vinyl, LP, Album',
        brand: 'Musart',
        category: 'Electronic, Pop',
        price: 25.12,
        countInStock: 0,
        rating: 4.8,
        numReviews: 5,
    },
    {
        _id: '32',
        name: "Wally Whyton - It's me, mum!",
        image: '/images/worst-album-covers-wally-whiton.jpg',
        format: 'Vinyl, LP, Album',
        brand: 'Fontana',
        category: 'Folk, World, & Country',
        price: 10.50,
        countInStock: 1,
        rating: 5,
        numReviews: 1,
    },
]

module.exports = discs