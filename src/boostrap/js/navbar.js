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
