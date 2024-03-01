import {
  htmlContent,
  markdownContent,
  metadata,
} from '../../fixtures/markup-content';
import transformations from '../../../lib/transformations';

describe('Lib functions', () => {
  describe('transformMarkdownToHtml', () => {
    it('should return the markdown content as html content', async () => {
      const markdownRawContent = metadata + markdownContent;

      const result =
        await transformations.transformMarkdownToHtml(markdownRawContent);

      expect(result).toStrictEqual({
        html: htmlContent,
        metadata: { title: 'test' },
      });
    });
  });
});
