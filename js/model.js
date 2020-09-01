const model = {
        products: [
            {id: 0, name: 'Kokkejævelens kyllinggryte', productInfo: 'Denne smaker godt', contents: ['Kylling', 'Fløte', 'Grønnsaker'], moms: '0%', calories: '247', price: '50', allergies: 'Melk', images: ['https://dbstatic.no/71605105.jpg?imageId=71605105&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 1, name: 'Alle biffgryters bestemor', productInfo: 'Denne også', contents: ['Biff', 'Grønnsaker'], moms: '0%', calories: '237', price: '51', allergies: '', images: ['https://i2.wp.com/gavehjelp.org/wp-content/uploads/2018/06/gave-til-bestemor.png?resize=1280%2C720&ssl=1', 'https://www.nordichosting.com/u/toff-bestemor.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 2, name: 'Tom Peng Pong Asiatisk gryte', productInfo: 'Denne er kjempe god asiatisk', contents: ['Biff', 'Høns', 'Hund'], moms: '0%', calories: '247', price: '52', allergies: '', images: ['https://gfx.nrk.no/GBL_8EDDXL-ywLiIiV4lgQDpFDWKScAK4oSyJSmpbuIQ.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 3, name: 'Lange slappe nudlær', productInfo: 'Jadadas', contents: ['Nudler', 'Katt', 'Krydder'], moms: '0%', calories: '189', price: '53', allergies: 'Katt', images: ['https://www.tine.no/_/recipeimage/w_1280%2Ch_720%2Cc_fill%2Cx_1500%2Cy_1124%2Cg_xy_center/recipeimage/349406.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 4, name: 'Stor Fin Fisk', productInfo: 'ersrdarsae', contents: ['Fisk', 'Bønner', 'Krydder'], moms: '0%', calories: '999', price: '54', allergies: 'Hai', images: ['https://www.hooked.no/wp-content/uploads/2017/01/Store-agn-for-stor-fisk-4.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']}
            ],
        shoppingBasket: [ {username: 'karl', products: [{id: 0, amount: '13', priceTotal: 50}, {id: 1, amount: '40', priceTotal: 10}], priceTotalAll: null},
                          {username: 'jorn', products: [{id: 1, amount: '10', priceTotal: 40}], priceTotalAll: null}],
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