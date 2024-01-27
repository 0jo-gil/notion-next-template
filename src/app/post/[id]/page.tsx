'use client'


import MarkdownViewer from "@/components/markdownViewer";
import axios from 'axios';
import { useEffect, useState } from "react";

const PostDetailPage = ({ params, searchParams }: any) => {
    const [content, setContent] = useState({
        parent: ''
    });

    useEffect(() => {

        const content = fetch(`/api/post?id=${params.id}`) 
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



export default PostDetailPage;
