import DefaultTheme from 'vitepress/theme'
import CustomNavButton from './CustomNavButton.vue'
import './custom.css'
import { h } from 'vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(CustomNavButton)
    })
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
}
