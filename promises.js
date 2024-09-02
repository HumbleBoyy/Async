// Promises

const posts = [
    {title:"post One", body:"This is post one"},
    {title:"post Two", body:"This is post Two"}
];


function getPosts(){
    setTimeout(()=>{
        let outPut = '';

        posts.forEach((post, index)=> {
            outPut += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = outPut;
    },1000)

}

function createPost(post) {

    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                 resolve("Something went wrong");
            }else{
                reject("Error: Something went wrong")
            }
        }, 2000);
    })
}
// createPost({title:"Post three", body:"This is post three"})
// .then(getPosts)
// .catch(error => console.log(error));


// Aysnc / Await
async function init (){
   await  createPost({title:"Post three", body:"This is post three"})

   getPosts();
}

init();


// Aysnc / Await with fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data)
}

fetchUsers();

// Promise.All

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>
//     setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// Promise.all([promise1, promise2,promise3, promise4]).then(values => console.log(values))