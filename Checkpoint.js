// Exercice 1
// var t = [1,2,3,9,8]

// const attente=()=> new Promise((resolve)=> setTimeout(resolve,1000))

// const Affiche=async(tab)=>{
//     for(let i = 0; i <tab.length;i++){
//             console.log(tab[i])
//             await attente()
//     }
// }

// Affiche(t)


// Exercice 2
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json))


// Exercice 3
// fetch('https://jsaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch((error)=>console.log("3andi mochkla fel api el fouleni"))

// Exercice 4

// const Call1 =()=>{
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('Call1 terminate')
//         }, 1000);
//     })
// }


// const Call2=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve ("Call2 terminate")
//         }, 1000);
//     })
// }

// const appelPromesse=async()=>{
//     try {
//         const [resCal1,resCal2] = await Promise.all([Call1(),Call2()])

//         console.log(`Resultat 1 ${resCal1}`)
//         console.log(`Resultat 2 ${resCal2}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// appelPromesse()

// Exercice 5


// var urls = [
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/users/9",
//     "https://jsonplaceholder.typicode.com/users/7"
// ]

// const consomationApi=async()=>{
//     try {
//         var promAPI = urls.map((el,i,t)=> fetch(el).then((resultat)=>resultat.json()) )
//         var resultat = await Promise.all(promAPI)
//         console.log(resultat)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consomationApi()
