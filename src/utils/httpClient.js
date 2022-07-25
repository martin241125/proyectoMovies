const API = "https://api.themoviedb.org/3";


export function get(path){
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjIwOWJlNGM0NzZmMmU0MDNhNGI1OTdkOTVkNWY5ZiIsInN1YiI6IjYyY2Q5MTk1ZTgxMzFkMWRjYjM2MDdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wtAxipn7OEXR6_mVScYzpAbWWuLYxSa4A8pMlSXf8zo",
            "Content-Type": "application/json;charset=utf-8",            
        },
    })
    .then((result) => result.json());
}