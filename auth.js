function auth(form) {
  var user = form.username.value;
  var pass = form.pwd.value;
  
  var user1 = "admin";
  var pass1 = "password";
  
  if(user == user1 && pass == pass1){
    document.write("Sup");
  } else {
    alert("Nope");
  }
}
