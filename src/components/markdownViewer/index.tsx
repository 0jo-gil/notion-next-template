'use client';

import MarkdownPreview from "@uiw/react-markdown-preview";

const MarkdownViewer = ({content}: any) => {
    return <MarkdownPreview source={content.parent} />
}

export default MarkdownViewer;