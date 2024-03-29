import { MarkdownParser } from '@/parsers/markdown';
import { MarkdownReader } from '@/readers/markdown';
import { MdastToHastTransformer } from '@/transformers/mdast-to-hast';
import { HtmlSerializer } from '@/serializers/html';

export function buildHtml(rawContent: string) {
  try {
    const mardownReader = new MarkdownReader();
    const markdown = mardownReader.execute(rawContent);

    const markdownParser = new MarkdownParser();
    const mdast = markdownParser.execute(markdown);

    const mdastToHastTransformer = new MdastToHastTransformer();
    const hast = mdastToHastTransformer.execute(mdast);

    const htmlSerializer = new HtmlSerializer();
    const html = htmlSerializer.execute(hast);

    return {
      html: html.content,
      metadata: markdown.metadata,
    };
  } catch (error) {
    console.error(error);

    throw new Error(
      `An error occurred during the transformation to HTML: ${error}`,
    );
  }
}

export default {
  buildHtml,
};
