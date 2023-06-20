// FOZ DTX JS LIBRARY 2023
// COPYRIGHT (C) GHGLTGGAMER
// WRITTEN BY GHGLTGGAMER


// console init
const Console = "Console";

// page init
const Page = "Page";

// both
const Both = "Both";

// normal init 
const Normal = "Normal";

// full init
const Full = "Full";

// error function()

function giveError(error, type = "Both"){
  // document.write('<div style="color: red;background-color: pink;border: 1px solid red;padding: 10px;font-size: 20px;">' + error + '</div>');
    //console.error(error);
  
  
  if (type === "Console"){
    console.error(error);
  }
  else if (type === "Page"){
    document.write('<div style="color: red;background-color: pink;border: 1px solid red;padding: 10px;font-size: 20px;">' + error + '</div>');
  }
  else if (type === "Both"){
    document.write('<div style="color: red;background-color: pink;border: 1px solid red;padding: 10px;font-size: 20px;">' + error + '</div>');
    console.error(error);
  }
  
}

// error function() - end



// write function


function write(message, type = "Both"){
  if (type === "Console"){
    console.log(message);
  }
  else if (type === "Page"){
    document.write(message);
  }
  else if (type === "Both"){
    document.write(message);
    console.log(message);
  }
  else {
    giveError("FOZ DTX : ERROR : Please use write function with valid arguments in type you can give only Page , Console , Both . You entered " + type);
  }
}


// write function - end

// view 

const view = {
  del(){
    write("There is not any view", Console);
    document.body.style.backgroundColor = "Black";
    document.body.style.color = "Black";
    document.body.style.userSelect = "None";
    document.getElementsByTagName("body").innerHTML = "";
  },
  
  create(){
    document.body.style.color = "Black";
    document.body.style.backgroundColor = "White";
    document.body.style.userSelect = "All";
    write("The view has been created", Console);
    write("", Page)
  }
}


// view.create();
// view - end



// transform 

const transform = {
  x(id, pos){
    var pos_1 = pos + "%";
    
    document.getElementById(id).style.marginRight = pos_1;
  }, 
  y(id, pos){
    var pos_1 = pos + "%";
    document.getElementById(id).style.marginBottom = pos_1;
  },
  z(id, pos){
  var pos_1 = pos + "%";
    document.getElementById(id).style.marginLeft = pos_1;
  }
}

// transformm - end


// pos

const pos = {
  x(id, pos){
    var pos_1 = pos + "%";
    
    document.getElementById(id).style.marginRight = pos_1;
  }, 
  y(id, pos){
    var pos_1 = pos + "%";
    document.getElementById(id).style.marginBottom = pos_1;
  },
  z(id, pos){
  var pos_1 = pos + "%";
    document.getElementById(id).style.marginLeft = pos_1;
  }
}

// pos - end

// transform.z("chngme", 50);
// transform.x("chngme", 50);

// window 
// window commands
var Window_Height = 200;
var Window_Width = 200;
var Window_Text_Color = "White";
var Window_Background_Color = "black";
var Window_Title_Background_Color = "silver";
var Window_Title = "New Window";
var Window_Title_Text_Color = "Black";
var Window_Title_Height = 50;
var Window_HTML = " ";
var Window_Title_Scale = 10;
// window commands - end



const Window = {
  create(nameWin, idElm){
    document.getElementById(idElm).innerHTML = '<div id="' + nameWin + '"><div style="user-select: none;background-color: ' + Window_Title_Background_Color + ';padding: ' + Window_Title_Scale + 'px;width: ' + Window_Width + 'px;color: ' + Window_Title_Text_Color + ';">' + Window_Title + '</div><div style="overflow: scroll;box-shadow: 5px 5px 10px black;height:  ' + Window_Height + 'px;width: ' + Window_Width + 'px;background-color: ' + Window_Background_Color + ';padding: ' + Window_Title_Scale + 'px;color: ' + Window_Text_Color + ';">' + Window_HTML + '</div></div></div>';
    console.log("Window has been created");
    console.log("Window name : " + nameWin);
  },
  destroy(nameWin){
    document.getElementById(nameWin).innerHTML = ' ';
    console.log("Window has been destroyed");
  },
  mirror(nameWin, idElm, url, utilize = "Normal"){
    
    if (utilize === "Normal"){
    document.getElementById(idElm).innerHTML = '<div id="' + nameWin + '"><div style="user-select: none;background-color: ' + Window_Title_Background_Color + ';padding: ' + Window_Title_Scale + 'px;width: ' + Window_Width + 'px;color: ' + Window_Title_Text_Color + ';">' + Window_Title + '</div><iframe style="border: 0px solid transparent;overflow: scroll;box-shadow: 5px 5px 10px black;height:  ' + Window_Height + 'px;width: ' + Window_Width + 'px;background-color: ' + Window_Background_Color + ';padding: ' + Window_Title_Scale + 'px;color: ' + Window_Text_Color + ';" src="' + url  + '">' + '</iframe></div></div>';
    console.log("Window has been created");
    console.log("Window name : " + nameWin);
    }
    else if (utilize === "Full"){
      Window_Background_Color = "transparent";
      document.getElementById(idElm).innerHTML = '<div id="' + nameWin + '"><div style="user-select: none;background-color: ' + Window_Title_Background_Color + ';padding: ' + Window_Title_Scale + 'px;width: ' + Window_Width + 'px;color: ' + Window_Title_Text_Color + ';">' + Window_Title + '</div><iframe style="border: 0px solid transparent;overflow: scroll;box-shadow: 5px 5px 10px black;height:  ' + Window_Height + 'px;width: ' + Window_Width + 'px;background-color: ' + Window_Background_Color + ';padding: ' + Window_Title_Scale + 'px;color: ' + Window_Text_Color + ';" src="' + url + '">' + '</iframe></div></div>';
      console.log("Window has been created");
      console.log("Window name : " + nameWin);
    }
  }
}



// window - end
/*Window_Title_Background_Color = "skyblue";
// Window_Background_Color = "yellow";
Window_Width = 340;
Window_Title = "OpenGL 4.6 - Shader Tutorial"
Window.mirror("myWindow", "chngme", "https://fozdtxonline.wordpress.com/", Full);

transform.z("myWindow", 23);*/

// selection

const Selection = {
  block(){
    document.body.style.userSelect = 'none';
  },
  text(){
    document.body.style.userSelect = "text";
  },
  image(){
    document.body.style.userSelect = "image";
  },
  all(){
    document.body.style.userSelect = "all";
  }
}

// selection - end

//Selection.all();


// Shader

const Shader = {
  drawShadows(id, x, y , spread, color){
    var shadow_create = x+"px" + " " + y+"px" + " " + spread+"px" +  " " + color;
    document.getElementById(id).style.boxShadow = shadow_create;
  },
  drawTextShadows(id, x, y, spread, color) {
    var shadow_create = x + "px" + " " + y + "px" + " " + spread + "px" + " " + color;
    document.getElementById(id).style.textShadow = shadow_create;
  },
  
  createLighting(id, direction, intensity, color){
    
    var light = "0px 0px 0px white; -0px -0px 0px white";
    var blur = parseInt(intensity);
    
    
      if (direction = "Left"){
        light = "5px 5px 10px "+ color;
        Shader.drawShadows(id, -intensity, -intensity, blur*2, color);
      }
      else if (direction = "Right"){
        
      }
      else if (direction = "Up"){
        
      }
      else if (direction = "Bottom"){
        
      }
      else {
        giveError("FOZ DTX : ERROR : Please define a valid direction in direction argument of createLighting() method");
      }
    
    
    
  },
  
  
  
  
  
  setOpacity(id, opacity){
    document.getElementById(id).style.opacity = opacity;
  },
  
  
  
  reflect(htmlCode, id){
    var reflection = "180deg";
    
    document.getElementById(id).innerHTML = htmlCode;
    document.getElementById(id).style.transform = "rotate(180deg)"
    document.getElementById(id).style.margin= "0px";
    Shader.setOpacity(id, 0.5);
  }
  
   
}

// Shader - end


// Shader.drawTextShadows("chngme", 3, 3, 3, "black");
// Shader.createLighting("chngme", "Left", 7, "yellow");
// Shader.drawShadows("chngme", 8, 8, 16, "black");
// Shader.setOpacity("chngme", 0.5);
//Shader.reflect("<b>hy</b>", "rt");

// Render PBR

const Left = "Left";
const Top = "Top";
const Bottom = "Bottom";
const Right = "Right";

var Render = {
  pbr(light_intensity, color, shcolor, pos, id){
    var int = parseInt(light_intensity);
    
    var box = light_intensity+"px " + light_intensity+"px " + int*1 + "px " + shcolor ;
    
    var box2 = light_intensity+"px " + "-"+light_intensity+"px " + int*1 + "px " + shcolor ;
    
    // + ", " + light_intensity+"px " + light_intensity+"px " + int*2 + "px" + color;
    
    
    if (pos = "Top"){
      document.getElementById(id).style.boxShadow = box;
      document.getElementById(id).style.border = light_intensity + "px solid";
      document.getElementById(id).style.borderTopColor = color;
      document.getElementById(id).style.borderLeftColor = "silver";
      document.getElementById(id).style.borderRightColor = "silver";
      document.getElementById(id).style.borderBottomColor = shcolor;
    }
    
    else if (pos = "Left"){
      document.getElementById(id).style.boxShadow = box2;
      document.getElementById(id).style.border = light_intensity + "px solid";
      document.getElementById(id).style.borderTopColor = "silver";
      document.getElementById(id).style.borderLeftColor = color;
      document.getElementById(id).style.borderRightColor = shcolor;
      document.getElementById(id).style.borderBottomColor = "silver";
    }
    
    else if (pos = "Right"){
      document.getElementById(id).style.boxShadow = box;
      document.getElementById(id).style.border = light_intensity + "px solid";
      document.getElementById(id).style.borderTopColor = color;
      document.getElementById(id).style.borderLeftColor = "silver";
      document.getElementById(id).style.borderRightColor = "silver";
      document.getElementById(id).style.borderBottomColor = shcolor;
    }
    
    else if (pos = "Bottom"){
      document.getElementById(id).style.boxShadow = box;
      document.getElementById(id).style.border = light_intensity + "px solid";
      document.getElementById(id).style.borderTopColor = color;
      document.getElementById(id).style.borderLeftColor = "silver";
      document.getElementById(id).style.borderRightColor = "silver";
      document.getElementById(id).style.borderBottomColor = shcolor;
    }
    
    // document.getElementById(id).style.boxShadow = box;
    // document.getElementById(id).style.border = light_intensity+"px solid";
    // document.getElementById(id).style.borderTopColor = color;
    // document.getElementById(id).style.borderLeftColor = "silver";
    // document.getElementById(id).style.borderRightColor = "silver";
    // document.getElementById(id).style.borderBottomColor = shcolor;
    
  }
}

// Render PBR - end

// Render.pbr(10, "white", "grey", Left, "box");
