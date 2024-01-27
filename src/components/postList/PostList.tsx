'use client';

import useRequestPosts from "@/hooks/useRequestPosts";
import Link from "next/link";
import PostListPagination from "./PostListPagination";

const PostList: React.FC = () => {
    const {data, tags, onPrev, onNext} = useRequestPosts();

    console.log(tags)

    return (
        <div>
            {data?.list?.length > 0 && data?.list?.map((post: any, index: number) => {
                return (
                    <Link key={index} href={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                    </Link>
                )
            })}

            <PostListPagination onPrev={onPrev} onClick={() => onNext(data.nextCursor)} />
        </div>  
    )
}
export default PostList;