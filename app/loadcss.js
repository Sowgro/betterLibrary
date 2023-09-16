(function loadcss() {
    document.getElementsByTagName('head')[0].insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="spicetify-routes-betterlibrary.css" />');
    // disable after window is closed to prevent an expanded sidebar on opening
    window.addEventListener(
        'beforeunload',
        (event) => {
            disableBetterLib();
        }
        )
})();