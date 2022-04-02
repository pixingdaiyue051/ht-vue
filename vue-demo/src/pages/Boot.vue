<template>
  <div>
    <input class="inp-bg-color" v-model="url" />
    <button @click="test">测试</button>
    <br />
    <input
      class="inp-bg-color"
      type="file"
      multiple="multiple"
      @change="changeFile"
    />
    <button class="inp-bg-color" @click="sendFile">发送</button>
    <ul v-for="item in fileList" :key="item.id">
      <li>
        {{ item.filename }}<button @click="deleteFile(item.id)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { nanoid } from "nanoid";

export default {
  name: "Boot",
  data() {
    return {
      url: "",
      fileList: [],
    };
  },
  methods: {
    test() {
      let uri = this.url;
      if (!uri) {
        uri = "/boot/test/one";
      }
      this.post(uri);
    },
    changeFile(e) {
      const files = e.target.files;
      if (!files || !files.length) {
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // if ("image/jpeg" != file.type && "image/png" != file.type) {
        //   continue;
        // }
        // if (file.size > 33554432) {
        //   continue;
        // }
        const filename = file.name;
        const fileSuffix = filename.substring(filename.lastIndexOf("."));
        this.fileList.push({
          id: nanoid(),
          file,
          filename,
          fileSuffix,
        });
      }
    },
    sendFile() {
      if (!this.fileList.length) {
        this.post("/viva/")
        return;
      }
      console.log(this.fileList);
      this.fileList.forEach((item) => {
        let form = new FormData();
        form.append("file", item.file);
        this.post("/viva/upload", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            "file-suffix": item.fileSuffix,
          },
        });
      });
      this.fileList = [];
    },
    deleteFile(id) {
      this.fileList = this.fileList.filter((val) => val.id !== id);
    },
    post(uri, params, config, fnt = (res) => console.log(res, typeof(res))) {
      axios
        .post(uri, params, config)
        .then((res) => {
          console.log(res, typeof(res));
          fnt(res.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>