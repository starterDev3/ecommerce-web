const products = [
    {
        id: 1,
        name: "Product 1",
        description: "test",
        price: 1.99,
        image: "/"
    },
    {
        id: 2,
        name: "Product 2",
        description: "the real",
        price: 29.99,
                image: "/"
    },
        {
        id: 3,
        name: "Product 3",
        description: "etrhertgrhghtyrj",
        price: 19.99,
        image: "/"
    },
            {
        id: 4,
        name: "Home Stereo System",
        description: "high-quality home stereo system with Bluetooth connectivity and powerful sound.",
        price: 199.99,
        image: "https://img.av-connection.com/2/AVimg_59292.jpg"
    },
            {
        id: 5,
        name: "Godzilla Plush Toy",
        description: "soft and cuddly Godzilla plush toy, perfect for fans of the iconic monster.",
        price: 2,
        image: "https://media.entertainmentearth.com/assets/images/faed5f0053324052b10ef4b5fdeedffdlg.jpg"
    },
            {
        id: 6,
        name: "that one guy from that one hotel that i forgot the name of",
        description: "outta my way",
        price: 999999.99,
        image: "https://i.ytimg.com/vi/OY14vcG_FdA/sddefault.jpg"
    },
                {
        id: 7,
        name: "Random Animatronic",
        description: "a very old animatronic from a long time ago, it doesn't work anymore but it's still pretty cool to look at. (hopefully not haunted)",
        price: 4999.99,
        image: "https://pbs.twimg.com/profile_images/2005602945774084096/kQxUiRgf.jpg"
    },
            {
        id: 8,
        name: "one of over 50 mini-fridges that i found in the dumpster behind my apartment",
        description: "look, i know this is hella expensive, but we're kinda broke right now so I'd REALLY appreciate it if you bought one of these epic mini-fridges",
        price: 999.99,
        image: "https://ewscripps.brightspotcdn.com/dims4/default/bbd04af/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcf.cdn.uplynk.com%2Fausw%2Fslices%2F1db%2Fef205c0e5ea14d77944cbd6904335118%2F1dbbb8813b894e8792cd456ae92745cf%2Fposter_22565a99219c43139a7e2b9a54f7a8ba.jpg"
    },
            {
        id: 9,
        name: "Product 9",
        description: "n o",
        price: 0.01,
        image: "/"
    },
];


export function Getproducts() {
    return products;
}

export function getProductById(id) {
    return products.find((product) => product.id === Number(id));
}