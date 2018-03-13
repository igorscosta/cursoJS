const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in nums){
    if(i == 5) break
    console.log(`${i} = ${nums[i]}`)
}

for(let i in nums) {
    if (i == 5) continue
    console.log(`${i} = ${nums[i]}`)
}

//utilizando break rotulados (evitar utilizar)
externo: for(let i in nums){ // dando o rótulo 'externo' ao primeiro laço for
    for(let j in nums){
        if(i == 2 && j == 3) break externo
        console.log(`Par = ${i}, ${j}`)
    }
}