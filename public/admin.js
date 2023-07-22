
// Your Code Here
let response = await fetch('http://localhost:3001/listBooks', {
    //takes two arguments
    method: "GET"
})

let listBooks = await response.json()
console.log(listBooks)

let response2 = await fetch('http://localhost:3001/addBook', {
    //takes two arguments
    method: "POST",
    body: {
        "id": 3,
        "title": "The Annals of Arathrae",
        "year": 2016,
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "quantity": 8,
        "imageURL": "/assets/arathrae.jpeg"
      }

})

let addBook = await response.json()
console.log(addBook)