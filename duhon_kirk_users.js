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
var loop = 0;


function userLanguages(data){
    for(var i in data){
        var mod = [];
        var s = '';
        var z = '';
        s = (data[i].fname + " " + data[i].lname + " knows ");
        var lle = data[i].languages.length;
        for(var o in data[i].languages){
            if(o === String((lle - 1))){
                s = (s + "and " + data[i].languages[o] + ".");
            } else {
                s = (s + data[i].languages[o] + ", ")
            }
        }
        z = (z + data[i].fname + ' is also interested in ')
        for (var o in data[i].interests){
            for(var p in data[i].interests[o]){
                mod.push(data[i].interests[o][p]);
            }
        }
            for(var y = 0; y < mod.length; y++){
                if(y === (mod.length-1)){
                    z = (z + "and " + mod[y] + "." );
                } else {
                    z = (z + mod[y] + ", ");
                }
            }
            console.log(s);
            console.log(z);
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

// function userLanguages(arr,key) {
    //     if(typeof(arr) === 'object') {
    //         if(Array.isArray(arr) === 'true'){
    //             console.log('Array');
    //             for(var i = 0; i < arr.length; i++) {
    //                 for(var o in arr[i]) {
    //                     if(typeof(arr[i][o]) === 'string') {
    //                         console.log(arr[i][o]);
    //                     }
    //                 }
    //             }
    //         }  else {
    //             for(var p in arr){
    //                 if(typeof(p) === 'string' && p.length > 2) {
    //                     var key = p;
    //                 }
    //                 userLanguages(arr[p],key); 
    //             }
    //         }
    //     } else {
    //         console.log(key + " " + arr);
    //     }  
    // }