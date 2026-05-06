
const products = [
    { id: 1, name: "Floral Summer Dress", price: 49.99, category: "women", image: "./Images/floral summer dress.jpg" },
    { id: 2, name: "Classic Denim Jacket", price: 79.99, category: "women", image: "Images/Classic Denim Jacket.jpg" },
    { id: 3, name: "Leather Crossbody Bag", price: 39.99, category: "accessories", image: "Images/Leather Crossbody Bag.jpg" },
    { id: 4, name: "Men's Casual Shirt", price: 34.99, category: "men", image: "Images/Men's Casual Shirt.jpg" },
    { id: 5, name: "Silver Necklace", price: 29.99, category: "accessories", image: "Images/Silver Necklace.jpg" },
    { id: 6, name: "Men's Running Shoes", price: 89.99, category: "men", image: "Images/Men's Running Shoes.jpg" },
    { id: 7, name: "Women's Knit Sweater", price: 54.99, category: "women", image: "Images/Women's Knit Sweater.jpg" },
    { id: 8, name: "Sunglasses", price: 24.99, category: "accessories", image: "Images/Sunglasses.jpg" },
    { id: 9, name: "Men's Wool Coat", price: 129.99, category: "men", image: "Images/Men's Wool Coat.jpg" },
    { id: 10, name: "Silk Scarf", price: 19.99, category: "accessories", image: "Images/Silk Scarf.jpg" },
    { id: 11, name: "Women's Yoga Pants", price: 44.99, category: "women", image: "Images/Women's Yoga Pants.jpg" },
    { id: 12, name: "Men's Leather Belt", price: 29.99, category: "accessories", image: "Images/Men's Leather Belt.jpg" }
];

const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <button class="add-to-cart">Add to Cart</button>
        </div>
        <div class="product-info">
            <div class="product-title">${product.name}</div>
            <div class="product-price">PKR ${product.price.toFixed(2)}</div>
        </div>
    `;

    card.querySelector('.add-to-cart').addEventListener('click', (e) => {
        e.stopPropagation();
        alert(`${product.name} added to cart!\nPrice: PKR ${product.price.toFixed(2)}`);
    });

    return card;
}

function loadProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
    filterProducts(currentCategory);
}

function filterProducts(category) {
    currentCategory = category;
    const cards = document.querySelectorAll('.product-card');
    let visible = 0;

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hide');
            visible++;
        } else {
            card.classList.add('hide');
        }
    });

    let msg = document.querySelector('.no-products');

    if (visible === 0) {
        if (!msg) {
            msg = document.createElement('div');
            msg.className = 'no-products';
            msg.textContent = 'No products found';
            productGrid.appendChild(msg);
        }
    } else {
        msg?.remove();
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProducts(btn.dataset.category);
    });
});

loadProducts();