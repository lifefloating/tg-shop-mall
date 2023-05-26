import Vue from 'vue'
import vuetify from '@/plugins/vuetify'

export default {
  methods: {
    showSB({ type, text } = { type: '', text: '' }) {
      const getColor = () => {
        switch (type) {
          case 'sucess':
            return '#4caf50'
          case 'error':
            return '#ff5252'
          default:
            return '#2196f3'
        }
      }
      const comp = Vue.extend()
      new comp({
        el: document.body.appendChild(document.createElement('div')),
        vuetify,
        data() {
          return {
            show: true
          }
        },
        render() {
          return (
            <v-snackbar value={this.show} color={getColor()}>
              <div class="d-flex align-center">
                {type === 'success' ? <v-icon>mdi-check</v-icon> : ''}
                <span style={{ marginLeft: '1em' }}>{text}</span>
              </div>
              <template slot="action">
                <v-icon
                  style={{ margin: '0 0.5em' }}
                  onClick={() => {
                    this.show = false
                  }}>
                  mdi-close
                </v-icon>
              </template>
            </v-snackbar>
          )
        }
      })
    }
  }
}
