import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { Country } from "@/types";
type FavoriteCountriesContextType = {
    favorites: Country[];
    toggleFavorite: (country: Country) => void;
};
export const FavoriteCountriesContext = createContext<FavoriteCountriesContextType | null>(null);

export default function FavoriteCountriesProvider({children}: {children: ReactNode}){
    const [favorites, setFavorites] = useState<Country[]>([]);

    useEffect(() => {
        const favoriteCountries = localStorage.getItem('favoriteCountries');
        if(favoriteCountries){
            setFavorites(JSON.parse(favoriteCountries));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('favoriteCountries',JSON.stringify(favorites));
    }, [favorites]);

    function toggleFavorite(country: Country){
        if(!favorites.length){
            setFavorites([...favorites, {...country, isFavorite: true}]);
            return;
        }
        if(favorites.find(c => c.name.common === country.name.common)){
            setFavorites(prevFavorites => 
                prevFavorites.filter(c => c.name.common !== country.name.common)
            );
        }else{
            setFavorites([...favorites, {...country, isFavorite: true}]);
        }
    }

    return (
        <FavoriteCountriesContext.Provider value={{favorites, toggleFavorite}}>
            {children}
        </FavoriteCountriesContext.Provider>
    )
}

    export function useFavoriteCountriesContext(){
        const context = useContext(FavoriteCountriesContext);
        if(!context){
            throw new Error('Error trying to reach favorite countries');
        }
        return context;
    } 