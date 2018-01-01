const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const currentFiles = fs.readdirSync(dirname);

const logWithTime = (message) => {
    console.log(`${new Date().toUTCString()} : ${message}`);
};

fs.watch(dirname, (eventType, filename) => {
    console.log("filename : ", filename);
    //if (currentFiles.indexOf(filename) >= 0)
    if (eventType == 'rename') {
        // add, delete 가 모두 rename 으로 리포트 됨.
        const index = currentFiles.indexOf(filename);

        if (index >= 0) {
            // 파일이 원래 존재하는 거였다면,
            currentFiles.splice(index, 1);
            logWithTime(`${filename} was removed.`);
            return;
        }

        // 파일이 원래 존재하지 않음.
        currentFiles.push(filename);
        logWithTime(`${filename} was added.`);
        return;
    }
    // 다른 이벤트는 change 이벤트.
    logWithTime(`${filename} was changed.`);
});