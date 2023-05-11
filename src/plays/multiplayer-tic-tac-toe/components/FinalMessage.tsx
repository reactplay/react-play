import React from 'react';
import PlayAgainButton from './PlayAgainButton';

type FinalMessageType = {
  finalMessage: string;
  onPlayAgainClick: () => void;
  isCross: boolean;
};

export default function FinalMessage({
  finalMessage,
  onPlayAgainClick,
  isCross
}: FinalMessageType) {
  return (
    <>
      {finalMessage ? (
        <div>
          <h3 className="text-center">{finalMessage}</h3>
          <div className="flex justify-center">
            <PlayAgainButton onClick={onPlayAgainClick} />
          </div>
        </div>
      ) : (
        <h3 className="p-3 text-2xl font-bold text-center">
          {isCross ? 'Turn : Cross' : 'Turn : Circle'}
        </h3>
      )}
    </>
  );
}
