import Theme, { MergeTheme, ColorManager } from '../';

describe('Component Theme', () => {

  it('should return default theme', () => {
    expect(Theme.name).to.equal('default');
  });

  it('should merge theme to the default theme', () => {
    let mergedTheme = MergeTheme({ name: 'a' });
    expect(mergedTheme.name).to.equal('a');
  });

  it('should return blue from color pallete', () => {
    expect(Theme.materialColors('Blue')).to.equal('#2196F3');
  });

  it('should return blue from ColorManager', () => {
    expect(ColorManager.get('Blue')).to.equal('#2196F3');
  });

  it('should merge theme for partial theme elements', () => {
    let theme = { name: 'custom', text: { container: { fontFamily: 'SomeCustomFont' } } };
    let resultTheme = MergeTheme(theme);
    expect(resultTheme.text.container.marginBottom).to.equal(10);
  });

});