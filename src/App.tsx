import { Introduction } from "./components/Introduction";
import { CoreValues } from "./components/CoreValues";
import { Services } from "./components/Services";
import { CompanyStats } from "./components/CompanyStats";
import { Navbar } from "./components/Shared";

export default function App() {
  return (
    <main className="w-full bg-white flex flex-col font-sans relative">
      <Navbar />
      <Introduction />
      <CoreValues />
      <Services />
      <CompanyStats />
    </main>
  );
}
