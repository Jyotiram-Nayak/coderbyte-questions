function swap(l, r, arr) {
    debugger
    [arr[l], arr[r]] = [arr[r], arr[l]];
}
function permute(arr, idx, n, permutate) {
    if (idx == n) {
        permutate.push(arr.join(""))
        return;
    }

    for (let i = idx; i < n; i++) {
        swap(i, idx, arr)
        permute(arr, idx + 1, n, permutate);
        swap(i, idx, arr)
    }
}

function fun() {
    debugger
    let strArr = ["J>B", "B<S", "D>J"];
    let arr = Array.from(new Set(strArr.join(" ").match(/[a-zA-Z]/g)));
    let premuatate = [], count = 0;
    permute(arr, 0, arr.length, premuatate);
    premuatate.forEach((str) => {

        for (let i = 0; i < strArr.length; i++) {
            let [a, op, b] = strArr[i].split("")
            if (op == '<')
                [a, b] = [b, a];

            if (str.indexOf(a) > str.indexOf(b))
                return;
        }
        count++;
    });
    console.log(premuatate);
    console.log(count);
}
fun();