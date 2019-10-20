import { InsertScreenTransactionModel } from './insert-screen-transaction.model';

describe('InsertScreenTransactionModel', () => {
  let model: InsertScreenTransactionModel;

  beforeEach(() => {
    model = new InsertScreenTransactionModel();
  });

  it('should be truthy', () => {
    expect(model)
      .toBeTruthy();
  });

});
