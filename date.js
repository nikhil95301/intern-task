function solution(D){
    var arr = [0,0,0,0,0,0,0]
    for (key in D){
       var a = new Date(key);
var b = a.getDay()
       arr[b]+=D[key]
    }
//mean of prev and next day if any day is not present

    for(i=0;i<7;i++){
if(arr[i]==0)
arr[i]=Math.floor((arr[i-1]+arr[i+1])/2);//floor function used to convert to lower integer
    }
    var ans = {}
    ans['Mon'] = arr[1]
    ans['Tue'] = arr[2]
    ans['Wed'] = arr[3]
    ans['Thu'] = arr[4]
    ans['Fri'] = arr[5]
    ans['Sat'] = arr[6]
    ans['Sun'] = arr[0]
console.log(ans)
}
solution({'2020-10-10':1, '2020-10-11':1, '2020-10-12':1,'2020-10-13':2,'2020-10-15':1})