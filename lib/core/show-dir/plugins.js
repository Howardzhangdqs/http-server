const UglifyJS = require("uglify-js");
const path = require("path");
const fs   = require("fs");
const os   = require('os');

exports.innerscript = "";
/*
UglifyJS.minify(
    fs.readFileSync(path.join(
        process.cwd(), "./lib/core/show-dir/plugins.txt.js")
    ).toString()
).code;
*/

const sizeToString = (bytes) => {
    const threshold = 1024;
    if (bytes < threshold) return `${bytes}B`;
    const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    let u = -1;
    do {
        bytes /= threshold; u ++;
    } while (bytes >= threshold && u < units.length - 1);

    let b = bytes.toFixed(4);
    if (isNaN(b)) b = '??';

    return b + units[u];
};

var systeminfo = [
    `<details>`,
    `<summary>服务器信息</summary><div class="paddingleft">`,
    [
        `Arch架构: ${os.arch()}`,
        `CPU核数: ${os.cpus().length}核`,
        `字节顺序: ${os.endianness() == "LE" ? "低位优先" : "高位优先"}`,
        `当前登录用户根目录: ${os.homedir()}`,
        `主机名: ${os.hostname()}`,
        `操作系统类型: ${os.platform()}`,
        `操作系统版本: ${os.release()}`,
        `临时文件目录: ${os.tmpdir()}`,
        `系统总内存: ${sizeToString(os.totalmem())}`,
    ].join('<br>'),
    `</div></details>`,
].join('');

exports.systeminfo = systeminfo;