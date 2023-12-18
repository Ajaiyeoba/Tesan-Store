let quantity = document.querySelector('.quantity');





let products = [
    {
        id: 1,
        name: 'Product 1',
        image:'assets\bag.png',
        price: 40000 
    },
    {
        id: 2,
        name: 'Product 2',
        image:'assets\bag.png',
        price: 40000 
    },
    {
        id: 3,
        name: 'Product 3',
        image:'assets\bag.png',
        price: 40000 
    },
    {
        id: 4,
        name: 'Product 4',
        image:'assets\bag.png',
        price: 40000 
    },
    {
        id: 5,
        name: 'Product 5',
        image:'assets\bag.png',
        price: 40000 
    },
    {
        id: 6,
        name: 'Product 6',
        image:'assets\bag.png',
        price: 40000 
    },
    {
        id: 7,
        name: 'Product 7',
        image:'assets\bag.png',
        price: 40000 
    }
];

let listCard = [];
    function initApp(){
        products.forEach((value, key) =>{ 
        let newDiv = document.createElement('div');
        newDiv.innerHTML = "   
        <img src='asset/${value.image}' />
        <div class='title'>${value.name}</div>
        <div class='price'>${value.price.toLocaleString()}</div>
        ";
        list.appendChild(newDiv);
    })
    }
    initApp();