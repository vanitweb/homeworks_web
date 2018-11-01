function net(haj) {
    let erk = haj.length, qanak = 0, ind = 0;
    while (ind <= erk - 1) {
        if (haj[ind] === '>' && haj[ind + 1] === '>' && haj[ind + 2] === '-') {
            ind += 2;
            while (haj[ind] === '-') {
                ind++;
            }
            if (haj[ind] === '>') {
                qanak++;
            }
        }
        ind++;
    }
    ind = 0;
    while (ind <= erk - 1) {
        if (haj[ind] === '<' && haj[ind + 1] === '-') {
            ind++;
            while (haj[ind] === '-') {
                ind++;
            }
            if (haj[ind] === '<' && haj[ind + 1] === '<') {
                qanak++;
            }
        }
        ind++;
    }
    return qanak;
}
console.log(net('<------<<--<<--<<-<<-<<-<<'));