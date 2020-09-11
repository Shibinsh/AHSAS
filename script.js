if("serviceWorker" in navigator){
    Navigator.serviceWorker.register("app.js").then(registratino=>{
        console.log("service worker registered")
        console.log(registratino);
    }).catch(error=>{
        console.log("service worker error")
        console.log(error)
    })
} 
else {
    alert("service worker not working")
}