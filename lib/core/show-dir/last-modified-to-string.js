'use strict';

module.exports = function lastModifiedToString(stat) {
  const t = new Date(stat.mtime);
  return (t.getFullYear() + '-' +
          ('0' + (t.getMonth() + 1)).slice(-2) + '-' +
          ('0' + t.getDate()).slice(-2) + ' ' +
          ('0' + t.getHours()).slice(-2) + ':' +
          ('0' + t.getMinutes()).slice(-2) + ':' +
          ('0' + t.getSeconds()).slice(-2));
};
