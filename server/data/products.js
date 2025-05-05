const products = [
  {
    "id": "ve7c8f66",
    "name": "Onion 1 kg",
    "category": "Vegetables",
    "price": 0.93,
    "offerPrice": 0.82,
    "description": [
      "Pungent and crisp",
      "Essential for cooking",
      "Long shelf life"
    ],
    "createdAt": "2025-03-25T07:19:29Z",
    "updatedAt": "2025-03-25T07:22:06Z",
    "inStock": true
  },
  {
    "id": "ve068061",
    "name": "Garlic 200g",
    "category": "Vegetables",
    "price": 0.81,
    "offerPrice": 0.71,
    "description": [
      "Aromatic flavor",
      "Immune booster",
      "Great for sauces and sautés"
    ],
    "createdAt": "2025-03-25T07:20:43Z",
    "updatedAt": "2025-03-25T07:21:55Z",
    "inStock": false
  },
  {
    "id": "ve123456",
    "name": "Carrots 500g",
    "category": "Vegetables",
    "price": 0.95,
    "offerPrice": 0.85,
    "description": [
      "Sweet and crunchy",
      "Rich in Vitamin A",
      "Perfect for salads and cooking"
    ],
    "createdAt": "2025-03-25T07:20:00Z",
    "updatedAt": "2025-03-25T07:21:00Z",
    "inStock": true
  },
  {
    "id": "ve234567",
    "name": "Broccoli 300g",
    "category": "Vegetables",
    "price": 1.25,
    "offerPrice": 1.15,
    "description": [
      "Fresh and green",
      "High in fiber",
      "Great for stir-fries"
    ],
    "createdAt": "2025-03-25T07:21:00Z",
    "updatedAt": "2025-03-25T07:22:00Z",
    "inStock": true
  },
  {
    "id": "ve345678",
    "name": "Bell Peppers 3 pack",
    "category": "Vegetables",
    "price": 1.75,
    "offerPrice": 1.55,
    "description": [
      "Colorful variety",
      "Sweet and crisp",
      "Perfect for salads"
    ],
    "createdAt": "2025-03-25T07:22:00Z",
    "updatedAt": "2025-03-25T07:23:00Z",
    "inStock": true
  },
  {
    "id": "fref6185",
    "name": "Strawberry 500g",
    "category": "Fruits",
    "price": 3.16,
    "offerPrice": 2.73,
    "description": [
      "Sweet and juicy",
      "Perfect for desserts",
      "Rich in antioxidants"
    ],
    "createdAt": "2025-03-25T07:22:00Z",
    "updatedAt": "2025-03-25T07:19:09Z",
    "inStock": true
  },
  {
    "id": "fr57ac77",
    "name": "Pineapple 1 pc",
    "category": "Fruits",
    "price": 2.05,
    "offerPrice": 1.82,
    "description": [
      "Tropical and tangy",
      "Great for juicing",
      "High in Vitamin C"
    ],
    "createdAt": "2025-03-25T07:19:22Z",
    "updatedAt": "2025-03-25T07:19:01Z",
    "inStock": true
  },
  {
    "id": "frb81976",
    "name": "Watermelon 1 pc",
    "category": "Fruits",
    "price": 3.32,
    "offerPrice": 2.88,
    "description": [
      "Refreshing and hydrating",
      "Perfect for summer",
      "Low in calories"
    ],
    "createdAt": "2025-03-25T07:21:43Z",
    "updatedAt": "2025-03-25T07:20:17Z",
    "inStock": false
  },
  {
    "id": "fr456789",
    "name": "Apples 1 kg",
    "category": "Fruits",
    "price": 2.45,
    "offerPrice": 2.15,
    "description": [
      "Crisp and sweet",
      "Great for snacking",
      "Available in red and green"
    ],
    "createdAt": "2025-03-25T07:23:00Z",
    "updatedAt": "2025-03-25T07:24:00Z",
    "inStock": true
  },
  {
    "id": "fr567890",
    "name": "Bananas 1 kg",
    "category": "Fruits",
    "price": 1.85,
    "offerPrice": 1.65,
    "description": [
      "Sweet and nutritious",
      "Perfect for smoothies",
      "Great source of potassium"
    ],
    "createdAt": "2025-03-25T07:24:00Z",
    "updatedAt": "2025-03-25T07:25:00Z",
    "inStock": true
  },
  {
    "id": "fr678901",
    "name": "Grapes 500g",
    "category": "Fruits",
    "price": 2.95,
    "offerPrice": 2.75,
    "description": [
      "Sweet and juicy",
      "Perfect for snacking",
      "Available in red and green"
    ],
    "createdAt": "2025-03-25T07:25:00Z",
    "updatedAt": "2025-03-25T07:26:00Z",
    "inStock": true
  },
  {
    "id": "da005b0f",
    "name": "Butter 250g",
    "category": "Dairy",
    "price": 2.28,
    "offerPrice": 2.02,
    "description": [
      "Creamy and smooth",
      "Great for baking",
      "Rich flavor"
    ],
    "createdAt": "2025-03-25T07:19:03Z",
    "updatedAt": "2025-03-25T07:18:34Z",
    "inStock": true
  },
  {
    "id": "da1ea92d",
    "name": "Paneer 200g",
    "category": "Dairy",
    "price": 2.99,
    "offerPrice": 2.75,
    "description": [
      "Soft and fresh",
      "High in protein",
      "Ideal for Indian dishes"
    ],
    "createdAt": "2025-03-25T07:19:20Z",
    "updatedAt": "2025-03-25T07:19:33Z",
    "inStock": true
  },
  {
    "id": "da49c1fd",
    "name": "Cream Cheese 200g",
    "category": "Dairy",
    "price": 2.81,
    "offerPrice": 2.6,
    "description": [
      "Smooth and tangy",
      "Perfect for spreads and baking",
      "Refrigerated"
    ],
    "createdAt": "2025-03-25T07:22:24Z",
    "updatedAt": "2025-03-25T07:20:20Z",
    "inStock": true
  },
  {
    "id": "da789012",
    "name": "Greek Yogurt 500g",
    "category": "Dairy",
    "price": 3.25,
    "offerPrice": 2.95,
    "description": [
      "Creamy and thick",
      "High in protein",
      "Perfect for breakfast"
    ],
    "createdAt": "2025-03-25T07:26:00Z",
    "updatedAt": "2025-03-25T07:27:00Z",
    "inStock": true
  },
  {
    "id": "da890123",
    "name": "Mozzarella 200g",
    "category": "Dairy",
    "price": 2.75,
    "offerPrice": 2.45,
    "description": [
      "Fresh and soft",
      "Perfect for pizza",
      "Great for salads"
    ],
    "createdAt": "2025-03-25T07:27:00Z",
    "updatedAt": "2025-03-25T07:28:00Z",
    "inStock": true
  },
  {
    "id": "da901234",
    "name": "Sour Cream 200g",
    "category": "Dairy",
    "price": 1.95,
    "offerPrice": 1.75,
    "description": [
      "Tangy and creamy",
      "Perfect for dips",
      "Great for baking"
    ],
    "createdAt": "2025-03-25T07:28:00Z",
    "updatedAt": "2025-03-25T07:29:00Z",
    "inStock": true
  },
  {
    "id": "baa84b49",
    "name": "Baguette",
    "category": "Bakery",
    "price": 1.67,
    "offerPrice": 1.57,
    "description": [
      "Crispy crust",
      "Soft inside",
      "Perfect for sandwiches"
    ],
    "createdAt": "2025-03-25T07:17:50Z",
    "updatedAt": "2025-03-25T07:21:19Z",
    "inStock": true
  },
  {
    "id": "ba88a88a",
    "name": "Muffins 4 pack",
    "category": "Bakery",
    "price": 3.21,
    "offerPrice": 3.04,
    "description": [
      "Moist and delicious",
      "Great snack option",
      "Available in assorted flavors"
    ],
    "createdAt": "2025-03-25T07:21:32Z",
    "updatedAt": "2025-03-25T07:21:17Z",
    "inStock": false
  },
  {
    "id": "ba615486",
    "name": "Brown Bread",
    "category": "Bakery",
    "price": 2.75,
    "offerPrice": 2.53,
    "description": [
      "Whole wheat goodness",
      "High in fiber",
      "Ideal for healthy diets"
    ],
    "createdAt": "2025-03-25T07:21:34Z",
    "updatedAt": "2025-03-25T07:19:05Z",
    "inStock": false
  },
  {
    "id": "ba012345",
    "name": "Croissant 4 pack",
    "category": "Bakery",
    "price": 3.45,
    "offerPrice": 3.15,
    "description": [
      "Buttery and flaky",
      "Perfect for breakfast",
      "Freshly baked"
    ],
    "createdAt": "2025-03-25T07:29:00Z",
    "updatedAt": "2025-03-25T07:30:00Z",
    "inStock": true
  },
  {
    "id": "ba123456",
    "name": "Cinnamon Roll",
    "category": "Bakery",
    "price": 2.25,
    "offerPrice": 1.95,
    "description": [
      "Sweet and spicy",
      "Perfect with coffee",
      "Freshly baked"
    ],
    "createdAt": "2025-03-25T07:30:00Z",
    "updatedAt": "2025-03-25T07:31:00Z",
    "inStock": true
  },
  {
    "id": "ba234567",
    "name": "Sourdough Bread",
    "category": "Bakery",
    "price": 3.95,
    "offerPrice": 3.65,
    "description": [
      "Artisan quality",
      "Tangy flavor",
      "Perfect for sandwiches"
    ],
    "createdAt": "2025-03-25T07:31:00Z",
    "updatedAt": "2025-03-25T07:32:00Z",
    "inStock": true
  },
  {
    "id": "be2440f8",
    "name": "Orange Juice 1L",
    "category": "Beverages",
    "price": 2.61,
    "offerPrice": 2.26,
    "description": [
      "100% natural",
      "No added sugar",
      "Rich in Vitamin C"
    ],
    "createdAt": "2025-03-25T07:20:46Z",
    "updatedAt": "2025-03-25T07:18:46Z",
    "inStock": true
  },
  {
    "id": "be07552d",
    "name": "Green Tea 20 bags",
    "category": "Beverages",
    "price": 1.8,
    "offerPrice": 1.68,
    "description": [
      "Antioxidant-rich",
      "Calming and fresh",
      "Caffeine-free option"
    ],
    "createdAt": "2025-03-25T07:21:28Z",
    "updatedAt": "2025-03-25T07:20:26Z",
    "inStock": true
  },
  {
    "id": "beed19e8",
    "name": "Coffee 200g",
    "category": "Beverages",
    "price": 4.11,
    "offerPrice": 3.52,
    "description": [
      "Strong aroma",
      "Roasted beans",
      "Ideal for mornings"
    ],
    "createdAt": "2025-03-25T07:19:47Z",
    "updatedAt": "2025-03-25T07:19:58Z",
    "inStock": false
  },
  {
    "id": "be345678",
    "name": "Apple Juice 1L",
    "category": "Beverages",
    "price": 2.35,
    "offerPrice": 2.15,
    "description": [
      "100% pure",
      "No added sugar",
      "Refreshing taste"
    ],
    "createdAt": "2025-03-25T07:32:00Z",
    "updatedAt": "2025-03-25T07:33:00Z",
    "inStock": true
  },
  {
    "id": "be456789",
    "name": "Sparkling Water 1L",
    "category": "Beverages",
    "price": 1.25,
    "offerPrice": 1.15,
    "description": [
      "Refreshing bubbles",
      "Zero calories",
      "Perfect mixer"
    ],
    "createdAt": "2025-03-25T07:33:00Z",
    "updatedAt": "2025-03-25T07:34:00Z",
    "inStock": true
  },
  {
    "id": "be567890",
    "name": "Hot Chocolate Mix 300g",
    "category": "Beverages",
    "price": 3.45,
    "offerPrice": 3.15,
    "description": [
      "Rich and creamy",
      "Perfect for cold days",
      "Easy to prepare"
    ],
    "createdAt": "2025-03-25T07:34:00Z",
    "updatedAt": "2025-03-25T07:35:00Z",
    "inStock": true
  },
  {
    "id": "sn0b66f2",
    "name": "Potato Chips 150g",
    "category": "Snacks",
    "price": 1.12,
    "offerPrice": 0.96,
    "description": [
      "Crispy and salty",
      "Perfect for parties",
      "Made from real potatoes"
    ],
    "createdAt": "2025-03-25T07:18:06Z",
    "updatedAt": "2025-03-25T07:22:02Z",
    "inStock": false
  },
  {
    "id": "snafc832",
    "name": "Trail Mix 200g",
    "category": "Snacks",
    "price": 2.85,
    "offerPrice": 2.54,
    "description": [
      "Nuts and dried fruits",
      "Healthy snack",
      "High energy content"
    ],
    "createdAt": "2025-03-25T07:19:02Z",
    "updatedAt": "2025-03-25T07:18:42Z",
    "inStock": true
  },
  {
    "id": "snc402a6",
    "name": "Chocolate Bar 100g",
    "category": "Snacks",
    "price": 1.67,
    "offerPrice": 1.49,
    "description": [
      "Rich and creamy",
      "Perfect for cravings",
      "Available in dark & milk"
    ],
    "createdAt": "2025-03-25T07:18:31Z",
    "updatedAt": "2025-03-25T07:19:15Z",
    "inStock": true
  },
  {
    "id": "sn678901",
    "name": "Popcorn 200g",
    "category": "Snacks",
    "price": 1.45,
    "offerPrice": 1.25,
    "description": [
      "Light and fluffy",
      "Perfect for movie nights",
      "Ready to pop"
    ],
    "createdAt": "2025-03-25T07:35:00Z",
    "updatedAt": "2025-03-25T07:36:00Z",
    "inStock": true
  },
  {
    "id": "sn789012",
    "name": "Pretzels 200g",
    "category": "Snacks",
    "price": 1.85,
    "offerPrice": 1.65,
    "description": [
      "Crunchy and salty",
      "Perfect for snacking",
      "Great with dips"
    ],
    "createdAt": "2025-03-25T07:36:00Z",
    "updatedAt": "2025-03-25T07:37:00Z",
    "inStock": true
  },
  {
    "id": "sn890123",
    "name": "Granola Bars 6 pack",
    "category": "Snacks",
    "price": 2.95,
    "offerPrice": 2.75,
    "description": [
      "Healthy and filling",
      "Perfect for on-the-go",
      "Made with oats and honey"
    ],
    "createdAt": "2025-03-25T07:37:00Z",
    "updatedAt": "2025-03-25T07:38:00Z",
    "inStock": true
  }
]

module.exports = products;
