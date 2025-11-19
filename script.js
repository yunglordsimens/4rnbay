document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.project-link');
    const previewContainer = document.getElementById('hover-preview');
    const previewImage = document.getElementById('preview-image');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // 1. Берем ссылку на картинку из HTML атрибута
            const imageSrc = link.getAttribute('data-image');
            
            // 2. Ставим её в img
            previewImage.src = imageSrc;
            
            // 3. Показываем контейнер
            previewContainer.classList.add('active');
        });

        link.addEventListener('mouseleave', () => {
            // Прячем контейнер
            previewContainer.classList.remove('active');
        });
    });
});