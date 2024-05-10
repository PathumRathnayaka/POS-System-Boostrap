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


    td1.innerHTML = itemId;
    td2.innerHTML = itemName;
    td3.innerHTML = itemQty;
    td4.innerHTML = description;
    td5.innerHTML = unitPrice;

    document.getElementById('tbl').appendChild(tr);

}

function updateItems(){
    var itemId = document.getElementById("itemId").value;
    var itemName = document.getElementById("itemName").value;
    var itemQty = document.getElementById("itemQty").value;
    var description = document.getElementById("description").value;
    var unitPrice = document.getElementById("unitPrice").value;
}
