import type { Route } from '../types/Route';

export const routes: Route[] = [
  {
    name: 'Praia vai quem quer',
    slug: 'praia-vai-quem-quer',
    duration: '4 a 5 Horas',
    dueDate: new Date('2024-07-15'),
    availableHours: ['09:00', '17:00'],
    experience: ['Alimentação inclusa', 'Transporte incluso'],
    description: [
      'A "Praia Vai Quem Quer" em Cotijuba é um destino imperdível para quem busca relaxar em uma praia paradisíaca e tranquila. Abaixo, confira algumas vantagens de visitar o local:',
      'Um lugar ideal para relaxar',
      'Além disso, é possível fazer um passeio de barco para chegar até a praia, aproveitando para conhecer outras belezas da ilha de Cotijuba.',
      'Para aproveitar ainda mais a sua visita à ilha, você pode experimentar a culinária paraense em restaurantes locais, conhecer o artesanato da região ou fazer passeios de bugue pela ilha.',
      'Não perca a oportunidade de conhecer a beleza natural da "Praia Vai Quem Quer" em Cotijuba e desfrutar de momentos de tranquilidade em um paraíso tropical.',
    ],
    fullPrice: 650,
    priceWithDiscount: 399.99,
    priceInstallmentsNumber: 12,
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3b/fa/54/vista-da-praia.jpg?w=1400&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c7/24/73/fim-de-tarde-lindo.jpg?w=1400&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3b/fc/c9/vista-da-praia.jpg?w=1400&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3b/fb/c4/vista-da-praia.jpg?w=1100&h=-1&s=1',
    ],
    tags: ['Cotico'],
    reviews: [
      {
        name: 'João da Silva',
        avatar:
          'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
        reviewTitle: 'Muito bom',
        review: 'Muito bom, recomendo',
        rating: 3,
      },
    ],
  },
  {
    name: 'Praia do Farol',
    slug: 'praia-do-farol',
    duration: '4 a 5 Horas',
    dueDate: new Date('2024-08-25'),
    availableHours: ['09:00', '17:00'],
    experience: ['Alimentação inclusa', 'Transporte incluso'],
    description: [
      'A "Praia do Farol" em Cotijuba é um destino imperdível para quem busca relaxar em uma praia paradisíaca e tranquila. Abaixo, confira algumas vantagens de visitar o local:',
      'Um lugar ideal para relaxar',
      'Além de sua beleza natural deslumbrante, a "Praia do Farol" em Cotijuba oferece um refúgio perfeito para aqueles que desejam escapar do estresse da vida urbana. Com suas areias brancas e águas cristalinas, essa praia encantadora proporciona um ambiente sereno e relaxante.',
      'Uma das maneiras de chegar à praia é por meio de um agradável passeio de barco, que permite aos visitantes apreciar as paisagens deslumbrantes ao redor da ilha de Cotijuba. Durante o trajeto, é possível avistar outras praias deslumbrantes e explorar a rica biodiversidade da região.',
      'Além de desfrutar das maravilhas naturais, você pode aproveitar ainda mais a sua visita à "Praia do Farol" experimentando a culinária local em restaurantes charmosos. Saboreie pratos típicos da região paraense, repletos de sabores exóticos e ingredientes frescos.',
      'Para os amantes de artesanato, a região também oferece uma variedade de produtos feitos à mão por artesãos locais. Explore as lojas de souvenirs e leve para casa lembranças únicas, como peças de cerâmica, esculturas em madeira ou colares de conchas, como símbolos dessa bela praia.',
      'Não perca a oportunidade de conhecer a beleza natural da "Praia do Farol" em Cotijuba e desfrutar de momentos de tranquilidade em um verdadeiro paraíso tropical. Recarregue as energias, relaxe ao sol e deixe-se envolver pela atmosfera encantadora dessa praia deslumbrante.',
    ],
    fullPrice: 500,
    priceWithDiscount: 350.99,
    priceInstallmentsNumber: 12,
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/09/a2/45/69/ilha-de-cotijuba.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/09/fe/e2/da/ilha-de-cotijuba.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/09/7c/db/92/ilha-de-cotijuba.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/09/fe/e2/d3/ilha-de-cotijuba.jpg',
    ],
    tags: [],
    reviews: [
      {
        name: 'João da Silva',
        avatar:
          'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
        reviewTitle: 'Muito bom',
        review: 'Muito bom, recomendo',
        rating: 3,
      },
    ],
  },
  {
    name: 'Praia da flexeira',
    slug: 'praia-da-flexeira',
    duration: '3 a 4 Horas',
    dueDate: new Date('2024-08-04'),
    availableHours: ['09:00', '17:00'],
    experience: ['Alimentação inclusa', 'Transporte incluso'],
    description: [
      'A "Praia da Flexeira" em Cotijuba é um destino imperdível para quem busca relaxar em uma praia paradisíaca e tranquila. Abaixo, confira algumas vantagens de visitar o local:',
      'Um lugar ideal para relaxar',
      'Localizada na encantadora ilha de Cotijuba, a "Praia da Flexeira" encanta os visitantes com sua beleza natural estonteante. Com suas areias douradas e mar azul-turquesa, essa praia oferece um refúgio perfeito para aqueles que desejam escapar da agitação da vida cotidiana.',
      'Para chegar à praia, você pode desfrutar de um agradável passeio de barco, explorando as águas calmas ao redor da ilha de Cotijuba. Durante o trajeto, aproveite para apreciar a paisagem deslumbrante e deixe-se encantar pelas ilhas e enseadas que compõem essa região paradisíaca.',
      'Além de relaxar na praia e mergulhar nas águas refrescantes, a "Praia da Flexeira" oferece uma série de atividades para tornar sua visita ainda mais memorável. Você pode explorar trilhas que levam a mirantes com vistas panorâmicas, permitindo que você aprecie a paisagem exuberante ao redor.',
    ],
    fullPrice: 500,
    priceWithDiscount: 299.99,
    priceInstallmentsNumber: 12,
    images: [
      'https://img3.oastatic.com/img2/56417124/834x417r/praia-da-flexeira-ilha-de-cotijuba.jpg',
      'https://i.pinimg.com/564x/05/9b/7c/059b7c0e51a057257d30240b9e41832b.jpg',
      'https://cdn.folhabv.com.br/images/noti-text-1636051105.webp?1636047808785',
      'https://www.oliberal.com/image/contentid/policy:1.508120:1647000634/vai-quem-quer-cotijuba.jpg?f=3x2&q=1.0&w=700&$p$f$q$w=4b8f6c2',
    ],
    tags: [],
    reviews: [
      {
        name: 'João da Silva',
        avatar:
          'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
        reviewTitle: 'Muito bom',
        review: 'Muito bom, recomendo',
        rating: 3,
      },
    ],
  },
  {
    name: 'Praia Funda',
    slug: 'praia-funda',
    duration: '4 a 5 Horas',
    dueDate: new Date('2024-09-06'),
    availableHours: ['09:00', '17:00'],
    experience: ['Alimentação inclusa', 'Transporte incluso'],
    description: [
      'A "Praia Funda" em Cotijuba é um destino imperdível para quem busca relaxar em uma praia paradisíaca e tranquila. Abaixo, confira algumas vantagens de visitar o local:',
      'Um lugar ideal para relaxar',
      'Situada na deslumbrante ilha de Cotijuba, a "Praia Funda" encanta os visitantes com sua beleza natural intocada. Com suas areias claras e águas cristalinas, essa praia oferece um refúgio perfeito para aqueles que desejam escapar da agitação da vida urbana e se conectar com a natureza.',
      'Uma das maneiras de chegar à "Praia Funda" é através de um agradável passeio de barco, permitindo que você aproveite as vistas panorâmicas e admire a costa da ilha de Cotijuba. Durante o trajeto, você também pode explorar outras praias encantadoras ao redor, aumentando ainda mais a diversidade de sua experiência na região.',
      'Além de relaxar na praia e se banhar nas águas refrescantes, a "Praia Funda" oferece uma variedade de atividades para tornar sua visita ainda mais memorável. Você pode explorar trilhas naturais que levam a pontos de observação com vistas deslumbrantes, permitindo que você aprecie a paisagem exuberante e tire fotos incríveis.',
    ],
    fullPrice: 575,
    priceWithDiscount: 349.99,
    priceInstallmentsNumber: 12,
    images: [
      'https://1.bp.blogspot.com/-0tRN3cKtCUY/WV4iuslwkLI/AAAAAAABDLI/mk-ypT2vt3Y5wozX_jL2JGqxrVIYVgr5wCLcBGAs/s1600/Praia%2BFunda.%2BCotijuba.%2BCristino%2Bmartins.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/05/37/2b/01/praia-funda-ilha-de-cotijuba.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/05/37/2a/99/ilha-de-cotijuba.jpg',
      'https://i.pinimg.com/736x/55/35/90/553590d2708477fe3436d8c82a35669a.jpg',
    ],
    tags: [],
    reviews: [
      {
        name: 'João da Silva',
        avatar:
          'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
        reviewTitle: 'Muito bom',
        review: 'Muito bom, recomendo',
        rating: 3,
      },
    ],
  },
];
