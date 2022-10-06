import { Skeleton } from "@mui/material";

const SkeletonCard = () => {
  return (
    <div className="h-[200px] w-[200px] bg-[#1f293b] rounded-lg flex flex-col items-center justify-evenly">
      <Skeleton
        variant="circular"
        width={90}
        height={90}
        sx={{ background: "#3d4b63" }}
      />
      <Skeleton
        variant="rounded"
        width={150}
        height={20}
        sx={{ background: "#3d4b63" }}
      />
    </div>
  );
};

export default SkeletonCard;
