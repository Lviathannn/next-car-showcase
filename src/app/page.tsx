import CarCatalogue from "@/components/CarCatalogue";
import { getCars } from "@/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Hero } from "@/components";
import LoginButton from "@/components/LoginButton";
export default async function Home({ searchParams }: { searchParams: any }) {
  const session = await getServerSession(authOptions);
  const allCars = await getCars({
    model: searchParams.model || "",
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });

  const isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      {session ? (
        <CarCatalogue allCars={allCars} isEmpty={isEmpty} searchparams={searchParams} />
      ) : (
        <div className="flex flex-col justify-center my-14 items-center gap-5">
          <h1 className="text-gray-900 font-bold text-3xl">Please Login To Search Car</h1>
          <div className="">
            <LoginButton />
          </div>
        </div>
      )}
    </main>
  );
}
