let image ;
let name;
let follower;
let following;
let repo;


// const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const requestUrl = "https://api.github.com/users/sugyani15";
const xhr = new XMLHttpRequest;
xhr.open('GET',requestUrl);

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if(xhr.readyState ===4){
        const data = JSON.parse(this.responseText);

        image = data.avatar_url;
        name = data.name;
        follower = data.followers;
        following = data.following;
        repo = data.public_repos;
        // console.log(image,name,follower,following,repo);

        // console.log(data);
    }
}

console.log(xhr.readyState);
xhr.send();

const parent = document.querySelector('.container');

document.querySelector('.show-card').addEventListener('click',function(e){
    console.log("i am here");
    const imgTag = document.createElement('img');
    imgTag.className = 'card-photo';
    imgTag.setAttribute('src',image);
    parent.appendChild(imgTag);

    const heading = document.createElement('h2');
    heading.className = 'name';
    heading.innerHTML = `${name}`;
    parent.appendChild(heading);

    const foll = document.createElement('h4');
    foll.className = 'followers';
    foll.innerHTML = `Followers: ${follower}`;
    parent.appendChild(foll);

    const folling = document.createElement('h4');
    folling.className = 'following';
    folling.innerHTML = `Following: ${following}`;
    parent.appendChild(folling);

    const repoP = document.createElement('h4');
    repoP.className = 'repo';
    repoP.innerHTML = `Public repos: ${repo}`;
    parent.appendChild(repoP);

    const removebtn = document.querySelector('.show-card');
    removebtn.remove();
    

})