const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './env'});

const app = express();
const port = process.env.PORT || 8000;


const next = require('next');
const {parse} = require('url');
const nextPort = process.env.SERVER_PORT || 5000;

const nextApp = next({dev: true, nextPort});

const handle = nextApp.getRequestHandler();

const postRouter = require('./post-router');

// notion
const {Client} = require('@notionhq/client');
//https://github.com/souvikinator/notion-to-md
const {NotionToMarkdown} = require('notion-to-md');
const notion = new Client({auth: process.env.NOTION_TOKEN});

const n2m = new NotionToMarkdown({ notionClient: notion });

nextApp
    .prepare()
    .then(() => {

       /** Express Settings */
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        /** static 경로 설정 */
        // app.use(express.static(path.join(__dirname, '../', 'public')));

        app.use('/api/post', postRouter);

        /** Next.js Routing */
        app.get('/', (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            nextApp.render(req, res, pathname, query);
        });

       

        app.get('*', (req, res) => {
        return handle(req, res);
        });

        app.listen(port, () => {
        console.log(`Express server listen port:${port}`);
        console.log(`http://localhost:${port}`);
        });

    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })

module.exports = app;