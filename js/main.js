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
            "id": 'gmail', 'heading': 'read your email', 'content': 'read your email heres', 'offset-position': 'bottom_right',
        },
        {
            "id": 'apps', 'heading': 'find google apps', 'content': 'get hacking using google apps', 'offset-position': 'bottom_right',
        },
        {
            "id": 'sign', 'heading': 'Sign in here', 'content': 'to get the best experience by signing in', 'offset-position': 'bottom_right',
        },
        {
            "id": 'search-bar', 'heading': 'search quary here', 'content': 'put your search quary here', 'offset-position': 'bottom_left',
        },
        {
            "id": 'google-search', 'heading': 'click to search', 'content': 'click here to start the search quary', 'offset_position': 'bottom-center',
        },
        {
            "id": 'felling-lucky', 'heading': 'are you felling lucky?', 'content': 'click here if you are felling luck today', 'offset_position': 'bottom-center',
        },
        {
            "id": 'advertising', 'heading': 'post ads with google', 'content': 'click to find out more about search', 'offset_position': 'top-left',
        },
        {
            "id": 'settings', 'heading': 'edit google search', 'content': 'click here to edit to your pereference', 'offset_position': 'top-right',
        },
    ]
);