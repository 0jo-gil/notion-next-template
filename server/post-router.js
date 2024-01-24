const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './env'});
const { Client } = require('@notionhq/client');
const {NotionToMarkdown} = require('notion-to-md');


const router = express.Router();
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });


router.get('/database', async(req, res) => {
    const DATABASE_ID = process.env.NOTION_DATABASE_ID;

    // const response = await notion.databases.retrieve({ database_id: DATABASE_ID });

    const response = await notion.databases.query({
        database_id: DATABASE_ID,
     
    });
    
    res.send(response);
})

router.get('/blocks', async(req, res, next) => {
    const mdblocks = await n2m.pageToMarkdown(process.env.NOTION_BLOCK_ID);
    const mdString = n2m.toMarkdownString(mdblocks);

    // const result = mdString?.parent?.replaceAll('\n', '<br/>');

    res.send(mdString); 
})





module.exports = router;