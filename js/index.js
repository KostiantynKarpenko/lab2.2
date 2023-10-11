const API = 'https://pokeapi.co/api/v2/pokemon';
// let users = [];
// let filteredUsers = [];

// const $listContainer = document.querySelector('.users-table')
// const $searchBar = document.querySelector('.search-bar')
// const $field = document.querySelector('.field')
// const $cross = document.querySelector('.clear-search-bar')

// function setLS(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }
// function getLS(key) {
//     return JSON.parse(localStorage.getItem(key));
// }

// if (!getLS('data') || getLS('data').length == 0){
//     fetch(API)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         users = data.results;
//         setLS('data', users)
//         templateBuilder(users);
//     });
// }
// else{
//     users = getLS('data');
//     templateBuilder(users);
// }

// function filterController(query) {
//     filteredUsers = users.filter((el) => {
//         return ~el.name.toLowerCase().indexOf(query.toLowerCase());
//     });
//     templateBuilder(filteredUsers);
// }

// function templateBuilder(list) {
//     let template = '';
//     if (!list.length) {
//         template = '<tr><td><span>Not found</span></td></tr>'
//     }
//     else {
//         list.forEach((element, i) => {
//             template += '<tr><td><a class="name">' + element.name + '</a></td>' + '<td><a class="url">' + element.url + '</a></td>' + '<td><button class="delete-element" element-index="' + i + '">Delete</button></td></tr>';
//         });
//     }
//     $listContainer.innerHTML = template;
// }

// $field.addEventListener('input', (e) => {
//     let query = e.target.value;
//     filterController(query);
// });

// window.addEventListener('click', (e) =>{
//     if (e.target.classList.contains('name')) {
//         let target = e.target.innerText
//         $field.value = target;
//         filterController(target)
//     }


const app = new Vue({
    el: "#app",
    data: {
        focused: false,
        query: "",
        users: [],
    },
    methods: {
        deleteElement(index){
            console.log(this.users);
            this.users.splice(index, 1);
        },
        clog(){
            console.log(2);
        },
        clearSearchBar(){
            this.query = "";
        },
        fillQuery(user){
            this.query = user;
        }

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
        fetch(API)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.users = data.results;
            })
    },
});
