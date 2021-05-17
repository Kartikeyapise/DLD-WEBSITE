var user_arr = [
    ['a', 'a', 'b', '0', '0'],
    ['b', 'c', 'd', '0', '0'],
    ['c', 'a', 'd', '0', '0'],
    ['d', 'e', 'f', '0', '1'],
    ['e', 'a', 'f', '0', '1'],
    ['f', 'g', 'f', '0', '1'],
    ['g', 'a', 'f', '0', '1'],
];

var unmodified_user_array = [];
for (let i = 0; i < user_arr.length; i++) {
    let temp = [];
    for (let j = 0; j < user_arr[i].length; i++) {
        temp.push(user_arr[i][j]);
    }
    unmodified_user_array.push(temp);
}

console.log(unmodified_user_array)