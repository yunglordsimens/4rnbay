const fs = require('fs');
const path = require('path');

const folderPath = './publications_img/abeceda_2024';
const outputPath = './publications_img/abeceda_2024/images.json';

fs.readdir(folderPath, (err, files) => {
    if (err) throw err;

    const imageFiles = files.filter(file =>
        ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
    );

    fs.writeFileSync(outputPath, JSON.stringify(imageFiles, null, 2));
    console.log('✅ images.json создан!');
});
