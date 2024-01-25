import MarkdownViewer from "@/components/markdownViewer";

const PostDetailPage = async ({params, searchParams}: any) => {

    const content = await getPostDetailData(params.id);


    return (
            <MarkdownViewer content={content} />
    )
}

async function getPostDetailData(id: string) {
    return await fetch(`${process.env.API_URL}/api/post?id=${id}`) //  server에서 처리하기 떄문에 url 필요 o
        .then((res) => res.json())
        .then((res) => {
            if(!res) return;
            return  res?.data
        });
}


export default PostDetailPage;