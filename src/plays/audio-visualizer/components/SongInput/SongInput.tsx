import React, { useState } from "react";

type SongInputProps = {
  updateSongFile: (isFile?: boolean, url?: string) => void;
  updateSongPath: (value: string) => void;
  songPath: string;
};

const SongInput = ({
  updateSongFile,
  updateSongPath,
  songPath,
}: SongInputProps) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  return (
    <div className={"song-input"}>
      <svg
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          (e.target as HTMLDivElement).parentElement.classList.toggle("show");
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="aud-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        />
      </svg>

      <input
        type="text"
        value={songPath}
        placeholder="Song URL..."
        onChange={(e) => updateSongPath(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateSongFile();
            setShowInput(false);
          }
        }}
        hidden={!showInput}
        className="hidden-items"
      />
      <span className="hidden-items">
        <input
          type="file"
          accept="audio/*"
          max="1"
          onChange={(e) => {
            e.preventDefault();
            if ((e.target.files as FileList).length === 0) return;
            let file = (e.target.files as FileList)[0];
            let url = URL.createObjectURL(file);
            updateSongFile(true, url);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </span>
    </div>
  );
};

export default SongInput;
