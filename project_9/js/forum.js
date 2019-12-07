const submitPopup = () => {
    points = JSON.parse(window.localStorage.getItem('points')) || 0
    points += 1
    window.localStorage.setItem('points', points)
    alert("Thanks for submitting your message! Now you have " + points + ' points in total!')
}

function navProfile(){
    username = window.localStorage.getItem('username')
    if (username == "user1"){
        document.location.href = "./profile_1.html";
    }
    else{
        document.location.href = "./profile_2.html"
    }

  }

