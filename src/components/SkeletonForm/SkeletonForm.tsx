// SkeletonNoteForm.js

import { Skeleton } from "../ui/skeleton";

const SkeletonNoteForm = () => {
  return (
    <div>
      <Skeleton className="h-10 mb-4" />
      <Skeleton className="h-48 mb-4" />
      <Skeleton className="h-10 mb-4" />
    </div>
  );
};

export default SkeletonNoteForm;
