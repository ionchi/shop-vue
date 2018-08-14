const products = [
  { 'id': 1, 'title': 'Prune moi', 'price': 40.00, 'inventory': 1000, 'shipping': 30.00, 'image_class': 'product-1', 'description':'Sunt delicioase, nu necesită prelucrare, pot fi utilizate pentru deserturi şi alte delicii culinare.'},
  { 'id': 2, 'title': 'Prune tari', 'price': 50.00, 'inventory': 1000, 'shipping': 30.00, 'image_class': 'product-2', 'description':'Sunt cele mai sănătoase, bune pentru copii mici şi bunici.' },
  { 'id': 3, 'title': 'Prune Fără Sâmbure', 'price': 60.00, 'inventory': 1000, 'shipping': 30.00, 'image_class': 'product-3', 'description':'Sunt dulci, ideale pentru a fi consumate la birou, în transport sau la o plimbare în aer liber cu prietenii.' }
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
