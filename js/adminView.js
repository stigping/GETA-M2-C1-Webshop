function showAdmin() {
    const adminInputs = model.inputs.admin;
    appDiv.innerHTML = `
</div>
    <div id="grid-container">
    <div id="headerContent">
        <div class='logoWrap'>
            <a href="javascript:showA()">LUNCHPOWER</a>
        </div>
        <div class='inner-menu'>
            <ul class='menuWrap'>
                <li class='active'><a href="javascript:showA()">HOME</a></li>
                <li><a href="javascript:showB()">CART</a></li>
                <li><a href="javascript:showD()">HOW TO MAKE</a></li>
                <li><a href="javascript:showF()">ACCOUNT</a></li>
                <li><a href="javascript:showC()">ADMIN</a></li>
            </ul>
        </div>
    </div>

    <div id="mainContent">
        
        <div class="products">
            <h3>Products</h3>
            <div id="addProductDiv">
                <form ${adminInputs.productIsEditing === true ? 'style="display: none"' : ''}>
                    <button type="button" onclick="adminAddNewProduct()">Add Product</button>
                    <input type="text" placeholder="name" onchange="adminInputs.newProductInputs.name = this.value"></input>
                    <input type="text" placeholder="productInfo" onchange="adminInputs.newProductInputs.productInfo = this.value"></input>
                    <input type="text" placeholder="contents" onchange="adminInputs.newProductInputs.contents = this.value"></input> <br>
                    <input type="text" placeholder="price" onchange="adminInputs.newProductInputs.price = this.value"></input>
                    <input type="text" placeholder="calories" onchange="adminInputs.newProductInputs.calories = this.value"></input>
                    <input type="text" placeholder="allergies" onchange="adminInputs.newProductInputs.allergies = this.value"></input>
                    <input type="text" placeholder="moms" onchange="adminInputs.newProductInputs.moms = this.value"></input>
                    <input type="file">Upload images</input>
                </form>
            </div>
            <div id="editProductDiv">
                <form ${adminInputs.productIsEditing === false ? 'style="display: none"' : ''}>
                    <button type="button" onclick="updateProduct(true)">Edit Product</button> <button type="button" onclick="updateProduct(false)">Cancel</button>
                    <input type="text" placeholder="name" value="${adminInputs.editProductInputs.name}" onchange="adminInputs.editProductInputs.name = this.value"></input>
                    <input type="text" placeholder="productInfo" value="${adminInputs.editProductInputs.productInfo}" onchange="adminInputs.editProductInputs.productInfo = this.value"></input>
                    <input type="text" placeholder="contents" value="${adminInputs.editProductInputs.contents}" onchange="adminInputs.editProductInputs.contents = this.value"></input> <br>
                    <input type="text" placeholder="price" value="${adminInputs.editProductInputs.price}" onchange="adminInputs.editProductInputs.price = this.value"></input>
                    <input type="text" placeholder="calories" value="${adminInputs.editProductInputs.calories}" onchange="adminInputs.editProductInputs.calories = this.value"></input>
                    <input type="text" placeholder="allergies" value="${adminInputs.editProductInputs.allergies}" onchange="adminInputs.editProductInputs.allergies = this.value"></input>
                    <input type="text" placeholder="moms" value="${adminInputs.editProductInputs.moms}" onchange="adminInputs.editProductInputs.moms = this.value"></input>
                    <input type="file">Upload images</input>
                </form>
            </div>
            <div class="showproducts">
                <ul>
                ${showProducts()}
                </ul>
            </div>
        </div>

        <div class="stats">
            <div>
                <h3>Stats</h3>
            </div>
            <div class="showchart">
                <canvas id="myChart"></canvas>
                <br>
            </div>
            <div>
                <p>stat graph illustration</p>
            </div>
            <div class="showpgraph">
            </div>
        </div>
        
        <div class="users">
        <div>
            <h3>Users</h3>
            <div id="addUsersDiv">
                <form ${adminInputs.userIsEditing === true ? 'style="display: none"' : ''}>
                    <button type="button" onclick="adminAddUser()">Add User</button>
                    <input type="text" placeholder="Username" onchange="adminInputs.newUserInputs.username = this.value"></input>
                    <input type="text" placeholder="First name" onchange="adminInputs.newUserInputs.name = this.value"></input>
                    <input type="text" placeholder="Surname" onchange="adminInputs.newUserInputs.surname = this.value"></input>
                    <input type="text" placeholder="E-mail" onchange="adminInputs.newUserInputs.email = this.value"></input>
                    <input type="text" placeholder="Phone Number" onchange="adminInputs.newUserInputs.phoneNumber = this.value"></input>
                    <input type="text" placeholder="Password" onchange="adminInputs.newUserInputs.password = this.value"></input>
                    <input type="text" placeholder="Admin" onchange="adminInputs.newUserInputs.isAdmin = this.value"></input>
                </form>
            </div>
            <div id="editUsersDiv">
                <form ${adminInputs.userIsEditing === false ? 'style="display: none"' : ''}>
                        <button type="button" onclick="updateUser(true)">Edit User</button> <button type="button" onclick="updateUser(false)">Cancel</button>
                        <input type="text" placeholder="Username" value="${adminInputs.editUserInputs.username}" onchange="adminInputs.editUserInputs.username = this.value"></input>
                        <input type="text" placeholder="First name" value="${adminInputs.editUserInputs.name}" onchange="adminInputs.editUserInputs.name = this.value"></input>
                        <input type="text" placeholder="Surname" value="${adminInputs.editUserInputs.surname}" onchange="adminInputs.editUserInputs.surname = this.value"></input>
                        <input type="text" placeholder="E-mail" value="${adminInputs.editUserInputs.email}" onchange="adminInputs.editUserInputs.email = this.value"></input>
                        <input type="text" placeholder="Phone Number" value="${adminInputs.editUserInputs.phoneNumber}" onchange="adminInputs.editUserInputs.phoneNumber = this.value"></input>
                        <input type="text" placeholder="Password" value="${adminInputs.editUserInputs.password}" onchange="adminInputs.editUserInputs.password = this.value"></input>
                        <input type="text" placeholder="Admin" value="${adminInputs.editUserInputs.isAdmin}" onchange="adminInputs.editUserInputs.isAdmin = this.value"></input>
                </form>
            </div>
        </div>
            <div class="showusers">
                <ul>
                ${showUsers()}
                </ul>
            </div>
        </div>

        ${showMobileMenu()} 

    <div id="footerContentNoScroll">
        <a href="#" class="footer-text">LUNCHPOWER</a>
    </div>
</div>
    `;
    showChart();
}

function showProducts() {
    let html = '';
    for (i = 0; i < model.products.length; i++) {
    html += `<li>${model.products[i].name} 
             <button class="removeBtn" onclick="adminRemoveProduct(${model.products[i].id})">Remove</button> 
             <button class="editBtn" onclick="adminEditProduct(${model.products[i].id})">Edit</button>
             </li>`
    }
    return html
}

function showUsers() {
    let html = '';
    for (i = 0; i < model.users.length; i++) {
    html += `<li>${model.users[i].name+' '+model.users[i].surname} 
             <button class="removeBtn" onclick="adminRemoveUser(${model.users[i].id})">Remove</button> 
             <button class="editBtn" onclick="adminEditUser(${model.users[i].id})">Edit</button></li>`
    }
    return html
}

function showChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Kokkejævelens kyllinggryte', 'Alle biffgryters bestemor', 'Tom Peng Pong Asiatisk gryte', 'Lange slappe nudlær', 'Stor Fin Fisk'],
        datasets: [{
            label: 'Antall Salg',
            backgroundColor: 'rgb(255, 99, 132)',
            hoverBorderColor: '#000000',
            hoverBorderWidth: '1',
            data: [model.products[0].purchaseHistory, model.products[1].purchaseHistory, model.products[2].purchaseHistory, model.products[3].purchaseHistory, model.products[4].purchaseHistory]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: '#ffffff'
            }
        },
        maintainAspectRatio: false
    }
});
}