// 


// const Somme = new Promise((resolve,reject)=>{
//     var a = 2
//     var b = undefined
//     var resultat = a + b

//     if(resultat){
//         resolve(resultat)
//     }else{
//         reject('Could not calculate')
//     }
// })

// Somme.then((res)=>console.log(res)).catch((erreuuur)=>console.log(erreuuur))


// const Somme=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         var resultat = a + b

//         if (resultat>18) {
//             resolve('Mar7bé')
//         } else {
//             reject('Rawa7')
//         }
//     })
// }

// Somme(30,4).then((essia)=>console.log(essia)).catch((mahmoud)=>console.log(mahmoud))




// const Somme=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         var resultat = a + b

//         if (resultat && typeof(resultat)== 'number' ) {
//             resolve(resultat)
//         } else {
//             reject('Could not calculate')
//         }
//     })
// }

// Somme(30,"OOuO").then((essia)=>console.log(essia)).catch((mahmoud)=>console.log(mahmoud))


// console.log("Start")

// var somme = 0

// for(let i = 0;i< 1000000;i++){
//     somme = somme + i
// }

// console.log(somme)

// console.log("Finish")

// const calculateS =()=>{
//     return  new Promise((resolve,reject)=>{
//         var somme = 0
    
//         for (let i = 0; i < 10000000; i++) {
//             somme = somme + i
//         }
    
//         if(somme){
//             resolve(somme)
//         }else{
//             reject('Could not calculate')
//         }
//     })
// }

// const test=async()=>{
//     try {
//         console.log("Start")
//         var a = await calculateS()
//         console.log(a)
//         console.log("Finish")
//     } catch (error) {
//         console.log(error)
//     }
// }

// test()

// var t = [1,2,3,9,8]

// const attente=()=> new Promise((resolve)=> setTimeout(resolve,1000))

// const Affiche=async(tab)=>{
//     for(let i = 0; i <tab.length;i++){
//         if (i<2) {
//             console.log(tab[i])
//             await attente()
//         } else {
//             console.log(tab[i])
//         }
        
//     }
// }

// Affiche(t)

// const attente=()=> new Promise((resolve)=> setTimeout(resolve,1000))

// var str = "belhssane"

// const affBel=async(s)=>{
//     var t = s.split('')

//     for (let i = 0; i < t.length; i++) {
//         console.log(t[i].toUpperCase())
//         await attente()
        
//     }

// }

// affBel(str)


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json))

// fetch('https://jsaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch((error)=>console.log("3andi mochkla fel api el fouleni"))

var consomationAPI=async()=>{
    try {
        const resultat = await fetch('https://jsonplaceholder.typicode.com/users')
        const resssss = await resultat.json()
        console.log(resssss)
    } catch (error) {
        console.log(error)
    }
}

consomationAPI()