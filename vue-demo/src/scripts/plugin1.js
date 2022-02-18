import { dayjs } from 'dayjs';

export default {
    install(Vue, x, y, z) {
        console.log(x, y, z);

        Vue.filter('fmtTime', function (val, fmt = 'YYYY-MM-DD HH:mm:ss') {
            return dayjs(val).format(fmt);
        });
    }
}