import { Skeleton } from '@mui/material';

const SkeletonCard = () => {
  return (
    <div className="h-[200px] sm:w-[200px] lg:w-[250px] bg-[#1f293b] rounded-lg flex flex-col items-center justify-evenly">
      <Skeleton height={90} sx={{ background: '#3d4b63' }} variant="circular" width={90} />
      <Skeleton height={20} sx={{ background: '#3d4b63' }} variant="rounded" width={150} />
    </div>
  );
};

export default SkeletonCard;
