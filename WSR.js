// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json))

// const consommationAPI=async()=>{
//     try {
//         var res = await fetch('https://jsonplaceholder.typicode.com/users')
//         var tableUsers = await res.json()
        
//         const listName = document.querySelector('#listName')

//         for(let i = 0; i< tableUsers.length;i++){
//            var newLi =  document.createElement('li')
//            newLi.innerText = tableUsers[i].name
//            listName.appendChild(newLi)
//         }


//     } catch (error) {
//         console.log(error)
//     }
// }

// consommationAPI()


const axios = require('axios')

const consommationAPI=async()=>{
    try {
        var res = await axios.get('https://jsonplaceholder.typicode.com/photos')

        var tabPhoto = res.data
        console.log(tabPhoto)
        var blockPhotos = document.querySelector('#blockPhotos')

        for(let i = 0;i < tabPhoto.length;i++){
            var newImg = document.createElement('img')
            newImg.setAttribute('src',tabPhoto[i].url)
            blockPhotos.appendChild(newImg)
        }
    } catch (error) {
        console.log(error)
    }
}

consommationAPI()