$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = $('#hours').val();
        if (hours <= 0) {
            $('#validationMessage').show();
            $('#totalCost').val('');
            
        } else {
            $('#validationMessage').hide();
            var rate = $('#ratePerHour').val();
            var total = hours * rate;
            $('#totalCost').val(total.toFixed(2));
        }
    });

    $('#hours').change(function () {
        $('#validationMessage').hide();
    });
});

