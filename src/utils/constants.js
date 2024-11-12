import {
  HomeIcon,
  ListBulletIcon,
  StarIcon,
  FireIcon,
} from "@heroicons/vue/24/outline";

export const PRODUCTS_ID = [
  {
    id: 0,
    name: "Bánh ngọt",
    category: "sweetcake",
  },
  {
    id: 1,
    name: "Bánh nướng",
    category: "bakedcake",
  },
];

export const DEFAULT_NAVIGATION = [
  { title: "Trang chủ", href: "/", icon: HomeIcon },
  {
    title: "Sản phẩm",
    href: "/products",
    icon: ListBulletIcon,
    isDropdown: true,
    dropdownItems: PRODUCTS_ID,
  },
  {
    title: "Mới nhất",
    href: "/recently",
    icon: StarIcon,
  },
  { title: "Bán chạy", href: "/top-trending", icon: FireIcon },
];

export const DEMO_PRODUCTS = [
  {
    name: "Chocolate Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    price: "200000",
    category_id: 0,
    product_id: "chocolate-cake",
  },
  {
    name: "Strawberry Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 0,
    price: 250000,
    product_id: "strawberry-cake",
  },
  {
    name: "Blueberry Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 0,
    price: 300000,
    product_id: "blueberry-cake",
  },
  {
    name: "Cheese Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 1,
    price: 350000,
    oldPrice: 400000,
    product_id: "cheese-cake",
  },
];

export const DEMO_DETAILS_PRODUCT = {
  name: "Chocolate Cake",
  description:
    "Lớp vỏ bánh giòn rụm và vàng nâu được nướng đến mức hoàn hảo, tạo nên một kết cấu lý tưởng để giữ cho nhân cherry đậm đà, thơm ngon. Bánh được trang trí bằng các lưỡi cắt vỏ hình lưới truyền thống, không chỉ đẹp mắt mà còn giúp nhân bánh chín đều.",
  price: "200000",
  category_id: 1,
  price: 350000,
  oldPrice: 400000,
  rating: 4.5,
  images: [
    "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};

export const DEMO_REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sophie B.",
    text: "I've been shopping at Shop.co for a while now, and I can confidently say that they never disappoint. The quality of their products is top-notch, and their customer service is exceptional.",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Emily S.",
    text: "Shop.co has become my go-to destination for all things fashion. Whether I'm looking for everyday essentials or special occasion outfits, I know I can count on them to deliver stylish and high-quality pieces.",
    rating: 5,
  },
  {
    id: 6,
    name: "David H.",
    text: "I've recommended Shop.co to all my friends and family because I genuinely believe in the brand. Their commitment to quality, customer satisfaction, and ethical practices sets them apart from other retailers.",
    rating: 5,
  },
  {
    id: 7,
    name: "Lily C.",
    text: "Shop.co has revolutionized my shopping experience by offering a wide range of products that cater to my personal style. Their commitment to sustainability and ethical practices is commendable.",
    rating: 5,
  },
  {
    id: 8,
    name: "Oliver P.",
    text: "I've been a loyal customer of Shop.co for years, and I have never been disappointed with their products or services. The quality of their clothes is unmatched, and their customer service is exceptional.",
    rating: 3.5,
  },
  {
    id: 9,
    name: "Emma R.",
    text: "Shop.co has become my one-stop shop for all my fashion needs. Their selection of clothes is unparalleled, and their commitment to sustainability and ethical practices is truly commendable.",
    rating: 5,
  },
  {
    id: 10,
    name: "Noah M.",
    text: "I've been shopping at Shop.co for years, and I can confidently say that they are one of the best retailers out there. Their products are of the highest quality, and their customer service is exceptional.",
    rating: 2,
  },
];
