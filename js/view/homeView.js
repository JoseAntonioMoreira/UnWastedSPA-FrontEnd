function render() {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  // Create the header (optional)
  const header = document.createElement('h1');
  header.innerHTML = `<h1 class="custom-header">UnWasted</h1>`;

  const body = document.createElement('div');
  body.id = 'body';

  const searchBox = document.createElement('div');
  searchBox.id = 'SearchBox';

  const form = document.createElement('form');
  form.action = '#';
  form.method = 'get';

  // Carousel section
  const carousel = document.createElement('div');
  carousel.id = 'carouselExampleControls';
  carousel.className = 'carousel slide';
  carousel.setAttribute('data-bs-ride', 'carousel');
  carousel.setAttribute('data-bs-interval', '2000');

  const carouselInner = document.createElement('div');
  carouselInner.className = 'carousel-inner';

  const createCarouselItem = (src, alt) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';

    // Image container
    const imgContainer = document.createElement('div');
    imgContainer.className = 'carousel-img-container';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = 'd-block w-100';
    img.style.width = '350px';
    img.style.height = '350px';
    img.style.objectFit = 'cover';

    imgContainer.appendChild(img);
    carouselItem.appendChild(imgContainer);
    return carouselItem;
  };

  // Create carousel items
  const carouselItem1 = createCarouselItem('/rsc/João Silva.png', 'First slide');
  carouselItem1.classList.add('active'); // Make the first item active

  const carouselItem2 = createCarouselItem('/rsc/Ana Oliveira.png', 'Second slide');
  const carouselItem3 = createCarouselItem('/rsc/Maria Souza.png', 'Third slide');

  carouselInner.appendChild(carouselItem1);
  carouselInner.appendChild(carouselItem2);
  carouselInner.appendChild(carouselItem3);

  const prevButton = document.createElement('button');
  prevButton.className = 'carousel-control-prev';
  prevButton.type = 'button';
  prevButton.setAttribute('data-bs-target', '#carouselExampleControls');
  prevButton.setAttribute('data-bs-slide', 'prev');

  const prevIcon = document.createElement('span');
  prevIcon.className = 'carousel-control-prev-icon';
  prevIcon.setAttribute('aria-hidden', 'true');
  prevButton.appendChild(prevIcon);

  const nextButton = document.createElement('button');
  nextButton.className = 'carousel-control-next';
  nextButton.type = 'button';
  nextButton.setAttribute('data-bs-target', '#carouselExampleControls');
  nextButton.setAttribute('data-bs-slide', 'next');

  const nextIcon = document.createElement('span');
  nextIcon.className = 'carousel-control-next-icon';
  nextIcon.setAttribute('aria-hidden', 'true');
  nextButton.appendChild(nextIcon);

  carousel.appendChild(carouselInner);
  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);

  body.appendChild(carousel);

  // Create the "Sobre Nós" section
  const aboutSection = document.createElement('section');
  aboutSection.className = 'container-fluid';

  const aboutContent = document.createElement('div');
  aboutContent.className = 'conteudo-inferior-esquerdo';

  // Logo image
  const logoImage = document.createElement('img');
  logoImage.src = '/rsc/logo.png'; // Update the path if needed
  logoImage.className = 'img-fluid logo';
  logoImage.alt = 'Sobre Nós';

  // Text block
  const textBlock = document.createElement('div');
  textBlock.className = 'texto-sobre-nos';

  const aboutTitle = document.createElement('h2');
  aboutTitle.innerText = 'About Us';

  const aboutText = document.createElement('p');
  aboutText.innerHTML = 'Location: Porto, Portugal <br> Phone: +351 913 954 888 <br> Email: unwasted@gmail.com';

  textBlock.appendChild(aboutTitle);
  textBlock.appendChild(aboutText);

  aboutContent.appendChild(logoImage);
  aboutContent.appendChild(textBlock);

  aboutSection.appendChild(aboutContent);

  // Append the "Sobre Nós" section to the body
  body.appendChild(aboutSection);

  // Append everything to the container
  container.appendChild(header);
  container.appendChild(body);

  // You can still add footer if needed
  // container.appendChild(footing);
}

export default { render };
