'use strict'

const videoplay = document.getElementById('player');
const constrains = {
    video: {
        width: 640,
        height: 480,
        frameRate: 15
    },
    audio: false
};
navigator.mediaDevices.getUserMedia(constrains).then((mediaStream)=>{
    videoplay.srcObject = mediaStream;
}).catch((error)=>console.error(error));

const picutre = document.getElementById('picture');
picutre.width = constrains.video.width;
picutre.height = constrains.video.height;

const takePhoto = document.getElementById('takePhoto');
takePhoto.addEventListener('click', (event)=> {
    picutre.getContext('2d').drawImage(videoplay, 0, 0, picutre.width, picutre.height);
});

const download = (url) => {
    const oA = document.createElement('a');
    oA.download = 'camera photo';
    oA.href = url;
    savePhoto.append(oA);
}
const savePhoto = document.getElementById('savePhoto');
savePhoto.addEventListener('click', (event)=>{
    download(picutre.toDataURL("image/jpeg", 1));
});