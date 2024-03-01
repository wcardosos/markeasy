import { MarkdownReader } from '../markdown/readers/markdown';
import { MarkdownToHtmlSerializer } from './serializers/markdown-to-html';

export async function transformMarkdownToHtml(rawContent: string) {
  const mardownReader = new MarkdownReader();
  const markdown = mardownReader.execute(rawContent);

  const markdownToHtmlSerializer = new MarkdownToHtmlSerializer();

  const htmlSerialized = await markdownToHtmlSerializer.execute(markdown);

  return {
    html: htmlSerialized.content,
    metadata: htmlSerialized.metadata,
  };
}

export default {
  transformMarkdownToHtml,
};
