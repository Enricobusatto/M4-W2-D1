
//FETCH API

const authorization = "cyii41YpogCADaQ9Xes56fGlW3VcYwDrksNAcqF7Wg9teWbVy5YThFd5"

function fetchPhoto(photoId) {
    fetch(`https://api.pexels.com/v1/search?query=${photoId}`, {
        headers: {
            Authorization: authorization
        }
        
    })
        .then(response => response.json())
        .then(data => console.log(data))
}
fetchPhoto('waterfresh');
