import { CountryFullDetails } from "@/types";
import Image from "next/image";
import styles from "@/styles/CountryWithDetails.module.css";

export default function CountryWithDetails({
  country,
}: {
  country: CountryFullDetails;
}) {
  const currenciesList = country.currencies
    ? Object.keys(country.currencies)
        .map((currency) => `${currency} - ${country.currencies[currency].name}`)
        .join(", ")
    : "This country has no currencies!";
  const languagesList = country.languages
    ? Object.values(country.languages).join(", ")
    : "This country has no official languages!";

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.name}>{country.name.common}</h2>
      <Image
        className={styles.flag}
        src={country.flags.png}
        alt={country.flags?.alt || `Flag of ${country.name.common}`}
        width={300}
        height={200}
      />
      <div className={styles.info}>
        <h3 className={styles.capital}>
          Capital: {country.capital?.[0] || "This country has no capital!"}
        </h3>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Languages: {languagesList}</p>
        <p>Currencies: {currenciesList}</p>
        <p>
          Borders:{" "}
          {country.borders?.join(", ") || "This country has no borders!"}
        </p>
      </div>
    </div>
  );
}
