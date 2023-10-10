import { carType } from "@/utils/type";
import { CarCard, CustomFilter, Searchbar, ShowMore } from ".";
import { fuels, yearsOfProduction } from "@/utils/constants";

type props = {
  allCars: carType[];
  isEmpty: boolean;
  searchparams: any;
};

export default async function CarCatalogue({ allCars, isEmpty, searchparams }: props) {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <Searchbar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>
      {!isEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car: carType, index: number) => {
              return <CarCard car={car} key={index} />;
            })}
          </div>
          <ShowMore
            pageNumber={(searchparams?.limit || 10) / 10}
            isNext={(searchparams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">There is no car</h2>
        </div>
      )}
    </div>
  );
}
