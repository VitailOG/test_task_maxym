
/**
 * Quasar QTooltip component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tooltip|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTooltip',
  props: {
    /**
     * Emitted when showing/hidden state changes; Is also used by v-model
     * @param {Boolean} value New state (showing/hidden) 
     */      
    '@update:model-value': function (value) {},

    /**
     * Emitted after component has triggered show()
     * @param {Event} evt JS event object 
     */      
    '@show': function (evt) {},

    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param {Event} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted after component has triggered hide()
     * @param {Event} evt JS event object 
     */      
    '@hide': function (evt) {},

    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param {Event} evt JS event object 
     */      
    '@before-hide': function (evt) {},
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
      type: String,
    },
    /**
     * Transition duration (in milliseconds, without unit)
     * @type {String|Number}
     */
    transitionDuration: {
      type: [String,Number],
    },
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     * @type {Boolean}
     */
    modelValue: {
      type: Boolean,
    },
    /**
     * The maximum height of the Tooltip; Size in CSS units, including unit name
     * @type {String}
     */
    maxHeight: {
      type: String,
    },
    /**
     * The maximum width of the Tooltip; Size in CSS units, including unit name
     * @type {String}
     */
    maxWidth: {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    anchor: {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top end"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center end"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom end"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    self: {
      type: String,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top start"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top end"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center start"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center end"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom start"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom end"': {
      type: Boolean,
    },
    /**
     * An array of two numbers to offset the Tooltip horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    },
    /**
     * Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     * @type {'(Boolean) true'|'(Boolean) false'|'(CSS selector)'}
     */
    target: {
      type: [Boolean,String],
    },
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown)
     * @type {Boolean}
     */
    noParentEvent: {
      type: Boolean,
    },
    /**
     * Configure Tooltip to appear with delay
     * @type {Number}
     */
    delay: {
      type: Number,
    },
    /**
     * Configure Tooltip to disappear with delay
     * @type {Number}
     */
    hideDelay: {
      type: Number,
    }
  }
}
