'use client';

import { useEffect, useState } from "react";

const PostPage = () => {
    const [postList, setPostList] = useState<any>([]);
    const result = fetch('/api/post/database')
        .then((res) => res.json())
        .then((res) => {
            if(!res) return;
            console.log(res)
            setPostList(res.results || []);
        });


    return (
        <div>
            {postList && postList?.map((post: any, index: number) => {
                return (
                    <div key={index}>
                        <h1>{post.properties.title.title[0].plain_text}</h1>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostPage;