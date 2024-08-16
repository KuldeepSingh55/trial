// const items = [
//     {
//         "image": "https://overlays.co/cdn/shop/files/IMG-7990.png?v=1707594882&width=700",
//         "name": "D Shoulder T-shirt",
//         "price": "Rs. 499.00",
//         "sizes": ["S", "M", "L", "XL"],
//         "images": [
//             "https://overlaysnow.com/cdn/shop/files/20230805-DSC03541.jpg?v=1692105098&width=72",
//             "https://overlaysnow.com/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=1000",
//             "https://overlaysnow.com/cdn/shop/files/20230805-DSC03540.jpg?v=1692946261&width=1000",
//             "https://overlaysnow.com/cdn/shop/files/20230805-DSC03557.jpg?v=1692946261&width=1000",
//             "https://overlaysnow.com/cdn/shop/files/20230805-DSC03564.jpg?v=1692946261&width=600"
//         ]
//     },
//     {
//         "image": "https://overlaysnow.com/cdn/shop/files/20230805-DSC03811_large.jpg?v=1691771883",
//         "name": "Dr Shoulder T-shirt",
//         "price": "Rs. 499.00",
//         "sizes": ["S", "M", "L", "XL"]
//     },
//     {
//         "image": "https://overlaysnow.com/cdn/shop/products/CopyofDSC01567_large.jpg?v=1680197290",
//         "name": "Dro Shoulder T-shirt",
//         "price": "Rs. 499.00",
//         "sizes": ["S", "M", "L", "XL"]
//     },
//     {
//         "image": "https://overlaysnow.com/cdn/shop/files/OVERLAYS347.jpg?v=1718358581&width=700",
//         "name": "Drop Shoulder T-shirt",
//         "price": "Rs. 499.00",
//         "sizes": ["S", "M", "L", "XL"]
//     },
// ];

// const cards = document.getElementById('cards');
// items.forEach((e) => {
//     let card = document.createElement('div');
//     card.className = 'card'; // Optional: add a class for styling

//     let image = document.createElement('img');
//     image.src = e.image;

//     let h3 = document.createElement('h3');
//     h3.textContent = e.name;

//     let p = document.createElement('p');
//     p.textContent = e.price;

//     let sizesContainer = document.createElement('div');
//     sizesContainer.className = 'sizes'; // Add a class for styling sizes container


//     e.sizes.forEach(size => {
//         let sizeSpan = document.createElement('span');
//         sizeSpan.className = 'size'; // Add a class for styling each size
//         sizeSpan.textContent = size;
//         sizesContainer.appendChild(sizeSpan);

//         let imageContainer = document.createElement('div');
//         imageContainer.className = 'imgBox';

//         e.imgBox.forEach(img => {
//             let boxImage = document.createElement('span');
//             boxImage.className = 'img';
//             boxImage.src = e.image;
//             imageContainer.appendChild(boxImage);
//         });

//     });

//     card.appendChild(image);
//     card.appendChild(h3);
//     card.appendChild(p);
//     card.appendChild(sizesContainer);
//     card.appendChild(imageContainer);
//     cards.appendChild(card);

//     card.addEventListener("click", () => {
//         const itemData = JSON.stringify(e);
//         localStorage.setItem('selectedItem', itemData);
//         window.location.href = 'card.html';
//     });
// });


const items = [
    {
        "image": "https://overlays.co/cdn/shop/files/IMG-7990.png?v=1707594882&width=700",
        "name": "Textured Regular Fit Navy Blue Pique T-shirt",
        "price": "₹ 1499.00",
        "sizes": ["S", "M", "L", "XL"],
        "images": [
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03541.jpg?v=1692105098&width=72",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03540.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03557.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03564.jpg?v=1692946261&width=600"
        ]
        
    },
    {
        "image": "https://overlaysnow.com/cdn/shop/files/20230805-DSC03811_large.jpg?v=1691771883",
        "name": "Textured Regular Fit Navy red Pique T-shirt",
        "price": "₹ 1499.00",
        "sizes": ["S", "M", "L", "XL"],
        "images": [
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03541.jpg?v=1692105098&width=72",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03540.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03557.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03564.jpg?v=1692946261&width=600"
        ]
    },
    {
        "image": "https://overlays.co/cdn/shop/files/IMG-7990.png?v=1707594882&width=700",
        "name": "Textured Regular Fit Navy green Pique T-shirt",
        "price": "₹ 1499.00",
        "sizes": ["S", "M", "L", "XL"],
        "images": [
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03541.jpg?v=1692105098&width=72",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03540.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03557.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03564.jpg?v=1692946261&width=600"
        ]
    },
    {
        "image": "https://overlaysnow.com/cdn/shop/files/OVERLAYS347.jpg?v=1718358581&width=700",
        "name": "Textured Regular Fit Navy green Pique T-shirt",
        "price": "₹ 1499.00",
        "sizes": ["S", "M", "L", "XL"],
        "images": [
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03541.jpg?v=1692105098&width=72",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03540.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03557.jpg?v=1692946261&width=1000",
            "https://overlaysnow.com/cdn/shop/files/20230805-DSC03564.jpg?v=1692946261&width=600"
        ]
    },
];

const cards = document.getElementById('cards');
items.forEach((e) => {
    let card = document.createElement('div');
    card.className = 'card'; // Optional: add a class for styling

    let image = document.createElement('img');
    image.src = e.image;

    let h3 = document.createElement('h3');
    h3.textContent = e.name;

    let p = document.createElement('p');
    p.textContent = e.price;

    let sizesContainer = document.createElement('div');
    sizesContainer.className = 'sizes'; // Add a class for styling sizes container

    e.sizes.forEach(size => {
        let sizeSpan = document.createElement('span');
        sizeSpan.className = 'size'; // Add a class for styling each size
        sizeSpan.textContent = size;
        sizesContainer.appendChild(sizeSpan);
    });

    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(sizesContainer);

    if (e.images) {
        let imageContainer = document.createElement('div');
        imageContainer.className = 'imgBox';

        e.images.forEach(img => {
            let boxImage = document.createElement('img');
            boxImage.className = 'img';
            boxImage.src = img;
            imageContainer.appendChild(boxImage);
        });

        card.appendChild(imageContainer);
    }

    cards.appendChild(card);

    card.addEventListener("click", () => {
        const itemData = JSON.stringify(e);
        localStorage.setItem('selectedItem', itemData);
        window.location.href = 'card.html';
    });
});



