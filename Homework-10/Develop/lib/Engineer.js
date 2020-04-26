const Employee = require ("./Employee")
const axios = require("axios");


class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = {
            getUser(username) {
              return axios
                .get(`https://api.github.com/users/${username}`)
                .then (response => response)
                .catch(err => {
                  console.log("Uh oh", err);
                  process.exit(1);
                })
          
            }
          
          };

    }

    getRole(){
        return "Engineer";
    }
    
    getGitHub(){
        return this.gitHub;
    }

}


// module.exports = api;

module.exports = Engineer;


// const api = {
//   getUser(username) {
//     return axios
//       .get(`https://api.github.com/users/${username}`)
//       .then (response => response)
//       .catch(err => {
//         console.log("Uh oh", err);
//         process.exit(1);
//       })

//   }

// };

