import { Skeleton } from "../ui/skeleton";

export const SkeletonPostItem = () => { 

    return (
        <div className="flex flex-col space-y-3 py-10">
            {/* 태그 */}
            <div className="flex gap-3">
                <Skeleton className="h-4 w-[60px]" />
                <Skeleton className="h-4 w-[60px]" />
            </div>

            <Skeleton className="h-[30px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
};