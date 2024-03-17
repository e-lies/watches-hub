import { SearchBar } from "@/components/component/search-bar";
import { Product } from "@/components/component/product";

const products = [
  {
    name: "Rolex Submariner",
    creationDate: "Jan 24, 2022",
    price: 5999.99,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZMQ7g-63j-of7PdluFwp84-2kfHrHmohHjBvjsBf8P_M8U88UknjwpZt9oEvkMMawfjILAqNq-ds2Tecc2KAxNXsmsayuPlKoIkrRj84lkBYTfdKQL6p3yMSYzIS6YySYXi6DzBcAWw&usqp=CAchttps://s.turbifycdn.com/aah/movadobaby/rolex-submariner-date-steel-yellow-gold-men-s-watch-126613lb-0002-44.jpg",
  },
  {
    name: "Omega Speedmaster",
    creationDate: "Jan 24, 2022",
    price: 2999.99,
    image:
      "https://cdn-dpppa.nitrocdn.com/cYpwxKyuMscTskFbAPIBUstvxqJyheAU/assets/images/optimized/rev-b3a1416/loro.ca/wp-content/uploads/2023/04/21030422003001.png",
  },
  {
    name: "Tag Heuer Carrera",
    creationDate: "Feb 15, 2022",
    price: 2499.99,
    image:
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw1afd8907/TAG_Heuer_Carrera/CBN2A1A.FC6537/CBN2A1A.FC6537_1000.png?impolicy=resizeTrim&width=884&height=1106",
  },
];

export default function Products() {
  return (
    <div style={{ width: "75%" }}>
      <SearchBar />
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Résultats de la recherche
      </h2>
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          creationDate={product.creationDate}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
