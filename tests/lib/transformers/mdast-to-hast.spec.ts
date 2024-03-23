/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdastToHastTransformer } from '@/transformers/mdast-to-hast';
import { Mdast } from '@/entities/mdast';
import { mdastObject } from '@tests/fixtures/syntax-tree';
import { Root } from 'mdast-util-from-markdown/lib';

describe('Transformer: MdastToHast', () => {
  let sut: MdastToHastTransformer;

  beforeEach(() => {
    sut = new MdastToHastTransformer();
  });

  describe('execute', () => {
    it('should convert mdast to hast correctly', () => {
      const result = sut.execute(new Mdast(mdastObject as Root));

      expect(result.syntaxTree.type).toBe('root');

      expect((result.syntaxTree as any).children.at(0)?.tagName).toBe('h1');
      expect((result.syntaxTree as any).children.at(2)?.tagName).toBe('p');
    });
  });
});
