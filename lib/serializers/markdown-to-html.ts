import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { Markdown } from '../entities/markdown';
import { Html } from '../entities/html';

export class MarkdownToHtmlSerializer {
  async execute(markdown: Markdown): Promise<Html> {
    const serializedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(markdown.content);

    return new Html(serializedContent.toString(), markdown.metadata);
  }
}
