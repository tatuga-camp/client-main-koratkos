import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Anuphan } from "next/font/google";

// Self-hosted at build time, so no render-blocking request to Google Fonts.
const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-anuphan",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${anuphan.variable} font-Anuphan`}>
      <Component {...pageProps} />
    </div>
  );
}
