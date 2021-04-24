import ElementPlus from 'element-plus'
// import {
//   createI18n
// } from 'vue-i18n'
import 'element-plus/lib/theme-chalk/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
// import localeEN from 'element-plus/lib/locale/lang/en'
// import messages from '../utils/i18n'
// console.log(msg)

// const messages = {
//   [localeEN.name]: {
//     el: localeEN.el,
//     i18n: msg.en.i18n,
//   },
//   [localeZH.name]: {
//     el: localeZH.el,
//     i18n: msg.zh.i18n,
//   },
// }

// const i18n = createI18n({
//   // locale: localeZH.name,
//   locale: "zh",
//   fallbackLocale: localeEN.name,
//   messages,
// })


export default (app) => {
  app.use(ElementPlus, {
    locale: localeZH
  })
  // app.use(i18n)
}

// import ElementUI from 'element-ui'
// import VueI18n from 'vue-i18n'
// //引入Element的语言包
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import esLocale from 'element-ui/lib/locale/lang/es'

// Vue.use(VueI18n);

// const i18n = new VueI18n({
//   locale: lang,
//   // locale: sessionStorage.getItem('language')||'en',
//   messages: {
//     'en': Object.assign(require('./lang/en.json'), enLocale), //将我们项目中的语言包与Element的语言包进行合并
//     'zh': Object.assign(require('./lang/zh.json'), zhLocale),
//     'es': Object.assign(require('./lang/es.json'), esLocale),
//   },
// });


// export default (app) => {
//   app.use(ElementUI, {
//     i18n: (key, value) => i18n.t(key, value)
//   })
//   // app.use(i18n)
// }