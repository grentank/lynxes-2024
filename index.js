const { User, Product, Cart } = require('./db/models');
const { Op } = require('sequelize');

const prettyLog = (obj) => console.dir(JSON.parse(JSON.stringify(obj)), { depth: null });

(async () => {
    const cartItems = await getCartItemsFromEmail('don@gmail.com');
    prettyLog({
      cartItems,
      totalAmount: cartItems.reduce((acc, item) => acc + item.price, 0),
    });
//   const usersThatHaveItemInTheirCarts = await getUsersFromItemName('15 Laptops');
//   prettyLog({
//     usersThatHaveItemInTheirCarts,
//     totalItems: usersThatHaveItemInTheirCarts.reduce(
//       (acc, user) => acc + user.Cart.quantity,
//       0,
//     ),
//   });
})();

async function getCartItemsFromEmail(email) {
  const targetUser = await User.findOne({
    where: {
      email,
    },
    include: {
      model: Cart,
      include: {
        model: Product,
      },
    },
  });
  return targetUser.Carts.map((cartItem) => cartItem.Product);
}

async function getUsersFromItemName(itemName) {
  const targetProduct = await Product.findOne({
    where: {
      name: {
        [Op.substring]: itemName,
      },
    },
    include: User,
  });
  return targetProduct.Users;
}

// async function getUsersFromItemName(itemName) {
//   const targetProduct = await Product.findOne({
//     where: {
//       name: {
//         [Op.substring]: itemName,
//       },
//     },
//     include: {
//       model: Cart,
//       include: {
//         model: User,
//       },
//     },
//   });
//   return targetProduct.Carts.map((cartItem) => ({
//     ...cartItem.User.get(),
//     quantity: cartItem.quantity,
//   }));
// }
