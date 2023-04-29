function getMenu() {
  fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      // display the food items on the screen
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching menu:', error);
    });
}
function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const burgers = ['Chicken Burger', 'Veggie Burger', 'Beef Burger', 'Fish Burger'];
      const selectedBurgers = [burgers[Math.floor(Math.random() * burgers.length)], burgers[Math.floor(Math.random() * burgers.length)], burgers[Math.floor(Math.random() * burgers.length)]];
      const order = { burgers: selectedBurgers };
      resolve(order);
    }, 2500);
  });
}
function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      const orderStatus = { order_status: true, paid: false };
      resolve(orderStatus);
    }, 1500);
  });
}
function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const orderStatus = { order_status: true, paid: true };
      resolve(orderStatus);
    }, 1000);
  });
}
function thankyouFnc() {
  alert('Thank you for eating with us today!');
}
async function restaurantSequence() {
  getMenu();

  const order = await takeOrder();
  console.log('Order:', order);

  const orderStatus = await orderPrep();
  console.log('Order status:', orderStatus);

  const paidStatus = await payOrder();
  console.log('Paid status:', paidStatus);

  if (paidStatus.paid) {
    thankyouFnc();
  }
}

restaurantSequence();
