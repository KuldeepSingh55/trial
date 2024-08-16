document.addEventListener('DOMContentLoaded', () => {
    const itemData = localStorage.getItem('selectedItem');
    const itemDetail = document.getElementById('item-detail');
    const images = document.getElementById('images');

    if (itemData) {
        const item = JSON.parse(itemData);

        // Create the main container divs
        let imageDiv = document.createElement('div');
        imageDiv.className = 'image-container'; // Add a class for styling

        let detailsDiv = document.createElement('div');
        detailsDiv.className = 'details-container'; // Add a class for styling

        let p1 = document.createElement('p');
        p1.innerText = 'Veller India';
        detailsDiv.appendChild(p1);

        let imagesDiv = document.createElement('div');
        imagesDiv.className = 'images-container'; // Add a class for styling

        // Create and append image
        let image = document.createElement('img');
        image.src = item.image;
        image.className = 'main-image'; // Add a class for styling the main image
        imageDiv.appendChild(image);

        // Create and append item name
        let h3 = document.createElement('h3');
        h3.textContent = item.name;
        detailsDiv.appendChild(h3);

        // Create and append item price
        let p = document.createElement('p');
        p.textContent = item.price;
        detailsDiv.appendChild(p);

        let h5 = document.createElement('h5');
        h5.innerText = "(Tax included. Shipping calculated at checkout.)";
        detailsDiv.appendChild(h5)

        // Create and append sizes
        let sizesContainer = document.createElement('div');
        sizesContainer.className = 'sizes'; // Add a class for styling sizes container


        let h4 = document.createElement('h4');
        h4.className = 'h4';
        h4.textContent = "Size:";
        detailsDiv.appendChild(h4)

        item.sizes.forEach(size => {
            let sizeSpan = document.createElement('span');
            sizeSpan.className = 'size'; // Add a class for styling each size
            sizeSpan.textContent = size;
            sizesContainer.appendChild(sizeSpan);
        });

        detailsDiv.appendChild(sizesContainer);

        let quantity = document.createElement('h2');
        quantity.className = 'quantity';
        quantity.innerText = "Quantity:";
        detailsDiv.appendChild(quantity);

        let setquantity = document.createElement('div');
        setquantity.className = 'box';

        let button = document.createElement('button')
        button.className = 'minus';
        button.innerText = '-';

        let number = document.createElement('p')
        number.className = 'number';
        number.innerText = '1';

        let plusbutton = document.createElement('button')
        plusbutton.className = 'plus';
        plusbutton.innerText = '+';

        let value = 1;

        plusbutton.addEventListener("click", () => {
            if (value < 10) {
                value++;
                value = (value < 10) ? "" + value : value;
                number.innerText = value;
            }

        });

        button.addEventListener("click", () => {
            if (value > 1) {
                value--;
                value = (value < 10) ? "" + value : value;
                number.innerText = value;
            }
        });

        setquantity.append(button, number, plusbutton);

        detailsDiv.appendChild(setquantity)

        let atcart = document.createElement('button');
        atcart.className = 'atcart';
        atcart.innerText = "Add to Cart";
        detailsDiv.appendChild(atcart);

        let buybtn = document.createElement('button');
        buybtn.className = 'buybtn';
        buybtn.innerText = "Proceed to Buy";
        detailsDiv.appendChild(buybtn);

        let discription = document.createElement('div');
        discription.className = 'discription';

        let details = document.createElement('h3');
        details.className = "details";
        details.innerText = 'Description';

        let downarrow = document.createElement('button');
        downarrow.className = "arrow";
        // downarrow.innerText = '';

        downarrow.addEventListener("click", () => {
            discription.style.backgroundColor = "teal";
            discription.style.height = "200px";

        });

        discription.appendChild(details);


        discription.appendChild(downarrow);
        detailsDiv.appendChild(discription);

        let pera = document.getElementById('pera');
        pera.style.display = '';

        detailsDiv.appendChild(pera);

        // Create and append additional images
        item.images.forEach(img => {
            let boxImage = document.createElement('img');
            boxImage.className = 'shortImg'; // Add a class for styling additional images
            boxImage.src = img;
            imagesDiv.appendChild(boxImage);
        });

        // Append the main container divs to itemDetail
        itemDetail.appendChild(imageDiv);
        itemDetail.appendChild(detailsDiv);
        images.appendChild(imagesDiv);
    } else {
        itemDetail.innerHTML = "<p>No item data available.</p>";
    }
});



// EVENTLISTNER STARTS HERE





