//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ji8gno
Blockly.Blocks['ws2812_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("全彩點距陣，腳位")
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
        .appendField("，LED數量")
        .appendField(new Blockly.FieldTextInput('7'), "leds")
        .appendField("顆");
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
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("ws2812"), "ws2812")
        .appendField("顯示");
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
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("ws2812"), "ws2812")
        .appendField("第");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("顆，紅色");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("，綠色");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("，藍色");
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
        .appendField("清除LED顯示");
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
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("ws2812"), "ws2812")
        .appendField("亮度 (0~127) ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};