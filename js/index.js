const API = 'https://pokeapi.co/api/v2/pokemon';

function setLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

const app = new Vue({
    el: "#app",
    data: {
        focused: false,
        query: "",
        users: [],
    },
    methods: {
        deleteElement(query){
            this.users.splice(query, 1);
            setLS('data', this.users)
        },
        clog(data){
            console.log(data);
        },
        clearSearchBar(){
            this.query = "";
        },
        fillQuery(user){
            this.query = user;
        },
    },
    computed: {
        filteredUsers() {
            let query = this.query.toLowerCase();
            return this.users.filter(user => {
                result = ~user.name.toLowerCase().indexOf(query);
                return result;
            });
            
        }
    },
    mounted() {
        if (!getLS('data') || getLS('data').length == 0){
            fetch(API)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.users = data.results;
                setLS('data', this.users)
            });
        }
        else{
            this.users = getLS('data');
        }

        // if (!getLS('data') || getLS('data').length == 0){
        //     fetch(API)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         data.results.forEach((element,index) => {
        //             data.results[index].id = index;
        //         });
        //         this.users = data.results;
        //         setLS('data', this.users)
        //     });
        // }
        // else{
        //     this.users = getLS('data');
        // }
    },
});
