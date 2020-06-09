const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("something went wrong"));
    }, 2000);
});
prom.then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));