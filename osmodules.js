const os = require('os');

const print = console.log;

print(os.tmpdir()); // return temp directory
print(os.freemem()); // return free memory left
print(os.homedir()); // returns home directory
print(os.platform()); // returns platform name (win32)
print(os.release()); // returns release version
print(os.userInfo()); // returns username, homedir, shell etc...
print(os.hostname()); // returns Lucky (hostname)