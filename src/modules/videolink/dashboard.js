import template from './dashboard.html'
import Command from '../../range/command'

export default {
    template,
    data(){
        return {url: null}
    },
    methods: {
        insertImageUrl(){
            if (!this.url) {
                return
            }
            const html = `<video src="${this.url}" />`
            this.$parent.execCommand(Command.INSERT_HTML, html)
            this.url = null
        }
    }
}
