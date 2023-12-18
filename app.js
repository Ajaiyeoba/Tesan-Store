let quantity = document.querySelector('.quantity');





let products = [
    {
        id: 1,
        name: 'Product 1',
        image:'',
        price: 40000 
    },
    {
        id: 2,
        name: 'Product 2',
        image:'',
        price: 40000 
    },
    {
        id: 3,
        name: 'Product 3',
        image:'',
        price: 40000 
    },
    {
        id: 4,
        name: 'Product 4',
        image:'',
        price: 40000 
    },
    {
        id: 5,
        name: 'Product 5',
        image:'',
        price: 40000 
    },
    {
        id: 6,
        name: 'Product 6',
        image:'',
        price: 40000 
    },
    {
        id: 7,
        name: 'Product 7',
        image:'',
        price: 40000 
    }
];

let listCard = []
    function initApp(){
        products.forEach((value, key)=>
        let newDiv = document.createElement('div');
        newDiv.innerHtml = '
        <img src="image/${value.image}" />
        ';
        list.appendChild(newDiv);
        )
    }