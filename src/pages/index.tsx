import ThemeToggle from "@/components/ThemeToggle";
import Head from "next/head";
import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";
export default function Home() {
  return ( 
    <div className="max-w-screen-md mx-auto">
      <header className="flex justify-between items-center p-8">
        <Head>
          <title>Saty ツ</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type= "image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        </header>

        <div className="flex min-h-screen itens-center justify-center">
        <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]"> 
          <CardHeader>
            <CardTitle> MiniSaty</CardTitle>
            <CardDescription>Using Vercel SDK to create MiniSaty</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Mensagens</p>
            <CardFooter>
              Form
            </CardFooter>
            <Input placeholder="Helloo! Como eu posso te ajudar?"/>
            <Button type="submit">Send</Button>
          </CardContent>
        </Card>
      </div>
      <h1 className="text-xl">Menu</h1>
      <ThemeToggle />
    </div> 
  );
}
