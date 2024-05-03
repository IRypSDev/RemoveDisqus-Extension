function onPageLoad() {
    const disqusDiv = document.getElementById('disqus_thread');

    if (!disqusDiv) {
        console.log("❌ Disqus thread not found");
        return;
    }

    disqusDiv.parentNode.remove();
    console.log("✅ Disqus thread succesfully removed 🤖");  
}

window.addEventListener("load", onPageLoad);