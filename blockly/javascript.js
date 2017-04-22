Blockly.JavaScript['ws2812_new'] = function (block) {
  var dropdown_pin = block.getFieldValue('pin');
  var text_leds = block.getFieldValue('leds');
  var code = 'getWS2812(board,' + dropdown_pin + ',' + text_leds + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['ws2812_print'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812'), Blockly.Variables.NAME_TYPE);
  var value_led = Blockly.JavaScript.valueToCode(block, 'led', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var value_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_ws2812 + '.print(' + value_led + ',' + value_r + ',' + value_g + ',' + value_b + ');\n';
  return code;
};

Blockly.JavaScript['ws2812_clear'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812'), Blockly.Variables.NAME_TYPE);
  var code = variable_ws2812 + '.clear();\n';
  return code;
};

Blockly.JavaScript['ws2812_brightness'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812'), Blockly.Variables.NAME_TYPE);
  var value_brightness = Blockly.JavaScript.valueToCode(block, 'brightness', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_ws2812 + '.brightness(' + value_brightness + ');\n';
  return code;
};