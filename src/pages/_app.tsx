import Navbar from "@/components/Navbar";
import FavoriteCountriesProvider from "@/context/FavoritesContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoriteCountriesProvider>
    <Navbar />
    <Component {...pageProps} />
    </FavoriteCountriesProvider>
  
  )
}
