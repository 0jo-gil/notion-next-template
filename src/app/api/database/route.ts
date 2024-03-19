import { NextRequest, NextResponse } from "next/server";

import { Client } from "@notionhq/client";
import DataBaseResponseDto from "@/utils/dto/database.response.dto";

export async function GET(request: NextRequest, response: NextResponse) {
    const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';
    const notion = new Client({ auth: process.env.NOTION_TOKEN });

    const url = new URL(request.url as string).searchParams;
    const cursor = url?.get('cursor') as string ?? undefined;
    // const pageSize = url?.get('pageSize') as string ? Number( url?.get('pageSize')) : undefined;
    const pageSize = 10;
    
    if(DATABASE_ID === '') {
        return NextResponse.json({data: null, error: 'No database ID provided'}, {status: 500});
    }


    let filterObj = {} as any;


    if (url?.get('tag') !== 'All' && url?.get('tag') !== '') {
       filterObj = {
            and: [
                {
                    property: 'tags',
                    multi_select: {
                        contains: url?.get('tag') || '',
                    },
                },
                {
                    or: [
                        {
                            property: 'status',
                            checkbox: {
                                equals: true,
                            },
                        }
                    ]
                }
            ]
        }
    } else {
        filterObj = {
            or: [
                {
                    property: 'status',
                    checkbox: {
                        equals: true,
                    },
                }
            ]
        }
    }

    const result = await notion.databases.query({
        database_id: DATABASE_ID,
        page_size: typeof pageSize === 'number' ? pageSize : undefined,
        start_cursor: cursor,
        filter: {
            ...filterObj
        },
        sorts: [
            {
                property: 'created_at',
                direction: 'descending',
            }
        ]
    });


    const toResult = result.results.map((page) => {
        return DataBaseResponseDto.from(page);
    })

    const responseDto = {
        list: toResult,
        hasMore: result.has_more,
        nextCursor: result.next_cursor
    }

    return NextResponse.json({data: responseDto}, {status: 200});
}