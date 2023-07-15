/* eslint-disable react/prop-types */
export default function MusicCard({ song }) {
  return (
    <div
      style={{
        padding: '0.5rem',
        boxShadow: '5px 5px',
        borderRadius: '0.375rem',
        borderWidth: '2px',
        borderColor: '#000000',
        margin: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          margin: '0.5rem',
          gap: '0.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            backgroundImage: `url(${song?.cover_art})`,
            backgroundSize: 'cover',
            width: '6rem',
            height: '6rem',
            borderRadius: '0.375rem'
          }}
        />
        <div className="font-sans">
          <p className="font-bold">{song?.title}</p>
          <p>{song?.meta_data?.album}</p>
          <p>{song?.subtitle}</p>
          <p className="">{song?.genere}</p>
        </div>
      </div>
      <div className="flex justify-center content-center gap-1  font-semibold">
        <svg
          fill="#000000"
          height="24px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 461.001 461.001"
          width="24px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <path
                d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                style={{ fill: '#000000' }}
              />{' '}
            </g>{' '}
          </g>
        </svg>
        <a
          href={`https://www.youtube.com/watch?v=${song?.meta_data?.youtube?.video_id}`}
          style={{ fontSize: '1rem', lineHeight: '1.5rem' }}
        >
          Youtube
        </a>
      </div>
    </div>
  );
}
