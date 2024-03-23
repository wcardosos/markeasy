/* eslint-disable @typescript-eslint/no-explicit-any */
import { Markdown } from '@/entities/markdown';
import { MarkdownParser } from '@/parsers/markdown';
import {
  gfmMarkdownContent,
  markdownContent,
} from '@tests/fixtures/markup-content';

describe('Parser: Markdown', () => {
  let sut: MarkdownParser;

  beforeEach(() => {
    sut = new MarkdownParser();
  });

  describe('execute', () => {
    it('should parse the markdown content correctly', () => {
      const markdown = new Markdown(markdownContent, {});

      const result = sut.execute(markdown);

      expect(result.syntaxTree.type).toBe('root');

      expect(result.syntaxTree.children.at(0)?.type).toBe('heading');
      expect(result.syntaxTree.children.at(1)?.type).toBe('paragraph');
    });

    it('should parse the gfm markdown content correctly', () => {
      const markdown = new Markdown(gfmMarkdownContent, {});

      const result = sut.execute(markdown);

      expect(result.syntaxTree.children.at(0)?.type).toBe('table');
    });
  });
});
