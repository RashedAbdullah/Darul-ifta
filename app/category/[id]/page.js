import GetFatwaByCategory from "@/components/get-fatwa-by-category";

const CategoryDetailsPage = ({ params: { id } }) => {
  return (
    <main>
      <GetFatwaByCategory categoryName={id} />
    </main>
  );
};

export default CategoryDetailsPage;
