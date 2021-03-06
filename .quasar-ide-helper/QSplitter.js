
/**
 * Quasar QSplitter component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/splitter|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QSplitter',
  props: {
    /**
     * Emitted when component's model value changes; Is also used by v-model
     * @param {Number} value New model value (0.0 < x < 100.0) defining the ratio between panels 
     */      
    '@update:model-value': function (value) {},
    /**
     * Model of the component defining the size of first panel (or second if using reverse) in the unit specified (for '%' it's the split ratio percent - 0.0 < x < 100.0; for 'px' it's the size in px); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     * @type {Number}
     */
    modelValue: {
      type: Number,
      required: true
    },
    /**
     * Apply the model size to the second panel (by default it applies to the first)
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
    },
    /**
     * CSS unit for the model
     * @type {'%'|'px'}
     */
    unit: {
      type: String,
    },
    /**
     * CSS unit for the model
     * @type {'%'|'px'}
     */
    'unit="%"': {
      type: Boolean,
    },
    /**
     * CSS unit for the model
     * @type {'%'|'px'}
     */
    'unit="px"': {
      type: Boolean,
    },
    /**
     * Emit model while user is panning on the separator
     * @type {Boolean}
     */
    emitImmediately: {
      type: Boolean,
    },
    /**
     * Allows the splitter to split its two panels horizontally, instead of vertically
     * @type {Boolean}
     */
    horizontal: {
      type: Boolean,
    },
    /**
     * An array of two values representing the minimum and maximum split size of the two panels; When 'px' unit is set then you can use Infinity as the second value to make it unbound on the other side
     * @type {Array}
     */
    limits: {
      type: Array,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the 'before' panel
     * @type {String|Array|Object}
     */
    beforeClass: {
      type: [String,Array,Object],
    },
    /**
     * Class definitions to be attributed to the 'after' panel
     * @type {String|Array|Object}
     */
    afterClass: {
      type: [String,Array,Object],
    },
    /**
     * Class definitions to be attributed to the splitter separator
     * @type {String|Array|Object}
     */
    separatorClass: {
      type: [String,Array,Object],
    },
    /**
     * Style definitions to be attributed to the splitter separator
     * @type {String|Array|Object}
     */
    separatorStyle: {
      type: [String,Array,Object],
    },
    /**
     * Applies a default lighter color on the separator; To be used when background is darker; Avoid using when you are overriding through separator-class or separator-style props
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    }
  }
}
