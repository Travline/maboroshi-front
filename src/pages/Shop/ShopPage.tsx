import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './Shop.css';

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

export function ShopPage() {
  const { products, isLoading, error } = useProducts();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const toggleViewMode = () => {
    setViewMode((current) => (current === 'grid' ? 'list' : 'grid'));
  };

  if (isLoading) {
    return (
      <main>
        <div className="show-detail-header-module__MJHcJG__showDetailHeader">
          <p className="dot-array caps">Cargando...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="show-detail-header-module__MJHcJG__showDetailHeader">
          <p className="dot-array caps">Error al cargar los productos</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {viewMode === 'grid' ? (
        <div className="grid-view-module__5EkODa__gridView">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="list-view-module__lYbhwW__content">
          <div className="list-view-module__lYbhwW__listItems">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        className="listing-module__AkF8-W__viewToggle"
        onClick={toggleViewMode}
        aria-label={viewMode === 'grid' ? 'Cambiar a vista en lista' : 'Cambiar a vista en cuadrícula'}
      >
        <div aria-hidden="true">
          {viewMode === 'grid' ? <ListIcon /> : <GridIcon />}
        </div>
      </button>
    </main>
  );
}
