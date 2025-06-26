import styles from '@/styles/CountriesList.module.css'
import { Country as TCountry } from "@/types";
import Country from './Country';

export default function CountriesList({countries} : {countries: TCountry[]}){
  const countriesElements = countries.map(country => 
  <Country key={country.name.common} country={country} />)

    return (
      <ul className={styles.countries}>
        {countriesElements}
      </ul>
    )
}

