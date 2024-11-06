import { Suspense } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Home from "@/components/screens/home/home";

export default function Main() {
  return (
    <PrimeReactProvider>
      <Suspense
        fallback={
          <p>......................Loading Home............................</p>
        }
      >
        <Home/>
      </Suspense>
    </PrimeReactProvider>
  );
}
