const img = document.getElementById('product-image');

document.getElementById('changeImage').addEventListener('click', function (e) {

    if (e.target.id !== 'changeImage') {
        img.setAttribute('src', `./img/iphone_${e.target.id}.jpg`);
    }

});



