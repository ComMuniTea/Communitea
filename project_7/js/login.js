function login(){
    username = document.getElementById("username").value
    if (username == "user1"){
        document.location.href = "./profile_1.html";
    }
    else{
        document.location.href = "./profile_2.html"
    }

  }

function register(){
    document.location.href = "./profile.html";
}

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }