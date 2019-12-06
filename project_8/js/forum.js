const submitPopup = () => {
    points = JSON.parse(window.localStorage.getItem('points')) || 0
    points += 1
    window.localStorage.setItem('points', points)
    alert("Thanks for submitting your message! Now you have " + points + ' points in total!')
}