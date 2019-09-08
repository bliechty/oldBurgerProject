function dropdown() {
    let e = document.getElementById('drop-down-content').classList;

    e.remove('display-none');
    e.add('display-flex');

    let f = document.getElementById('resp-nav').style.display = 'none';
}

function closeNav() {
    let e = document.getElementById('drop-down-content').classList;

    e.remove('display-flex');
    e.add('display-none');

    let f = document.getElementById('resp-nav').style.display = 'flex';
}