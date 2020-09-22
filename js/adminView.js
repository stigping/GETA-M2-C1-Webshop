function showAdmin() {
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
                <li><a href="javascript:showF()">ACCOUNT</a></li>
                <li><a href="javascript:showD()">HOW TO MAKE</a></li>
                <li><a href="javascript:showC()">ADMIN</a></li>
            </ul>
        </div>
    </div>

    <div id="mainContent">
        
        <div class="products">
            <h3>Products</h3>
            <div id="addProductDiv">
                <form ${model.productIsEditing === true ? 'style="display: none"' : ''}>
                    <button type="button" onclick="adminAddNewProduct()">Add Product</button>
                    <input type="text" placeholder="name" onchange="model.inputs.newProductInputs.name = this.value"></input>
                    <input type="text" placeholder="productInfo" onchange="model.inputs.newProductInputs.productInfo = this.value"></input>
                    <input type="text" placeholder="contents" onchange="model.inputs.newProductInputs.contents = this.value"></input> <br>
                    <input type="text" placeholder="price" onchange="model.inputs.newProductInputs.price = this.value"></input>
                    <input type="text" placeholder="calories" onchange="model.inputs.newProductInputs.calories = this.value"></input>
                    <input type="text" placeholder="allergies" onchange="model.inputs.newProductInputs.allergies = this.value"></input>
                    <input type="text" placeholder="moms" onchange="model.inputs.newProductInputs.moms = this.value"></input>
                    <input type="file">Upload images</input>
                </form>
            </div>
            <div id="editProductDiv">
                <form ${model.productIsEditing === false ? 'style="display: none"' : ''}>
                    <button type="button" onclick="updateProduct(true)">Edit Product</button> <button type="button" onclick="updateProduct(false)">Cancel</button>
                    <input type="text" placeholder="name" value="${model.inputs.editProductInputs.name}" onchange="model.inputs.editProductInputs.name = this.value"></input>
                    <input type="text" placeholder="productInfo" value="${model.inputs.editProductInputs.productInfo}" onchange="model.inputs.editProductInputs.productInfo = this.value"></input>
                    <input type="text" placeholder="contents" value="${model.inputs.editProductInputs.contents}" onchange="model.inputs.editProductInputs.contents = this.value"></input> <br>
                    <input type="text" placeholder="price" value="${model.inputs.editProductInputs.price}" onchange="model.inputs.editProductInputs.price = this.value"></input>
                    <input type="text" placeholder="calories" value="${model.inputs.editProductInputs.calories}" onchange="model.inputs.editProductInputs.calories = this.value"></input>
                    <input type="text" placeholder="allergies" value="${model.inputs.editProductInputs.allergies}" onchange="model.inputs.editProductInputs.allergies = this.value"></input>
                    <input type="text" placeholder="moms" value="${model.inputs.editProductInputs.moms}" onchange="model.inputs.editProductInputs.moms = this.value"></input>
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
                <form ${model.userIsEditing === true ? 'style="display: none"' : ''}>
                    <button type="button" onclick="adminAddUser()">Add User</button>
                    <input type="text" placeholder="Username" onchange="model.inputs.newUserInputs.username = this.value"></input>
                    <input type="text" placeholder="First name" onchange="model.inputs.newUserInputs.name = this.value"></input>
                    <input type="text" placeholder="Surname" onchange="model.inputs.newUserInputs.surname = this.value"></input>
                    <input type="text" placeholder="E-mail" onchange="model.inputs.newUserInputs.email = this.value"></input>
                    <input type="text" placeholder="Phone Number" onchange="model.inputs.newUserInputs.phoneNumber = this.value"></input>
                    <input type="text" placeholder="Password" onchange="model.inputs.newUserInputs.password = this.value"></input>
                    <input type="text" placeholder="Admin" onchange="model.inputs.newUserInputs.isAdmin = this.value"></input>
                </form>
            </div>
            <div id="editUsersDiv">
                <form ${model.userIsEditing === false ? 'style="display: none"' : ''}>
                        <button type="button" onclick="adminEditUser('', true)">Edit User</button> <button type="button" onclick="adminEditUser('', false)">Cancel</button>
                        <input type="text" placeholder="Username" value="${model.inputs.editUserInputs.username}" onchange="model.inputs.editUserInputs.username = this.value"></input>
                        <input type="text" placeholder="First name" value="${model.inputs.editUserInputs.name}" onchange="model.inputs.editUserInputs.name = this.value"></input>
                        <input type="text" placeholder="Surname" value="${model.inputs.editUserInputs.surname}" onchange="model.inputs.editUserInputs.surname = this.value"></input>
                        <input type="text" placeholder="E-mail" value="${model.inputs.editUserInputs.email}" onchange="model.inputs.editUserInputs.email = this.value"></input>
                        <input type="text" placeholder="Phone Number" value="${model.inputs.editUserInputs.phoneNumber}" onchange="model.inputs.editUserInputs.phoneNumber = this.value"></input>
                        <input type="text" placeholder="Password" value="${model.inputs.editUserInputs.password}" onchange="model.inputs.editUserInputs.password = this.value"></input>
                        <input type="text" placeholder="Admin" value="${model.inputs.editUserInputs.isAdmin}" onchange="model.inputs.editUserInputs.isAdmin = this.value"></input>
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