const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    //console.log('dragOver');
    e.preventDefault();
}

function dragEnter() {
    //console.log('dragEnter');
    e.preventDefault();
    this.className += ' hover';
}

function dragLeave() {
    //console.log('dragLeave');
    this.className = 'empty';
}

function dragDrop() {
    //console.log('dragDrop');
    this.className = 'empty';
    this.append(fill);
}
