import { MarkdownReader } from '../../../../lib/markdown/readers/markdown';
import { markdownContent, metadata } from '../../../fixtures/markup-content';

describe('MarkdownReader', () => {
  let sut: MarkdownReader;

  beforeEach(() => {
    sut = new MarkdownReader();
  });

  describe('execute', () => {
    const markdownRawContent = metadata + markdownContent;
    it('should return the content correctly', () => {
      const result = sut.execute(markdownRawContent);

      expect(result.content).toBe(markdownContent);
    });

    it('should return the metadata correctly', () => {
      const result = sut.execute(markdownRawContent);

      expect(result.metadata).toStrictEqual({ title: 'test' });
    });
  });
});
