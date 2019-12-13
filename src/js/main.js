// All products
const products = [{
        id: 1,
        itemName: "This",
        description: "Some text over heeeree",
        image: "https://picsum.photos/seed/picsum/300/200",
        price: 200,
        qty: 5
    },
    {
        id: 2,
        itemName: "This",
        image: "https://picsum.photos/seed/picsum/300/200",
        description: "Some text over heeeree",
        price: 200,
        qty: 5
    },
    {
        id: 3,
        itemName: "This",
        image: "https://picsum.photos/seed/picsum/300/200",
        description: "Some text over heeeree",
        price: 200,
        qty: 5
    },
    {
        id: 4,
        itemName: "This",
        image: "https://picsum.photos/seed/picsum/300/200",
        description: "Some text over heeeree",
        price: 200,
        qty: 5
    },
    {
        id: 5,
        itemName: "This",
        image: "https://picsum.photos/seed/picsum/300/200",
        description: "Some text over heeeree",
        price: 200,
        qty: 5
    },
    {
        id: 6,
        itemName: "This",
        image: "https://picsum.photos/seed/picsum/300/200",
        description: "Some text over heeeree",
        price: 200,
        qty: 5
    },
    {
        id: 7,
        itemName: "YPPPPPPPPP",
        image: "https://picsum.photos/seed/picsum/300/200",
        description: "Some text over heeeree",
        price: 200,
        qty: 5
    },
    {
        id: 8,
        itemName: "This",
        image: "https://picsum.photos/seed/picsum/300/200",
        description: "Some text over heeeree",
        price: 200,
        qty: 5
    }
];

window.addEventListener('load', () => {

    for (var i = 0; i < products.length; i++) {
        var itemName = products[i].itemName;
        var itemDesc = products[i].description;
        var itemPrice = products[i].price;
        var itemImg = products[i].image;
        var qty = products[i].qty;
        var id = products[i].id;

        // Grabs row and creates a div element in DOM
        const row = document.querySelector('.row');
        const product = document.createElement('div');
        product.classList.add('col');
        product.classList.add('s3');

        // The div inner html
        product.innerHTML +=
            `
            <!-- Product Img -->
            <img-wrapper>

                <a href="#modal${id}" class="modal-trigger">
                    <img class="product-image" src=${itemImg} />
                </a>
            </img-wrapper>

            <!-- Product Content -->
            <content>
                <h5>${itemName}</h5>
                <h6>$${itemPrice}</h6>
            </content>
            <!-- Modal Structure -->
            <div id="modal${id}" class="modal">
                <div class="modal-content">
                    <h5>${itemName}</h5>
                    <h6>$${itemPrice}</h6>
                    <p>${itemDesc}</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-circle waves-grey btn-flat">
                        <i class="material-icons">shopping_cart</i>
                    </a>
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">
                        <i class="material-icons">close</i>
                    </a>
                </div>
            </div>
        `;

        // Joining HTML element with created element
        row.appendChild(product);
    }
})