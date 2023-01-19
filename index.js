const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let main = document.getElementById("main");
let hearts = [];

for (let i = 0; i < posts.length; i++) {
    main.innerHTML += `
    <div id=mclass="poster-info">
        <img class="avatar" src="${posts[i].avatar}" alt="artist's avatar">
        <div>
            <p class="name bolded">${posts[i].name}</p>
            <p class="location">${posts[i].location}</p>
        </div>
    </div>
    <img class="img-post" src="${posts[i].post}" alt="artist's selfie" />
    <div class="post-details">
    <img id="heart-${i}" class="icon" src="images/icon-heart.png" alt="like icon">
    <img class="icon" src="images/icon-comment.png" alt="comment icon">
    <img class="icon" src="images/icon-dm.png" alt="direct message icon">
    <p id="likes-${i}" class="bolded">${posts[i].likes} likes</p>
    <p><span class="bolded">${posts[i].username}</span> ${posts[i].comment}</p>
    </div>
    `
    hearts.push(`heart-${i}`);
}

for (let i = 0; i < hearts.length; i++) {
    document.getElementById(hearts[i]).addEventListener("dblclick", function() {
        document.getElementById(`likes-${i}`).textContent = `${posts[i].likes += 1} likes`;
    })
}

