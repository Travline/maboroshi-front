import { Link } from 'react-router-dom';
import type { Product } from '../../domain/models/Product';
import { getProductPath } from '../../config/productRoutes';

type ProductCardProps = {
  product: Product;
  viewMode: 'grid' | 'list';
};

export function ProductCard({ product, viewMode }: ProductCardProps) {
  const to = getProductPath(product.id, product.type);

  if (viewMode === 'list') {
    return (
      <div className="list-view-module__lYbhwW__listItemContainer">
        <Link className="list-view-module__lYbhwW__listItem dot-array" to={to}>
          <span className="list-view-module__lYbhwW__listItemTitle">{product.name}</span>
          <span>S/.{product.price.toFixed(2)}</span>
          <span className="list-view-module__lYbhwW__listItemArrow">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" aria-hidden="true">
              <path
                d="M0.441406 5.81738L4.93262 10.3086L5.375 10.75L6.25879 9.86621L5.81738 9.42383L1.76855 5.375L5.81738 1.32617L6.25879 0.883789L5.375 0L4.93262 0.441406L0.441406 4.93262L0 5.375L0.441406 5.81738Z"
                fill="currentColor"
                transform="scale(-1,1) translate(-7,0)"
              />
            </svg>
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid-view-module__5EkODa__gridItem">
      <Link className="grid-view-module__5EkODa__gridItemLink" to={to}>
        <img
          alt=""
          loading="lazy"
          width={2400}
          height={2400}
          decoding="async"
          src={product.imageUrl}
        />
        <span className="sr-only">{product.name}</span>
      </Link>
    </div>
  );
}
