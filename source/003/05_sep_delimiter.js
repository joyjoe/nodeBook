var {sep, delimiter, win32, posix} = require("path");

console.log("PATH:", process.env.PATH);
console.log("SEP:", sep);
console.log("WIN32.SEP:", win32.sep);
console.log("POSIX.SEP:", posix.sep);
console.log("DELIMITER:", delimiter);
console.log("Win32.DELIMITER:", win32.delimiter);
console.log("POSIX.DELIMITER:", posix.delimiter);