//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ji8gno
Blockly.Blocks['ws2812_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_WS2812_PIN)
        .appendField(new Blockly.FieldDropdown([
            ["0","0"], 
            ["1","1"], 
            ["2","2"], 
            ["3","3"], 
            ["4","4"], 
            ["5","5"], 
            ["6","6"], 
            ["7","7"], 
            ["8","8"], 
            ["9","9"], 
            ["10","10"], 
            ["11","11"], 
            ["12","12"], 
            ["13","13"], 
            ["14","14"],
            ["15","15"], 
            ["16","16"]
            ]), "pin")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_LED)
        .appendField(new Blockly.FieldTextInput('7'), "leds")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_LED_UNIT);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#co6db6
Blockly.Blocks['ws2812_data'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_WS2812_LED_SET)
        .appendField(new Blockly.FieldVariable("ws2812"), "ws2812")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_DISPLAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#29h8uv
Blockly.Blocks['ws2812_print'] = {
  init: function() {
    this.appendValueInput("led")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_LED_SET)
        .appendField(new Blockly.FieldVariable("ws2812"), "ws2812")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_LED_NUMBER);
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_LED_UNIT)
        .appendField(Blockly.Msg.WEBDUINO_WS2812_RED);
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_GREEN);
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_BLUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#5pnrkk
Blockly.Blocks['ws2812_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("ws2812"), "ws2812")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#khxoen
Blockly.Blocks['ws2812_brightness'] = {
  init: function() {
    this.appendValueInput("brightness")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_LED_SET)
        .appendField(new Blockly.FieldVariable("ws2812"), "ws2812")
        .appendField(Blockly.Msg.WEBDUINO_WS2812_BRIGHTBESS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};