import * as Workthrough from "./workthrough.js";
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
});


Workthrough.initialize(
    [
        {
            "id": 'about', 'heading': 'learning more about google', 'content': 'you will learn more by by navigating to about page', 'offset_position': 'bottom-left',
        },
        {
            "id": 'store', 'heading': 'chech out the store', 'content': 'you will learn more by by navigating to store page', 'offset_position': 'bottom-left',
        },
        {
            "id": 'gmail', 'heading': 'read your email', 'content': 'read your email heres', 'offset_position': 'bottom-right',
        },
        {
            "id": 'apps', 'heading': 'find google apps', 'content': 'get hacking using google apps', 'offset_position': 'bottom-right',
        },
        {
            "id": 'sign_in', 'heading': 'Sign in here', 'content': 'to get the best experience by signing in', 'offset_position': 'bottom-right',
        },
        {
            "id": 'search_container', 'heading': 'search quary here', 'content': 'put your search quary here', 'offset_position': 'bottom-left',
        },
        {
            "id": 'advertising', 'heading': 'add heres', 'content': 'Quis ea consequat aute laborum mollit veniam mollit non incididunt proident.', 'offset_position': 'top-left',
        },
        {
            "id": 'settings', 'heading': 'edit settings', 'content': 'Quis ea consequat aute laborum mollit veniam mollit non incididunt proident.', 'offset_position': 'top-right',
        },


    ]
);