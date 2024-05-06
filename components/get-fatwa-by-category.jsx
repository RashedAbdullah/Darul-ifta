import { getAllFatwa, getUser } from "@/actions/actions";
import FatwaCard from "./fatwa-card";
import FatwaTitle from "./fatwa-title";

const GetFatwaByCategory = async () => {
  const allFatwa = await getAllFatwa();
  const users = await getUser();
  console.log(users);

  return (
    <div className="lg:px-20 px-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-5 gap-10">
      <div className="col-span-4">
        <FatwaTitle />
        <div className="lg:col-span-4 md:col-span-3 col-span-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {allFatwa.map((fatwa) => (
            <FatwaCard key={fatwa.fatwa_no} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetFatwaByCategory;
