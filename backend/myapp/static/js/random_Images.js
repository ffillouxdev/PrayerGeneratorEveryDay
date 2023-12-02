// Get all the images
image_array = [
    'jerusalem.png',
    'jesus.png',
    'bible.jpg',
    'berger.png',
];

function getRandomImage() {
    // get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    // get an image at the random_index
    selected_image = image_array[random_index];

    // display the image
    document.getElementById('image_shower').src = '/static/assets/' + selected_image;
}