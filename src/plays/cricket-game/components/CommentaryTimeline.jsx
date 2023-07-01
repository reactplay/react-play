function Timeline({ prevActions }) {
  return (
    <div className="timeline w-auto h-1/2 flex items-center justify-evenly gap-2 font-cricket-game">
      {prevActions.map((action, index) => {
        return (
          <div
            className="action md:w-5 md:h-5 bg-slate-700 rounded-[6px] flex items-center justify-center text-white w-4 h-4 text-sm md:text-base font-cricket-game"
            data-action={action.toLocaleString()}
            key={`action-${action}-${index}`}
          >
            {action}
          </div>
        );
      })}
    </div>
  );
}

export default function CommentaryTimeline({ commentary, prevActions }) {
  return (
    <>
      <div className="commentary-and-timeline w-full md:w-1/3 h-1/2 md:h-[80%] bg-slate-200 rounded-[20px] flex flex-col items-center justify-evenly opacity-0 overflow-hidden">
        <div className="commentary w-full h-[45%] text-center px-3 md:[border-bottom:1px_solid_rgb(71,85,105)] text-xs md:text-sm flex items-center justify-center font-cricket-game">
          {'Commentator: ' + commentary}
        </div>

        <Timeline prevActions={prevActions} />
      </div>
    </>
  );
}
