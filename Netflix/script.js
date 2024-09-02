// function searchbox()



let movies =[
    {
        name:"After Ever Happy",
        poster:"./after ever happy.jpeg",
        rating:"",
    },

    {
        name:"3",
        poster:"./after ever happy.jpeg",
        rating:"",
    },

    {
        name:"VTV",
        poster:"./after ever happy.jpeg",
        rating:"",
    },

    {
        name:"Never Have I Ever",
        poster:"./after ever happy.jpeg",
        rating:"",
    },

    {
        name:"Mismatched",
        poster:"./after ever happy.jpeg",
        rating:"",
    },

    {
        name:"Leo",
        poster:"./after ever happy.jpeg",
        rating:"",
    },

    {
        name:"Padmavathi",
        poster:"./after ever happy.jpeg",
        rating:"",
    }
];




    //   console.log("button working")  
    // let moviename = document.getElementById("searchbox").value
    
    // }
    // console.log( moviename);
// function displaymovies()
// {
//     let moviediv = document.createElement("div");
//     movie.classList.add("movie");

//     let overlaydiv = document.createElement("div");
//     overlaydiv.classList.add("overlay")

//     moviediv.appendChild(overlaydiv);

//     console.log(moviediv);
// }

// displaymovies();


function displaymovies()
{
    let htmlstring= ``;

    for(let i=0;i<movies.length;i++)
    {
        htmlString=htmlString+ `
        <div class="movie" > 
            <div class="overlay">
                <div class="video">

                </div>
                <div class="detail">
                    <h1>${movies[i].name}</h1>
                    <h2>${movies[i].rating}</h2>
                    <p>${movies[1].description}</p>

                    <!-- <p>raja. emma stoke. john delton</p> -->

                </div>
             

            </div>
           
            <img class="poster" src="./after ever happy.jpeg" alt="">
            
        </div>
    `
    }

    // console.log(htmlString);



document.getElementById("movies").innerHTML= htmltSring;


}

