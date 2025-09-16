function stringLength(strInp1, strInp2, strInp3) {
    let strInp1Len = Number(strInp1.length);
    let strInp2Len = Number(strInp2.length);
    let strInp3Len = Number(strInp3.length);
    let sumStrAll = strInp1Len + strInp2Len + strInp3Len;
    let medimLenStr = sumStrAll/3;
    
    console.log(sumStrAll)
    console.log(medimLenStr.toFixed(0));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
