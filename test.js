function minSubArrayLen(arr , num){
    // arr안에 num 보다 크거나 같은 요소가 있으면 return 1
    let max = 0
    let idx
    for(let el of arr){
        if(el > max){
            max = arr[el];
            idx = el
        }
        if(arr[el] >= num) return 1
    }

    // (loop) max 양 옆을 비교해서 큰 수를 sum 더한다
    // if(sum >= num) return count(or size)
    let start = idx
    let end = idx
    let sum = max
        
    while(start >=0 || end <= arr.length -1){    
        if(arr[start-1] >= arr[end + 1]){
            start --
            sum += arr[start]
        }else{
            end ++
            sum += arr[end]
        }
        
        if(sum >= num) return end - start + 1
    }
    
    // arr안의 수를 모두 더해도 num보다 작으면 return 0
    return 0
}

console.log(
    minSubArrayLen([4,3,3,8,1,2,3], 11), minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)
)