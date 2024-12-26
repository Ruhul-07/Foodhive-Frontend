const ExploreCategories = () => {
    const categories = [
      {
        id: 1,
        title: "Fast Food",
        image: "https://i.ibb.co.com/ZB3MpHS/fastfood.jpg",
        description: "Quick and delicious meals to satisfy your hunger.",
      },
      {
        id: 2,
        title: "Desserts",
        image: "https://i.ibb.co.com/rpsFJZ5/deserts.jpg",
        description: "Sweet treats to indulge in.",
      },
      {
        id: 3,
        title: "Beverages",
        image: "https://i.ibb.co.com/b2BgRKN/juice.jpg",
        description: "Refreshing drinks for every occasion.",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img src={category.image} alt={category.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ExploreCategories;
  