console.log('WElecome to spotify');
let songIndex=0;
let audioElement=new Audio('songs/2.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:'Singham Again title tack',filePath:'songs/1.mp3',coverPath:'covers/cover1.jpg'},
    {songName:'Kissik-pushpa2 the Ruler',filePath:'songs/2.mp3',coverPath:'covers/cover2.jpg'},
    {songName:'Jaane Tu-Chhaava',filePath:'songs/3.mp3',coverPath:'covers/cover3.jpg'},
    {songName:'Bhool-Bhulaiyaa3',filePath:'songs/4.mp3',coverPath:'covers/cover4.jpg'},
    {songName:'Gori hai kalaiya',filePath:'songs/5.mp3',coverPath:'covers/cover5.jpg'},
    {songName:'Hauli Hauli',filePath:'songs/6.mp3',coverPath:'covers/cover6.jpg'},
    {songName:'Sarfira',filePath:'songs/7.mp3',coverPath:'covers/cover7.jpg'},
    {songName:'Me-amapaiano',filePath:'songs/8.mp3',coverPath:'covers/cover8.jpg'},
]
songItems.forEach((element,i) =>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
 masterPlay.classList.remove("fa-circle-play");
 masterPlay.classList.add("fa-pause");
 gif.style.opacity=1;}
 else{audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity=0;}
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value=progress;
});

  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).
    forEach((element)=>{
       element.classList.remove("fa-pause");
       element.classList.add("fa-circle-play");
  })}

 Array.from(document.getElementsByClassName('songItemPlay')).
 forEach((element)=>{
   element.addEventListener('click',(e)=>{
    console.log(e.target);
       makeAllPlays();
       songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play")
       e.target.classList.add("fa-pause");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-pause");
        })
 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-pause");
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-pause");
 })