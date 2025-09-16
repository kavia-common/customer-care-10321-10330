import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * Home page with header, product grid and footer composition.
   * Translates Figma-based static layout into a responsive grid with Ocean Professional styling.
   */
  const categories = useMemo(() => ['All', 'Combos', 'Sliders', 'Classic'], []);
  const [active, setActive] = useState('All');

  const products = [
    {
      id: 'p1',
      title: "Cheeseburger Wendy's Burger",
      image: '/assets/figmaimages/figma_image_1_83.png',
      rating: 4.9
    },
    {
      id: 'p2',
      title: 'Hamburger\nVeggie Burger',
      image: '/assets/figmaimages/figma_image_1_92.png',
      rating: 4.8
    },
    {
      id: 'p3',
      title: 'Hamburger\nChicken Burger',
      image: '/assets/figmaimages/figma_image_1_101.png',
      rating: 4.6
    },
    {
      id: 'p4',
      title: 'Hamburger\nFried Chicken Burger',
      image: '/assets/figmaimages/figma_image_1_110.png',
      rating: 4.5
    }
  ];

  const handleFilter = () => {
    // Simple demo: cycle active category
    const idx = categories.indexOf(active);
    setActive(categories[(idx + 1) % categories.length]);
  };

  return (
    <div>
      <Header
        categories={categories}
        activeCategory={active}
        onCategoryChange={setActive}
        onFilter={handleFilter}
      />
      <main className="container" role="main" style={{ paddingTop: 16, paddingBottom: 24 }}>
        <section aria-labelledby="featured-title">
          <h2 id="featured-title" className="hidden-visually">Featured</h2>
          <div className="grid">
            {products.map(p => (
              <ProductCard
                key={p.id}
                image={p.image}
                title={p.title}
                rating={p.rating}
                onFavorite={() => {}}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
