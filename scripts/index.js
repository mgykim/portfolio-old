var animation = bodymovin.loadAnimation({
    container: document.getElementById("logo-lottie-animation"),
    path: 'logo JSON.json',
    renderer: 'svg', // or 'canvas'
    loop: true, // Optional: Set to true for looping
    autoplay: true // Optional: Set to true for autoplay
})