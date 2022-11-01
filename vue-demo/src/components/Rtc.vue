<template>
  <div>
    <video :src="videoStream" autoplay playsinline></video>
    <p>
      <button class="inp-bg-color" @click="openCamera">打开摄像头</button>
      <button class="inp-bg-color" @click="closeCamera">关闭摄像头</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Rtc",
  data() {
    return {
      videoStream: "",
    };
  },
  methods: {
    openCamera() {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .then((stream) => {
          console.log(stream);
          this.videoStream = stream;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closeCamera() {},
  },
};
</script>