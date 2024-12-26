function render(producers) {
    const container = document.querySelector('#container');
    container.innerHTML = '<br>';
    const header = document.createElement('h1');
    header.textContent = 'Products List';
    header.innerHTML=  `<h1 class="custom-header">Products List</h1>`;
    const list = document.createElement('div');
    list.className = 'text-center'; // Bootstrap classes para título estilizado
    list.id='listShow'
    list.style = `display: flex; flex-wrap: wrap; gap: 20px; justify-content: space-between; margin-top: 2%`;
   

    // Loop pelos produtores e seus produtos
    producers.forEach((producer) => {
        producer.products.forEach(({ imagem, nome, quantidade, preco }) => {
            
            const item = document.createElement('div');
            item.className = 'card shadow-sm text-dark bg-light'; // Fundo claro e sombra para destaque
            item.style = 'max-width: 18rem'; // Largura fixa dos cartões
            item.id = 'product'

            item.style = `width: calc(20% - 20px);`;

            // Conteúdo do cartão
            item.innerHTML = `
            <a class="nav-link p-0" href="/shop/${producer.id}" style="text-decoration: none; color: inherit;">
                    <img src="rsc/${nome}.png"class="card-img-top" alt="${nome}"  style="height: 180px; object-fit: cover;" >
                    

                <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text mb-2"><strong>Producer:</strong> ${producer.name}</p>
                    <p class="card-text mb-2"><strong>Quantity:</strong> ${quantidade}Kg</p>
                    <p class="card-text"><strong>Price:</strong> ${preco}€/Kg</p>
                </div>
            </a>
        `;
        

            // Adiciona o cartão à lista
        
            list.appendChild(item);
        });
    });
    container.appendChild(header);
    container.appendChild(list);
}

export default { render };
