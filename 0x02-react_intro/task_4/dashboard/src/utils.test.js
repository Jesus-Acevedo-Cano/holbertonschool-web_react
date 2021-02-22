import { getLatestNotification, getFullYear, getFooterCopy } from './utils'

describe('Testing utils.js', () => {

  it('getFullYear test',()=>{
    expect(getFullYear()).toBe(new Date().getFullYear());
  })

  it('getLatestNotification test', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  })

  it('getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
  })
});
