export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
        [languageCode: string]: {
            official: string;
            common: string;
        }
    }
  };
  region: string;
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  isFavorite?: boolean;
}

export type CountryFullDetails = Country & {
  capital: string[];
  population: number;
  languages:  {
    [nameOfLang: string]: string;
  }
  currencies: {
    [nameOfCurrency: string]: {
        symbol: string;
        name: string;
    }
  }
  borders?: string[];  
}