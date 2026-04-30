import PlayThumbnail from './PlayThumbnail';
import useFeaturedPlays from 'common/hooks/useFeaturedPlays';

const PlayCardSkeleton = () => (
  <li className="play-card-skeleton">
    <div className="play-card-container max-w-sm bg-white rounded-xl overflow-hidden flex flex-col h-full">
      <div className="skeleton-image" />
      <div className="p-5 flex flex-col flex-grow gap-3">
        <div className="skeleton-line" style={{ width: '40%', height: '20px' }} />
        <div className="skeleton-line" style={{ width: '70%', height: '14px' }} />
        <div className="skeleton-line" style={{ width: '90%', height: '16px' }} />
        <div className="skeleton-line" style={{ width: '80%', height: '12px' }} />
        <div className="skeleton-line" style={{ width: '60%', height: '12px' }} />
        <div
          className="skeleton-line"
          style={{ width: '100%', height: '1px', marginTop: 'auto' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="skeleton-line" style={{ width: '30%', height: '14px' }} />
          <div className="skeleton-line" style={{ width: '20%', height: '14px' }} />
        </div>
      </div>
    </div>
    <style>{`
      .skeleton-image {
        width: 100%;
        height: 192px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }
      .skeleton-line {
        border-radius: 4px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </li>
);

const FeaturedPlays = () => {
  const [loading, error, data] = useFeaturedPlays();
  const success = !loading && !error && !!data.length;

  return (
    <>
      <h2 className="plays-title-primary">
        Trending <strong>Plays</strong>
      </h2>
      <ul className="list-plays">
        {loading && [1, 2, 3, 4].map((n) => <PlayCardSkeleton key={n} />)}
        {error && <p>{error?.message ?? 'Something went wrong'}</p>}
        {success && data?.map((play, index) => <PlayThumbnail key={index} play={play} />)}
      </ul>
    </>
  );
};

export default FeaturedPlays;
