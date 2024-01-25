'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PostPage = () => {
    const router = useRouter()
    const [postList, setPostList] = useState<any>([]);

    useEffect(() => {
     const result = fetch('/api/post/database')
        .then((res) => res.json())
        .then((res) => {
            if(!res) return;
            setPostList(res || []);
        });
    }, [])
  


    return (
        <div>
            {postList && postList?.map((post: any, index: number) => {
                return (
                    <div key={index} onClick={() => router.push(`/post/${post.id}`)}>
                        <h1>{post.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default PostPage;