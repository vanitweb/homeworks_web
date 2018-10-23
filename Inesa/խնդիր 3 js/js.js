var a = [33, 6, 7, 8, 9, 55, 95, 69];
function bubleSort(a){
    var sawapped;
    do{
        swapped = false;
        for(var i = 0; i < a.length - 1; i++)
            {
                if (a[i] > a[i+1])
                    {
                        var temp = a[i];
                        a[i] = a[i+1];
                        a[i+1] = temp ; 
                        swapped = true;
                    }
            }
    }while(swapped);
}