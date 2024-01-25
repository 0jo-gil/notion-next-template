import MarkdownViewer from "@/components/markdownViewer";
import MarkdownPreview from "@uiw/react-markdown-preview";

const PostDetailPage = async (props: any) => {
    const content = await getData(props.params.id);

    return (
        <div>
            <MarkdownViewer content={content} />
        </div>
    )
}

export async function getData(id: string) {
    return await fetch(`http://localhost:3000/api/post?id=${id}`) //  server에서 처리하기 떄문에 url 필요 o
        .then((res) => res.json())
        .then((res) => {
            if(!res) return;
            return  res?.data
        });
}


export default PostDetailPage;