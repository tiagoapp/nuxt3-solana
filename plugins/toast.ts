import Toast, { PluginOptions, POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"

export default defineNuxtPlugin(nuxtApp => {
    
    const options: PluginOptions = {
        icon: false,
        position: POSITION.BOTTOM_LEFT
    }

    nuxtApp.vueApp.use(Toast, options)
    
})