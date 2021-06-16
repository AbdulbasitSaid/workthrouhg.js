
let targets = [];
let index = 0;
let dailogElement = document.getElementsByClassName('workthrough-body')[0];
dailogElement.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
});
let initialize = (arr) => {
    document.getElementById('next').addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        next();
    });
    document.getElementById('prev').addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        prev();
    });
    targets = arr;
    showWorkthroughDialog(targets[index].id, targets[index].offset_position, targets[index].heading, targets[index].content);

    console.log('this module has been Initialzed');
}

let showWorkthroughDialog = (targetElementId, offsetPosition, heading, content) => {
    const targetElement = document.getElementById(targetElementId);
    console.log(targetElement);
    let headingElement = document.getElementById('workthough_heading');
    headingElement.innerHTML = heading;
    let contentElement = document.getElementById('workthough_content');
    contentElement.innerHTML = content;
    targetElement.appendChild(dailogElement);
    dailogElement.classList.add('bottom-left');
    dailogElement.classList.remove('hide');
    targetElement.classList.add('relative');
}

let next = () => {

    let last = targets.length - 1;
    if (index < targets.length - 1) {
        index++;
        showWorkthroughDialog(targets[index].id, targets[index].offset_position, targets[index].heading, targets[index].content);
        console.log(index)
    }
    else {
        index = last;
        showWorkthroughDialog(targets[index].id, targets[index].offset_position, targets[index].heading, targets[index].content);
        console.log(index)

    }

};
let prev = () => {
    if (index > 0) {
        console.log(`current target is ${targets[index]}`);
        index--;
        showWorkthroughDialog(targets[index].id, targets[index].offset_position, targets[index].heading, targets[index].content);

    }
    else {
        index = 0
        console.log(`current target is  ${targets[index]}`)

    }

};

export { initialize, next, prev, }