import template from './dashboard.html'
import './style.css'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data(){
        return {
            // foreColor,backColor
            command: 'foreColor',
            colors: [
                '#000000', '#000033', '#000066', '#000099', '#003300', '#003333', '#003366',
                '#003399', '#006600', '#006633', '#009900', '#330000', '#330033', '#330066',
                '#333300', '#333366', '#660000', '#660033', '#663300', '#666600', '#666633',
                '#666666', '#666699', '#990000', '#990033', '#9900CC', '#996600', '#FFCC00',
                '#FFCCCC', '#FFCC99', '#FFFF00', '#FF9900', '#CCFFCC', '#CCFFFF', '#CCFF99',
                '#555555', '#D3A453', '#504F4F', '#A0A0A0', '#F46D73', '#488BF8'
            ]
        }
    },
    methods: {
        changeColor(color){
            this.$parent.execCommand(this.command, color)
        }
    }
}
