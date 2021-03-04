interface ICodeMap {
  [key: string]: any;
}

class BarcodeParser {
  codemap: ICodeMap;

  constructor() {
    this.codemap = {
      '(01)': 'product',
      '(3103)': 'net_weight',
      '(10)': 'lot_bobine',
      '(12)': 'identifier',
      '(20)': 'lot_factory',
      '(30)': 'alloy',
      '(40)': 'quenching',
      '(50)': 'application_type',
      '(60)': 'client_code',
      '(70)': 'order',
      '(80)': 'gross_weight',
      '(90)': 'tare',
      '(100)': 'nominal_thickness',
      '(110)': 'real_thickness',
      '(120)': 'estimated_length',
      '(130)': 'thickness_rating',
      '(140)': 'sigma',
      '(150)': 'le',
      '(160)': 'lr',
      '(170)': 'spread',
      '(180)': 'along',
      '(190)': 'earing',
      '(200)': 'post_lube',
      '(210)': 'tolling',
      '(220)': 'water_mark',
      '(230)': 'external_varnish',
      '(240)': 'internal_varnish',
      '(250)': 'lubricating_weight',
      '(260)': 'date',
    };
  }

  parser(barcode: string) {
    const regex = new RegExp(/\([0-9][0-9]?[0-9]?[0-9]\)*/gm);
    const [, ...values] = barcode.split(regex);
    const keys: string[] = barcode.match(regex) || [];

    let obj: ICodeMap = {};

    values.forEach((value, idx) => {
      const key: string = keys[idx];

      if (key) {
        let keyString = this.codemap[key];
        obj[keyString] = `${value.trim()}`;
      }
    });

    return obj;
  }
}

export default new BarcodeParser();
