'use client'


import MarkdownViewer from "@/components/markdownViewer";
import axios from 'axios';
import { useEffect, useState } from "react";

const PostDetailPage = ({ params, searchParams }: any) => {

    // const content = await getPostDetailData(params.id);
    const [content, setContent] = useState({
        parent: ''
    });

    useEffect(() => {

        const content = fetch(`/api/post?id=${params.id}`) //  server에서 처리하기 떄문에 url 필요 o
            .then((res) => res.json())
            .then((res) => {
                if (!res) return;
                setContent(res?.data)
                return res?.data
            });
    }, [])

    return (
        <MarkdownViewer content={content} />
    )
}

// async function getPostDetailData(id: string) {
//     // return await axios.get(`${process.env.API_URL}/api/post?id=${id}`)
//     //     .then((res) => res.data)
//     //     .then((res) => {
//     //         if(!res) return;
//     //         return res?.data || [];
//     //     })
//     //     .catch((err) => {
//     //         console.log(err);
//     //     })
//     return await fetch(`${process.env.API_URL}/api/post?id=${id}`) //  server에서 처리하기 떄문에 url 필요 o
//         .then((res) => res.json())
//         .then((res) => {
//             if (!res) return;
//             return res?.data
//         });
// }


export default PostDetailPage;
