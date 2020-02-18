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
            this.$parent.execCommand(Command.INSERT_IMAGE, this.url)
            this.url = null
        }
    }
}
