function superbowlWin(array){
    let obj = array.find(element=> element.result === 'W')
    if(obj){return obj.year}
}
