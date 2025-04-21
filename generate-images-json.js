const fs = require('fs');
const path = require('path');

const folderPath = './prjcts_img/2022_6_prague_cybervacuum';
const outputPath = './prjcts_img/2022_6_prague_cybervacuum/images.json';

fs.readdir(folderPath, (err, files) => {
    if (err) throw err;

    const imageFiles = files.filter(file =>
        ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
    );

    fs.writeFileSync(outputPath, JSON.stringify(imageFiles, null, 2));
    console.log('✅ images.json создан!');
});
