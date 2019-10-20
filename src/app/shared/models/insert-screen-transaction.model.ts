// Model para inserção de Telas e Transações/Serviços da Funcionalidade
export class InsertScreenTransactionModel {
  public channel: string;
  public description: string;
  public screen = new Array<string>();
  public transaction = new Array<string>();
}
