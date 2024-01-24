'use client';

import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

const PostDetailPage = () => {
    const [content, setContent] = useState<string>('');
    const result = fetch('/api/post/blocks')
        .then((res) => res.json())
        .then(async(res) => {
            const processedContent = await remark()
                .use(html)
                .process(res.parent);

                setContent(processedContent.value);
        });

    useEffect(() => {
        console.log(result);
    }, [])

    return(
        <div>

            <MDEditor.Markdown source={content} />
        </div>
    )
}

export default PostDetailPage;