
function addBinary() {

    function halfAdder(a, b) {
        const sum = xor(a, b);
        const carry = and(a, b);
        return [sum, carry];
    }
    function fullAdder(a, b, carry) {
        halfAdd = halfAdder(a, b);
        const sum = xor(carry, halfAdd[0]);
        carry = and(carry, halfAdd[0]);
        carry = or(carry, halfAdd[1]);
        return [sum, carry];
    }

    function xor(a, b) { return (a === b ? 0 : 1); }
    function and(a, b) { return a == 1 && b == 1 ? 1 : 0; }
    function or(a, b) { return (a || b); }

    function findbig(a, b) {
        if (a.length >= b.length)
            return a;
        else
            return b;
    }
    function findsmall(a, b) {
        if (a.length < b.length)
            return a;
        else
            return b;

    }
    a = $("#number1").val();
    b = $("#number2").val();
    bn = findbig(a, b);
    sn = findsmall(a, b);
    bnl = bn.length;
    snl = sn.length;
    for (var i = 0; i < (bnl - snl); i++) {
        sn = '0' + sn;
    }
    a = sn;
    b = bn;
    for (var i = 0; i < a.length; i++) {
        if (a[i] != '0' && a[i] != '1') {
            alert("Only 0's and 1's allowed");
            return;
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (b[i] != '0' && b[i] != '1') {
            alert("Only 0's and 1's allowed");
            return;
        }
    }

    let sum = '';
    let carry = '';

    for (var i = a.length - 1; i >= 0; i--) {
        if (i == a.length - 1) {
            //half add the first pair
            const halfAdd1 = halfAdder(a[i], b[i]);
            sum = halfAdd1[0] + sum;
            carry = halfAdd1[1];
        } else {
            //full add the rest
            const fullAdd = fullAdder(a[i], b[i], carry);
            sum = fullAdd[0] + sum;
            carry = fullAdd[1];
        }
    }
    console.log(a);
    console.log(b);
    console.log(carry);
    console.log(carry ? carry + sum : sum);
    return carry ? carry + sum : sum;
}

function clearyo() {
    $('.numbers').val('');
    $('#answer').empty();
}