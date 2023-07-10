import { Sidebar } from "@/components/Sidebar";
import { menus } from "@/routes";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";


export default function App({ Component, pageProps }: AppProps) {


  return (
    <div className="flex">
      <Sidebar
        display={true}
        menus={menus}
      />
    <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>

    </div>
  );
}
