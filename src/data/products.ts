import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Floral Summer Dress",
    price: 1499,
    image: "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Beautiful floral pattern summer dress, perfect for special occasions and everyday wear.",
    sizes: ["0-3m", "3-6m", "6-12m", "12-18m"],
    category: "dresses",
    featured: true
  },
  {
    id: "2",
    name: "Sailor Style Romper",
    price: 999,
    image: "https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Adorable sailor style romper, comfortable and stylish for your little one.",
    sizes: ["Newborn", "0-3m", "3-6m", "6-12m"],
    category: "rompers"
  },
  {
    id: "3",
    name: "Pink Tutu Dress",
    price: 1899,
    image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Elegant pink tutu dress for your little princess. Perfect for birthdays and special events.",
    sizes: ["6-12m", "12-18m", "18-24m"],
    category: "dresses",
    featured: true
  },
  {
    id: "4",
    name: "Baby Bow Headband Set",
    price: 499,
    image: "https://images.pexels.com/photos/36039/baby-twins-brother-sister.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Set of 3 adorable bow headbands in different colors to match any outfit.",
    sizes: ["One Size"],
    category: "accessories"
  },
  {
    id: "5",
    name: "Knitted Baby Sweater",
    price: 1299,
    image: "https://images.pexels.com/photos/3661387/pexels-photo-3661387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Warm knitted sweater perfect for colder days. Made with soft, baby-friendly yarn.",
    sizes: ["0-3m", "3-6m", "6-12m", "12-18m"],
    category: "outerwear"
  },
  {
    id: "6",
    name: "Baby Boy Formal Set",
    price: 2499,
    image: "https://images.pexels.com/photos/3662909/pexels-photo-3662909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Adorable formal set including shirt, bow tie, and pants. Perfect for special occasions.",
    sizes: ["6-12m", "12-18m", "18-24m", "2T"],
    category: "sets"
  },
  {
    id: "7",
    name: "Floral Baby Booties",
    price: 699,
    image: "https://images.pexels.com/photos/3662897/pexels-photo-3662897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Soft sole baby booties with floral pattern. Keeps tiny feet warm and comfortable.",
    sizes: ["Newborn", "0-3m", "3-6m"],
    category: "footwear"
  },
  {
    id: "8",
    name: "Cotton Onesie 3-Pack",
    price: 999,
    image: "https://images.pexels.com/photos/3662876/pexels-photo-3662876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Set of 3 comfortable cotton onesies in different colors. Essential for everyday wear.",
    sizes: ["Newborn", "0-3m", "3-6m", "6-12m"],
    category: "basics"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "dresses", name: "Dresses" },
  { id: "rompers", name: "Rompers" },
  { id: "sets", name: "Outfit Sets" },
  { id: "accessories", name: "Accessories" },
  { id: "footwear", name: "Footwear" },
  { id: "outerwear", name: "Outerwear" },
  { id: "basics", name: "Basics" }
];