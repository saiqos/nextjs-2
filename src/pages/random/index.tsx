import { CountryFullDetails } from "@/types";
import CountryWithDetails from "@/components/CountryWithDetails";
export default function RandomPage({
  randomCountry,
}: {
  randomCountry: CountryFullDetails | null;
}) {
  if (!randomCountry) {
    return <div>Something went wrong, please try again later</div>;
  }
  return <CountryWithDetails country={randomCountry} />;
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,flags,capital,population,languages,currencies,borders",
    );
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return {
      props: { randomCountry: data[randomIndex] },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { randomCountry: null },
    };
  }
}
