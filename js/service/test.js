document.addEventListener('DOMContentLoaded', () => {
    let productCount = 1; // Start with one product row

    // Function to add a new product row dynamically
    function addProductRow() {
        productCount++; // Increment product count
        const productList = document.getElementById('productList');
        const newProductRow = document.createElement('div');
        newProductRow.classList.add('row', 'mb-3', 'product-item');
        newProductRow.id = `product-${productCount}`;
        newProductRow.innerHTML = `
            <div class="col">
                <input type="text" class="form-control" id="product-name-${productCount}" name="product-name[]" placeholder="Product Name" required>
            </div>
            <div class="col">
                <input type="number" class="form-control" id="product-quantity-${productCount}" name="product-quantity[]" min="1" placeholder="Quantity" required>
            </div>
            <div class="col">
                <input type="number" class="form-control" id="product-price-${productCount}" name="product-price[]" min="0" step="0.01" placeholder="Price" required>
            </div>
        `;
        productList.appendChild(newProductRow);
    }

    // Add event listener to the "Add Product" button
    document.getElementById('addProductBtn').addEventListener('click', addProductRow);

    // Handle form submission (register producer)
    const createProducerForm = document.getElementById('createProducerForm');
    createProducerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect the form data
        const formData = new FormData(createProducerForm);
        const producerData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            location: formData.get('location'),
            password: formData.get('password'),
            jsonData: {}  // Initialize jsonData as an empty object
        };

        // Collect product data
        const productNames = formData.getAll('product-name[]');
        const productQuantities = formData.getAll('product-quantity[]');
        const productPrices = formData.getAll('product-price[]');

        // Debugging the data before you create jsonData
        console.log('Product Names:', productNames);
        console.log('Product Quantities:', productQuantities);
        console.log('Product Prices:', productPrices);

        // Initialize an empty array for products
        const products = [];

        // Loop through the product data and build the product objects
        for (let i = 0; i < productNames.length; i++) {
            // Assuming you have a way to capture the image for each product, we can add a placeholder for now
            const product = {
                nome: productNames[i],  // 'nome' for product name
                quantidade: productQuantities[i],  // 'quantidade' for quantity
                imagem: 'default.jpg',  // This could be a field for the image (add to your form if needed)
                preco: productPrices[i]  // 'preco' for price
            };
            products.push(product);
        }

        // Add products array to the producerData's jsonData field
        producerData.jsonData = { products: products };

        // Validate data before submitting
        if (!producerData.name || !producerData.email || !producerData.phone || producerData.jsonData.products.length === 0) {
            alert('Please fill out all required fields');
            return;
        }

        // Debugging the full data before sending
        console.log('Producer Data:', producerData);

        // Send the data to the backend
        fetch('http://localhost:50005/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producerData)  // Stringify the whole producerData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Producer registered successfully!');
            createProducerForm.reset();  // Reset the form after successful submission
            productCount = 1;  // Reset product count
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to register producer');
        });
    });
});
