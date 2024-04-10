'use client';

import useRequestPosts from "@/hooks/useRequestPosts";
import PostListPagination from "./PostListPagination";
import Categories from "../cartegories";
import { PostItem } from "./PostItem";
import { RecentPost } from "../recent-post/recent-post";
import { SkeletonPostItem } from "../skeleton";

const PostList: React.FC = () => {
    const { data, tags, onPrev, onNext } = useRequestPosts();

    return (
        <div className="min-w-full mb-10">
            <div>
                <RecentPost postList={data?.list?.slice(0,2) ?? []} />
            </div>

            <Categories>
                {[...tags]?.map((tag: any) => (
                    <Categories.Item key={tag} category={tag} />
                ))}
            </Categories>

            <div>
                {data?.list?.length > 0 ? data?.list?.map((post: any, index: number) => {
                    return (
                        <PostItem post={post} key={index} />
                    )
                }) : (
                    Array(5).fill(undefined).map((_, index) => (
                        <SkeletonPostItem key={index} />
                    ))
                )}

                <PostListPagination onPrev={onPrev} onClick={() => onNext(data.nextCursor)} />
            </div>
        </div>
    )
}
export default PostList;