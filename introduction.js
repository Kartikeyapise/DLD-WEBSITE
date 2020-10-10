// Binary Addition
var additionStep = 1;
var additionFinished = false;

$('#additiongenerate').click(additionGenerate);
$('#additionnextstep').click(additionNextStep);
$('#additionwrapper').click(additionNextStep);
$('#additionstartover').click(additionStartOver);

// Initialise the demo
additionGenerate();

function additionGenerate() {
    additionStartOver();

    $('#additiontoprow5').text('1');

    // top row
    for (var i = 1; i < 5; i++) {
        $('#additiontoprow' + i).text(randomDigit());
    }

    // bottom row
    for (var i = 1; i < 5; i++) {
        $('#additionsecondrow' + i).text(randomDigit());
    }

    var finalDigit = parseInt($('#additionsecondrow4').text());

    if (finalDigit == 0) {
        $('#additionsecondrow5').text('1');
    } else {
        $('#additionsecondrow5').html('&nbsp;');
    }

    // set decimals

    $('#additionworking .decimal').text('');
    $('#additiontoprow .decimal').text(binary2Decimal('#additiontoprow'));
    $('#additionsecondrow .decimal').text(binary2Decimal('#additionsecondrow'));
}


function additionNextStep() {
    if (additionFinished) {
        return;
    }

    var var1 = parseInt($('#additiontoprow' + additionStep).text()) || 0;
    var var2 = parseInt($('#additionsecondrow' + additionStep).text()) || 0;
    var varcarry = parseInt($('#additioncarryrow' + additionStep).text()) || 0;

    var total = var1 + var2 + varcarry;

    var sum = 0;
    var carry = 0;

    switch (total) {
        case 3:
            sum = 1;
            carry = 1;
            break;
        case 2:
            carry = 1;
            break;
        case 1:
            sum = 1;
            break;
    }

    $('#additionanswerrow' + additionStep).text(sum);

    if (carry == 1) {
        $('#additioncarryrow' + (additionStep + 1)).text('1');
    } else {
        $('#additioncarryrow' + (additionStep + 1)).html('&nbsp;');
    }

    if (additionStep == 5) {
        $('#additionnextstep').attr('disabled', 'disabled').attr('value', 'Finished');

        if (carry == 1) {
            $('#additionanswerrow6').text('1');
        }

        $('#additionanswerrow .decimal').text(binary2Decimal('#additionanswerrow'));

        additionFinished = true;
    }


    additionStep++;
}


function additionStartOver() {
    additionStep = 1;
    additionFinished = false;

    // clear carries
    $('#additioncarryrow div').html('&nbsp;');

    // clear result
    $('#additionanswerrow div').html('&nbsp;');

    $('#additionnextstep').removeAttr('disabled').attr('value', 'Next Step');

    $('#additionworking .decimal').text('');
    $('#additiontoprow .decimal').text(binary2Decimal('#additiontoprow'));
    $('#additionsecondrow .decimal').text(binary2Decimal('#additionsecondrow'));
}


// Binary Multiplication
var multiplicationStep = 1;
var multiplicationFinishAt = 21;
var multiplicationFinished = false;

$('#multiplicationgenerate').click(multiplicationGenerate);
$('#multiplicationnextstep').click(multiplicationNextStep);
$('#multiplicationwrapper').click(multiplicationNextStep);
$('#multiplicationstartover').click(multiplicationStartOver);

// Initialise the demo
multiplicationGenerate();

function multiplicationGenerate() {
    multiplicationStartOver();

    $('#multiplicationtoprow5').text('1');

    // top row
    for (var i = 1; i < 5; i++) {
        $('#multiplicationtoprow' + i).text(randomDigit());
    }

    // bottom row
    for (var i = 1; i < 4; i++) {
        $('#multiplicationsecondrow' + i).text(randomDigit());
    }

    var middleDigit = parseInt($('#multiplicationsecondrow2').text());

    multiplicationFinishAt = 18;

    if (middleDigit == 0) {
        $('#multiplicationsecondrow3').text('1');
        $('#multiplicationanswerrow3').show();
    } else {
        var chance = randomDigit();
        if (chance == 1) {
            $('#multiplicationsecondrow3').text('1');
            $('#multiplicationanswerrow3').show();
        } else {
            $('#multiplicationsecondrow3').html('&nbsp;');
            $('#multiplicationanswerrow3').hide();
            multiplicationFinishAt = 12;
        }
    }

    $('#multiplicationworking .decimal').text('');
    $('#multiplicationtoprow .decimal').text(binary2Decimal('#multiplicationtoprow'));
    $('#multiplicationsecondrow .decimal').text(binary2Decimal('#multiplicationsecondrow'));
}


function multiplicationNextStep() {
    if (multiplicationFinished) {
        return;
    }

    $('#multiplicationtoprow div').removeClass('highlight');
    $('#multiplicationsecondrow div').removeClass('highlight');

    $('#multiplicationanswerrow2').removeClass('paddinghint');
    $('#multiplicationanswerrow3').removeClass('paddinghint');
    $('#multiplicationtotalrow').removeClass('totalhint');

    if (multiplicationStep == 6) {
        $('#multiplication2answerrow0').text('0');
        $('#multiplicationanswerrow2').addClass('paddinghint');
        $('#multiplicationsecondrow2').addClass('highlight');
        $('#multiplicationanswerrow1 .decimal').text(binary2Decimal('#multiplicationanswerrow1'));
    } else if (multiplicationStep == multiplicationFinishAt) {
        $('#multiplicationnextstep').attr('disabled', 'disabled').attr('value', 'Finished');
        var answerDigits = multiplicationCalculateSum().split('').reverse();
        for (var i = 0; i < answerDigits.length; i++) {
            $('#multiplicationtotalrow' + (i + 1)).text(answerDigits[i]);
        }
        $('#multiplicationtotalrow').addClass('totalhint');
        $('#multiplicationtotalrow .decimal').text(binary2Decimal('#multiplicationtotalrow'));
        multiplicationFinished = true;
    } else if (multiplicationStep == 12) {
        $('#multiplication3answerrow01').text('0');
        $('#multiplication3answerrow02').text('0');
        $('#multiplicationanswerrow3').addClass('paddinghint');
        $('#multiplicationsecondrow3').addClass('highlight');
        //$('#multiplicationanswerrow2 .decimal').text(binary2Decimal('#multiplicationanswerrow2'));
    } else {
        var row = 1;
        var step = multiplicationStep;

        if (multiplicationStep > 6 && multiplicationStep < 12) {
            step = multiplicationStep - 6;
            row = 2;
        } else if (multiplicationStep > 12) {
            step = multiplicationStep - 12;
            row = 3;
        }

        if ($('#multiplicationsecondrow' + row).text() == '0') {
            $('#multiplication' + row + 'answerrow' + step).text('0');
        } else {
            $('#multiplication' + row + 'answerrow' + step).text($('#multiplicationtoprow' + step).text());
        }

        $('#multiplicationsecondrow' + row).addClass('highlight');
        $('#multiplicationtoprow' + step).addClass('highlight');

        if (multiplicationStep == 17) {
            $('#multiplicationanswerrow3 .decimal').text(binary2Decimal('#multiplicationanswerrow3'));
        }
        if (multiplicationStep == 11) {
            $('#multiplicationanswerrow2 .decimal').text(binary2Decimal('#multiplicationanswerrow2'));
        }
    }

    multiplicationStep++;
}


function multiplicationStartOver() {
    multiplicationStep = 1;
    multiplicationFinished = false;

    // clear result
    $('#multiplicationanswerrow1 div').html('&nbsp;');
    $('#multiplicationanswerrow2 div').html('&nbsp;');
    $('#multiplicationanswerrow3 div').html('&nbsp;');
    $('#multiplicationtotalrow div').html('&nbsp;');


    $('#multiplicationnextstep').removeAttr('disabled').attr('value', 'Next Step');

    $('#multiplicationtoprow div').removeClass('highlight');
    $('#multiplicationsecondrow div').removeClass('highlight');
    $('#multiplicationtotalrow').removeClass('totalhint');

    $('#multiplicationworking .decimal').text('');
    $('#multiplicationtoprow .decimal').text(binary2Decimal('#multiplicationtoprow'));
    $('#multiplicationsecondrow .decimal').text(binary2Decimal('#multiplicationsecondrow'));

    $('#subtractionworking .decimal').text('');
    $('#subtractiontoprow .decimal').text(binary2Decimal('#subtractiontoprow'));
    $('#subtractionsecondrow .decimal').text(binary2Decimal('#subtractionsecondrow'));
}


function multiplicationCalculateSum() {
    var var1 = $('#multiplicationtoprow5').text() + $('#multiplicationtoprow4').text() + $('#multiplicationtoprow3').text() + $('#multiplicationtoprow2').text() + $('#multiplicationtoprow1').text();
    var var2 = $('#multiplicationsecondrow3').text() + $('#multiplicationsecondrow2').text() + $('#multiplicationsecondrow1').text();

    var number1 = parseInt(var1, 2);
    var number2 = parseInt(var2, 2);

    var answer = (number1 * number2).toString(2);

    return answer;
}


// Binary Subtraction
var subtractionStep = 1;
var subtractionFinished = false;

$('#subtractiongenerate').click(subtractionGenerate);
$('#subtractionnextstep').click(subtractionNextStep);
$('#subtractionwrapper').click(subtractionNextStep);
$('#subtractionstartover').click(subtractionStartOver);

// Initialise the demo
subtractionGenerate();

function subtractionGenerate() {
    subtractionStartOver();

    $('#subtractiontoprow5').text('1');

    // top row
    for (var i = 1; i < 5; i++) {
        $('#subtractiontoprow' + i).text(randomDigit());
    }

    $('#subtractionsecondrow4').text('1');

    // bottom row
    for (var i = 1; i < 4; i++) {
        $('#subtractionsecondrow' + i).text(randomDigit());
    }

    $('#subtractionworking .decimal').text('');
    $('#subtractiontoprow .decimal').text(binary2Decimal('#subtractiontoprow'));
    $('#subtractionsecondrow .decimal').text(binary2Decimal('#subtractionsecondrow'));
}


function subtractionNextStep() {
    if (subtractionFinished) {
        return;
    }

    //var var1 = parseInt($('#subtractiontoprow' + subtractionStep).text()) || 0;
    if ($('#subtractioncarry2row' + subtractionStep).text().match(/[01]/)) {
        var var1 = parseInt($('#subtractioncarry2row' + subtractionStep).text(), 2);
    } else if ($('#subtractioncarry1row' + subtractionStep).text().match(/[01]/)) {
        var var1 = parseInt($('#subtractioncarry1row' + subtractionStep).text(), 2);
    } else {
        var var1 = parseInt($('#subtractiontoprow' + subtractionStep).text()) || 0;
    }

    var var2 = parseInt($('#subtractionsecondrow' + subtractionStep).text()) || 0;

    var answer = 0;

    var finishedThisStep = false;

    if ((var1 - var2) == 0) {
        $('#subtractionanswerrow' + subtractionStep).text('0');
        finishedThisStep = true;
    } else if ((var1 - var2) == 1) {
        $('#subtractionanswerrow' + subtractionStep).text('1');
        finishedThisStep = true;
    } else {
        subtractionBorrow();
    }


    if (finishedThisStep) {
        subtractionStep++;
    }

    if (subtractionStep == 6) {
        $('#subtractionnextstep').attr('disabled', 'disabled').attr('value', 'Finished');
        $('#subtractionanswerrow .decimal').text(binary2Decimal('#subtractionanswerrow'));
        subtractionFinished = true;
    }
}


function subtractionBorrow() {
    var startingPoint = subtractionStep;

    var borrowFrom = startingPoint + 1;

    var var1 = 0;
    var fieldFrom = '';

    var searching = true;

    // find which column to start borrowing from
    while (searching) {
        if ($('#subtractioncarry2row' + borrowFrom).text().match(/[01]/)) {
            var1 = parseInt($('#subtractioncarry2row' + borrowFrom).text(), 2);
            fieldFrom = '#subtractioncarry2row' + borrowFrom;
        } else if ($('#subtractioncarry1row' + borrowFrom).text().match(/[01]/)) {
            var1 = parseInt($('#subtractioncarry1row' + borrowFrom).text(), 2);
            fieldFrom = '#subtractioncarry1row' + borrowFrom;
        } else {
            var1 = parseInt($('#subtractiontoprow' + borrowFrom).text(), 2);
            fieldFrom = '#subtractiontoprow' + borrowFrom;
        }

        if (var1 > 0) {
            searching = false;
        } else {
            borrowFrom++;
        }
    }

    // perform action accordingly

    $(fieldFrom).addClass('strikeout');

    var rewrite = '#subtractioncarry1row' + borrowFrom;

    if (fieldFrom.match(/carry1/)) {
        rewrite = '#subtractioncarry2row' + borrowFrom;
    }

    $(rewrite).text((var1 - 1).toString(2));

    // find lowest item to carry to
    var goingTo = '';
    var goingToOld = '';

    if ($('#subtractioncarry1row' + (borrowFrom - 1)).text().match(/[01]/)) {
        goingTo = '#subtractioncarry2row' + (borrowFrom - 1);
        goingToOld = '#subtractioncarry1row' + (borrowFrom - 1);
        var1 = $('#subtractioncarry1row' + (borrowFrom - 1)).text();
    } else {
        goingTo = '#subtractioncarry1row' + (borrowFrom - 1);
        goingToOld = '#subtractiontoprow' + (borrowFrom - 1);
        var1 = $('#subtractiontoprow' + (borrowFrom - 1)).text()
    }

    $(goingToOld).addClass('strikeout');
    $(goingTo).text('1' + var1);

}


function subtractionStartOver() {
    subtractionStep = 1;
    subtractionFinished = false;

    // clear carries
    $('#subtractioncarry1row div').html('&nbsp;').removeClass('strikeout');
    $('#subtractioncarry2row div').html('&nbsp;').removeClass('strikeout');
    $('#subtractiontoprow div').removeClass('strikeout');
    $('#subtractionanswerrow div').html('&nbsp;');

    $('#subtractionnextstep').removeAttr('disabled').attr('value', 'Next Step');

    $('#subtractionworking .decimal').text('');
    $('#subtractiontoprow .decimal').text(binary2Decimal('#subtractiontoprow'));
    $('#subtractionsecondrow .decimal').text(binary2Decimal('#subtractionsecondrow'));
}


// Binary Division
var divisionStep = 1;
var divisionWorkingColumn = 5;
var divisionWorking = 1;
var divisionFinished = false;

var subtractionBase = '';

$('#divisiongenerate').click(divisionGenerate);
$('#divisionnextstep').click(divisionNextStep);
$('#divisionwrapper').click(divisionNextStep);
$('#divisionstartover').click(divisionStartOver);

// Initialise the demo
divisionGenerate();

function divisionGenerate() {
    divisionStartOver();

    $('#divisiondividend5').text('1');

    // dividend
    for (var i = 1; i < 5; i++) {
        $('#divisiondividend' + i).text(randomDigit());
    }

    // divisor
    for (var i = 1; i < 3; i++) {
        $('#divisiondivisor' + i).text(randomDigit());
    }

    var finalDigit = parseInt($('#divisiondivisor2').text());

    if (finalDigit == 0) {
        $('#divisiondivisor3').text('1');
    } else {
        var var1 = randomDigit();
        if (var1 == 1) {
            $('#divisiondivisor3').text('1');
        } else {
            $('#divisiondivisor3').html('&nbsp;');
        }
    }

    // set up decimals
    $('#divisiondivisor .decimal').text('');
    $('#divisiondividend .rightdecimal').text('');
    $('#divisiondivisor .decimal').text(binary2Decimal('#divisiondivisor'));
    $('#divisiondividend .rightdecimal').text(binary2Decimal('#divisiondividend'));
}


function divisionNextStep() {
    if (divisionFinished) {
        return;
    }

    var workingBase = '';
    var divisor = $('#divisiondivisor3').text() + $('#divisiondivisor2').text() + $('#divisiondivisor1').text();
    divisor = divisor.replace(/\D/g, '');
    var divisorArray = stringToArray(divisor);
    var offset = 0;
    var finishedOverall = false;

    var newDiv = '';

    var divisionIncrease = false;

    // start off with how many digits of dividend to divide into
    if (divisionStep == 1) {
        for (var i = 5; i > 0; i--) {
            workingBase = workingBase + $('#divisiondividend' + i).text();

            if (divisionIsLess(divisor, workingBase)) {
                divisionWorkingColumn = i;
                break;
            }
        }

        subtractionBase = workingBase;

        // render underneath dividend
        newdiv = '<div id="divisionworking1" class="divisionsubtractor">';

        for (var i = 0; i < divisorArray.length; i++) {
            newdiv += '<div>' + divisorArray[i] + '</div> ';
        }

        newdiv += '</div>';

        $('#divisionworkingarea').append(newdiv);

        $('#divisionanswerrow' + divisionWorkingColumn).text('1');

        offset = (divisionWorkingColumn - 1) * 39;

        $('#divisionworking1').css('margin-right', offset + 'px');

        divisionIncrease = true;

    } else if ((divisionStep % 3) == 2) { // perform subtraction
        var subtractionResult = divisionBinarySubtraction(subtractionBase, divisor);
        var subtractionArray = subtractionResult.split('').reverse();

        divisionWorking++;

        newdiv = '<div id="divisionworking' + divisionWorking + '" class="divisionbase"><div id="division' + divisionWorking + 'row4" class="colour4">&nbsp;</div> <div id="division' + divisionWorking + 'row3"  class="colour3">&nbsp;</div> <div id="division' + divisionWorking + 'row2" class="colour2">&nbsp;</div> <div id="division' + divisionWorking + 'row1" class="colour1">&nbsp;</div> </div>';


        $('#divisionworkingarea').append(newdiv);

        // add in the values

        for (i = 0; i < subtractionArray.length; i++) {
            $('#division' + divisionWorking + 'row' + (divisionWorkingColumn + i)).text(subtractionArray[i]).removeClass('colour4 colour3 colour2 colour1');
        }


        if (divisionWorkingColumn == 1) {
            finishedOverall = true;
        }

        divisionIncrease = true;

    } else if ((divisionStep % 3) == 0) { // make workingBase
        var currentlyAt = divisionStep - 1;

        workingBase = $('#divisionworking' + currentlyAt).text().replace(/\D/g, '');
        //intColumn = divisionWorkingColumn - 1;
        //divisionWorkingColumn--;

        while (!divisionIsLess(divisor, workingBase)) {
            if (divisionWorkingColumn <= 0) {
                var finishedOverall = true;
                break;
            }

            // bring down another digit
            divisionWorkingColumn--;
            $('#division' + divisionWorking + 'row' + divisionWorkingColumn).text($('#divisiondividend' + divisionWorkingColumn).text());

            $('#divisionanswerrow' + divisionWorkingColumn).text('0');

            //intColumn--;


            workingBase = $('#divisionworking' + divisionWorking).text().replace(/\D/g, '');
        }

        if (!finishedOverall) {
            $('#divisionanswerrow' + (divisionWorkingColumn)).text('1');
        }

        subtractionBase = workingBase;

        divisionIncrease = true;

    } else {
        // set up divisor again
        divisionWorking++;
        newdiv = '<div id="divisionworking' + divisionWorking + '" class="divisionsubtractor">';



        for (var i = 0; i < divisorArray.length; i++) {
            newdiv += '<div>' + divisorArray[i] + '</div> ';
        }

        newdiv += '</div>';

        $('#divisionworkingarea').append(newdiv);

        offset = (divisionWorkingColumn - 1) * 39;

        $('#divisionworking' + divisionWorking).css('margin-right', offset + 'px');

        divisionIncrease = true;
    }


    // are we at an end scenario?

    if (divisionWorkingColumn <= 1 && finishedOverall) {
        $('#divisionnextstep').attr('disabled', 'disabled').attr('value', 'Finished');
        $('#divisionanswerrow .rightdecimal').text(binary2Decimal('#divisionanswerrow'));

        $('#divisionworking' + divisionWorking).append('<div class="remainderdecimal"></div>');
        $('#divisionworking' + divisionWorking + ' .remainderdecimal').text(binary2Decimal('#divisionworking' + divisionWorking));

        divisionFinished = true;
    }


    if (divisionIncrease) {
        divisionStep++;
    }
}






function divisionStartOver() {
    divisionStep = 1;
    divisionWorking = 1;
    divisionWorkingColumn = 5;
    divisionFinished = false;

    // clear result
    $('#divisionanswerrow div').html('&nbsp;');

    $('#divisionnextstep').removeAttr('disabled').attr('value', 'Next Step');

    $('#divisionworkingarea').html('');
}


function divisionIsLess(binary1, binary2) {
    var var1 = parseInt(binary1.toString(), 2);
    var var2 = parseInt(binary2.toString(), 2);

    if (var1 <= var2) {
        return true;
    } else {
        return false;
    }
}


function divisionBinarySubtraction(binary1, binary2) {
    var var1 = parseInt(binary1.toString(), 2);
    var var2 = parseInt(binary2.toString(), 2);

    return (var1 - var2).toString(2);
}


// General Functions

function randomDigit() {
    var randomdigit = Math.random();
    if (randomdigit < 0.5) {
        randomdigit = 0;
    } else {
        randomdigit = 1;
    }

    return randomdigit;
}


function binary2Decimal(myobject) {
    return parseInt($(myobject).text().replace(/\D/g, ''), 2);
}


function stringToArray(mystring) {
    return mystring.replace(/\D/g, '').split('');
}


// activities

$('#questionadditiongenerate').click(activityAdditionGenerate);
$('#additionshow').click(additionShow);

$('#questionmultiplicationgenerate').click(activityMultiplicationGenerate);
$('#multiplicationshow').click(multiplicationShow);

$('#questionsubtractiongenerate').click(activitySubtractionGenerate);
$('#subtractionshow').click(subtractionShow);

$('#questiondivisiongenerate').click(activityDivisionGenerate);
$('#divisionshow').click(divisionShow);

$('#generateall').click(generateAll);


function activityAdditionGenerate() {
    var randomNumber1 = Math.floor((Math.random() * 51)) + 20;
    var randomNumber2 = Math.floor((Math.random() * 51)) + 10;

    $('#additionactivity').text(randomNumber1.toString(2) + ' + ' + randomNumber2.toString(2));

    $('#additionanswer').hide().text((randomNumber1 + randomNumber2).toString(2) + ' ( ' + (randomNumber1 + randomNumber2) + ' )');
}


function additionShow() {
    $('#additionanswer').show();
}


function activityMultiplicationGenerate() {
    var randomNumber1 = Math.floor((Math.random() * 11)) + 20;
    var randomNumber2 = Math.floor((Math.random() * 7)) + 1;

    $('#multiplicationactivity').text(randomNumber1.toString(2) + ' x ' + randomNumber2.toString(2));

    $('#multiplicationanswer').hide().text((randomNumber1 * randomNumber2).toString(2) + ' ( ' + (randomNumber1 * randomNumber2) + ' )');
}


function multiplicationShow() {
    $('#multiplicationanswer').show();
}


function activitySubtractionGenerate() {
    var randomNumber1 = Math.floor((Math.random() * 50)) + 30;
    var randomNumber2 = Math.floor((Math.random() * 20)) + 10;

    $('#subtractionactivity').text(randomNumber1.toString(2) + ' - ' + randomNumber2.toString(2));

    $('#subtractionanswer').hide().text((randomNumber1 - randomNumber2).toString(2) + ' ( ' + (randomNumber1 - randomNumber2) + ' )');
}


function subtractionShow() {
    $('#subtractionanswer').show();
}


function activityDivisionGenerate() {
    var randomNumber1 = Math.floor((Math.random() * 30)) + 10;
    var randomNumber2 = Math.floor((Math.random() * 5)) + 2;

    var remainder = randomNumber1 % randomNumber2;
    var answer = (randomNumber1 - remainder) / randomNumber2;

    $('#divisionactivity').text(randomNumber1.toString(2) + ' / ' + randomNumber2.toString(2));

    $('#divisionanswer').hide().text(answer.toString(2) + ' ( Remainder: ' + remainder.toString(2) + ' )');
}


function divisionShow() {
    $('#divisionanswer').show();
}


function generateAll() {
    activityAdditionGenerate();
    activityMultiplicationGenerate();
    activitySubtractionGenerate();
    activityDivisionGenerate();
}