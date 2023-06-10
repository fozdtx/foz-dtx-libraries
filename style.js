function mouse_out_btn_01(){
  document.getElementById("btn-001").classList.remove("btn-01");
  document.getElementById("btn-001").classList.add("btn-01-anim");
  setTimeout(function(){
    document.getElementById("btn-001").classList.remove("btn-01-anim");
    document.getElementById("btn-001").classList.add("btn-01");
  }, 1000)
}