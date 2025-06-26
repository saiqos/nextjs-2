import { CountryFullDetails, Country } from "@/types";
import CountryWithDetails from "@/components/CountryWithDetails";
import { useRouter } from "next/router";
export default function CountryDetails({country}: {country: CountryFullDetails}){
    const router = useRouter();
    if(router.isFallback){
        return <div style={{marginTop: '70px', textAlign: 'center', fontSize: '36px'}}>Loading...</div>
    }
    return <CountryWithDetails country={country}/>
}

export async function getStaticPaths() {
    try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
    const data: Country[] = await response.json();
    const paths = data.map((country: Country) => {
        return {params: {name: country.name.common.toLowerCase()}}
    });
    return {
        paths,
        fallback: true
    }
    } catch (error) {
        console.error(error);
        return {
            paths: [],
            fallback: true
        }
    }

}

export async function getStaticProps({params}: {params: {name: string}}) {
    try {
        const countryName = params.name.toLowerCase().trim();

        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const data = await response.json();

        if (!Array.isArray(data) || !data.length) {
            return { notFound: true };
        }

        return {
            props: {
                country: data[0],
                }
            }
    } catch (error) {
        console.error(error);
        return {
            notFound: true,
        };
    }
}