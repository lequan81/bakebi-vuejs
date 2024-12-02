import { formatCurrency } from "./helpers";
import {
  HomeIcon,
  ListBulletIcon,
  StarIcon,
  FireIcon,
} from "@heroicons/vue/24/outline";
// Import payment_bagdes svg files
import visa from "@assets/payment_badges/visa.svg";
import mastercard from "@assets/payment_badges/mastercard.svg";
import paypal from "@assets/payment_badges/paypal.svg";
import applePay from "@assets/payment_badges/apple-pay.svg";
import googlePay from "@assets/payment_badges/google-pay.svg";
// Import social_badges svg files
import twitter from "@assets/social_badges/twitter.svg";
import facebook from "@assets/social_badges/facebook.svg";
import instagram from "@assets/social_badges/instagram.svg";
import github from "@assets/social_badges/github.svg";

export const PAYMENT_BADGES = [
  {
    title: "Visa",
    path: visa,
  },
  {
    title: "Mastercard",
    path: mastercard,
  },
  {
    title: "Paypal",
    path: paypal,
  },
  {
    title: "Apple Pay",
    path: applePay,
  },
  {
    title: "Google Pay",
    path: googlePay,
  },
];

export const SOCIAL_BADGES = [
  {
    title: "Twitter",
    icon: twitter,
    href: "#",
  },
  {
    title: "Facebook",
    icon: facebook,
    href: "#",
  },
  {
    title: "Instagram",
    icon: instagram,
    href: "#",
  },
  {
    title: "Github",
    icon: github,
    href: "https://github.com/huehwe/bakebi_ecommerce",
  },
];

export const HERO_SLIDER = [
  {
    url: "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const DEFAULT_PRODUCT_TABS = [
  "Chi tiết sản phẩm",
  "Đánh giá của khách hàng",
];

export const DEFAULT_FILTER = [
  {
    value: "all",
    title: "Tất cả",
  },
  {
    value: "top_trending",
    title: "Phổ biến",
  },
  {
    value: "latest",
    title: "Mới nhất",
  },
  {
    value: "oldest",
    title: "Cũ nhất",
  },
];

export const STARS_FILTER = [
  {
    value: "all_star",
    title: "Tất cả",
  },
  {
    value: "5_star",
    title: "5 sao",
  },
  {
    value: "4_star",
    title: "4 sao",
  },
  {
    value: "3_star",
    title: "3 sao",
  },
  {
    value: "2_star",
    title: "2 sao",
  },
  {
    value: "1_star",
    title: "1 sao",
  },
];

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

export const SEARCHBOX_DATAS = [
  {
    name: "Chocolate Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    category_id: 0,
    product_id: "chocolate-cake",
  },
  {
    name: "Strawberry Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 0,
    product_id: "strawberry-cake",
  },
  {
    name: "Blueberry Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 0,
    product_id: "blueberry-cake",
  },
  {
    name: "Cheese Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 1,
    product_id: "cheese-cake",
  },
];

export const DEFAULT_NAVIGATION = [
  {
    title: "Trang chủ",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Sản phẩm",
    href: "/products",
    icon: ListBulletIcon,
    dropdownItems: PRODUCTS_ID,
  },
  {
    title: "Mới nhất",
    href: "/recently",
    icon: StarIcon,
  },
  {
    title: "Bán chạy",
    href: "/trending",
    icon: FireIcon,
  },
];

export const DEFAULT_SIZES = ["Tất cả", "XS", "SS", "S", "M", "L", "LL", "XXL"];
export const DEFAULT_TAGS = [
  "Tất cả",
  "Vị giác của Thần đằng",
  "Đắng khiến bạn mê",
  "Mất Ngọt",
  "Cao hơn trời",
  "Giòn rộp rộp",
  "Cay quyến rũ",
  "Chua nhỏ dãi",
  "Phê tụt lưỡi",
  "Người đến sau",
];

export const DEFAULT_SPECIAL_INGREDIENTS = [
  "Tất cả",
  "Nước mắm",
  "Tiêu xay",
  "Ớt ngũ vị hương",
];

export const DEFAULT_PRICE_RANGE = [
  { title: "Tất cả", value: "dutien" },
  { title: `Dưới ${formatCurrency(100_000)}`, value: "below_100_000" },
  {
    title: `${formatCurrency(100_000)} - ${formatCurrency(300_000)}`,
    value: "100_000-300_000",
  },
  {
    title: `${formatCurrency(300_000)} - ${formatCurrency(500_000)}`,
    value: "300_000-500_000",
  },
  { title: `Trên ${formatCurrency(500_000)}`, value: "above_500_000" },
];

// Without .flat(), array within an array ["item1", ["bantumlum","bantualua"]]
// Using .flat() "flattens" the structure into a single array.
export const DEFAULT_CATEGORIES = [
  "Tất cả",
  PRODUCTS_ID.map((product_id) => product_id.name),
].flat();

export const DEMO_PRODUCTS = [
  {
    name: "Chocolate Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    price: "200000",
    category_id: 0,
    product_id: "chocolate-cake",
    rating: 3.5,
  },
  {
    name: "Strawberry Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 0,
    price: 250000,
    product_id: "strawberry-cake",
    rating: 4.5,
  },
  {
    name: "Blueberry Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 0,
    price: 300000,
    product_id: "blueberry-cake",
    rating: 3,
  },
  {
    name: "Cheese Cake",
    imgUrl:
      "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_id: 1,
    price: 350000,
    oldPrice: 400000,
    product_id: "cheese-cake",
    rating: 5,
  },
];

export const DEMO_ALL_PRODUCTS = {
  products: [
    {
      name: "Chocolate Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      price: "200000",
      category_id: 0,
      product_id: "chocolate-cake",
      rating: 3.5,
      avaibleSizes: [DEFAULT_SIZES[1], DEFAULT_SIZES[2], DEFAULT_SIZES[4]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[3],
        DEFAULT_TAGS[4],
        DEFAULT_TAGS[5],
      ],
      specialIngredients: [DEFAULT_SPECIAL_INGREDIENTS[1]],
    },
    {
      name: "Strawberry Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 0,
      price: 250000,
      product_id: "strawberry-cake",
      rating: 4.5,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[3], DEFAULT_SIZES[5]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[3],
        DEFAULT_TAGS[4],
        DEFAULT_TAGS[9],
      ],
      specialIngridients: undefined,
    },
    {
      name: "Blueberry Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 0,
      price: 300000,
      product_id: "blueberry-cake",
      rating: 3,
      avaibleSizes: [DEFAULT_SIZES[3], DEFAULT_SIZES[4], DEFAULT_SIZES[5]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[6],
        DEFAULT_TAGS[7],
        DEFAULT_TAGS[9],
      ],
      specialIngridients: [
        DEFAULT_SPECIAL_INGREDIENTS[1],
        DEFAULT_SPECIAL_INGREDIENTS[2],
      ],
    },
    {
      name: "Cheese Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 1,
      price: 350000,
      oldPrice: 400000,
      product_id: "cheese-cake",
      rating: 5,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[4], DEFAULT_SIZES[5]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[2],
        DEFAULT_TAGS[3],
        DEFAULT_TAGS[4],
      ],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[3]],
    },
    {
      name: "Red Velvet Cake",
      imgUrl: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f",
      category_id: 0,
      price: 280000,
      product_id: "red-velvet-cake",
      rating: 4.8,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[3], DEFAULT_SIZES[4]],
      avaibleTags: [DEFAULT_TAGS[1], DEFAULT_TAGS[5], DEFAULT_TAGS[8]],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[2]],
    },
    {
      name: "Matcha Layer Cake",
      imgUrl: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d",
      category_id: 0,
      price: 320000,
      product_id: "matcha-cake",
      rating: 4.2,
      avaibleSizes: [DEFAULT_SIZES[3], DEFAULT_SIZES[4], DEFAULT_SIZES[5]],
      avaibleTags: [DEFAULT_TAGS[2], DEFAULT_TAGS[4], DEFAULT_TAGS[7]],
      specialIngridients: [
        DEFAULT_SPECIAL_INGREDIENTS[1],
        DEFAULT_SPECIAL_INGREDIENTS[3],
      ],
    },
    {
      name: "Sourdough Bread",
      imgUrl:
        "https://images.unsplash.com/photo-1638788449271-9bb9121c1bfc?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 1,
      price: 180000,
      product_id: "sourdough-bread",
      rating: 4.7,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[4]],
      avaibleTags: [DEFAULT_TAGS[5], DEFAULT_TAGS[6]],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[2]],
    },
    {
      name: "Croissant",
      imgUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      category_id: 1,
      price: 150000,
      product_id: "croissant",
      rating: 4.6,
      avaibleSizes: [DEFAULT_SIZES[1], DEFAULT_SIZES[2]],
      avaibleTags: [DEFAULT_TAGS[4], DEFAULT_TAGS[5]],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[1]],
    },
    {
      name: "Chocolate Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      price: "200000",
      category_id: 0,
      product_id: "chocolate-cake",
      rating: 3.5,
      avaibleSizes: [DEFAULT_SIZES[1], DEFAULT_SIZES[2], DEFAULT_SIZES[4]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[3],
        DEFAULT_TAGS[4],
        DEFAULT_TAGS[5],
      ],
      specialIngredients: [DEFAULT_SPECIAL_INGREDIENTS[1]],
    },
    {
      name: "Strawberry Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 0,
      price: 250000,
      product_id: "strawberry-cake",
      rating: 4.5,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[3], DEFAULT_SIZES[5]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[3],
        DEFAULT_TAGS[4],
        DEFAULT_TAGS[9],
      ],
      specialIngridients: undefined,
    },
    {
      name: "Blueberry Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 0,
      price: 300000,
      product_id: "blueberry-cake",
      rating: 3,
      avaibleSizes: [DEFAULT_SIZES[3], DEFAULT_SIZES[4], DEFAULT_SIZES[5]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[6],
        DEFAULT_TAGS[7],
        DEFAULT_TAGS[9],
      ],
      specialIngridients: [
        DEFAULT_SPECIAL_INGREDIENTS[1],
        DEFAULT_SPECIAL_INGREDIENTS[2],
      ],
    },
    {
      name: "Cheese Cake",
      imgUrl:
        "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 1,
      price: 350000,
      oldPrice: 400000,
      product_id: "cheese-cake",
      rating: 5,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[4], DEFAULT_SIZES[5]],
      avaibleTags: [
        DEFAULT_TAGS[1],
        DEFAULT_TAGS[2],
        DEFAULT_TAGS[3],
        DEFAULT_TAGS[4],
      ],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[3]],
    },
    {
      name: "Red Velvet Cake",
      imgUrl: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f",
      category_id: 0,
      price: 280000,
      product_id: "red-velvet-cake",
      rating: 4.8,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[3], DEFAULT_SIZES[4]],
      avaibleTags: [DEFAULT_TAGS[1], DEFAULT_TAGS[5], DEFAULT_TAGS[8]],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[2]],
    },
    {
      name: "Matcha Layer Cake",
      imgUrl: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d",
      category_id: 0,
      price: 320000,
      product_id: "matcha-cake",
      rating: 4.2,
      avaibleSizes: [DEFAULT_SIZES[3], DEFAULT_SIZES[4], DEFAULT_SIZES[5]],
      avaibleTags: [DEFAULT_TAGS[2], DEFAULT_TAGS[4], DEFAULT_TAGS[7]],
      specialIngridients: [
        DEFAULT_SPECIAL_INGREDIENTS[1],
        DEFAULT_SPECIAL_INGREDIENTS[3],
      ],
    },
    {
      name: "Sourdough Bread",
      imgUrl:
        "https://images.unsplash.com/photo-1638788449271-9bb9121c1bfc?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category_id: 1,
      price: 180000,
      product_id: "sourdough-bread",
      rating: 4.7,
      avaibleSizes: [DEFAULT_SIZES[2], DEFAULT_SIZES[4]],
      avaibleTags: [DEFAULT_TAGS[5], DEFAULT_TAGS[6]],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[2]],
    },
    {
      name: "Croissant",
      imgUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      category_id: 1,
      price: 150000,
      product_id: "croissant",
      rating: 4.6,
      avaibleSizes: [DEFAULT_SIZES[1], DEFAULT_SIZES[2]],
      avaibleTags: [DEFAULT_TAGS[4], DEFAULT_TAGS[5]],
      specialIngridients: [DEFAULT_SPECIAL_INGREDIENTS[1]],
    },
  ],
};

export const DEMO_REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    createdAt: "2004-01-08T12:00:00.000Z",
  },
  {
    id: 2,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
  {
    id: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
  {
    id: 4,
    name: "Sophie B.",
    text: "I've been shopping at Shop.co for a while now, and I can confidently say that they never disappoint. The quality of their products is top-notch, and their customer service is exceptional.",
    rating: 4.5,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
  {
    id: 5,
    name: "Emily S.",
    text: "Shop.co has become my go-to destination for all things fashion. Whether I'm looking for everyday essentials or special occasion outfits, I know I can count on them to deliver stylish and high-quality pieces.",
    rating: 5,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
  {
    id: 6,
    name: "David H.",
    text: "I've recommended Shop.co to all my friends and family because I genuinely believe in the brand. Their commitment to quality, customer satisfaction, and ethical practices sets them apart from other retailers.",
    rating: 5,
    createdAt: "2009-04-13T12:00:00.000Z",
  },
  {
    id: 7,
    name: "Lily C.",
    text: "Shop.co has revolutionized my shopping experience by offering a wide range of products that cater to my personal style. Their commitment to sustainability and ethical practices is commendable.",
    rating: 5,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
  {
    id: 8,
    name: "Oliver P.",
    text: "I've been a loyal customer of Shop.co for years, and I have never been disappointed with their products or services. The quality of their clothes is unmatched, and their customer service is exceptional.",
    rating: 3.5,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
  {
    id: 9,
    name: "Emma R.",
    text: "Shop.co has become my one-stop shop for all my fashion needs. Their selection of clothes is unparalleled, and their commitment to sustainability and ethical practices is truly commendable.",
    rating: 5,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
  {
    id: 10,
    name: "Noah M.",
    text: "I've been shopping at Shop.co for years, and I can confidently say that they are one of the best retailers out there. Their products are of the highest quality, and their customer service is exceptional.",
    rating: 2,
    createdAt: "2021-01-07T12:00:00.000Z",
  },
];

export const DEMO_DETAILS = [
  {
    title: "Kích thước",

    contents: {
      isList: false,
      data: ["Đường kính: 18cm", "Chiều cao: 5cm", "Dành cho 5-10 người ăn"],
    },
  },
  {
    title: "Thành phần",
    contents: {
      isList: true,
      data: [
        "Vỏ bánh: bột mì đa dụng, bơ lạnh, đường, muối, trứng, nước lạnh",
        "Nhân bánh: cherry tươi, đường, bột ngô, nước cốt chanh, vỏ chanh bào, bơ lạnh",
      ],
    },
  },
  {
    title: "Hướng dẫn sử dụng",
    contents: {
      isList: true,
      data: [
        "Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh",
        "Không nên để bánh ở nhiệt độ phòng quá 30 phút (Bánh sẽ bị chảy)",
        "Sử dụng trong vòng 03 ngày",
      ],
    },
  },
  {
    title: "Phụ kiện đính kèm",
    contents: {
      isList: true,
      data: [
        "01 Chiếc nến sinh nhật",
        "01 Bộ đĩa và đĩa dành cho 10 người",
        "01 Dao cắt bánh",
      ],
    },
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
  reviews: DEMO_REVIEWS,
  details: DEMO_DETAILS,
};
