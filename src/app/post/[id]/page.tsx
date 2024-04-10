'use client'

import MarkdownViewer from "@/components/markdownViewer";
import {useEffect, useState} from "react";

const PostDetailPage = ({params, searchParams}: any) => {
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
        <div className={'py-10'}>
            <MarkdownViewer content={content}/>
        </div>
    )
}


export default PostDetailPage;
