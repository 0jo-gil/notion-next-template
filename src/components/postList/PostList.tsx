'use client';

import useRequestPosts from "@/hooks/useRequestPosts";
import Link from "next/link";
import PostListPagination from "./PostListPagination";
import Categories from "../cartegories";
import { PostItem } from "./PostItem";

const PostList: React.FC = () => {
    const { data, tags, onPrev, onNext } = useRequestPosts();

    return (
        <div>
            <div>
                <h2>Recent</h2>
            </div>

            <Categories>
                {[...tags]?.map((tag: any) => (
                    <Categories.Item key={tag} category={tag} />
                ))}
            </Categories>

            <div>
                {data?.list?.length > 0 && data?.list?.map((post: any, index: number) => {
                    return (
                        <PostItem post={post} key={index} />
                    )
                })}

                <PostListPagination onPrev={onPrev} onClick={() => onNext(data.nextCursor)} />
            </div>
        </div>
    )
}
export default PostList;