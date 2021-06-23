import * as Workthrough from "./walkthrough.js";
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
});


document.getElementById('help').addEventListener('click', () => Workthrough.initialize(
    [
        {
            "id": 'about', 'content': 'click the next icon to move to the next tutorial. click the prev button the move to the preveus tutorail. click the close icon to close the tutorial.', 'offset_position': 'right',
        },
        {
            "id": 'store', 'content': 'In laborum commodo aute aliqua reprehenderit magna ut duis cupidatat labore laboris eiusmod duis commodo.', 'offset_position': 'right',
        },
        {
            "id": 'account', 'content': 'In laborum commodo aute aliqua reprehenderit magna ut duis cupidatat labore laboris eiusmod duis commodo.', 'offset_position': 'left',
        },



    ]
));