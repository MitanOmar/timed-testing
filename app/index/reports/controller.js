/**
 * @module timed
 * @submodule timed-controllers
 * @public
 */
import Controller        from 'ember-controller'
import computed          from 'ember-computed-decorators'
import ReportValidations from 'timed/validations/report'

/**
 * The index reports controller
 *
 * @class IndexReportsController
 * @extends Ember.Controller
 * @public
 */
export default Controller.extend({
  ReportValidations,

  /**
   * All reports currently in the store
   *
   * @property {Report[]} _allReports
   * @private
   */
  @computed()
  _allReports() {
    return this.store.peekAll('report')
  },

  /**
   * The reports filtered by the selected day
   *
   * @property {Report[]} reports
   * @public
   */
  @computed('_allReports.@each.{date,isDeleted}', 'model')
  reports(reports, day) {
    return reports.filter((r) => {
      return r.get('date').isSame(day, 'day') && !r.get('isDeleted')
    })
  }
})
