// Switch Sort 
function SwapSort(arr) {
    let n = arr.length;
    let arrPos = [];
    for (let i = 0; i < n; i++) {
        arrPos.push([arr[i], i]);
    }
    arrPos.sort((a, b) => { return a[0] - b[0] })
    let vis = new Array(n);
    for (let i = 0; i < n; i++) {
        vis[i] = false;
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (vis[i] || arr[i][1] == i)
            continue;
        let j = i;
        let countSize = 0;
        while (!vis[j]) {
            vis[j] = true;
            j = arrPos[j][1];
            countSize++;
        }
        if (countSize > 0) {
            ans += (countSize - 1);
        }
    }
    return ans;
}

console.log(SwapSort([1, 5, 4, 3, 2]))
