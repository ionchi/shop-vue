const products = [
  { 'id': 1, 'title': 'Prune Moi', 'titleRu':'Мягкий Чернослив', 'price': 50.00, 'inventory': 1000, 'shipping': 50.00, 'image_class': 'product-1', 'description':'Sunt delicioase, nu necesită prelucrare, pot fi utilizate pentru deserturi şi alte delicii culinare.', 'descriptionRu': 'Они вкусные, не требуют обработки, могут использоваться для десертов и других кулинарных изысков.'},
  { 'id': 2, 'title': 'Prune Tari', 'titleRu':'Твердый Чернослив', 'price': 55.00, 'inventory': 1000, 'shipping': 50.00, 'image_class': 'product-2', 'description':'Sunt cele mai sănătoase, bune pentru copii mici şi bunici.', 'descriptionRu': 'Они самые здоровые, хорошие для маленьких детей, бабушек и дедушек. <br> <br>' },
  { 'id': 3, 'title': 'Prune Fara Sambure', 'titleRu':'Чернослив Без Косточек', 'price': 65.00, 'inventory': 1000, 'shipping': 50.00, 'image_class': 'product-3', 'description':'Sunt dulci, ideale pentru a fi consumate la birou, în transport sau la o plimbare în aer liber cu prietenii.', 'descriptionRu': 'Они сладкие, идеально подходят для употребления в офисе, в транспорте или на открытом воздухе с друзьями.' }
];

const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': '$100.00 Discount' },
  { 'id': 3, 'title': 'Free Shipping' }
];

const coupons = [
  { 'id': 1, 'code': '5OFFBAKS', 'discount': 0.05 },
  { 'id': 2, 'code': '10OFFBAKS', 'discount': 0.1 },
  { 'id': 3, 'code': '15OFFBAKS', 'discount': 0.15 },
  { 'id': 4, 'code': '20OFFBAKS', 'discount': 0.20 },
  { 'id': 5, 'code': '25OFFBAKS', 'discount': 0.25 },
  { 'id': 6, 'code': '30OFFBAKS', 'discount': 0.30 },
  { 'id': 7, 'code': '50OFFBAKS', 'discount': 0.50 },
];

// Simulate requests

export default {
  getProducts (cb) {
    setTimeout(() => cb(products), 100);
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 100);
  },

  getCoupons (cb) {
    setTimeout(() => cb(coupons), 100);
  },
}
