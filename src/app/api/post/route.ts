import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";
import { NotionToMarkdown } from "notion-to-md";

export async function GET(request: NextRequest, response: NextResponse) {
    const url = new URL(request.url as string).searchParams;
    const id = url?.get('id');

    const notion = new Client({ auth: process.env.NOTION_TOKEN });

    const n2m = new NotionToMarkdown({ notionClient: notion });

    // const pageInfo = await notion.pages.retrieve({ page_id: id || '' });
    const mdblocks = await n2m.pageToMarkdown(id || '');
    const mdString = n2m.toMarkdownString(mdblocks);


    return NextResponse.json({data: mdString}, {status: 200});

}