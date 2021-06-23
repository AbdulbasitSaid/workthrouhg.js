
let targets = [];
let currentIndex = 0;
let dialogElement = document.getElementById('workthrough_body');
let dialogPointer = document.getElementById('dialog_pointer');
let targetElement = null;



let initialize = (arr) => {
    currentIndex = 0;

    dialogElement.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
    });
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
    document.getElementById('close_btn').addEventListener('click', () => {
        end();
    });
    targets = arr;
    showWorkthroughDialog(targets[currentIndex].id, targets[currentIndex].offset_position, targets[currentIndex].content);

    console.log('this module has been Initialzed');
}
let showWorkthroughDialog = (targetElementId, offsetPosition, content, previousElementId) => {
    targetElement = document.getElementById(targetElementId);
    document.getElementById('shade').style.display = 'block';

    document.getElementById('step_count').innerHTML = currentIndex + 1;
    document.getElementById('total_steps').innerHTML = targets.length;
    console.log(targetElement);
    let contentElement = document.getElementById('workthough_content');
    contentElement.innerHTML = content;
    targetElement.appendChild(dialogElement);
    setOffestPosition(offsetPosition);
    getAndSetPointerPosition(offsetPosition);
    dialogElement.classList.remove('hide');
    targetElement.classList.add('highlight_target');
    if (!targetElement.classList.contains('relative')) {
        targetElement.classList.add('relative');
    }
    if (previousElementId) {
        document.getElementById(previousElementId).classList.remove('highlight_target');
    }

    targetElement.scrollIntoView({ behavior: 'smooth' });
    if (currentIndex < 1) {
        document.getElementById('prev').style.display = 'none';
    } else {
        document.getElementById('prev').style.display = 'block';
    }

    if (currentIndex >= targets.length - 1) {
        document.getElementById('next').style.display = 'none';

    } else {
        document.getElementById('next').style.display = 'block';
    }
    // end
}
let getAndSetPointerPosition = offestPossition => {
    switch (offestPossition) {
        case 'bottom_left':
            setPointerPosition('right_pointer')
            break;
        case 'left':
            setPointerPosition('right_pointer')
            break;
        case 'bottom_center':
            setPointerPosition('top_center_pointer')
            break;
        case 'top_right':
            setPointerPosition('right_pointer')
            break;
        case 'right':
            setPointerPosition('left_pointer')
            break;

        default:
            setPointerPosition('left_pointer')

            break;
    }
}
let setPointerPosition = pointerPosition => {
    if (dialogPointer.classList.contains('left_pointer')) {
        dialogPointer.classList.remove('left_pointer');
    }
    if (dialogPointer.classList.contains('right_pointer')) {
        dialogPointer.classList.remove('right_pointer');
    }
    if (dialogPointer.classList.contains('top_center_pointer')) {
        dialogPointer.classList.remove('top_center_pointer');
    }
    dialogPointer.classList.add(pointerPosition);
}
let setOffestPosition = offestPossition => {
    if (dialogElement.classList.contains('bottom_left')) {
        dialogElement.classList.remove('bottom_left');
    }
    if (dialogElement.classList.contains('bottom_right')) {
        dialogElement.classList.remove('bottom_right');
    }
    if (dialogElement.classList.contains('bottom_right')) {
        dialogElement.classList.remove('bottom_right');
    }
    if (dialogElement.classList.contains('bottom_center')) {
        dialogElement.classList.remove('bottom_center');
    }
    if (dialogElement.classList.contains('top_right')) {
        dialogElement.classList.remove('top_right');
    }
    if (dialogElement.classList.contains('top_left')) {
        dialogElement.classList.remove('top_left');
    }
    if (dialogElement.classList.contains('left')) {
        dialogElement.classList.remove('left');
    }
    if (dialogElement.classList.contains('right')) {
        dialogElement.classList.remove('right')
    }
    dialogElement.classList.add(offestPossition);
}

let end = () => {
    currentIndex = 0;
    document.getElementById(targets[currentIndex].id).classList.remove('highlight_target');
    dialogElement.classList.add('hide');
    dialogElement.classList.remove('show');
    document.getElementById('shade').style.display = 'none';
}

let next = () => {

    let last = targets.length - 1;
    if (currentIndex < targets.length - 1) {

        currentIndex++;
        console.log(targets[currentIndex].offset_position)

        showWorkthroughDialog(targets[currentIndex].id, targets[currentIndex].offset_position, targets[currentIndex].content, targets[currentIndex - 1].id);
        console.log(currentIndex)
    }
    else {
        currentIndex = last;
        showWorkthroughDialog(targets[currentIndex].id, targets[currentIndex].offset_position, targets[currentIndex].content);
        console.log(currentIndex)

    }

};
let prev = () => {
    if (currentIndex > 0) {
        console.log(`current target is ${targets[currentIndex]}`);
        currentIndex--;
        showWorkthroughDialog(targets[currentIndex].id, targets[currentIndex].offset_position, targets[currentIndex].content, targets[currentIndex + 1].id);

    }
    else {
        currentIndex = 0
        console.log(`current target is  ${targets[currentIndex]}`)

    }

};
export { initialize, next, prev, }