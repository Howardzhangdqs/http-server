'use strict';

// given a file's stat, return the size of it in string
// humanReadable: (boolean) whether to result is human readable
// si: (boolean) whether to use si (1k = 1000), otherwise 1k = 1024

module.exports = function sizeToString(stat, humanReadable, si) {
  if (stat.isDirectory && stat.isDirectory()) {
    return '';
  }

  let bytes = stat.size;
  const threshold = si ? 1000 : 1024;

  if (!humanReadable || bytes < threshold) {
    return `${bytes}B`;
  }

  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  let u = -1;
  do {
    bytes /= threshold;
    u += 1;
  } while (bytes >= threshold && u < units.length - 1);

  let b = bytes.toFixed(2);
  if (isNaN(b)) b = '??';

  return b + units[u];
};
