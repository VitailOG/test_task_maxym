
/**
 * Quasar QItem component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/item|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QItem',
  props: {
    /**
     * Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used
     * @type {Boolean}
     */
    exact: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used
     * @type {String}
     */
    activeClass: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used
     * @type {String}
     */
    exactActiveClass: {
      type: String,
    },
    /**
     * Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props
     * @type {String}
     */
    href: {
      type: String,
    },
    /**
     * Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props
     * @type {String}
     */
    target: {
      type: String,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Put item into 'active' state
     * @type {Boolean}
     */
    active: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events
     * @type {Boolean}
     */
    clickable: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     * @type {Number}
     */
    insetLevel: {
      type: Number,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    },
    /**
     * HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states
     * @type {Boolean}
     */
    manualFocus: {
      type: Boolean,
    },
    /**
     * Determines focus state, ONLY if 'manual-focus' is enabled / set to true
     * @type {Boolean}
     */
    focused: {
      type: Boolean,
    }
  }
}
