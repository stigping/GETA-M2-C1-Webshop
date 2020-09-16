const model = {
        products: [
            {id: 0, name: 'Kokkejævelens kyllinggryte', productInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.', contents: ['Kylling', 'Fløte', 'Grønnsaker'], moms: '0%', calories: '247', price: '50', allergies: 'Melk', stock: '995', purchaseHistory: '0', images: ['https://dbstatic.no/71605105.jpg?imageId=71605105&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 1, name: 'Alle biffgryters bestemor', productInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.', contents: ['Biff', 'Grønnsaker'], moms: '0%', calories: '237', price: '51', allergies: '', stock: '15', purchaseHistory: '0', images: ['https://i2.wp.com/gavehjelp.org/wp-content/uploads/2018/06/gave-til-bestemor.png?resize=1280%2C720&ssl=1', 'https://www.nordichosting.com/u/toff-bestemor.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 2, name: 'Tom Peng Pong Asiatisk gryte', productInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.', contents: ['Biff', 'Høns', 'Hund'], moms: '0%', calories: '247', price: '52', allergies: '', stock: '56', purchaseHistory: '0', images: ['https://gfx.nrk.no/GBL_8EDDXL-ywLiIiV4lgQDpFDWKScAK4oSyJSmpbuIQ.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 3, name: 'Lange slappe nudlær', productInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.', contents: ['Nudler', 'Katt', 'Krydder'], moms: '0%', calories: '189', price: '53', allergies: 'Katt', stock: '53', purchaseHistory: '0', images: ['https://www.tine.no/_/recipeimage/w_1280%2Ch_720%2Cc_fill%2Cx_1500%2Cy_1124%2Cg_xy_center/recipeimage/349406.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']},
            {id: 4, name: 'Stor Fin Fisk', productInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.', contents: ['Fisk', 'Bønner', 'Krydder'], moms: '0%', calories: '999', price: '54', allergies: 'Hai', stock: '6', purchaseHistory: '0', images: ['https://www.hooked.no/wp-content/uploads/2017/01/Store-agn-for-stor-fisk-4.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png']}
            ],
        shoppingBasket: [ {username: 'jorn', products: [], priceTotalAll: null, id: '0'},
                          {username: 'karl', products: [{id: 1, amount: 10, priceTotal: 40}, {id: 4, amount: 10, priceTotal: 40}], priceTotalAll: null, id: '1'}],
        currentUser:{username: 'jorn', isAdmin: true, id:'0'},
        users: [
            {username: 'jorn', name: 'Jørn', surname: 'Haga', email: 'gmail@mail.no', password:'test', id: 0, isAdmin: true},
            {username: 'karl', name: 'Karl', surname: 'Johann', email: 'gmail@mail.no', password:'test', id: 1, isAdmin: false},
            {username: 'ola', name: 'Ola', surname: 'Normann', email: 'gmail@mail.no', password:'test', id: 2, isAdmin: false},
            {username: 'bent', name: 'Bent', surname: 'Johansen', email: 'gmail@mail.no', password:'test', id: 3, isAdmin: false},
            {username: 'knut', name: 'Knut', surname: 'Knudsen', email: 'gmail@mail.no', password:'test', id: 4, isAdmin: false}
            ],
        paymentModel: {vipps: {}, paypal: {}, card: {}},
        orderHistory:[
            {username: 'karl', orderList: ['test'], id: '0'}
        ],
        productShowBox: {
            productShownId: null,
            currentImage: 0,
            currentTab: 0,
        },
        currentPage: 'Home',
        isEditing: false,
        inputs: {
                editProductInputs: {
                name: null,
                moms: null,
                productInfo: null,
                contents: null,
                calories: null,
                allergies: null,
                price: null,
                images: null
            },
            newProductInputs: {
                id: 5,
                name: null,
                moms: null,
                productInfo: null,
                contents: null,
                calories: null,
                allergies: null,
                price: null,
                images: null
            },
            newUserInputs: {
                username: null, 
                name: null, 
                surname: null, 
                email: null, 
                password: null, 
                id: 5, 
                isAdmin: null,
            }
        },
}