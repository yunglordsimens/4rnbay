window.addEventListener("message", function(event) {
    if (event.origin !== window.location.origin) return;

    const iframe = document.getElementById("abecedaFrame");
    if (iframe && event.data && event.data.type === "resize-iframe") {
        iframe.style.height = event.data.height + "px";
    }
});