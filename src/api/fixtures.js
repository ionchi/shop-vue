const products = [
  { 'id': 1, 'title': 'Prune moi', 'titleRu':'Mягкие сливы', 'price': 55.00, 'inventory': 1000, 'shipping': 50.00, 'image_class': 'product-1', 'description':'Sunt delicioase, nu necesită prelucrare, pot fi utilizate pentru deserturi şi alte delicii culinare.', 'descriptionRu': 'Они вкусные, не требуют обработки, могут использоваться для десертов и других кулинарных изысков.'},
  { 'id': 2, 'title': 'Prune tari', 'titleRu':'Tвердые сливы', 'price': 60.00, 'inventory': 1000, 'shipping': 50.00, 'image_class': 'product-2', 'description':'Sunt cele mai sănătoase, bune pentru copii mici şi bunici.', 'descriptionRu': 'Они самые здоровые, хорошие для маленьких детей и бабушек и дедушек. <br> <br>' },
  { 'id': 3, 'title': 'Prune Fara Sambure', 'titleRu':'Cливы без семян', 'price': 70.00, 'inventory': 1000, 'shipping': 50.00, 'image_class': 'product-3', 'description':'Sunt dulci, ideale pentru a fi consumate la birou, în transport sau la o plimbare în aer liber cu prietenii.', 'descriptionRu': 'Они сладкие, идеально подходят для употребления в офисе, в транспорте или на открытом воздухе с друзьями.' }
];

const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': '$100.00 Discount' },
  { 'id': 3, 'title': 'Free Shipping' }
];

// Simulate requests

export default {
  getProducts (cb) {
    setTimeout(() => cb(products), 200);
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200);
  }
}
