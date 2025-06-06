interface Category {
  id: string;
  name: string;
}

interface Product {
  name: string;
  categoryId: string;
  description: string;
  price: number;
  offerPrice: number;
}

interface ProductsByCategory {
  [key: string]: Product[];
}

const categories: Category[] = [
  { id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', name: 'Vegetables' },
  { id: '986a9a7a-5159-44c8-b1e7-6228f5b2b34a', name: 'Fruits' },
  { id: '23d5b6de-72c7-4b66-8a0a-1b7a3e9e4f8b', name: 'Beverages' },
  { id: 'c89a7d3b-8a6d-4f8a-9f89-3a8d9c2e0f7d', name: 'Dairy' },
  { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Snacks' },
  { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Meat' },
  { id: '123e4567-e89b-12d3-a456-426614174002', name: 'Bakery' },
];

const productsByCategory: ProductsByCategory = {
  vegetables: [
    {
      name: 'Onion 1 kg',
      categoryId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      description: JSON.stringify([
        'Pungent and crisp',
        'Essential for cooking',
        'Long shelf life',
      ]),
      price: 0.93,
      offerPrice: 0.82,
    },
    {
      name: 'Garlic 200g',
      categoryId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      description: JSON.stringify([
        'Aromatic flavor',
        'Immune booster',
        'Great for sauces and sautés',
      ]),
      price: 0.81,
      offerPrice: 0.71,
    },
    {
      name: 'Carrots 500g',
      categoryId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      description: JSON.stringify([
        'Sweet and crunchy',
        'Rich in Vitamin A',
        'Perfect for salads and cooking',
      ]),
      price: 0.95,
      offerPrice: 0.85,
    },
    {
      name: 'Broccoli 300g',
      categoryId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      description: JSON.stringify([
        'Fresh and green',
        'High in fiber',
        'Great for stir-fries',
      ]),
      price: 1.25,
      offerPrice: 1.15,
    },
    {
      name: 'Bell Peppers 3 pack',
      categoryId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      description: JSON.stringify([
        'Colorful variety',
        'Sweet and crisp',
        'Perfect for salads',
      ]),
      price: 1.75,
      offerPrice: 1.55,
    },
  ],
  fruits: [
    {
      name: 'Strawberry 500g',
      categoryId: '986a9a7a-5159-44c8-b1e7-6228f5b2b34a',
      description: JSON.stringify([
        'Sweet and juicy',
        'Perfect for desserts',
        'Rich in antioxidants',
      ]),
      price: 3.16,
      offerPrice: 2.73,
    },
    {
      name: 'Pineapple 1 pc',
      categoryId: '986a9a7a-5159-44c8-b1e7-6228f5b2b34a',
      description: JSON.stringify([
        'Tropical and tangy',
        'Great for juicing',
        'High in Vitamin C',
      ]),
      price: 2.05,
      offerPrice: 1.82,
    },
    {
      name: 'Watermelon 1 pc',
      categoryId: '986a9a7a-5159-44c8-b1e7-6228f5b2b34a',
      description: JSON.stringify([
        'Refreshing and hydrating',
        'Perfect for summer',
        'Low in calories',
      ]),
      price: 3.32,
      offerPrice: 2.88,
    },
    {
      name: 'Apples 1 kg',
      categoryId: '986a9a7a-5159-44c8-b1e7-6228f5b2b34a',
      description: JSON.stringify([
        'Crisp and sweet',
        'Great for snacking',
        'Available in red and green',
      ]),
      price: 2.45,
      offerPrice: 2.15,
    },
    {
      name: 'Bananas 1 kg',
      categoryId: '986a9a7a-5159-44c8-b1e7-6228f5b2b34a',
      description: JSON.stringify([
        'Sweet and nutritious',
        'Perfect for smoothies',
        'Great source of potassium',
      ]),
      price: 1.85,
      offerPrice: 1.65,
    },
    {
      name: 'Grapes 500g',
      categoryId: '986a9a7a-5159-44c8-b1e7-6228f5b2b34a',
      description: JSON.stringify([
        'Sweet and juicy',
        'Perfect for snacking',
        'Available in red and green',
      ]),
      price: 2.95,
      offerPrice: 2.75,
    },
  ],
  dairy: [
    {
      name: 'Butter 250g',
      categoryId: 'c89a7d3b-8a6d-4f8a-9f89-3a8d9c2e0f7d',
      description: JSON.stringify([
        'Creamy and smooth',
        'Great for baking',
        'Rich flavor',
      ]),
      price: 2.28,
      offerPrice: 2.02,
    },
    {
      name: 'Paneer 200g',
      categoryId: 'c89a7d3b-8a6d-4f8a-9f89-3a8d9c2e0f7d',
      description: JSON.stringify([
        'Soft and fresh',
        'High in protein',
        'Ideal for Indian dishes',
      ]),
      price: 2.99,
      offerPrice: 2.75,
    },
    {
      name: 'Cream Cheese 200g',
      categoryId: 'c89a7d3b-8a6d-4f8a-9f89-3a8d9c2e0f7d',
      description: JSON.stringify([
        'Smooth and tangy',
        'Perfect for spreads and baking',
        'Refrigerated',
      ]),
      price: 2.81,
      offerPrice: 2.6,
    },
    {
      name: 'Greek Yogurt 500g',
      categoryId: 'c89a7d3b-8a6d-4f8a-9f89-3a8d9c2e0f7d',
      description: JSON.stringify([
        'Creamy and thick',
        'High in protein',
        'Perfect for breakfast',
      ]),
      price: 3.25,
      offerPrice: 2.95,
    },
    {
      name: 'Mozzarella 200g',
      categoryId: 'c89a7d3b-8a6d-4f8a-9f89-3a8d9c2e0f7d',
      description: JSON.stringify([
        'Fresh and soft',
        'Perfect for pizza',
        'Great for salads',
      ]),
      price: 2.75,
      offerPrice: 2.45,
    },
    {
      name: 'Sour Cream 200g',
      categoryId: 'c89a7d3b-8a6d-4f8a-9f89-3a8d9c2e0f7d',
      description: JSON.stringify([
        'Tangy and creamy',
        'Perfect for dips',
        'Great for baking',
      ]),
      price: 1.95,
      offerPrice: 1.75,
    },
  ],
  bakery: [
    {
      name: 'Baguette',
      categoryId: '123e4567-e89b-12d3-a456-426614174002',
      description: JSON.stringify([
        'Crispy crust',
        'Soft inside',
        'Perfect for sandwiches',
      ]),
      price: 1.67,
      offerPrice: 1.57,
    },
    {
      name: 'Muffins 4 pack',
      categoryId: '123e4567-e89b-12d3-a456-426614174002',
      description: JSON.stringify([
        'Moist and delicious',
        'Great snack option',
        'Available in assorted flavors',
      ]),
      price: 3.21,
      offerPrice: 3.04,
    },
    {
      name: 'Brown Bread',
      categoryId: '123e4567-e89b-12d3-a456-426614174002',
      description: JSON.stringify([
        'Whole wheat goodness',
        'High in fiber',
        'Ideal for healthy diets',
      ]),
      price: 2.75,
      offerPrice: 2.53,
    },
    {
      name: 'Croissant 4 pack',
      categoryId: '123e4567-e89b-12d3-a456-426614174002',
      description: JSON.stringify([
        'Buttery and flaky',
        'Perfect for breakfast',
        'Freshly baked',
      ]),
      price: 3.45,
      offerPrice: 3.15,
    },
    {
      name: 'Cinnamon Roll',
      categoryId: '123e4567-e89b-12d3-a456-426614174002',
      description: JSON.stringify([
        'Sweet and spicy',
        'Perfect with coffee',
        'Freshly baked',
      ]),
      price: 2.25,
      offerPrice: 1.95,
    },
    {
      name: 'Sourdough Bread',
      categoryId: '123e4567-e89b-12d3-a456-426614174002',
      description: JSON.stringify([
        'Artisan quality',
        'Tangy flavor',
        'Perfect for sandwiches',
      ]),
      price: 3.95,
      offerPrice: 3.65,
    },
  ],
  beverages: [
    {
      name: 'Orange Juice 1L',
      categoryId: '23d5b6de-72c7-4b66-8a0a-1b7a3e9e4f8b',
      description: JSON.stringify([
        '100% natural',
        'No added sugar',
        'Rich in Vitamin C',
      ]),
      price: 2.61,
      offerPrice: 2.26,
    },
    {
      name: 'Green Tea 20 bags',
      categoryId: '23d5b6de-72c7-4b66-8a0a-1b7a3e9e4f8b',
      description: JSON.stringify([
        'Antioxidant-rich',
        'Calming and fresh',
        'Caffeine-free option',
      ]),
      price: 1.8,
      offerPrice: 1.68,
    },
    {
      name: 'Coffee 200g',
      categoryId: '23d5b6de-72c7-4b66-8a0a-1b7a3e9e4f8b',
      description: JSON.stringify([
        'Strong aroma',
        'Roasted beans',
        'Ideal for mornings',
      ]),
      price: 4.11,
      offerPrice: 3.52,
    },
    {
      name: 'Apple Juice 1L',
      categoryId: '23d5b6de-72c7-4b66-8a0a-1b7a3e9e4f8b',
      description: JSON.stringify([
        '100% pure',
        'No added sugar',
        'Refreshing taste',
      ]),
      price: 2.35,
      offerPrice: 2.15,
    },
    {
      name: 'Sparkling Water 1L',
      categoryId: '23d5b6de-72c7-4b66-8a0a-1b7a3e9e4f8b',
      description: JSON.stringify([
        'Refreshing bubbles',
        'Zero calories',
        'Perfect mixer',
      ]),
      price: 1.25,
      offerPrice: 1.15,
    },
    {
      name: 'Hot Chocolate Mix 300g',
      categoryId: '23d5b6de-72c7-4b66-8a0a-1b7a3e9e4f8b',
      description: JSON.stringify([
        'Rich and creamy',
        'Perfect for cold days',
        'Easy to prepare',
      ]),
      price: 3.45,
      offerPrice: 3.15,
    },
  ],
  snacks: [
    {
      name: 'Potato Chips 150g',
      categoryId: '123e4567-e89b-12d3-a456-426614174000',
      description: JSON.stringify([
        'Crispy and salty',
        'Perfect for parties',
        'Made from real potatoes',
      ]),
      price: 1.12,
      offerPrice: 0.96,
    },
    {
      name: 'Trail Mix 200g',
      categoryId: '123e4567-e89b-12d3-a456-426614174000',
      description: JSON.stringify([
        'Nuts and dried fruits',
        'Healthy snack',
        'High energy content',
      ]),
      price: 2.85,
      offerPrice: 2.54,
    },
    {
      name: 'Chocolate Bar 100g',
      categoryId: '123e4567-e89b-12d3-a456-426614174000',
      description: JSON.stringify([
        'Rich and creamy',
        'Perfect for cravings',
        'Available in dark & milk',
      ]),
      price: 1.67,
      offerPrice: 1.49,
    },
    {
      name: 'Popcorn 200g',
      categoryId: '123e4567-e89b-12d3-a456-426614174000',
      description: JSON.stringify([
        'Light and fluffy',
        'Perfect for movie nights',
        'Ready to pop',
      ]),
      price: 1.45,
      offerPrice: 1.25,
    },
    {
      name: 'Pretzels 200g',
      categoryId: '123e4567-e89b-12d3-a456-426614174000',
      description: JSON.stringify([
        'Crunchy and salty',
        'Perfect for snacking',
        'Great with dips',
      ]),
      price: 1.85,
      offerPrice: 1.65,
    },
    {
      name: 'Granola Bars 6 pack',
      categoryId: '123e4567-e89b-12d3-a456-426614174000',
      description: JSON.stringify([
        'Healthy and filling',
        'Perfect for on-the-go',
        'Made with oats and honey',
      ]),
      price: 2.95,
      offerPrice: 2.75,
    },
  ],
};

export { categories, productsByCategory };
