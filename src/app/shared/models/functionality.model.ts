// collection Functionalities
export class FunctionalityModel {
  public _id?: string;
  public channel: string;
  public id: number;
  public description: string;
  public groupDescription: string;
  public family: string;
  public transaction = new Array<string>();
  public screen = new Array<string>();
  public quantityVolumetry: string;
  public migrate: string;
  public volumetryCriterion: string;
  public complexityCriterion: string;

  public populateFunctionalities(data: FunctionalityModel) {
    this._id = data._id;
    this.channel = data.channel;
    this.id = data.id;
    this.description = data.description;
    this.groupDescription = data.groupDescription;
    this.family = data.family;
    this.transaction = data.transaction;
    this.screen = data.screen;
    this.quantityVolumetry = data.quantityVolumetry;
    this.migrate = data.migrate;
    this.volumetryCriterion = data.volumetryCriterion;
    this.complexityCriterion = data.complexityCriterion;
  }
}
