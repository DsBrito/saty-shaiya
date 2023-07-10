import ThemeToggle from "@/components/ThemeToggle";
import Head from "next/head";
import React from 'react';

export default function Home() {
  return ( 
    <div className="max-w-screen-md mx-auto">
      <header className="flex justify-between items-center p-8">
        <Head>
          <title>Saty ツ</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
      </header>
      
      <h1 className="text-xl">Eventos</h1>
      <ThemeToggle />
    </div> 
  );
}
