$(function() {
    $('#mensagemView').on('click', '.close', function() {
        $(this).closest('.message').transition('fade');
    });
});