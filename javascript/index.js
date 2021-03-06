

const  teamArtemis = [
    {
        name: "Ejeh Daniel",
        image: "img/daniel.png",
        bestFood: "Rice",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "Money Heist",
        age: "19",

    },
    {
        name: "Gabriel-Eta Ekpo",
        image: "img/gabriel.png",
        bestFood: "Rice",
        complexion: "Fair",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "King of Boys",
        age: "25",

    },
    {
        name: "Abdulsamad Raji",
        image: "img/raji.jpg",
        bestFood: "Yam",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "Love Untold",
        age: "23",

    },
    {
        name: "Ekpenyong Duckham",
        image: "img/ekpeyong.jpg",
        bestFood: "French Fries",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "Quest",
        age: "30",

    },
    {
        name: "Emmanuel Stephen",
        image: "img/emma.png",
        bestFood: "Semovita ",
        complexion: "light-Skinned",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "Money Heist",
        age: "21",

    },
    {
        name: "Ayobami Ogundiya",
        image: "img/ayobami.jpg",
        bestFood: "Jollof Rice",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "Super story",
        age: "19",

    },
    {
        name: "Merit Dike",
        image: "img/merit.png",
        bestFood: "Fried Rice",
        complexion: "Fair",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "Spider Man",
        age: "22",

    },
    {
        name: "Comely Aniedi Daniel",
        image: "img/comley.jpg",
        bestFood: "Beans",
        complexion: "Fair",
        thingsLearnt: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
        bestMovie: "Money ",
        age: "19",

    },
];

let row = document.getElementById("row");

for(let i = 0; i < teamArtemis.length; i++) {

    let member = `<div class="col-lg-6 col-md-6 ">
                    <div class="card my-4 ms-lg-5 me-lg-5  hover-zoom">
                        <img src= "${teamArtemis[i].image}" class="card-img-top" alt="${teamArtemis[i].name}">
                        <div class="card-body">
                          <h5 class="card-title">${teamArtemis[i].name}.</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${teamArtemis[i].bestFood}.</li>
                            <li class="list-group-item">${teamArtemis[i].complexion}.</li>
                            <li class="list-group-item">${teamArtemis[i].thingsLearnt}.</li>
                            <li class="list-group-item">${teamArtemis[i].bestMovie}.</li>
                            <li class="list-group-item">${teamArtemis[i].age}.</li>
                        </ul>
                        <button class="btn btn-primary" onclick="alertName(${i})">Click Me!!</button>
                    </div> 
                  </div>`;
                  
    row.innerHTML += member;

    function alertName(i) {
        alert(teamArtemis[i].name);
    };
};


