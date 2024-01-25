import { NextRequest, NextResponse } from "next/server";

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import PostResponseDto from "@/utils/dto/post.response.dto";

export async function GET(request: NextRequest, response: NextResponse) {
    const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';

    const notion = new Client({ auth: process.env.NOTION_TOKEN });

    
    if(DATABASE_ID === '') {
        return NextResponse.json({data: null, error: 'No database ID provided'}, {status: 500});
    }

    const result = await notion.databases.query({
        database_id: DATABASE_ID,
            filter: {
                or: [
                    {
                        property: 'status',
                        checkbox: {
                            equals: true,
                        },
                    },
                ],
            },
            sorts: [
                {
                    property: 'created_at',
                    direction: 'descending',
                }
            ]
    });

    const toResult = result.results.map((page) => {
        return PostResponseDto.from(page);
    })

    return NextResponse.json({data: toResult}, {status: 200});
}