var orders = [200000, 500000, 400000, 20000, 80000, 800000, 50000, 3950000];
var percentOfTotal = 0;
var currentAmount = 0;
var goalAmount = 30000000;
var progressBarMain = document.getElementById('progress');
var progressBarForm = document.getElementById('progress2');
var formAmount = 0;

//Resets form
function reset() {
    document.getElementById('contributionForm').reset()
    $('label').css('color', '#878787');
}
//Calculates total amount
function calculateTotal() {
    for (var i = 0; i < orders.length; i++) {
        currentAmount += orders[i];
    }

    percentOfTotal = (currentAmount / goalAmount * 100);
    percentOfTotal = Math.round(percentOfTotal * 100) / 100;

    //updates the progress bars
    progressBarMain.style.width = percentOfTotal + "%";
    progressBarForm.style.width = percentOfTotal + "%";
}
calculateTotal();

//puts commas in the proper space to display dollar amount
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Elements displaying total amount
document.querySelector('.current-amount').innerHTML = numberWithCommas(currentAmount);

function doSubmit() {
    //makes sure custom amount is positive number if selected
    if ($('#fourth').is(':checked')) {
        if (parseInt($('#custom').val()) > 0) {
            $('#fourth').val($('#custom').val());
        } else {
            alert("You must enter a number greater than zero.");
            reset();
            return;
        }
    }

    //Loop through radio buttons and get value of selected box
    $('input[name="amount"]:checked').each(function() {
        formAmount = parseFloat(this.value);
        formAmount = Math.round(formAmount * 100) / 100;
    });

    orders.push(formAmount);
    currentAmount = 0;
    calculateTotal();
    reset();
}