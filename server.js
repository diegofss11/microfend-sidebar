import path  from 'path';
import fs  from 'fs';
import express  from 'express';
import cors from 'cors';
import React  from 'react';
import { renderToString }  from 'react-dom/server';

import App from './src/App';

const server = express();

server.use(cors());

server.get('/', (req, res) => {
    const htmlPath = path.resolve(__dirname, 'build', 'index.html');

    fs.readFile(htmlPath, 'utf8', (err, html) => {
        const rootElem = '<div id="sidebar-root">';
        const renderedApp = renderToString(React.createElement(App, null));

        res.send(html.replace(rootElem, rootElem + renderedApp));
    });
});

server.use(express.static('build'));

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});