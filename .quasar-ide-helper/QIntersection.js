
/**
 * Quasar QIntersection component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/intersection|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QIntersection',
  props: {
    /**
     * Fires when visibility changes
     * @param {Boolean} isVisible Visibility status (true/false) 
     */      
    '@visibility': function (isVisible) {},
    /**
     * HTML tag to use
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Get triggered only once
     * @type {Boolean}
     */
    once: {
      type: Boolean,
    },
    /**
     * Pre-render content on server side if using SSR (use it to pre-render above the fold content)
     * @type {Boolean}
     */
    ssrPrerender: {
      type: Boolean,
    },
    /**
     * [Intersection API root prop] Lets you define an alternative to the viewport as your root (through its DOM element); It is important to keep in mind that root needs to be an ancestor of the observed element
     * @type {Element}
     */
    root: {
      type: Element,
    },
    /**
     * [Intersection API rootMargin prop] Allows you to specify the margins for the root, effectively allowing you to either grow or shrink the area used for intersections
     * @type {String}
     */
    margin: {
      type: String,
    },
    /**
     * [Intersection API threshold prop] Threshold(s) at which to trigger, specified as a ratio, or list of ratios, of (visible area / total area) of the observed element
     * @type {Array|Number}
     */
    threshold: {
      type: [Array,Number],
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transition: {
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
     * Disable visibility observable (content will remain as it was, visible or hidden)
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    }
  }
}
