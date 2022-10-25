/**
 * @module timed
 * @submodule timed-components
 * @public
 */
import Component from "@ember/component";
import { computed } from "@ember/object";
import { scheduleOnce } from "@ember/runloop";

/**
 * Component for an adcssy styled checkbox
 *
 * @class SyCheckboxComponent
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  checkboxElementId: computed("elementId", function() {
    return `${this.elementId}-checkbox`;
  }),

  didReceiveAttrs() {
    scheduleOnce("afterRender", this, this.deferredWork);
  },

  deferredWork() {
    if (this.checked === null) {
      const cb = this.element.querySelector(`#${this.checkboxElementId}`);

      cb.indeterminate = true;
    }
  },

  /**
   * The CSS class names
   *
   * @property {String[]} classNames
   * @public
   */
  classNames: ["checkbox"],

  /**
   * Action to call if the checked state has changed
   *
   * @method on-change
   * @public
   */
  "on-change"() {},

  /**
   * The label of the checkbox
   *
   * @property {String} label
   * @public
   */
  label: "",

  /**
   * Whether the checkbox is checked
   *
   * @property {Boolean} checked
   * @public
   */
  checked: false,

  /**
   * Whether the checkbox is disabled
   *
   * @property {Boolean} disabled
   * @public
   */
  disabled: false
});
