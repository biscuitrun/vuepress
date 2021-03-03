<template>
  <div class="player">
    <h2>视频播放器</h2>
    <div>
      <!-- 
        <video :src="videoSrc" ref="video" :poster="videoImg" :autoplay="playStatus" height="421" width="700" :muted="muteStatus">
        your browser does not support the video tag
      </video> -->
      <!-- <button @click="playClick" :class="{hide: isPlay}">点击播放</button> --> -->
      <!--class="video-js vjs-default-skin vjs-big-play-centered" -->
      <video
        src="./2.mp4"
        :controls="videoOptions.controls"
        class="video-js vjs-big-play-centered vjs-fluid"
        webkit-playsinline="true"
        playsinline="true"
        x-webkit-airplay="allow"
        x5-playsinline
        style="width: 100%;"
        @play="onPlayerPlay"
        @pause="onPlayerPause"
        @seeking="seeking"
        autoplay="autoplay"
        ref="video">
      >
        <object id="flowplayer" width="400" height="300"
          data="flowplayer-3.2.18.swf"
          type="application/x-shockwave-flash">
          <param name="movie" value="flowplayer-3.2.18.swf">
          <param name="flashvars" value='config={"clip":"hangge.mp4"}'>
        </object>
        <source :src="videoSrc" type="video/mp4"> 
        <source :src="videoSrc" type="video/webm">
      </video>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "player",
  data() {
    return {
      videoSrc: './2.mp4',
      videoImg: '@/assets/logo.png',
       videoOptions: {
        controls:true,
        src:"./2.mp4", // url地址
      },
      player: null,
      playTime:'',
      seeking:'',
      current:'',
    }
  },
  components: {},
  creqted() {
    this.initVideo()
  },
  methods: {
    handleStart() {
      console.log('start')
    },
    initVideo() {
      let myVideo = this.$refs.video
      myVideo.ontimeupdate = () => {
        // let _this = this
        let playTime = myVideo.currentTime
        setTimeout(function () {
          localStorage.setItem("cacheTime",playTime)
        },500)
        let time = localStorage.getItem("cacheTime") // 当前播放位置发生变化时触发。
        if(playTime - Number(time) > 2){
          myVideo.currentTime = Number(time)
        }
      }
    },
     onPlayerPlay(player) {
      // this.globalSetting = true
      console.log("player play!", player);
      // document.getElementsByClassName("vjs-control-bar").style.display = "block";
      // document.getElementsByClassName("vjs-control-bar").style.display = "block";
    },
     onPlayerPause(player) {
      // this.globalSetting.controls = false;
      console.log("player pause!", player);
      // var video = document.getElementById("video");
      // video.controls=false;
      // document.getElementsByClassName("vjs-control-bar").style.display = "none";
    },
    // initVideo() {
    //   //原生初始化视频方法
    //   let myVideo = this.$refs.video;
    //   //ontimeupdate
    //   myVideo.ontimeupdate = () => {
    //     let _this = this
    //     let playTime = myVideo.currentTime
    //     setTimeout(function () {
    //       localStorage.setItem("cacheTime",playTime)
    //     },500)
    //     let time = localStorage.getItem("cacheTime")
    //     // 当前播放位置发生变化时触发。
    //     if(playTime - Number(time) > 2){
    //       myVideo.currentTime = Number(time)
    //     }else{
          
    //     }
    //   }
    // }
  }
}
</script>
<style scoped>
.player {
  background: #ccc;
}
</style>
