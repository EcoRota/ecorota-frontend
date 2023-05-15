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
];
