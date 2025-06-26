import Head from "next/head";
import { Geist } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CountriesList from "@/components/CountriesList";
import { Country } from "@/types";
import { useState } from "react";
import Filters from "@/components/Filters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home({data}: {data: Country[]}) {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const allRegions = [...new Set(data.map(country => country.region))]; 
  const filteredCountries = data.filter(country => {
    const isMatchingRegion = region ? country.region === region : true;
    const isMatchingSearch = search ? country.name.common.toLowerCase().includes(search.toLowerCase()) : true;
    return isMatchingRegion && isMatchingSearch;
  })
  return (
    <>
      <Head>
        <title>Homework #23 Next.js</title>
        <meta name="description" content="Homework for React laba international learning program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`${styles.homeTitle} ${geistSans.className}`}>
        Full list of countries around the world
      </h1>
      <Filters 
      allRegions={allRegions} 
      inputValue={search} 
      selectValue={region} 
      handleInputChange={(e) => setSearch(e.target.value)}
      handleSelectChange={(e) => setRegion(e.target.value)}
      />
      <CountriesList countries={filteredCountries}/>
    </>
  );
}

export async function getStaticProps() {
    try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,region,flags');
    const data = await response.json();
    return {
        props: {data}
    }
    } catch (error) {
       console.error(error); 
       return {
        props: {data: []}
    }
    }

}
