function addBody(...text) {
    document.body.innerHTML += text + '<br>';
}

//*******************************************************************************
// Lev1_14_js-einführung_boolean_comparisons
{
    document.body.innerHTML += '<h3>Lev1_14_js-einführung_boolean_comparisons:</h3>';
    document.body.innerHTML += '<ul>';
    evaluate("Boolean(100)");
    evaluate('Boolean(3.14)');
    evaluate('Boolean(-15)');
    evaluate('Boolean("hello")');
    evaluate('Boolean("false")');
    evaluate('Boolean(1 + 7 + 3.14)');
    evaluate('Boolean(0)');
    evaluate('Boolean(-0)');
    evaluate('Boolean(NaN)');
    evaluate('Boolean(null)');
    evaluate('Boolean(false)');
    document.body.innerHTML += '</ul>';

    function evaluate(expr) {
        console.log(expr + ': ' + eval(expr));
        document.body.innerHTML += '<li>' + expr + ': ' + eval(expr) + '</li>';
    }
}

//*******************************************************************************
// Lev1_15_js-einführung_comparisons
{
    document.body.innerHTML += '<h3>Lev1_15_js-einführung_comparisons:</h3>';
    let num = 5;
    let anotherNum = 8;
    document.body.innerHTML += 'let num = 5;<br>'
    document.body.innerHTML += 'let anotherNum = 8;'
    document.body.innerHTML += '<ul>';
    evaluate('num == anotherNum');
    evaluate('num > anotherNum');
    evaluate('num < anotherNum');
    evaluate('num >= anotherNum');
    evaluate('num <= anotherNum');
    document.body.innerHTML += '<br>';
    evaluate('num == "5"');
    evaluate('num != 8');
    evaluate('num != "5"');
    document.body.innerHTML += '</ul>';

    function evaluate(expr) {
        console.log(expr + ': ' + eval(expr));
        document.body.innerHTML += '<li>' + expr + ': ' + eval(expr) + '</li>';
    }
}

//*******************************************************************************
// Lev1_3_js-einführung_data-types
{
    document.body.innerHTML += '<h3>Lev1_3_js-einführung_data-types:</h3>';
    let i = 1;
    let lastName = "Johnson";
    let j = "2";
    let status = true;
    let hello = "hello";
    let helloWorld = "hello";
    document.body.innerHTML += 'let i = 1;<br>';
    document.body.innerHTML += 'let lastName = "Johnson";<br>';
    document.body.innerHTML += 'let j = "2";<br>';
    document.body.innerHTML += 'let status = true;<br>';
    document.body.innerHTML += 'let hello = "hello";<br>';
    document.body.innerHTML += 'let helloWorld = "hello";<br>';
    document.body.innerHTML += '<ul>';
    evaluate('typeof(i)');
    evaluate('typeof(lastName)');
    evaluate('typeof(j)');
    evaluate('typeof(status)');
    evaluate('typeof(hello)');
    evaluate('typeof(helloWorld)');
    document.body.innerHTML += '</ul>';

    function evaluate(expr) {
        console.log(expr + ': ' + eval(expr));
        document.body.innerHTML += '<li>' + expr + ': ' + eval(expr) + '</li>';
    }
}

//*******************************************************************************
// Lev1_4_js-einführung_data-types
{
    document.body.innerHTML += '<h3>Lev1_4_js-einführung_data-types:</h3>';
    document.body.innerHTML += '<ul>';
    evaluate('typeof("John")');
    evaluate('typeof(3.14)');
    evaluate('typeof(NaN)');
    evaluate('typeof(false)');
    evaluate('typeof([1,2,3,4])');
    evaluate("typeof({name:'John', age:34})");
    evaluate('typeof(new Date())');
    evaluate('typeof(function () {})');
    evaluate('typeof(null)');
    evaluate('typeof("")');
    evaluate('typeof(3+2==5)');
    evaluate('typeof(3 + "3")');
    document.body.innerHTML += '</ul>';

    function evaluate(expr) {
        console.log(expr + ': ' + eval(expr));
        document.body.innerHTML += '<li>' + expr + ': ' + eval(expr) + '</li>';
    }
}

//*******************************************************************************
//  Lev1_8_js-einführung_arithmetic-operators
{
    /*
    
    * Deklariere zwei Variablen a mit dem Wert 15 und b mit dem Wert 9. Zeige den Rest an, wenn a durch b geteilt wird. Nutze Remainder(%).
    
    * Deklariere eine weitere Variable c mit dem Wert 20. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.
    
    * Inkrementiere a. Gib das Ergebnis in der Konsole aus.
    * Dekrementiert b. Gib das Ergebnis in der Konsole aus.
    * Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
    * Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus. Nutze Remainder(%).
    */
    document.body.innerHTML += '<h3>Lev1_8_js-einführung_arithmetic-operators:</h3>';

    // Deklariere die Variablen x = 20, y = 30.
    let x = 20;
    let y = 30;
    addBody('let x = 20;');
    addBody('let y = 30;');
    // Addiere x und y und gib das Ergebnis in der Konsole aus.
    evaluate('x + y');

    // Subtrahiere y von x und zeige das Ergebnis in der Konsole. 
    evaluate('x - y');

    // Dann subtrahiere x von y und gib das Ergebnis in der Konsole aus.
    evaluate('y - x');

    // Multipliziere x und y und gib das Ergebnis der Konsole aus.
    evaluate('x * y');

    // Teile x durch y und gib das Ergebnis mit der Konsole aus.
    evaluate('x / y');

    addBody();

    // Deklariere eine weitere Variable z mit dem Wert 10. 
    let z = 10;
    addBody('let z = 10;');

    //Multipliziere x und y. Teile dann das Ergebnis durch z. Speichere das Ergebnis in einer neuen Variablen namens resultOne.
    let resultOne = x * y / z;
    addBody('let resultOne = x * y / z;');
    evaluate('resultOne');

    addBody();

    // Deklariere zwei Variablen a mit dem Wert 15 und b mit dem Wert 9.
    let a = 15;
    let b = 9;
    addBody('let a = 15;');
    addBody('let b = 9;');
    // Zeige den Rest an, wenn a durch b geteilt wird.Nutze Remainder(%).
    evaluate('a % b');

    // Deklariere eine weitere Variable c mit dem Wert 20. 
    let c = 20;
    addBody('let c = 20;');

    // Addiere a und b und multipliziere das Ergebnis mit c, speichere das Ergebnis in der Variable resultTwo.
    let resultTwo = (a + b) * c;
    addBody('let resultTwo = (a + b) * c;');

    // Gib resultTwo in der Konsole aus.
    evaluate('resultTwo');

    addBody();

    // * Inkrementiere a.Gib das Ergebnis in der Konsole aus.
    a++;
    addBody('a++;')
    evaluate('a');

    // * Dekrementiert b.Gib das Ergebnis in der Konsole aus.
    b--;
    addBody('b--;')
    evaluate('b');

    // * Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
    let resultThree = a - b;
    addBody('let resultThree = a - b;');
    evaluate(' resultThree');
    addBody();

    // * Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus.Nutze Remainder(%).
    evaluate('resultOne % resultTwo');
    addBody();

    function evaluate(expr) {
        console.log(expr + ' = ' + eval(expr));
        addBody(expr + ' = ' + eval(expr));
    }
}