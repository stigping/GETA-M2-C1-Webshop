const model = {
        products: [
            {id: 0, name: 'Kokkejævelens kyllinggryte', contents: ['Kylling', 'Fløte', 'Grønnsaker'], calories: '247', allergies: 'Melk'},
            {id: 1, name: 'Alle biffgryters bestemor', contents: ['Biff', 'Grønnsaker'], calories: '237', allergies: ''},
            {id: 2, name: 'Tom Peng Pong Asiatisk gryte', contents: ['Biff', 'Høns', 'Hund'], calories: '247', allergies: ''},
            {id: 3, name: 'Lange slappe nudlær', contents: ['Nudler', 'Katt', 'Krydder'], calories: '189', allergies: 'Katt'},
            {id: 4, name: 'Stor Fin Fisk', contents: ['Fisk', 'Bønner', 'Krydder'], calories: '999', allergies: 'Hai'}
            ],
        shoppingBasket: {products: null, amount: null, priceTotal: null},
        users: [
            {username: 'jorn', name: 'Jørn', password:'test', id:'0', isAdmin: true},
            {username: 'karl', name: 'Karl', password:'test', id:'1', isAdmin: false}
            ],
        paymentModel: {vipps: {}, paypal: {}, card: {}},
        orderHistory:[
            {username: 'karl', orderList: [], id: '0'}
        ],
};