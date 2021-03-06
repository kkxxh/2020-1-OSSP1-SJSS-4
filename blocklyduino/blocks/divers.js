/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');

Blockly.Blocks['grove_temporature_sensor'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VAR_TemSens)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ℃');
  }
};

Blockly.Blocks['grove_ultrasonic_ranger'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
	     .appendField(Blockly.Msg.ultrasonic_ranger+"  ")
	      .appendField("[ TRIG :") //Trig 핀을 통해서 초음파를 발생하고,
        .appendField("(A0)")
        .appendField("|  Echo:") //echo 핀을 통해서 초음파를 받아들임.
        .appendField("(A5) ]");
//        .appendField(new Blockly.FieldDropdown([["cm", "cm"],  ["inch", "inch"]]), "UNIT"); //단위를 정하면, 둘 다 같은 단위로 초음파를 받아들임.
    this.setOutput(true, 'Number'); //거리를 출력
    this.setTooltip('Non-contact distance measurement module'); //접촉하지 않은 물체와의 거리를 측정하는 모듈 - 설명.
  }
};

Blockly.Blocks['grove_motor_shield'] = { //모터 작동 속도와 방향 제어 모듈
  helpUrl: 'http://www.seeedstudio.com/wiki/Motor_Shield',
  init: function() {
    this.setColour(150); //블록 색상
    this.appendDummyInput() 
        .appendField(Blockly.Msg.VAR_Motor) // 모터 값 초기화
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Stop, "stop"], [Blockly.Msg.Forward, "forward"], [Blockly.Msg.Right, "right"], [Blockly.Msg.Left, "left"], [Blockly.Msg.Backward, "backward"]]), "DIRECTION");
    this.appendValueInput("SPEED", 'Number') 
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");
    //top, bottom 모두 connection 갖는 블록
    this.setPreviousStatement(true, null); 
    this.setNextStatement(true, null); 
    this.setTooltip('Drive two brushed DC motors'); 
  }
};

Blockly.Blocks['base_delayms'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
     this.setColour(150);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField(Blockly.Msg.DelayMs)
        .setCheck('Number');
    this.setInputsInline(true); //inline 형태로 정렬
    //top, bottom 모두 connection 갖는 블록
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in Ms');
  }
};

Blockly.Blocks['millis'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Millis',
  init: function() {
     this.setColour(150);
      this.appendDummyInput()
          .appendField(Blockly.Msg.SinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('Number of milliseconds since the program started (unsigned long)');
  }
};

Blockly.Blocks['var_random'] = {
  init: function() {
    this.setColour(150);
    this.setHelpUrl('');
    this.appendValueInput("rand_min")
        .setCheck("Number")
        .appendField(Blockly.Msg.RandomBetween);
    this.appendValueInput("rand_max")
        .setCheck("Number")
        .appendField(Blockly.Msg.And);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['various_constrain'] = {
  init: function() {
      this.setColour(150);
    this.setHelpUrl('http://arduino.cc/en/Reference/Constrain');
    this.appendDummyInput()
        .appendField(Blockly.Msg.Constrain);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg.Number);
    this.appendValueInput("a")
        .setCheck("Number")
        .appendField(Blockly.Msg.NumberA);
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField(Blockly.Msg.NumberB);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Constrains a number to be within a range. ');
  }
};
