var orders = [200000, 500000, 400000, 20000, 80000, 800000, 50000, 3950000];
var percentOfTotal = 0;
var currentAmount = 0;
var goalAmount = 30000000;
var progressBarMain = document.getElementById('progress');
var progressBarForm = document.getElementById('progress2');

//Calculates total amount
function calculateTotal () {
    for(var i = 0; i < orders.length; i++){
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
function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Elements displaying total amount
document.querySelector('.current-amount').innerHTML = numberWithCommas(currentAmount);


