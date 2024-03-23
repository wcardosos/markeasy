/* eslint-disable @typescript-eslint/no-explicit-any */
import { markdownContent, metadata } from '@tests/fixtures/markdown';
import { htmlContent } from '@tests/fixtures/html';
import builders from '@/builders';

describe('builders', () => {
  describe('buildHtml', () => {
    it('should return the markdown content as html content', () => {
      const markdownRawContent = metadata + markdownContent;

      const result = builders.buildHtml(markdownRawContent);

      expect(result).toStrictEqual({
        html: htmlContent,
        metadata: { title: 'test' },
      });
    });

    it('should throws an error with correct message', () => {
      const markdownRawContent = null as unknown as string;

      try {
        builders.buildHtml(markdownRawContent);
      } catch (error: any) {
        expect(error.message).toBe(
          'An error occurred during the transformation to HTML: TypeError: expected input to be a string or buffer',
        );
      }
    });
  });
});
