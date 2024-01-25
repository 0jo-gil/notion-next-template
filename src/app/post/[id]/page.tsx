'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const PostDetailPage = ({params}: {params: {id: string}}) => {
    const router = useRouter()
    const [content, setContent] = useState<any>('');

    const result = fetch(`/api/post?id=${params.id}`)
        .then((res) => res.json())
        .then(async(res) => {
            setContent(res.data.parent);
            // const processedContent = await remark()
            //     .use(html)
            //     .process(res.parent);
        });

    useEffect(() => {1
        console.log(result);
    }, [])


    return (
        <div>
            <MarkdownPreview
                source={content}
                wrapperElement={{
                    "data-color-mode": "light",
                }}
            />
        </div>
    )
}


export default PostDetailPage;