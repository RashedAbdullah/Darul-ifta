import CategoriesOptions from "@/components/categories-options";
import Header from "@/components/header";
import SearchFatwa from "@/components/search-fatwa";
export default function Home() {
  return (
    <main className="relative">
      <Header />
      <CategoriesOptions />
      <SearchFatwa />
    </main>
  );
}
