import Link from "next/link";
import axios from 'axios';

const PostPage = async () => {
    const postList = await getPostData();
    return (
        <div>
            {postList.length > 0 && postList?.map((post: any, index: number) => {
                return (
                    // <Link key={index} href={{
                    //     pathname: `/post/[id]/?page=[page]`,
                    //     query: {
                    //         page: JSON.stringify(post)
                    //     }
                    // }}
                    // as={`/post/${post.id}/?page=${JSON.stringify(post)}`}>
                    //     <h1>{post.title}</h1>
                    // </Link>

                    <Link key={index} href={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

async function getPostData() {
    // return await axios.get(`${process.env.API_URL}/api/post`)
    //     .then((res) => res.data)
    //     .then((res) => {
    //         if(!res) return;
    //         return res?.data || [];
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })


    return await fetch(`${process.env.API_URL}/api/database`)
        .then((res) => res.json())
        .then((res) => {
            if(!res) return;
            return res?.data || [];
        });
}

export default PostPage;
