const products = [
  {
    "id": "veb8a5b8",
    "name": "Spinach 250g",
    "category": "Vegetables",
    "price": 1.45,
    "offerPrice": 1.37,
    "description": [
      "Fresh leafy greens",
      "Rich in iron",
      "Ideal for salads and soups"
    ],
    "createdAt": "2025-03-25T07:19:05Z",
    "updatedAt": "2025-03-25T07:18:58Z",
    "inStock": false
  },
  {
    "id": "ve7e3156",
    "name": "Onion 1 kg",
    "category": "Vegetables",
    "price": 0.88,
    "offerPrice": 0.77,
    "description": [
      "Pungent and crisp",
      "Essential for cooking",
      "Long shelf life"
    ],
    "createdAt": "2025-03-25T07:19:51Z",
    "updatedAt": "2025-03-25T07:22:39Z",
    "inStock": true
  },
  {
    "id": "ve03c2d2",
    "name": "Garlic 200g",
    "category": "Vegetables",
    "price": 0.7,
    "offerPrice": 0.64,
    "description": [
      "Aromatic flavor",
      "Immune booster",
      "Great for sauces and saut\u00e9s"
    ],
    "createdAt": "2025-03-25T07:21:39Z",
    "updatedAt": "2025-03-25T07:19:47Z",
    "inStock": false
  },
  {
    "id": "fr4143ad",
    "name": "Strawberry 500g",
    "category": "Fruits",
    "price": 3.09,
    "offerPrice": 2.85,
    "description": [
      "Sweet and juicy",
      "Perfect for desserts",
      "Rich in antioxidants"
    ],
    "createdAt": "2025-03-25T07:20:17Z",
    "updatedAt": "2025-03-25T07:22:40Z",
    "inStock": true
  },
  {
    "id": "fr8e9735",
    "name": "Pineapple 1 pc",
    "category": "Fruits",
    "price": 2.12,
    "offerPrice": 1.84,
    "description": [
      "Tropical and tangy",
      "Great for juicing",
      "High in Vitamin C"
    ],
    "createdAt": "2025-03-25T07:18:41Z",
    "updatedAt": "2025-03-25T07:18:25Z",
    "inStock": false
  },
  {
    "id": "fr83385b",
    "name": "Watermelon 1 pc",
    "category": "Fruits",
    "price": 4.39,
    "offerPrice": 3.87,
    "description": [
      "Refreshing and hydrating",
      "Perfect for summer",
      "Low in calories"
    ],
    "createdAt": "2025-03-25T07:20:53Z",
    "updatedAt": "2025-03-25T07:19:50Z",
    "inStock": false
  },
  {
    "id": "da841d26",
    "name": "Butter 250g",
    "category": "Dairy",
    "price": 2.18,
    "offerPrice": 2.06,
    "description": [
      "Creamy and smooth",
      "Great for baking",
      "Rich flavor"
    ],
    "createdAt": "2025-03-25T07:18:42Z",
    "updatedAt": "2025-03-25T07:19:31Z",
    "inStock": true
  },
  {
    "id": "da6a0d92",
    "name": "Paneer 200g",
    "category": "Dairy",
    "price": 2.91,
    "offerPrice": 2.59,
    "description": [
      "Soft and fresh",
      "High in protein",
      "Ideal for Indian dishes"
    ],
    "createdAt": "2025-03-25T07:20:37Z",
    "updatedAt": "2025-03-25T07:18:13Z",
    "inStock": false
  },
  {
    "id": "da421a50",
    "name": "Cream Cheese 200g",
    "category": "Dairy",
    "price": 3.2,
    "offerPrice": 2.97,
    "description": [
      "Smooth and tangy",
      "Perfect for spreads and baking",
      "Refrigerated"
    ],
    "createdAt": "2025-03-25T07:19:41Z",
    "updatedAt": "2025-03-25T07:21:15Z",
    "inStock": true
  },
  {
    "id": "baa15ac3",
    "name": "Baguette",
    "category": "Bakery",
    "price": 1.63,
    "offerPrice": 1.41,
    "description": [
      "Crispy crust",
      "Soft inside",
      "Perfect for sandwiches"
    ],
    "createdAt": "2025-03-25T07:17:55Z",
    "updatedAt": "2025-03-25T07:18:21Z",
    "inStock": true
  },
  {
    "id": "baaed07d",
    "name": "Muffins 4 pack",
    "category": "Bakery",
    "price": 2.71,
    "offerPrice": 2.5,
    "description": [
      "Moist and delicious",
      "Great snack option",
      "Available in assorted flavors"
    ],
    "createdAt": "2025-03-25T07:18:43Z",
    "updatedAt": "2025-03-25T07:19:25Z",
    "inStock": true
  },
  {
    "id": "baf9a12c",
    "name": "Brown Bread",
    "category": "Bakery",
    "price": 2.68,
    "offerPrice": 2.41,
    "description": [
      "Whole wheat goodness",
      "High in fiber",
      "Ideal for healthy diets"
    ],
    "createdAt": "2025-03-25T07:22:08Z",
    "updatedAt": "2025-03-25T07:22:24Z",
    "inStock": false
  },
  {
    "id": "be159a8e",
    "name": "Orange Juice 1L",
    "category": "Beverages",
    "price": 3.03,
    "offerPrice": 2.65,
    "description": [
      "100% natural",
      "No added sugar",
      "Rich in Vitamin C"
    ],
    "createdAt": "2025-03-25T07:17:47Z",
    "updatedAt": "2025-03-25T07:19:59Z",
    "inStock": false
  },
  {
    "id": "be550ee8",
    "name": "Green Tea 20 bags",
    "category": "Beverages",
    "price": 1.86,
    "offerPrice": 1.7,
    "description": [
      "Antioxidant-rich",
      "Calming and fresh",
      "Caffeine-free option"
    ],
    "createdAt": "2025-03-25T07:18:20Z",
    "updatedAt": "2025-03-25T07:22:07Z",
    "inStock": false
  },
  {
    "id": "be63295a",
    "name": "Coffee 200g",
    "category": "Beverages",
    "price": 4.19,
    "offerPrice": 3.68,
    "description": [
      "Strong aroma",
      "Roasted beans",
      "Ideal for mornings"
    ],
    "createdAt": "2025-03-25T07:21:00Z",
    "updatedAt": "2025-03-25T07:18:39Z",
    "inStock": false
  },
  {
    "id": "sndcea29",
    "name": "Potato Chips 150g",
    "category": "Snacks",
    "price": 1.37,
    "offerPrice": 1.22,
    "description": [
      "Crispy and salty",
      "Perfect for parties",
      "Made from real potatoes"
    ],
    "createdAt": "2025-03-25T07:19:20Z",
    "updatedAt": "2025-03-25T07:20:43Z",
    "inStock": false
  },
  {
    "id": "sndfe717",
    "name": "Trail Mix 200g",
    "category": "Snacks",
    "price": 2.8,
    "offerPrice": 2.41,
    "description": [
      "Nuts and dried fruits",
      "Healthy snack",
      "High energy content"
    ],
    "createdAt": "2025-03-25T07:22:05Z",
    "updatedAt": "2025-03-25T07:17:55Z",
    "inStock": true
  },
  {
    "id": "sn29db01",
    "name": "Chocolate Bar 100g",
    "category": "Snacks",
    "price": 1.74,
    "offerPrice": 1.6,
    "description": [
      "Rich and creamy",
      "Perfect for cravings",
      "Available in dark & milk"
    ],
    "createdAt": "2025-03-25T07:18:00Z",
    "updatedAt": "2025-03-25T07:21:21Z",
    "inStock": false
  },
  {
    "id": "vefb0d56",
    "name": "Spinach 250g",
    "category": "Vegetables",
    "price": 1.46,
    "offerPrice": 1.26,
    "description": [
      "Fresh leafy greens",
      "Rich in iron",
      "Ideal for salads and soups"
    ],
    "createdAt": "2025-03-25T07:17:47Z",
    "updatedAt": "2025-03-25T07:22:45Z",
    "inStock": true
  },
  {
    "id": "vefd44f1",
    "name": "Onion 1 kg",
    "category": "Vegetables",
    "price": 0.8,
    "offerPrice": 0.72,
    "description": [
      "Pungent and crisp",
      "Essential for cooking",
      "Long shelf life"
    ],
    "createdAt": "2025-03-25T07:21:16Z",
    "updatedAt": "2025-03-25T07:20:41Z",
    "inStock": true
  },
  {
    "id": "veeb7556",
    "name": "Garlic 200g",
    "category": "Vegetables",
    "price": 0.97,
    "offerPrice": 0.85,
    "description": [
      "Aromatic flavor",
      "Immune booster",
      "Great for sauces and saut\u00e9s"
    ],
    "createdAt": "2025-03-25T07:17:49Z",
    "updatedAt": "2025-03-25T07:17:50Z",
    "inStock": true
  },
  {
    "id": "fra7674b",
    "name": "Strawberry 500g",
    "category": "Fruits",
    "price": 2.9,
    "offerPrice": 2.73,
    "description": [
      "Sweet and juicy",
      "Perfect for desserts",
      "Rich in antioxidants"
    ],
    "createdAt": "2025-03-25T07:22:40Z",
    "updatedAt": "2025-03-25T07:17:54Z",
    "inStock": false
  },
  {
    "id": "frfbffaf",
    "name": "Pineapple 1 pc",
    "category": "Fruits",
    "price": 2.5,
    "offerPrice": 2.2,
    "description": [
      "Tropical and tangy",
      "Great for juicing",
      "High in Vitamin C"
    ],
    "createdAt": "2025-03-25T07:19:26Z",
    "updatedAt": "2025-03-25T07:22:21Z",
    "inStock": false
  },
  {
    "id": "frc08d0f",
    "name": "Watermelon 1 pc",
    "category": "Fruits",
    "price": 4.19,
    "offerPrice": 3.77,
    "description": [
      "Refreshing and hydrating",
      "Perfect for summer",
      "Low in calories"
    ],
    "createdAt": "2025-03-25T07:19:39Z",
    "updatedAt": "2025-03-25T07:22:32Z",
    "inStock": false
  },
  {
    "id": "da86a8b4",
    "name": "Butter 250g",
    "category": "Dairy",
    "price": 2.38,
    "offerPrice": 2.12,
    "description": [
      "Creamy and smooth",
      "Great for baking",
      "Rich flavor"
    ],
    "createdAt": "2025-03-25T07:18:56Z",
    "updatedAt": "2025-03-25T07:21:44Z",
    "inStock": true
  },
  {
    "id": "da214159",
    "name": "Paneer 200g",
    "category": "Dairy",
    "price": 3.06,
    "offerPrice": 2.71,
    "description": [
      "Soft and fresh",
      "High in protein",
      "Ideal for Indian dishes"
    ],
    "createdAt": "2025-03-25T07:17:56Z",
    "updatedAt": "2025-03-25T07:18:23Z",
    "inStock": true
  },
  {
    "id": "da304b56",
    "name": "Cream Cheese 200g",
    "category": "Dairy",
    "price": 2.82,
    "offerPrice": 2.5,
    "description": [
      "Smooth and tangy",
      "Perfect for spreads and baking",
      "Refrigerated"
    ],
    "createdAt": "2025-03-25T07:22:40Z",
    "updatedAt": "2025-03-25T07:20:11Z",
    "inStock": true
  },
  {
    "id": "ba6a3f29",
    "name": "Baguette",
    "category": "Bakery",
    "price": 2.27,
    "offerPrice": 2.07,
    "description": [
      "Crispy crust",
      "Soft inside",
      "Perfect for sandwiches"
    ],
    "createdAt": "2025-03-25T07:18:10Z",
    "updatedAt": "2025-03-25T07:19:39Z",
    "inStock": true
  },
  {
    "id": "bafe5c3d",
    "name": "Muffins 4 pack",
    "category": "Bakery",
    "price": 3.37,
    "offerPrice": 3.1,
    "description": [
      "Moist and delicious",
      "Great snack option",
      "Available in assorted flavors"
    ],
    "createdAt": "2025-03-25T07:20:18Z",
    "updatedAt": "2025-03-25T07:19:52Z",
    "inStock": true
  },
  {
    "id": "baf6b05e",
    "name": "Brown Bread",
    "category": "Bakery",
    "price": 2.66,
    "offerPrice": 2.3,
    "description": [
      "Whole wheat goodness",
      "High in fiber",
      "Ideal for healthy diets"
    ],
    "createdAt": "2025-03-25T07:19:08Z",
    "updatedAt": "2025-03-25T07:21:02Z",
    "inStock": true
  },
  {
    "id": "be4d017c",
    "name": "Orange Juice 1L",
    "category": "Beverages",
    "price": 2.84,
    "offerPrice": 2.44,
    "description": [
      "100% natural",
      "No added sugar",
      "Rich in Vitamin C"
    ],
    "createdAt": "2025-03-25T07:18:25Z",
    "updatedAt": "2025-03-25T07:20:18Z",
    "inStock": false
  },
  {
    "id": "be36d838",
    "name": "Green Tea 20 bags",
    "category": "Beverages",
    "price": 1.7,
    "offerPrice": 1.5,
    "description": [
      "Antioxidant-rich",
      "Calming and fresh",
      "Caffeine-free option"
    ],
    "createdAt": "2025-03-25T07:21:30Z",
    "updatedAt": "2025-03-25T07:19:51Z",
    "inStock": true
  },
  {
    "id": "be4f94b4",
    "name": "Coffee 200g",
    "category": "Beverages",
    "price": 4.55,
    "offerPrice": 3.97,
    "description": [
      "Strong aroma",
      "Roasted beans",
      "Ideal for mornings"
    ],
    "createdAt": "2025-03-25T07:22:20Z",
    "updatedAt": "2025-03-25T07:18:00Z",
    "inStock": false
  },
  {
    "id": "snbabf94",
    "name": "Potato Chips 150g",
    "category": "Snacks",
    "price": 1.32,
    "offerPrice": 1.16,
    "description": [
      "Crispy and salty",
      "Perfect for parties",
      "Made from real potatoes"
    ],
    "createdAt": "2025-03-25T07:22:05Z",
    "updatedAt": "2025-03-25T07:20:12Z",
    "inStock": true
  },
  {
    "id": "snb0733a",
    "name": "Trail Mix 200g",
    "category": "Snacks",
    "price": 3.35,
    "offerPrice": 3.09,
    "description": [
      "Nuts and dried fruits",
      "Healthy snack",
      "High energy content"
    ],
    "createdAt": "2025-03-25T07:19:55Z",
    "updatedAt": "2025-03-25T07:18:08Z",
    "inStock": false
  },
  {
    "id": "sn4dc643",
    "name": "Chocolate Bar 100g",
    "category": "Snacks",
    "price": 1.53,
    "offerPrice": 1.41,
    "description": [
      "Rich and creamy",
      "Perfect for cravings",
      "Available in dark & milk"
    ],
    "createdAt": "2025-03-25T07:20:33Z",
    "updatedAt": "2025-03-25T07:22:31Z",
    "inStock": false
  },
  {
    "id": "ve4aa659",
    "name": "Spinach 250g",
    "category": "Vegetables",
    "price": 1.04,
    "offerPrice": 0.97,
    "description": [
      "Fresh leafy greens",
      "Rich in iron",
      "Ideal for salads and soups"
    ],
    "createdAt": "2025-03-25T07:22:43Z",
    "updatedAt": "2025-03-25T07:19:45Z",
    "inStock": false
  },
  {
    "id": "ve4e8fe0",
    "name": "Onion 1 kg",
    "category": "Vegetables",
    "price": 0.94,
    "offerPrice": 0.83,
    "description": [
      "Pungent and crisp",
      "Essential for cooking",
      "Long shelf life"
    ],
    "createdAt": "2025-03-25T07:19:35Z",
    "updatedAt": "2025-03-25T07:22:18Z",
    "inStock": false
  },
  {
    "id": "ve110c09",
    "name": "Garlic 200g",
    "category": "Vegetables",
    "price": 0.84,
    "offerPrice": 0.74,
    "description": [
      "Aromatic flavor",
      "Immune booster",
      "Great for sauces and saut\u00e9s"
    ],
    "createdAt": "2025-03-25T07:19:30Z",
    "updatedAt": "2025-03-25T07:20:13Z",
    "inStock": false
  },
  {
    "id": "fr9b2765",
    "name": "Strawberry 500g",
    "category": "Fruits",
    "price": 3.47,
    "offerPrice": 2.97,
    "description": [
      "Sweet and juicy",
      "Perfect for desserts",
      "Rich in antioxidants"
    ],
    "createdAt": "2025-03-25T07:21:23Z",
    "updatedAt": "2025-03-25T07:20:43Z",
    "inStock": true
  },
  {
    "id": "frb0c2d6",
    "name": "Pineapple 1 pc",
    "category": "Fruits",
    "price": 2.69,
    "offerPrice": 2.44,
    "description": [
      "Tropical and tangy",
      "Great for juicing",
      "High in Vitamin C"
    ],
    "createdAt": "2025-03-25T07:22:32Z",
    "updatedAt": "2025-03-25T07:19:55Z",
    "inStock": true
  },
  {
    "id": "frf0ae9d",
    "name": "Watermelon 1 pc",
    "category": "Fruits",
    "price": 3.65,
    "offerPrice": 3.13,
    "description": [
      "Refreshing and hydrating",
      "Perfect for summer",
      "Low in calories"
    ],
    "createdAt": "2025-03-25T07:18:59Z",
    "updatedAt": "2025-03-25T07:22:15Z",
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
    "id": "ve7f013b",
    "name": "Spinach 250g",
    "category": "Vegetables",
    "price": 1.48,
    "offerPrice": 1.32,
    "description": [
      "Fresh leafy greens",
      "Rich in iron",
      "Ideal for salads and soups"
    ],
    "createdAt": "2025-03-25T07:21:17Z",
    "updatedAt": "2025-03-25T07:21:53Z",
    "inStock": false
  },
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
      "Great for sauces and saut\u00e9s"
    ],
    "createdAt": "2025-03-25T07:20:43Z",
    "updatedAt": "2025-03-25T07:21:55Z",
    "inStock": false
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
  }
]

module.exports = products;
