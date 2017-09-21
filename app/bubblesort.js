var mas = [3,2,1,3];

function bubbleSort(mas) {
    for (var i=1; i<mas.length; i++){
        for( var j=0; j<(mas.length-i); j++){

            if (mas[j] > mas[j+1]){
                var temp = mas[j];
                mas[j] = mas[j+1];
                mas[j+1] = temp;

            }
        }
    }
    return mas;
}

module.exports = bubbleSort;