const fs = require('fs-extra');

const srcDir = `./lib`;
const destDir = `../my-project/lib`;


async function copyFiles() {
    try {
        await fs.copy(srcDir, destDir, {overwrite: true});

    } catch (err) {
        console.error(err)
    }
};
copyFiles()
