import { css, styles } from '../';

describe('Styles', () => {

  it('returns correct styles', () => {
    expect(styles['m-0'].margin).to.equal(0);
  });

  it('css returns correct styles', () => {
    expect(css('m-0')[0].margin).to.equal(0);
  });

});