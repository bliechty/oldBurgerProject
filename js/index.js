function dropdown() {
    let e = document.getElementById('drop-down-content').classList;

    console.log(e[0]);

    let inList = false;

    for (let className of e) {
        console.log(className);
        if (className === 'display-none') {
            inList = true;
            break;
        }
    }

    if (inList === true) {
        e.remove('display-none');
        e.add('display-flex');
    } else {
        e.remove('display-flex');
        e.add('display-none');
    }
}