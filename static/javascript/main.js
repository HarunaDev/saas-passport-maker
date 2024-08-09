if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./static/javascript/sw.js").then(registration => {
            console.log("SW Registered!")
            console.log(registration);
        }).catch(error => {
            console.log("Sw Registration Failed")
            console.log(error)
        })
    })
  }

  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt event fired');
    e.preventDefault();
    deferredPrompt = e;
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        console.log('Install button clicked');
        installButton.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            console.log('User choice: ', choiceResult.outcome);
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    document.getElementById('install-button').style.display = 'none';
});