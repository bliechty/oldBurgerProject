function openNav() {
    let e = document.getElementById('drop-down-content').classList;

    e.remove('display-none');
    e.add('display-flex');
}

function closeNav() {
    let e = document.getElementById('drop-down-content').classList;

    e.remove('display-flex');
    e.add('display-none');
}