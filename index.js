
const partition = (arr, l, h) => {
    let pivot = arr[h]
    let i = l - 1
    for(let j = l; j <= h - 1; j++){
        if(arr[j] < pivot){
            i++
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
    }
    // swapping i + 1 and p => last element in array
    [arr[i+1], arr[h]] = [arr[h], arr[i+1]]
    return i+1
}



const qs = (arr, l, h) => {
    if(l >= h)
        return
    let p = partition(arr, l, h)
    qs(arr, l, p - 1)
    qs(arr, p + 1, h)
}

const driver = () => {
    const arr = [10, 80, 30, 90, 40, 50, 70]
    qs(arr, 0, arr.length-1)
    console.log('Array: ', arr)
}

driver()


