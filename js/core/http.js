/**
 * Performance and ajax call using the appropriate http verb.
 * @returns ES6 Promise
 */
export default new class http {
    get(url){
        return new Promise(
            function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.addEventListener('load',function() {
                    if(!this.status)
                        return;
                    if (this.status === 200) {
                        resolve(JSON.parse(this.response));
                    } else {
                        // Something went wrong (404 etc.)
                        reject(new Error(this.statusText));
                    }
                });
                request.onerror = function () {
                    reject(new Error(
                        'XMLHttpRequest Error: '+this.statusText));
                };
                request.open('GET', url);
                request.send();
            });
    }

    post(url,payload,contentType){throw new Error("Not Implemented")}

    put(url,payload,contentType){throw new Error("Not Implemented")}

    delete(url){throw new Error("Not Implemented")}
}
