window.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const preview = document.querySelector('.preview');
    const previewImage = document.getElementById('preview-image');
    const closeButton = document.getElementById('close-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const menu=document.getElementById('menu');
    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < thumbnails.length) {
            const thumbnail = thumbnails[index];
            const imagePath = thumbnail.getAttribute('src');
            const altText = thumbnail.getAttribute('alt');

            previewImage.setAttribute('src', imagePath);
            previewImage.setAttribute('alt', altText);
            currentIndex = index;
            preview.classList.add('active');
            menu.style.display="none";
        }
    }

    function hidePreview() {
        preview.classList.remove('active');
        menu.style.display="block";
    }

    function showNextImage() {
        const nextIndex = currentIndex + 1;
        showImage(nextIndex);
    }

    function showPreviousImage() {
        const prevIndex = currentIndex - 1;
        showImage(prevIndex);
    }

    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            showImage(index);
        });
    });

    closeButton.addEventListener('click', function() {
        hidePreview();
    });

    preview.addEventListener('click', function(event) {
        if (event.target === preview) {
            hidePreview();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hidePreview();
        } else if (event.key === 'ArrowRight') {
            showNextImage();
        } else if (event.key === 'ArrowLeft') {
            showPreviousImage();
        }
    });

    prevButton.addEventListener('click', function() {
        showPreviousImage();
    });

    nextButton.addEventListener('click', function() {
        showNextImage();
    });
});
