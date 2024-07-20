// SkeletonNoteList.js

import { Skeleton } from "../ui/skeleton";

const SkeletonNoteList = () => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="mb-4">
          <Skeleton className="h-6 mb-2" width={`60%`} />
          <Skeleton className="h-6 mb-2" width={`80%`} />
          <Skeleton className="h-6 mb-2" width={`40%`} />
        </div>
      ))}
    </div>
  );
};

export default SkeletonNoteList;
