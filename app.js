

const menuItems = [
  {
    name: 'vanilla',
    price: 5.00,
    quantity: 0
  },
  {
    name: 'chocolate',
    price: 5.00,
    quantity: 0
  },
  {
    name: 'strawberry',
    price: 5.00,
    quantity: 0
  },
  {
    name: 'gummy bears',
    price: 2.50,
    quantity: 0
  },
  {
    name: 'round chocolate',
    price: 2.50,
    quantity: 0
  },
  {
    name: 'chocolate chunks',
    price: 2.50,
    quantity: 0
  },
  {
    name: 'waffle cone',
    price: 3.00,
    quantity: 0
  },
  {
    name: 'bowl',
    price: 1.50,
    quantity: 0
  },
]


function addVanillaToCart() {
  const vanilla = menuItems[0]
  vanilla.quantity++
  console.log('you clicked the button', vanilla);
}

function addChocolateToCart() {
  const chocolate = menuItems[1]
  chocolate.quantity++
  console.log('you clicked the button', chocolate);
}

function addStrawberryToCart() {
  const strawberry = menuItems[2]
  strawberry.quantity++
  console.log('you clicked the button', strawberry);
}

function addGummyBearsToCart() {
  const gummyBears = menuItems[3]
  gummyBears.quantity++
  console.log('you clicked the button', gummyBears);
}

function addRoundChocolateToCart() {
  const roundChocolate = menuItems[4]
  roundChocolate.quantity++
  console.log('you clicked the button', roundChocolate);
}

function addChocolateChunksToCart() {
  const chocolateChunks = menuItems[5]
  chocolateChunks.quantity++
  console.log('you clicked the button', chocolateChunks);
}

function addWaffleConeToCart() {
  const waffleCone = menuItems[6]
  waffleCone.quantity++
  console.log('you clicked the button', waffleCone);
}

function addBowlToCart() {
  const bowl = menuItems[7]
  bowl.quantity++
  console.log('you clicked the button', bowl);
}

function cartTotal() {
  let total = 0
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    total += menuItem.price * menuItem.quantity
  }

  return total

}

