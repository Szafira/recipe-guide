export interface Result {
    title: string;
    thumbnail: string;
    ingredients: string;
    href: string;
    id: number;
    } 
    const results: Result[] = 
    [{"title":"Italian Salad","href":"http://www.cooks.com/rec/view/0,1943,156173-236206,00.html","ingredients":"olives, green pepper, pasta (in general), pepperoni, purple onion, pasta","thumbnail":"http://img.recipepuppy.com/10.jpg","id":0},{"title":"Pasta Simple Recipe","href":"http://www.grouprecipes.com/9308/pasta-simple.html","ingredients":"leaves, shallot, garlic, pasta (in general), lemon, red onions, pasta, salt, shallot, parmigiano-reggiano cheese, butter, olive oil, tomato, tomato","thumbnail":"http://img.recipepuppy.com/10.jpg","id":1},{"title":"Smoked Haddock 4 Cheese Pasta","href":"http://www.bigoven.com/128195-Smoked-Haddock-4-Cheese-Pasta-recipe.html","ingredients":"pasta (in general), penne, haddock fillets, haddock fillets, butter, leek, pasta, cheddar cheese","thumbnail":"http://img.recipepuppy.com/10.jpg","id":2},{"title":"Black Beans With Pasta","href":"http://recipe.aol.com/recipe/black-beans-with-pasta/88138","ingredients":"pasta, pasta (in general), tomato, corn, salsa, black beans, basil, soy sauce, green onion","thumbnail":"http://img.recipepuppy.com/10.jpg","id":3},{"title":"Tuna-Pasta Salad","href":"http://recipe.aol.com/recipe/tuna-pasta-salad/87329","ingredients":"balsamic vinaigrette, pasta (in general), basil, green onion, zucchini, tomato, tuna, olives, balsamic vinaigrette, tuna, pasta, pasta","thumbnail":"http://img.recipepuppy.com/10.jpg","id":4},{"title":"Four Pasta Beef Bake Recipe","href":"http://www.cdkitchen.com/recipes/recs/1091/Four-Pasta-Beef-Bake87193.shtml","ingredients":"ground beef, eggs, green pepper, tomato sauce, mozzarella cheese, onions, rotini, pasta (in general), elbow macaroni, pasta","thumbnail":"http://img.recipepuppy.com/10.jpg","id":5},{"title":"Pasta with Sun-Dried Tomatoes, Olive, And Goat Cheese","href":"http://www.bigoven.com/134359-Pasta-with-Sun-Dried-Tomatoes,-Olive,-And-Goat-Cheese-recipe.html","ingredients":"garlic, onions, olive oil, vegetable oil, chicken broth, brine, parsley, pasta (in general), goat cheese, pasta","thumbnail":"http://img.recipepuppy.com/10.jpg","id":6},{"title":"Whole-Wheat Pasta Shells with Spicy Tomato Pesto and Winter Greens","href":"http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=521883","ingredients":"pesto, water, sun dried tomato, almonds, parmesan cheese, basil, garlic, salt, red pepper, olive oil, salad greens, olive oil, onions, swiss chard, water, salt, black pepper, pasta, pasta (in general), parmesan cheese","thumbnail":"http://img.recipepuppy.com/10.jpg","id":7},{"title":"Baked pasta shells filled with cheese","href":"http://www.bbc.co.uk/food/recipes/database/bakedpastashellsfill_70348.shtml","ingredients":"pasta (in general), salsa, parmesan cheese, mozzarella cheese, ricotta cheese, mozzarella cheese, parmesan cheese, basil, black pepper, salsa, pasta, olive oil, garlic, tomato, basil, black pepper","thumbnail":"http://img.recipepuppy.com/10.jpg","id":8},{"title":"Greek Pasta Salad with Shrimp, Tomatoes, Zucchini, Peppers, and Feta","href":"http://allrecipes.com/Recipe/Greek-Pasta-Salad-with-Shrimp-Tomatoes-Zucchini-Peppers-and-Feta/Detail.aspx","ingredients":"salt, black pepper, black pepper, cherry tomato, garlic, kalamata olive, dijon mustard, balsamic vinaigrette, oregano, olive oil, feta cheese, olive oil, pasta, pasta (in general), red onions, rice vinegar, water, shrimp, yellow bell pepper, zucchini","thumbnail":"http://img.recipepuppy.com/10.jpg","id":9}]
    
    export const getResults = () => results;