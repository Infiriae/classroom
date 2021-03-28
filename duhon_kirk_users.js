users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: 
        {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
         }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests:
        {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests:
        {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(arr) {
    for(var i = 0; i < arr.length; i++){    
        for(var key in arr[i]){
            if(typeof(arr[i][key]) === 'object'){
                userLanguages(arr[i][key]);
            }
            //console.log(typeof(arr[i][key]));
            console.log(arr[i][key]);
        }
    }
}

userLanguages(users);

// function userLanguages(arr) {
//     for(var i = 0; i < arr.length; i++){    
//         for(var key in arr[i]){
//             console.log(key);
//             if(typeof(arr[i][key]) === 'object'){
//                 for(var o = 0; o < arr[i][key].length; o++) {
//                     if(typeof(arr[i][key][o]) === 'object') {
//                         for(var p = 0; p < arr[i][key][o].length; p++){
//                             console.log("P = " + key);
//                             console.log(arr[i][key][o][p]);
//                         }
//                     } else {
//                         console.log("O = " + key);
//                         console.log(arr[i][key][o]);
//                     }
//                 }
//             } else {
//                 console.log("I = " + key);
//                 console.log(arr[i][key]);
//             }
//         }
//     }
// }