import { useState } from 'react';
import './OptimizedImage.css';

/**
 * Image component that loads faster and fades in when ready:
 * - decoding="async" so decoding doesn't block the main thread
 * - Optional high priority / preload for above-the-fold images
 * - Lazy loading for below-the-fold
 * - Smooth fade-in when loaded for better perceived performance
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`optimized-img ${loaded ? 'optimized-img--loaded' : ''} ${className}`.trim()}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}
