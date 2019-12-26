
let list = [
    { val: '1', probability: 1 },
    { val: '2', probability: 1 },
    { val: '3', probability: 1 },
    { val: '4', probability: 1 },
    { val: '5', probability: 1 },
]

function randomPic (){
    let sum = sumArrayByKey(list, 'probability');
    console.info('sum', sum);
    let rNum = Math.random() * sum;
    let total = 0;
    let index = 0;
    do {
        console.info('111')
        total += (1 / list[index].probability);
        console.info('total', total);
        index++;
    } while (total < rNum)
    // for(let i = 0; i < )

    console.info('rNum', rNum);
    console.info('rNum', list[index - 1]);
    list[index - 1].probability = (list[index - 1].probability) * 2;
    console.info('list', list);
}

function sumArrayByKey (arr, keyString) {
    let sum = 0;
    arr.forEach(v => {
        console.info('v[keyString]', 1 / v[keyString]);
        sum += 1 / v[keyString];
    });
    return sum;
}