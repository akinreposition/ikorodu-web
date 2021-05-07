
const useWindowImageListener = () => {
    
    window.addEventListener("fileUploadWithPreview:imagesAdded", function (e) {
        e.detail.uploadId()
        e.detail.cachedFileArray()
        e.detail.addedFilesCount()
        // Use e.detail.uploadId to match up to your specific input
        if (e.detail.uploadId === "mySecondImage") {
            console.log(e.detail.cachedFileArray);
            console.log(e.detail.addedFilesCount);
        }
    });
   
}

export default useWindowImageListener
