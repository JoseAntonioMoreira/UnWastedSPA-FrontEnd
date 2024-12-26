function render(shop) {
    console.log(shop); // Verifica os dados da loja no console

    const container = document.querySelector('#container');
    container.innerHTML = ''; // Limpa o container

    // Criação do cabeçalho com o nome da loja
    const header = document.createElement('h1');
    header.className = 'display-4 text-center my-4 custom-header';
    header.innerText = `Shop: ${shop.name}`;
    container.appendChild(header);


// Criação do card com os detalhes da loja
    const shopCard = document.createElement('div');
    shopCard.className = 'card text-dark bg-light mb-3';
    shopCard.style.maxWidth = '18rem';

    shopCard.innerHTML = `
        <div class="card-header">Shop Details</div>
        <div class="card-body">
            <h5 class="card-title">Name: ${shop.name}</h5>
            <p class="card-text"><strong>Address:</strong> ${shop.address}</p>
            <p class="card-text"><strong>Email:</strong> ${shop.email}</p>
            <p class="card-text"><strong>Phone:</strong> ${shop.phone}</p>
            <p class="card-text"><strong>Location:</strong> ${shop.location || 'Not available'}</p>
        </div>
    `;
// Wrapper div para centrar horizontalmente
const centerWrapper = document.createElement('div');
centerWrapper.className = 'd-flex justify-content-center';
centerWrapper.appendChild(shopCard);

// Adicionar ao container
container.appendChild(centerWrapper);

    // Parse o JSON para obter os detalhes dos produtos
    const products = JSON.parse(shop.jsonData).products;

    // Criação do container de produtos
    const productGrid = document.createElement('div');
    productGrid.className = 'd-flex flex-wrap justify-content-center gap-4';

    // Loop pelos produtos para criar os cartões
    products.forEach(({ imagem, nome, quantidade, preco }) => {
        const productCard = document.createElement('div');
        productCard.className = 'card shadow-sm text-dark bg-light';
        productCard.style.width = '18rem';
    
        productCard.innerHTML = `
            <img src="/rsc/${nome}.png" class="card-img-top" alt="${nome}" 
                 style="height: 180px; object-fit: cover;">
            <div class="card-body" style="text-align: center;">
                 <h5 class="card-title">${nome}</h5>
                 <p class="card-text"><strong>Quantity:</strong> ${quantidade}Kg</p>
                 <p class="card-text"><strong>Price:</strong> ${preco}€/Kg</p>
             </div>
             
        `;
        productGrid.appendChild(productCard);
    });

    // Adicionar título de produtos e grid ao container
    const productTitle = document.createElement('h3');
    productTitle.className = 'text-center my-3 custom-font';
    productTitle.innerText = 'Products';
    container.appendChild(productTitle);
    container.appendChild(productGrid);

    // Botão de retorno para a lista de lojas
    const backButton = document.createElement('div');
    backButton.className = 'text-center mt-4';
    backButton.innerHTML = `
        <a href="/shops" class="btn btn-primary">Back to Shops</a>
    `;
    container.appendChild(backButton);
}

export default { render };
