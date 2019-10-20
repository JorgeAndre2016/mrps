import { FunctionalityModel } from './functionality.model';
describe('FunctionalityModel', () => {
  let model: FunctionalityModel;

  beforeEach(() => {
    model = new FunctionalityModel();
  });

  it('should be truthy', () => {
    expect(model)
      .toBeTruthy();
  });

  it('should test populate', () => {
    const data = new FunctionalityModel();
    data.channel = 'testes';

    model.populateFunctionalities(data);

    expect(model.channel)
      .toEqual('testes');
  });

});
