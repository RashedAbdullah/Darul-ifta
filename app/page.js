import CategoriesOptions from "@/components/categories-options";
import Header from "@/components/header";
import GetFatwaByCategory from "@/components/get-fatwa-by-category";
export default function Home() {
  return (
    <main className="relative">
      <Header />
      <CategoriesOptions />
      <GetFatwaByCategory />
    </main>
  );
}
