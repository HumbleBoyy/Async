// Aysnc, callback

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

function createPost(post, callback) {
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}



createPost({title:"Post Three", body:"This is post three"}, getPosts);