const $ = (o) => document.querySelector(o);

const sizeToString = (bytes) => {
    const threshold = 1024;
    if (bytes < threshold) return `${bytes}B`;
    const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    let u = -1;
    do {
        bytes /= threshold; u ++;
    } while (bytes >= threshold && u < units.length - 1);

    let b = bytes.toFixed(2);
    if (isNaN(b)) b = '??';

    return b + units[u];
};