var app = new Vue({
    el: "#root",
    data: {
        info: '',
    },
    methods: {
        btnSub() {
            this.info = '';
            let tel = $("#tel").val().trim();
            if (!tel) {
                this.info = '手机号不为空';
                return false;
            }
            let matched = /^(13[0-9]|14[5,7]|15[0-3,5-9]|17[0,3,5-8]|18[0-9]|166|198|199|147)\d{8}$/.test(tel);
            if (!matched) {
                this.info = '手机号码不正确';
                return false;
            }
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8511/outter/opt/phone/" + tel,
                success: function (res) {
                    if (res.success) {
                        this.info = res.data;
                    } else {
                        this.info = res.msg;
                    }
                }
            })
        },
    }
});