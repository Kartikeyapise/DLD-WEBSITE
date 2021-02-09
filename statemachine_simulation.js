function insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

function user_input_over() {

    var user_arr = []
    var no_rows = parseInt(document.getElementById('no_of_states').value);
    for (let i = 0; i < no_rows; i++) {
        let arr_temp = []
        for (let j = 0; j < 5; j++) {
            let temp_id = 'cell' + i + j;
            arr_temp.push(document.getElementById(temp_id).value);
        }
        user_arr.push(arr_temp);
    }
    display_everything(user_arr);
}

function createTable() {
    document.getElementById('display_graph_button').style.display = 'block';
    let table_title = `<tr>
    <th rowspan="2">present state</th>
    <th colspan="2">next state</th>
    <th colspan="2">output</th>
</tr>
<tr>
    <th>x=0</th>
    <th>x=1</th>
    <th>x=0</th>
    <th>x=1</th>
</tr>`;
    document.getElementById('myTable').innerHTML = table_title
    var rn = parseInt(document.getElementById('no_of_states').value);
    var cn = 5;

    for (var r = 2; r < parseInt(rn, 10) + 2; r++) {
        var x = document.getElementById('myTable').insertRow(r);
        for (var c = 0; c < parseInt(cn, 10); c++) {
            var y = x.insertCell(c);
            // y.innerHTML = "Row-" + r + " Column-" + c;
            let cell_id = 'cell' + (r - 2) + c;
            y.innerHTML = `<input type="text" id="${cell_id}" class="input_cells">`;
        }
    }
}

function drawgraph(g_arr, graph_id) {
    let nodes_arr = [];
    for (let i = 0; i < g_arr.length; i++) {
        nodes_arr.push({ id: g_arr[i][0], label: g_arr[i][0] });
    }
    let nodes = new vis.DataSet(nodes_arr);
    let edges_arr = []
    for (let i = 0; i < g_arr.length; i++) {
        edges_arr.push({ from: g_arr[i][0], to: g_arr[i][1], label: '0' + '/' + g_arr[i][3] });
        edges_arr.push({ from: g_arr[i][0], to: g_arr[i][2], label: '1' + '/' + g_arr[i][4] });
    }
    var edges = new vis.DataSet(edges_arr);
    console.log(nodes_arr);
    console.log(edges_arr);
    console.log(graph_id);
    var container = document.getElementById(graph_id);
    var data = {
        nodes: nodes,
        edges: edges,
    };

    var options = {
        edges: {
            arrows: 'to',
            // color: 'black',
            // font: '12px arial #ff0000',
            // scaling: {
            //     label: true,
            // },
            // shadow: true,
            // smooth: true,
        }
    };
    var network = new vis.Network(container, data, options);
}


function replace_state(arr, state1, state2) {
    for (let i of arr) {
        if (i[0] == state2) { i[0] = state1; }
        if (i[1] == state2) { i[1] = state1; }
        if (i[2] == state2) { i[2] = state1; }
    }
}

function find_duplicates(sarr) {
    for (let i = 0; i <= sarr.length - 2; i++) {
        for (let j = i + 1; j <= sarr.length - 1; j++) {
            if (iseq(sarr[i], sarr[j])) {
                return [i, j]
            }
        }
    }
    return false;
}

function iseq(arr1, arr2) {
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        return true
    } else
        return false
}


function out_put(arr) {
    let s_arr = [];
    for (let i of arr) {
        s_arr.push(i.slice(1));
    }
    let indices = find_duplicates(s_arr);
    if (!indices) { return false; }
    let fi = indices[0];
    let si = indices[1];
    let state1 = arr[fi][0];
    let state2 = arr[si][0];
    arr.splice(si, 1);
    replace_state(arr, state1, state2);
    return arr;

}

function display_everything(darr) {
    $("#allgraphs").html('');
    let count = 0;
    while (true) {
        count++;
        let graph_no = "my_graph" + count;
        let newElement = document.createElement("div");
        newElement.setAttribute("id", graph_no);
        newElement.setAttribute("class", "state_diagram");
        newElement.style.width = "800px";
        newElement.style.height = "500px";
        $("#allgraphs").append(newElement);
        drawgraph(darr, graph_no);
        darr = out_put(darr);
        if (!darr) { break; }
        console.log(darr);
    }

}

$(document).ready(function() {
    // var input_arr = [
    //     ['a', 'a', 'b', '0', '0'],
    //     ['b', 'c', 'd', '0', '0'],
    //     ['c', 'a', 'd', '0', '0'],
    //     ['d', 'e', 'f', '0', '1'],
    //     ['e', 'a', 'f', '0', '1'],
    //     ['f', 'g', 'f', '0', '1'],
    //     ['g', 'a', 'f', '0', '1'],
    // ];
    // // console.log(input_arr[6]);
    // display_everything(input_arr);
});