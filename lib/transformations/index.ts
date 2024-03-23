import { MarkdownReader } from '../readers/markdown';
import { MarkdownToHtmlSerializer } from '../serializers/markdown-to-html';

export async function transformMarkdownToHtml(rawContent: string) {
  try {
    const mardownReader = new MarkdownReader();
    const markdown = mardownReader.execute(rawContent);

    const markdownToHtmlSerializer = new MarkdownToHtmlSerializer();

    const htmlSerialized = await markdownToHtmlSerializer.execute(markdown);

    return {
      html: htmlSerialized.content,
      metadata: htmlSerialized.metadata,
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
