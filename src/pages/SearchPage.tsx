import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Cards } from '../components/Cards/Cards';
import './Search.css';

type ViewMode = 'grid' | 'list';

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <rect x="0" y="0" width="6" height="6" />
      <rect x="10" y="0" width="6" height="6" />
      <rect x="0" y="10" width="6" height="6" />
      <rect x="10" y="10" width="6" height="6" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <rect x="0" y="1" width="16" height="2" />
      <rect x="0" y="7" width="16" height="2" />
      <rect x="0" y="13" width="16" height="2" />
    </svg>
  );
}

export function SearchPage() {
  const { products, isLoading, error } = useProducts();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const toggleViewMode = () => {
    setViewMode((current) => (current === 'grid' ? 'list' : 'grid'));
  };

  if (isLoading) return <main><p>Cargando...</p></main>;
  if (error) return <main><p>Error al cargar</p></main>;

  return (
    <main>
      <div className={viewMode === 'grid' ? "grid-view-module__5EkODa__gridView" : "list-view-module__lYbhwW__content"}>
        {products.map((product) => (
          <Cards key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>

      <button
        type="button"
        className="listing-module__AkF8-W__viewToggle"
        onClick={toggleViewMode}
      >
        {viewMode === 'grid' ? <ListIcon /> : <GridIcon />}
      </button>
    </main>
  );
}