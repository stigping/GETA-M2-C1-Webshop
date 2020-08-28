const model = {
        products: [
            {id: 0, name: 'Kokkejævelens kyllinggryte', productInfo: 'Denne smaker godt', contents: ['Kylling', 'Fløte', 'Grønnsaker'], calories: '247', price: '50', allergies: 'Melk', images: ['https://cdn.pixabay.com/photo/2019/12/14/15/22/bread-4695110_1280.png', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 1, name: 'Alle biffgryters bestemor', productInfo: 'Denne smaker godt', contents: ['Biff', 'Grønnsaker'], calories: '237', price: '51', allergies: '', images:null,},
            {id: 2, name: 'Tom Peng Pong Asiatisk gryte', productInfo: 'Denne smaker godt', contents: ['Biff', 'Høns', 'Hund'], calories: '247', price: '52', allergies: '', images: null,},
            {id: 3, name: 'Lange slappe nudlær', productInfo: 'Denne smaker godt', contents: ['Nudler', 'Katt', 'Krydder'], calories: '189', price: '53', allergies: 'Katt', images: null,},
            {id: 4, name: 'Stor Fin Fisk', productInfo: 'Denne smaker godt', contents: ['Fisk', 'Bønner', 'Krydder'], calories: '999', price: '54', allergies: 'Hai'}
            ],
        shoppingBasket: [ {username: 'karl', productId: [0, 2, 3, 3], amount: '13', priceTotal: null},
                          {username: 'jorn', productId: [{productName:'Kokkejævelens kyllinggryte', amount: 5, id:0}], amount: '50', priceTotal: null}],
        users: [
            {username: 'jorn', name: 'Jørn', password:'test', id:'0', isAdmin: true},
            {username: 'karl', name: 'Karl', password:'test', id:'1', isAdmin: false}
            ],
        paymentModel: {vipps: {}, paypal: {}, card: {}},
        orderHistory:[
            {username: 'karl', orderList: ['test'], id: '0'}
        ],
        currentPage: 'Home',
        inputs: {
            productShownId: null,
        },
}