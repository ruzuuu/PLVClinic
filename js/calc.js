jQuery(function() {

  var expression = '';
  var expressionArray = [];
  var screenArray = [];
  var parentheses = 0;
  var ansOnScreen = false;
  var ans = null;
  var error = false;
  var inverted = false;

  function defaults() {
    expression = '';
    expressionArray = [];
    screenArray = [];
    parentheses = 0;
    ansOnScreen = false;
    ans = null;
    error = false;
    inverted = false;
    jQuery('.result').html('');
    jQuery('.screentext').html('');
    jQuery('.hints').html('');
  }

  function toggleInverted() {
    jQuery('.cbfun .inv').toggle();
    inverted = inverted ? false : true;
  }

  function adjustParentheses(num) {
    jQuery('.hints').html(')'.repeat(num));
  }

  function writeToScreen(mode, text) {

    if (mode == 'append') {
      if (error) {
        screenArray = [];
      }
      error = false;
      screenArray.push(text);
    } else if (mode == 'write') {
      screenArray = [text];
    } else if (mode == 'delete') {
      var popped = screenArray.pop();
      if (/[(]jQuery/g.test(popped)) {
        parentheses > 0 ? parentheses-- : parentheses = 0;
        adjustParentheses(parentheses);
      }
    }

    jQuery('.screentext').html(screenArray.join(''));

    if (inverted) {
      toggleInverted();
    }
  }

  function addToExpression(text) {
    expressionArray.push(text);
    expression += text;
  }

  function removeFromExpression() {
    var count = expressionArray.pop().length;
    expression = expression.slice(0, -count);
  }

  // ask for a result ----------------------------------------------------------
  jQuery('.enter').click(
    function() {

      if (ansOnScreen) {
        expressionArray = [ans];
      }

      addToExpression(')'.repeat(parentheses));

      try {
        math.eval(expressionArray.join('')).toPrecision(8);
      } catch (e) {
        error = true;
      }

      if (error) {
        defaults();
        error = true;
        writeToScreen('write', 'Syntax Error');
      } else {
        jQuery('.result').html(jQuery('.screentext').html().replace(/Ans/, ans) + ')'.repeat(parentheses) + ' =');
        ans = math.eval(expressionArray.join('')).toPrecision(8);
        writeToScreen('write', ans.toString().replace(/(\.0+jQuery)|(0+jQuery)/g, ''));
        jQuery('.hints').html('');

        var el = jQuery('#screentext');
        var newone = el.clone(true);
        el.before(newone);
        jQuery(".animated:last").remove();

        ansOnScreen = true;
      }
      parentheses = 0;
      expression = '';
      expressionArray = [];
    }
  );

  // clear the screen ----------------------------------------------------------
  jQuery('.cbac').click(
    function() {
      defaults();
    }
  );

  // add a number to the screen ------------------------------------------------
  jQuery('.cbnum').click(
    function() {
      var key = jQuery(this).attr('key');

      if (inverted) {
        toggleInverted();
      }

      if (ansOnScreen) {
        jQuery('.result').html('Ans = ' + jQuery('.screentext').html());
        writeToScreen('write', '');
        ansOnScreen = false;
      }

      addToExpression(key);
      writeToScreen('append', jQuery(this).html());
    }
  );

  // add an operator to the screen if there's no other operator ----------------
  jQuery('.cbop').click(
    function() {
      var key = jQuery(this).attr('key');
      var char = jQuery(this).attr('char');
      if (inverted) {
        toggleInverted();
      }

      if (ansOnScreen) {
        jQuery('.result').html('Ans = ' + jQuery('.screentext').html());
        writeToScreen('write', 'Ans');
        expression = ans;
        expressionArray = [ans];
        parentheses = 0;
        jQuery('.hints').html('');
        ansOnScreen = false;
      }

      if ((/[/]jQuery|[*]jQuery/g.test(expression) && (key == '/' || key == '*'))) {
        writeToScreen('write', jQuery('.screentext').html().replace(/[÷]jQuery|[×]jQuery/g, char));
        removeFromExpression();
        addToExpression(key);
      } else if (/[+]jQuery|[-]jQuery/g.test(expression) && (key == '+' || key == '-')) {
        writeToScreen('write', jQuery('.screentext').html().replace(/[+]jQuery|[-]jQuery/g, char));
        removeFromExpression();
        addToExpression(key);
      } else {
        writeToScreen('append', char);
        addToExpression(key);
      }

      ansOnScreen = false;
    }
  );

  // add a parentheses both to screen and to a global var ----------------------
  jQuery('.cbpar').click(
    function() {
      var key = jQuery(this).attr('key');
      if (inverted) {
        toggleInverted();
      }

      if (ansOnScreen) {
        writeToScreen('write', '');
        ansOnScreen = false;
      }

      addToExpression(key);
      writeToScreen('append', key);

      if (key == '(') {
        parentheses++;
        adjustParentheses(parentheses);
      } else if (key == ')') {
        parentheses > 0 ? parentheses-- : parentheses = 0;
        adjustParentheses(parentheses);
      }

    }

  );

  // add a function, change parentheses ----------------------------------------
  jQuery('.cbfun').click(
    function() {
      var key1 = jQuery(this).attr('key1');
      var key2 = jQuery(this).attr('key2');

      if (ansOnScreen) {
        writeToScreen('write', '');
        ansOnScreen = false;
      }

      if (!inverted) {
        addToExpression(key1);
      } else {
        addToExpression(key2);
      }

      writeToScreen('append', jQuery(this).html() + '(');

      parentheses++;
      adjustParentheses(parentheses);

      if (inverted) {
        toggleInverted();
      }

    }
  );

  // append the old result to the expression-----------------------------------------
  jQuery('.cbans').click(
    function() {
      if (ansOnScreen) {
        writeToScreen('write', '');
        ansOnScreen = false;
      }
      if (!/[Ans]jQuery|[0-9]jQuery|[π]jQuery|[e]jQuery/g.test(jQuery('.screentext').html())) {
        addToExpression(ans.toString());
        writeToScreen('append', 'Ans');
      }

    }
  );

  // invert trig functions ----------------------------------------------------------
  jQuery('.cbinv').click(
    function() {
      toggleInverted();
    }
  );

  // backspace -----------------------------------------------------------------------
  jQuery('.cbce').click(
    function() {
      if (inverted) {
        toggleInverted();
      }
      if (ansOnScreen) {
        writeToScreen('write', '');
        ansOnScreen = false;
      }

      if (expressionArray.length) {
        removeFromExpression();
        writeToScreen('delete', '');
      }

    }
  );

  // Insert a random number ---------------------------------------------------------
  jQuery('.cbrnd').click(
    function() {
      var key = Math.random().toPrecision(8);

      if (inverted) {
        toggleInverted();
      }

      if (ansOnScreen) {
        jQuery('.result').html('Ans = ' + jQuery('.screentext').html());
        writeToScreen('write', '');
        ansOnScreen = false;
      }

      addToExpression(key);
      writeToScreen('append', key);
    }
  );

});