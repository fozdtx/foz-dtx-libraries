// Copyright (c) ghgltggamer 2023
// Written by GHGLTGGAMER

// 2d

// function

function ALBELO_CONTEXT_TYPE_2D(){
  const CONTEXT_BIN = "01000001 01001100 01000010 01000101 01001100 01001111 01011111 01000011 01001111 01001110 01010100 01000101 01011000 01010100 01011111 01010100 01011001 01010000 01000101 01011111 00110010 01000100 00101000 00101001";
  return CONTEXT_BIN;
}

function ALBELO_CONTEXT_TYPE_3D(){
  var CONTEXT_BIN = "01000001 01001100 01000010 01000101 01001100 01001111 01011111 01000011 01001111 01001110 01010100 01000101 01011000 01010100 01011111 01010100 01011001 01010000 01000101 01011111 00110011 01000100 00101000 00101001";
  
  return CONTEXT_BIN;
}


var albelo_context_type = "";

function ALBELO_CONTEXT_TYPE(ALBELO_CONTEXT_DECTARATION_TYPE){
  
  // 2d context
  
  if (ALBELO_CONTEXT_DECTARATION_TYPE === "01000001 01001100 01000010 01000101 01001100 01001111 01011111 01000011 01001111 01001110 01010100 01000101 01011000 01010100 01011111 01010100 01011001 01010000 01000101 01011111 00110010 01000100 00101000 00101001"){
    
    
    
    
    
    // action
    albelo_context_type ="op.id=ALVAX.API.KEY=>01"
    
    
    
    
    
  }
  
  else if (ALBELO_CONTEXT_DECTARATION_TYPE === "01000001 01001100 01000010 01000101 01001100 01001111 01011111 01000011 01001111 01001110 01010100 01000101 01011000 01010100 01011111 01010100 01011001 01010000 01000101 01011111 00110011 01000100 00101000 00101001"){
    
    albelo_context_type = "op.id=ALVAX.KEY=1.11102";
    
  }
  
  // 2d context - end
  
}

const ALBELO_CREATE_CURRENT_CONTEXT = "ALBELO_CREATE_CURRENT_CONTEXT";

function ALBELO_CREATE_CONTEXT(ALBELO_CONTEXT_TYPE){
  
  // 2d context
  
  if (ALBELO_CONTEXT_TYPE === "ALBELO_CREATE_CURRENT_CONTEXT"){
    if (albelo_context_type === "op.id=ALVAX.API.KEY=>01"){
    document.body.style.perspective = "0px";
    document.body.style.fontFamily = "Arial";
    document.body.style.margin = "12px";
    document.body.style.cursor ="crosshair";
    document.body.style.background = "skyblue";
    }
    else if (albelo_context_type === "op.id=ALVAX.KEY=1.11102"){
      
      document.body.style.fontFamily = "Arial";
      document.body.style.margin = "10px";
      document.body.style.cursor = "default";
      document.body.style.transform = "rotateX(30deg) rotateY(0deg) perspective(800deg) rotateX(50deg)";
      document.write("<style>div{transform: perspective(800px) rotateX(60deg);transform-origin: center;}</style>");
      
      document.body.style.backgroundImage = "linear-gradient(skyblue, white, grey, dimgrey)";
      document.body.style.userSelect = "none";
      document.body.style.backgroundAttachment = "fixed";
    
    }
    else {
      
      console.error("Cannot Create Current Context when Current Context is not defined");
      
    }
  }
  else {
  
    console.error("Invalid current context");
  
  }
  
  // 2d context - end
  
  
}


var albelo_rotate_action;


function ROTATE_3D(x, y, z){
  
  var rotate_3d = "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg)";
  
  return rotate_3d;
  
  
}


function ALBELO_TRANSFORM_OBJECT(ARGS_ALBELO_STD, ALBELO_STD_ARGS){
  
  // action
  document.getElementById(ALBELO_STD_ARGS).style.transform = ARGS_ALBELO_STD;
  
}



// function - end

// 2d - end



// shader
var albelo_light_intensity_shader;
var albelo_light_color_shader;
var albelo_shadow_color_shader;
var albelo_shadow_axis_shader;
const ALBELO_CREATE_SHADER = {
  
  ALBELO_SET_LIGHT_COLOR(ALBELO_LIGHT_COLOR_NAME){
    albelo_light_color_shader = ALBELO_LIGHT_COLOR_NAME;
  },
  ALBELO_SET_LIGHT_INTENSITY(ALBELO_LIGHT_INTENSITY){
    albelo_light_intensity_shader = ALBELO_LIGHT_INTENSITY;
  },
  ALBELO_CREATE_LIGHT(ALBELO_LIGHT_ARGS = "def"){
    
    document.write("<style>*{background-color: " + albelo_light_color_shader + ";opacity: " + albelo_light_intensity_shader + ";}</style>")
    
  },
  
  
  
  
  // shadows
  
  ALBELO_SET_SHADOW_COLOR(ALBELO_SHADOW_COLOR_NAME){
    albelo_shadow_color_shader = ALBELO_SHADOW_COLOR_NAME;
  },
  ALBELO_SET_SHADOW_AXIS(x, y, blur){
    var shadow = x + "px " + y + "px " + blur + "px " + albelo_shadow_color_shader;
    
    return shadow;
  },
  
  ALBELO_CREATE_SHADOW(INPUT_ARGS_ALBELO){
    
    // ACTION
    document.write("<style>*{box-shadow: " + INPUT_ARGS_ALBELO + ";}</style>");
    
  }
  
  
}

// shader - end



function TRANSLATE_3D(x, y, z){
  
  var translate_bin_pos = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
  
  return translate_bin_pos;
  
}



// camera

const ALBELO_CREATE_CAMERA = {
  
  // console.log("camera was created successfully"),
  
  ALBELO_ROTATE_CAMERA(ANGLE_OF_CAMERA_ALBELO){
    
    document.write("<style>*{transform: " + ANGLE_OF_CAMERA_ALBELO + ";}</style>")
    
  },
  
  ALBELO_CREATE_CAMERA(ALBELO_CAMERA_TYPE){
    if (ALBELO_CAMERA_TYPE === "perspective_camera()"){
      document.write("<style>div{transform: perspective(800px) rotateX(60deg);transform-origin: center;}</style>");
      console.log("Perspective camera created successfully...");
    }
    else if (ALBELO_CAMERA_TYPE === "normal_camera()") {
      document.write("<style>div{transform: perspective(0px) rotateX(0.01deg);transform-origin: center;}</style>");
      console.log("Normal camera created successfully...");
    }
    else {
      console.error("FAILED TO CREATE A CAMERA");
    }
  },
  
  
  
  
  ALBELO_CAMERA_STYLE(ALBELO_CAMERA_STYLE){
    if (ALBELO_CAMERA_STYLE === "_3d()"){
      
      document.write("<style>div{transform-style: preserve-3d;}</style>");
      
    }
    else if (ALBELO_CAMERA_STYLE === "_2d()"){
      
      document.write("<style>transform-style: none;</style>")
      
    }
  }
  
}
function _3D(){
  var bin_3d = '_3d()';
  return bin_3d;
}

function _2D(){
  var bin_2d = '_2d()';
  return bin_2d;
}

function PERSPECTIVE_CAMERA(){
  var cam_bin="perspective_camera()";
  
  return cam_bin;
}

function NORMAL_CAMERA(){
  var cam_bin="normal_camera()";
  return cam_bin;
}


// camera - end
