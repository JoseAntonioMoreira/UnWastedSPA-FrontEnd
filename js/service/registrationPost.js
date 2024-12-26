document.addEventListener('DOMContentLoaded', () => {
    let productCount = 1;

    function addProductRow() {
        productCount++;
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

    document.getElementById('addProductBtn').addEventListener('click', addProductRow);

    const createProducerForm = document.getElementById('createProducerForm');
    createProducerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(createProducerForm);
        const producerData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            location: formData.get('location'),
            password: formData.get('password'),
            jsonData: {}
        };

        const productNames = formData.getAll('product-name[]');
        const productQuantities = formData.getAll('product-quantity[]');
        const productPrices = formData.getAll('product-price[]');
        const products = []
        console.log(productNames, productQuantities, productPrices);  // Debugging product data

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

        let newData = {
            products: products
        };
        
        producerData.jsonData = JSON.stringify(newData);

        console.log(producerData.jsonData);

        // Debugging the full data

        fetch('http://localhost:50005/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: (function () {
                // Log the producerData before stringifying it
                console.log('Producer Data before stringifying:', producerData);

                // Return the stringified version
                return JSON.stringify(producerData);
            })()
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert('Producer registered successfully!');
                createProducerForm.reset();
                productCount = 1;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to register producer');
            });

    });
});
