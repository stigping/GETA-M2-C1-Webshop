const model = {
    currentPage: 'Home',
    products: [
        { id: 0, name: 'Kokkejævelens kyllinggryte', productInfo: 'Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning!', contents: ['Kylling', 'Fløte', 'Grønnsaker'], moms: '0%', calories: '247', price: '50', allergies: 'Melk', stock: '995', images: ['https://dbstatic.no/71605105.jpg?imageId=71605105&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png'] },
        { id: 1, name: 'Alle biffgryters bestemor', productInfo: 'Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning!', contents: ['Biff', 'Grønnsaker'], moms: '0%', calories: '237', price: '51', allergies: '', stock: '15', images: ['https://i2.wp.com/gavehjelp.org/wp-content/uploads/2018/06/gave-til-bestemor.png?resize=1280%2C720&ssl=1', 'https://www.nordichosting.com/u/toff-bestemor.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png'] },
        { id: 2, name: 'Tom Peng Pong Asiatisk gryte', productInfo: 'Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning!', contents: ['Biff', 'Høns', 'Hund'], moms: '0%', calories: '247', price: '52', allergies: '', stock: '56', images: ['https://gfx.nrk.no/GBL_8EDDXL-ywLiIiV4lgQDpFDWKScAK4oSyJSmpbuIQ.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png'] },
        { id: 3, name: 'Lange slappe nudlær', productInfo: 'Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning!', contents: ['Nudler', 'Katt', 'Krydder'], moms: '0%', calories: '189', price: '53', allergies: 'Katt', stock: '53', images: ['https://www.tine.no/_/recipeimage/w_1280%2Ch_720%2Cc_fill%2Cx_1500%2Cy_1124%2Cg_xy_center/recipeimage/349406.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png'] },
        { id: 4, name: 'Stor Fin Fisk', productInfo: 'Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning! Hei jeg er en test setning!', contents: ['Fisk', 'Bønner', 'Krydder'], moms: '0%', calories: '999', price: '54', allergies: 'Hai', stock: '6', images: ['https://www.hooked.no/wp-content/uploads/2017/01/Store-agn-for-stor-fisk-4.jpg', 'https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png', 'https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png', 'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png', 'https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png'] },
    ],
    purchaseHistory: [
        { id: 0, amount: 7},
        { id: 1, amount: 10},
        { id: 2, amount: 5},
        { id: 3, amount: 15},
        { id: 4, amount: 20},
    ],
    shoppingBasket: { products: [], priceTotalAll: null },
    currentUserId: null,
    users: [
        { id: 0, username: 'jorn', name: 'Jørn', surname: 'Haga', email: 'gmail@mail.no', phoneNumber: 123456789, address: 'Gokrysset 6', password: 'test', isAdmin: true },
        { id: 1, username: 'karl', name: 'Karl', surname: 'Johann', email: 'gmail@mail.no', phoneNumber: 123456789, address: 'Krølveien 4', password: 'test', isAdmin: false },
        { id: 2, username: 'ola', name: 'Ola', surname: 'Normann', email: 'gmail@mail.no', phoneNumber: 123456789, address: 'Bøgata 50', password: 'test', isAdmin: false },
        { id: 3, username: 'bent', name: 'Bent', surname: 'Johansen', email: 'gmail@mail.no', phoneNumber: 123456789, address: 'Snikkers', password: 'test', isAdmin: false },
        { id: 4, username: 'knut', name: 'Knut', surname: 'Knudsen', email: 'gmail@mail.no', phoneNumber: 123456789, address: 'Grøldal', password: 'test', isAdmin: false }
    ],
    paymentModel: { vipps: {}, paypal: {}, card: {} },
    orderHistory: [
        {
            id: 0,
            orderList: [{ orderId: 0, delivered: true, productsId: [0], productsAmount: [5] }],
            nextOrderId: 1,
        },
        {
            id: 1,
            orderList: [],
            nextOrderId: 0,
        },
        {
            id: 2,
            orderList: [],
            nextOrderId: 0,
        },
        {
            id: 3,
            orderList: [],
            nextOrderId: 0,
        },
        {
            id: 4,
            orderList: [],
            nextOrderId: 0,
        },
    ],
    productShowBox: {
        productShownId: null,
        currentImage: 0,
        currentTab: 0,
    },
    inputs: {
        newUserId: 5,
        newProductId: 5,
        user: {
            createNewUserEdit: false,
            editPassword: {
                oldPassword: '',
                newPassword: '',
            },
            editUserInput: {
                id: null,
                username: null,
                name: null,
                surname: null,
                email: null,
                password: null,
                phoneNumber: null,
            },
            newUserInputs: {
                username: null,
                name: null,
                surname: null,
                email: null,
                password: null,
                phoneNumber: null,
            },
            loginInput: {
                username: null,
                password: null,
            }
        },
        admin: {
            productIsEditing: false,
            userIsEditing: false,
            editProductInputs: {
                id: null,
                name: null,
                moms: null,
                productInfo: null,
                contents: null,
                calories: null,
                allergies: null,
                price: null,
                images: null,
            },
            newProductInputs: {
                id: null,
                name: null,
                moms: null,
                productInfo: null,
                contents: null,
                calories: null,
                allergies: null,
                price: null,
                images: null,
            },
            newUserInputs: {
                username: null,
                name: null,
                surname: null,
                email: null,
                phoneNumber: null,
                password: null,
                isAdmin: null,
            },
            editUserInputs: {
                id: null,
                username: null,
                name: null,
                surname: null,
                email: null,
                phoneNumber: null,
                password: null,
                isAdmin: null,
            }
        }
    },
}