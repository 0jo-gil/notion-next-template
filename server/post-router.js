const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '../env'});
const { Client } = require('@notionhq/client');
const {NotionToMarkdown} = require('notion-to-md');
const {PostResponseDto} = require('./dto/post.response.dto');

const router = express.Router();


router.get('/database', async(req, res) => {
    const DATABASE_ID = process.env.NOTION_DATABASE_ID;

    const notion = new Client({ auth: process.env.NOTION_TOKEN });


    const response = await notion.databases.query({
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

    if(!response) {
        res.send('Notion Database Error');
    }

    const result = response.results.map((page) => {
        return PostResponseDto.from(page);
    })

    res.send(result);
})

router.get('/blocks/:id', async(req, res, next) => {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const n2m = new NotionToMarkdown({ notionClient: notion });

    const mdblocks = await n2m.pageToMarkdown(req.params.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    // const result = mdString?.parent?.replaceAll('\n', '<br/>');

    res.send(mdString); 
})





module.exports = router;