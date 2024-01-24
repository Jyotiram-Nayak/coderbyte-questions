function GasStation(strArr){
    let gallon=0;
    let next=0;
    for (let i = 1; i < strArr.length; i++) {
        let station=strArr[i].split(":");
        gallon +=parseInt(station[0]);
        next +=parseInt(station[1]);
    }
    console.log('gas gallon and station',gallon,next);
    if(next>gallon) return "impossible";

    let newArr=strArr.slice(1).concat(strArr.slice(1));
    console.log(newArr);

    for (let i = 0; i < strArr[0]; i++) {
        // debugger
        let gasStock=0;
        let lastIndex=0;
        for (let j = i; j < i + parseInt(strArr[0]); j++) {
            let curStation=newArr[j].split(":");
            console.log(curStation);
            let curGas=parseInt(curStation[0]);
            let curGasNeed=parseInt(curStation[1]);
            gasStock+=curGas;
            if(curGasNeed > gasStock){
                break;
            }else {
                gasStock-=curGasNeed;
            }
            lastIndex=j;
        }
        if(i == lastIndex-strArr[0]+1){
            return i+1;
        }
    }


}

// keep this function call here
console.log(GasStation(["4", "0:1", "2:2", "1:2", "3:1"]));
console.log(GasStation(["4", "0:1", "1:2", "1:2", "3:1"]));