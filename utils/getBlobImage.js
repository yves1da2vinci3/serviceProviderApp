async function getBlobImage (imgUri){
    const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', imgUri, true);
        xhr.send(null);
      });

      return  blobImage;
}

export default getBlobImage