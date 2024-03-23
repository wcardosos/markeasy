import { Markdown } from '@/entities/markdown';
import { MarkdownToHtmlSerializer } from '@/serializers/markdown-to-html';
import { markdownContent, htmlContent } from '../../fixtures/markup-content';

describe('MarkdownToHtmlSerializer', () => {
  let sut: MarkdownToHtmlSerializer;

  beforeEach(() => {
    sut = new MarkdownToHtmlSerializer();
    vi.clearAllMocks();
  });

  describe('execute', () => {
    it('should serialize markdown content to html content', async () => {
      const result = await sut.execute(
        new Markdown(markdownContent, { title: 'test' }),
      );

      expect(result.content).toEqual(htmlContent);
      expect(result.metadata).toStrictEqual({ title: 'test' });
    });
  });
});
