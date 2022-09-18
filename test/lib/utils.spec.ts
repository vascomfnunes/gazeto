import { formatDateFrom, todayFormattedDate } from '../../lib/utils'
import '@testing-library/jest-dom'

describe('Utils', () => {
  describe('formatDateFrom', () => {
    it('should format a date from a string YYYY/MM/DD', () => {
      expect(formatDateFrom('2022/03/12')).toEqual('Saturday, 12 March 2022')
    })

    it('should format a date from a string MM/DD/YYYY', () => {
      expect(formatDateFrom('05/08/2017')).toEqual('Monday, 8 May 2017')
    })

    it('should reeturn Invalid Date for a non valid date', () => {
      const expected = 'Invalid Date'
      expect(formatDateFrom('05/2017/20')).toEqual(expected)
      expect(formatDateFrom('something')).toEqual(expected)
      expect(formatDateFrom(undefined)).toEqual(expected)
    })
  })

  describe('todayFormattedDate', () => {
    it('should return the current formatted date', () => {
    jest.useFakeTimers().setSystemTime(new Date('2022-09-05T09:00:00+00:00'))
      expect(todayFormattedDate()).toEqual('Monday, 5 September 2022')
    })
  })
})
