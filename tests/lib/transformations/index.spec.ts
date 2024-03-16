/* eslint-disable @typescript-eslint/no-explicit-any */
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

    it('should throws an error with correct message', async () => {
      const markdownRawContent = null as unknown as string;

      try {
        await transformations.transformMarkdownToHtml(markdownRawContent);
      } catch (error: any) {
        expect(error.message).toBe(
          'An error occurred during the transformation to HTML: TypeError: expected input to be a string or buffer',
        );
      }
    });
  });
});
