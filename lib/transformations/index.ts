import { MarkdownParser } from '@/parsers/markdown';
import { MarkdownReader } from '../readers/markdown';
import { MdastToHastConverter } from '@/converters/mdast-to-hast';
import { HtmlSerializer } from '@/serializers/html';

export async function transformMarkdownToHtml(rawContent: string) {
  try {
    const mardownReader = new MarkdownReader();
    const markdown = mardownReader.execute(rawContent);

    const markdownParser = new MarkdownParser();
    const mdast = markdownParser.execute(markdown);

    const mdastToHastConverter = new MdastToHastConverter();
    const hast = mdastToHastConverter.execute(mdast);

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
  transformMarkdownToHtml,
};
