




function symbolPicker () {
    let arr1 = []
    let arr2 = ['*', '%', '^', '#', '@', '$', '!', '=',]
    arr2.sort
    arr2.reverse
    for (let i = 0; i <= 99; i++){
        if (i % 9 == 0) {
            arr1.push(`${i} - &`)
        } else {
            arr1.push(`${i} - ${arr2[Math.ceil(Math.random() * arr2.length)]}`)
        }
    }
}