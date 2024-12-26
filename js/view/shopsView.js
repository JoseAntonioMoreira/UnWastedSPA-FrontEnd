function render(shops) {
    const container = document.querySelector('#container');
    container.innerHTML = '<br>';
    const header = document.createElement('h1');
    header.innerHTML = `<h1 class="custom-header">Producers</h1>`;
    const list = document.createElement('div');
    list.className = 'text-center';
    list.id = 'listShow';
    list.style = `display: flex; flex-wrap: wrap; gap: 20px; margin-top: 2%`;

    shops.forEach(({ name,address, email, images,location,id,phone }) => {
    
        const item = document.createElement('div');
        item.className = 'card shadow-sm text-dark bg-light'; // Fundo claro e sombra para destaque
        item.style = 'max-width: 18rem'; // Largura fixa dos cartões
        item.id = 'shop'
        const shopLink  = document.createElement('a');
        shopLink.href = `/shop/${id}`;

        shopLink.className = 'text-decoration-none text-white'; 
    console.log(name);
        
        shopLink.innerHTML = `
        <img src="rsc/${name}.png" class="card-img-top" alt="${name}" style="height: 180px; object-fit: cover;">
        <div class="card-body bg-white text-dark" style="background-color: rgba(245, 245, 220, 0.5);">
            <h5 class="card-title">${name} Shop</h5>
            <p class="card-text">${email}</p>
            <p class="card-text">${phone}</p>
            <p class="card-text">${address}</p>
            <p class="card-text">${location}</p>
        </div>
    `;

        item.appendChild(shopLink)
        list.appendChild(item);
    });

    container.appendChild(header)
    container.appendChild(list);
}


export default { render };
