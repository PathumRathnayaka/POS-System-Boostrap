$('#Home').click(function (){
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
});