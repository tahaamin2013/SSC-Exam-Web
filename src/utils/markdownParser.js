// utils/markdownParser.js
import MarkdownIt from 'markdown-it';
import markdownItPlantUML from 'markdown-it-plantuml';

const md = new MarkdownIt();
md.use(markdownItPlantUML);

export const parseMarkdown = (content) => {
  return md.render(content);
};