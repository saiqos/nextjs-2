import Country from "@/components/Country";
import { Country as TCountry } from "@/types";
import { useFavoriteCountriesContext } from "@/context/FavoritesContext";
import styles from '@/styles/CountriesList.module.css'
export default function FavoriteCountries(){
      const { favorites} = useFavoriteCountriesContext();
      const favoritesItems = favorites.map((country: TCountry) => 
            <Country 
             key={country.name.common}
             country={country} 
            />)
    return (
        <>
        <h2 style={{textAlign: 'center', marginTop: '20px'}}>List of your favorite countries</h2>
        <ul className={styles.countries}>
            {favoritesItems}
        </ul>
        </>
    )
}