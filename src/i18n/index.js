import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
// 引入各个语言配置文件
import zh from "./config/zh";
import en from "./config/en";
import id from "./config/id";
import th from "./config/th";
// 创建vue-i18n实例i18n
const i18n = new VueI18n({
  // 设置默认语言
  local: localStorage.getItem("local") || "zh", // 语言标识
  // 添加多语言（每一个语言标示对应一个语言文件）
  messages: {
    zh, // 中文
    en, // 英文
    id, // 印尼文
    th // 泰文
  }
});
// 暴露i18n
export default i18n;
