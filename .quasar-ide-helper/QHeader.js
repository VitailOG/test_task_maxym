
/**
 * Quasar QHeader component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/header|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QHeader',
  props: {
    /**
     * Emitted when 'reveal' state gets changed
     * @param {Boolean} value New 'reveal' state 
     */      
    '@reveal': function (value) {},
    /**
     * Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     * @type {Boolean}
     */
    modelValue: {
      type: Boolean,
    },
    /**
     * Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide header
     * @type {Boolean}
     */
    reveal: {
      type: Boolean,
    },
    /**
     * Amount of scroll (in pixels) that should trigger a 'reveal' state change
     * @type {Number}
     */
    revealOffset: {
      type: Number,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Adds a default shadow to the header
     * @type {Boolean}
     */
    elevated: {
      type: Boolean,
    },
    /**
     * When using SSR, you can optionally hint of the height (in pixels) of the QHeader
     * @type {Number|String}
     */
    heightHint: {
      type: [Number,String],
    }
  }
}
