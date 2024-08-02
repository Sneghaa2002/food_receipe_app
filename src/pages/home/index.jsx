import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Hungry for More? Explore Our Recipes!
          </p>

           {/* Image element with Tailwind CSS classes */}
           <img
            src="/image/cooking_pic.jpg"
            alt="Person cooking in the kitchen"
            className="w-full max-w-md lg:max-w-lg mx-auto rounded-md"
            style={{ border: "none", boxShadow: "none" }} // Removes border and shadow
          />
        </div>
      )}
    </div>
  );
}