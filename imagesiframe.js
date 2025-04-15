fetch('abeceda_2024/images.json')
    .then(response => response.json())
    .then(files => {
        const gallery = document.getElementById('gallery');
        files.forEach(file => {
            const img = document.createElement('img');
            img.src = `abeceda_2024/${file}`;
            img.className = 'full-image';
            gallery.appendChild(img);
        });
    });
