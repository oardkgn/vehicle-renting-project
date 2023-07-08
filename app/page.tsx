
import { Hero, SearchBar, CustomFilter,CarCard,ShowMore } from "./components";
import { fuels, yearsOfProduction } from "../constants";
import { fetchCars } from "@/utils";
import { FilterProps } from "@/types";
import SearchBarHeader from "./components/SearchBarHeader";
import { Metadata } from "next";

interface HomeProps {
  searchParams: FilterProps;
}

export const metadata: Metadata = {
  title: "Wheelz",
  description: "Discover world's best car rental application",
};


export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className={``}>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        
        <SearchBarHeader />

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold min-h-[500px]">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
