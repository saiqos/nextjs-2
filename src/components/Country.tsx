import { Country as TCountry } from "@/types";
import styles from "@/styles/CountriesList.module.css";
import Link from "next/link";
import Image from "next/image";
import HeartButton from "./HeartButton";
import { useFavoriteCountriesContext } from "@/context/FavoritesContext";

export default function Country({ country }: { country: TCountry }) {
  const { favorites, toggleFavorite } = useFavoriteCountriesContext();

  return (
    <li className={styles.countries__item}>
      <Link href={`/countries/${country.name.common.toLowerCase()}`}>
        <h2 className={styles.countries__name}>{country.name.common}</h2>
        <p className={styles.countries__region}>Region: {country.region}</p>
        <Image
          className={styles.countries__flag}
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          width={120}
          height={80}
        />
      </Link>

      <HeartButton
        handleClick={() => toggleFavorite(country)}
        isActive={Boolean(
          favorites.find((c) => c.name.common === country.name.common),
        )}
      />
    </li>
  );
}
