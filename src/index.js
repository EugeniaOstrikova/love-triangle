/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var count = 0;
    for(var i=0; i<preferences.length; i++){
        var spichoneeA = i+1;
        var spichoneeB = preferences[i];
        var spichoneeC = preferences[spichoneeB - 1];
        if(spichoneeB<spichoneeA||spichoneeC<spichoneeA)continue;
        else if(spichoneeA == spichoneeB || spichoneeA == spichoneeC)continue;
        else if(preferences[spichoneeC - 1] == spichoneeA){
            count = count +1;
        }

        // console.log("i=" + i);
        // console.log("spichoneeA=" + spichoneeA);
        // console.log("spichoneeB=" + spichoneeB);
        // console.log("spichoneeC=" + spichoneeC);
        // console.log("count=" + count);
    }
    return count;
};
