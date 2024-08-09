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