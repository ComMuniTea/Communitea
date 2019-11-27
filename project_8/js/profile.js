// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area")
let delete_button = document.getElementById("remove")

// Prevent default drag behaviors

function handleFiles(files) {
    files = [...files]
    let delete_button = document.getElementById("remove")
    delete_button.disabled = false
    files.forEach(previewFile)
    

  }
function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
  }
}

function deleteFiles(){
    gallery = document.getElementById('gallery')
    if (window.confirm("Are you sure you want to delete the uploaded media?")){
        while (gallery.firstChild){
            gallery.removeChild(gallery.firstChild)
        }
    }
    let delete_button = document.getElementById("remove")
    delete_button.disabled = true
}

function submitChange(){
  document.location.href = "./profile-completion.html";
}

submitPopup = () => {
  alert("Thanks for submitting your message!")
}