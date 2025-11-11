const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  // Vegetables
  {
    name: "Fresh Tomatoes",
    price: 30,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
    description: "Fresh red tomatoes - 1kg",
    category: "vegetables"
  },
  {
    name: "Green Onions",
    price: 25,
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400&h=300&fit=crop",
    description: "Fresh green onions - 250g",
    category: "vegetables"
  },
  {
    name: "Fresh Carrots",
    price: 35,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
    description: "Organic carrots - 500g",
    category: "vegetables"
  },
  {
    name: "Bell Peppers",
    price: 45,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop",
    description: "Mixed bell peppers - 250g",
    category: "vegetables"
  },
  {
    name: "Fresh Spinach",
    price: 20,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
    description: "Fresh spinach leaves - 200g",
    category: "vegetables"
  },
  {
    name: "Potatoes",
    price: 25,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
    description: "Fresh potatoes - 1kg",
    category: "vegetables"
  },
  // Fruits
  {
    name: "Fresh Bananas",
    price: 40,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
    description: "Ripe bananas - 1 dozen",
    category: "fruits"
  },
  {
    name: "Red Apples",
    price: 80,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
    description: "Fresh red apples - 1kg",
    category: "fruits"
  },
  {
    name: "Fresh Oranges",
    price: 60,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop",
    description: "Juicy oranges - 1kg",
    category: "fruits"
  },
  {
    name: "Grapes",
    price: 120,
    image: "https://images.unsplash.com/photo-1599819177107-2ece4c56ed8c?w=400&h=300&fit=crop",
    description: "Fresh grapes - 500g",
    category: "fruits"
  },
  {
    name: "Mangoes",
    price: 100,
    image: "https://images.unsplash.com/photo-1605027990121-cbae9ee191a8?w=400&h=300&fit=crop",
    description: "Sweet mangoes - 1kg",
    category: "fruits"
  },
  {
    name: "Strawberries",
    price: 150,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
    description: "Fresh strawberries - 250g",
    category: "fruits"
  },
  // Daily Needs
  {
    name: "Digestive Biscuits",
    price: 45,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    description: "Healthy digestive biscuits - 200g pack",
    category: "dailyNeeds"
  },
  {
    name: "Chocolate Biscuits",
    price: 55,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    description: "Chocolate cream biscuits - 150g pack",
    category: "dailyNeeds"
  },
  {
    name: "Toor Dal",
    price: 120,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    description: "Premium toor dal - 1kg",
    category: "dailyNeeds"
  },
  {
    name: "Moong Dal",
    price: 130,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    description: "Yellow moong dal - 1kg",
    category: "dailyNeeds"
  },
  {
    name: "Fresh Milk",
    price: 25,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop",
    description: "Full cream milk - 500ml",
    category: "dailyNeeds"
  },
  {
    name: "Sunflower Oil",
    price: 180,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
    description: "Refined sunflower oil - 1L",
    category: "dailyNeeds"
  },
  {
    name: "Coconut Oil",
    price: 200,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
    description: "Pure coconut oil - 500ml",
    category: "dailyNeeds"
  },
   {
    name: "Green Chillies",
    price: 2323,
    image: "https://images.unsplash.com/photo-1583278364772-6f9c31cb4089?w=400&h=300&fit=crop",
    description: "Fresh green chillies - 100g",
    category: "vegetables"
  },
  {
    name: "Marie Biscuits",
    price: 35,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    description: "Classic marie biscuits - 200g pack",
    category: "dailyNeeds"
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany();
    console.log('Cleared existing products');
    
    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(`${createdProducts.length} products seeded successfully`);
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedProducts();