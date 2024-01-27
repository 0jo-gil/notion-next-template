'use client';

import { useEffect, useState } from "react"

const useRequestPosts = () => {
    const [posts, setPosts] = useState([] as any);
    const [cursorHistory, setCursorHistory] = useState([] as string[]);
    const [tagList, setTagList] = useState(new Set());

    useEffect(() => {
        fetchData(undefined, 5);
    }, []);

    useEffect(() => {
        getTagList();  

    }, [])

    const getTagList = async () => {
        const fetchData = await fetch('/api/database')
            .then((res) => res.json())
            .then((data) => {
                return data
            })
            .catch((error) => console.error('Error:', error));


            fetchData?.data?.list?.forEach((item: any) => {
                item.tags.forEach((tag: any) => {
                    setTagList((prev: any) => {
                        return prev.add(tag)
                    }) 
                })
            })
        
    }


    const fetchData = async (cursor?: string, pageSize = 5) => {


        let requestUrl = '';

        requestUrl = cursor ? `/api/database?cursor=${cursor}` : `/api/database`;

        const join = cursor ? '&' : '?';

        requestUrl = pageSize ? requestUrl + `${join}pageSize=${pageSize}` : requestUrl;
        

        await fetch(requestUrl)
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data?.data || [])

                    if(data?.data?.list?.length > 0) {
                        setCursorHistory((prev: string[]) => [
                            ...prev,
                            data?.data?.list?.[0].id
                        ])
                    }
                })
                .catch((error) => console.error('Error:', error));
    }

    const onNext = (cursor: string) => {
        fetchData(cursor, 5);
    }

    const onPrev = () => {
        let startCursor = cursorHistory[cursorHistory.length - 2];

        setCursorHistory((prev: string[]) => {
            const newCursorHistory = [...prev];
            newCursorHistory.pop();
            newCursorHistory.pop();
            return newCursorHistory;
        })

        fetchData(startCursor, 5);
    }

    return {
        data: posts,
        tags: tagList,
        onNext,
        onPrev
    };
}

export default useRequestPosts;2