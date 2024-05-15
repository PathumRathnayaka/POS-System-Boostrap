$("#Home").click(function (){
    console.log("asnjns")
    $('#homediv').css('display','block');
    $('#customerPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#OrderPage').css('display','none');
});

$('#Customer').click(function (){
    $('#homediv').css('display','none');
    $('#customerPage').css('display','block');
    $('#itemPage').css('display','none');
    $('#OrderPage').css('display','none');
});

$('#Item').click(function (){
    $('#homediv').css('display','none');
    $('#customerPage').css('display','none');
    $('#itemPage').css('display','block');
    $('#OrderPage').css('display','none');
});

$('#Order').click(function (){
    $('#homediv').css('display','none');
    $('#customerPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#OrderPage').css('display','block');
})

/*---------------------------ItemPage-------------------------*/

function addItems(){
    var itemId = document.getElementById("itemId").value;
    var itemName = document.getElementById("itemName").value;
    var itemQty = document.getElementById("itemQty").value;
    var description = document.getElementById("description").value;
    var unitPrice = document.getElementById("unitPrice").value;

    var tr =document.createElement("tr");

    var td1 =tr.appendChild(document.createElement("td"));
    var td2 =tr.appendChild(document.createElement("td"));
    var td3 =tr.appendChild(document.createElement("td"));
    var td4 =tr.appendChild(document.createElement("td"));
    var td5 =tr.appendChild(document.createElement("td"));
    var td6 =tr.appendChild(document.createElement("td"));
    var td7 =tr.appendChild(document.createElement("td"));


    td1.innerHTML = itemId;
    td2.innerHTML = itemName;
    td3.innerHTML = itemQty;
    td4.innerHTML = description;
    td5.innerHTML = unitPrice;
    td6.innerHTML ='<button class="btn btn-danger" name="del" type="button" onclick="DeleteItems(this);">Delete</button>'
    td7.innerHTML ='<button class="btn btn-success" name="up" type="button" onclick="updateItems(this);">Update</button>'

    document.getElementById('tbl').appendChild(tr);

}

function updateItems(itms){
    var itemId = document.getElementById("itemId").value;
    var itemName = document.getElementById("itemName").value;
    var itemQty = document.getElementById("itemQty").value;
    var description = document.getElementById("description").value;
    var unitPrice = document.getElementById("unitPrice").value;

    var itm=itms.parentNode.parentNode;
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    td1.innerHTML='<input type="text" name="upItemId">'
    td2.innerHTML='<input type="text" name="upItemName">'
    td3.innerHTML='<input type="text" name="upQty">'
    td4.innerHTML='<input type="text" name="upDescription">'
    td5.innerHTML='<input type="text" name="upUnitPrice">'
    td6.innerHTML='<button class="btn btn-danger" name="del" type="button" onclick="DeleteItems(this);">Delete</button>'
    td7.innerHTML='<button class="btn btn-success" name="up" type="button" onclick="addUpdateItems(this);">Update</button>'

    document.getElementById("tbl").replaceChild(tr,itm);
}


function addUpdateItems(itms){
    var itemId = document.querySelector('input[name="upItemId"]').value;
    var itemName = document.querySelector('input[name="upItemName"]').value;
    var itemQty = document.querySelector('input[name="upQty"]').value;
    var description = document.querySelector('input[name="upDescription"]').value;
    var unitPrice = document.querySelector('input[name="upUnitPrice"]').value;


    var itm = itms.parentNode.parentNode;
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = itemId;
    td2.innerHTML = itemName;
    td3.innerHTML = itemQty;
    td4.innerHTML = description;
    td5.innerHTML = unitPrice;
    td6.innerHTML ='<button class="btn btn-danger" type="button" onclick="DeleteItems(this);">Delete</button>'
    td7.innerHTML ='<button class="btn btn-success" type="button" onclick="updateItems(this);">Update</button>'

    document.getElementById("tbl").replaceChild(tr, itm);
}


function DeleteItems(Itm){
    var itm=Itm.parentNode.parentNode;
    itm.parentNode.removeChild(itm);
}

/*-------------------Cusromer Page-------*/

function addCustomer(){
    var customerID = document.getElementById("customerId").value;
    var customerName = document.getElementById("customerName").value;
    var customerAddress = document.getElementById("customerAddress").value;
    var email = document.getElementById("email").value;
    var customerContact = document.getElementById("customerContact").value;

    var tr = document.createElement("tr");

    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));
    var td5 = tr.appendChild(document.createElement("td"));
    var td6 = tr.appendChild(document.createElement("td"));
    var td7 = tr.appendChild(document.createElement("td"));

    td1.innerHTML = customerID;
    td2.innerHTML = customerName;
    td3.innerHTML = customerAddress;
    td4.innerHTML = email;
    td5.innerHTML = customerContact;
    td6.innerHTML = '<button class="btn btn-danger" name="del" type="button" onclick="DeleteCustomer(this);">Delete</button>';
    td7.innerHTML = '<button class="btn btn-success" name="up" type="button" onclick="updateCustomer(this);">Update</button>';

    document.getElementById('tblCustomer').appendChild(tr);

}

function updateCustomer(cstm){
    var customerID =document.getElementById("customerId").value;
    var customerName =document.getElementById("customerName").value;
    var customerAddress =document.getElementById("customerAddress").value;
    var email =document.getElementById("email").value;
    var customerContact =document.getElementById("customerContact").value;

    var cst = cstm.parentNode.parentNode;
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    td1.innerHTML='<input type="text" name="upCustomerId">'
    td2.innerHTML='<input type="text" name="upCustomerName">'
    td3.innerHTML='<input type="text" name="upCustomerAddress">'
    td4.innerHTML='<input type="text" name="upEmail">'
    td5.innerHTML='<input type="text" name="upCustomerContact">'
    td6.innerHTML='<button class="btn btn-danger" name="del" type="button" onclick="DeleteCustomer(this);">Delete</button>'
    td7.innerHTML='<button class="btn btn-success" name="up" type="button" onclick="addUpdateCustomer(this);">Update</button>'

    document.getElementById("tblCustomer").replaceChild(tr,cst);
}

function addUpdateCustomer(cstm){
    var customerID = document.querySelector('input[name="upCustomerId"]').value;
    var customerName = document.querySelector('input[name="upCustomerName"]').value;
    var customerAddress = document.querySelector('input[name="upCustomerAddress"]').value;
    var email = document.querySelector('input[name="upEmail"]').value;
    var customerContact = document.querySelector('input[name="upCustomerContact"]').value;

    var cst = cstm.parentNode.parentNode;
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = customerID;
    td2.innerHTML = customerName;
    td3.innerHTML = customerAddress;
    td4.innerHTML = email;
    td5.innerHTML = customerContact;
    td6.innerHTML = '<button class="btn btn-danger" type="button" onclick="DeleteCustomer(this);">Delete</button>'
    td7.innerHTML = '<button class="btn btn-success" type="button" onclick="updateCustomer(this);">Update</button>'

    document.getElementById("tblCustomer").replaceChild(tr,cst);

}

function DeleteCustomer(Cstm){
    var cstm=Cstm.parentNode.parentNode;
    cstm.parentNode.removeChild(cstm);
}
