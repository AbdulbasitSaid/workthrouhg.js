
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
    setOffestPosition(offsetPosition);
    dailogElement.classList.remove('hide');
    targetElement.classList.add('relative');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}
let setOffestPosition = offestPossition => {
    let position = null;
    if (dailogElement.classList.contains('bottom-left')) {
        dailogElement.classList.remove('bottom-left');
    }
    if (dailogElement.classList.contains('bottom-right')) {
        dailogElement.classList.remove('bottom-right');
    }
    if (dailogElement.classList.contains('bottom-right')) {
        dailogElement.classList.remove('bottom-right');
    }
    if (dailogElement.classList.contains('top-right')) {
        dailogElement.classList.remove('top-right');
    }
    if (dailogElement.classList.contains('top-left')) {
        dailogElement.classList.remove('top-left');
    }
    dailogElement.classList.add(offestPossition);
    return position;
}
let next = () => {

    let last = targets.length - 1;
    if (index < targets.length - 1) {

        index++;
        console.log(targets[index].offset_position)

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