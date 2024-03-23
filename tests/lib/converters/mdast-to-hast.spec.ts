/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdastToHastConverter } from '@/converters/mdast-to-hast';
import { Mdast } from '@/entities/mdast';
import { mdastObject } from '@tests/fixtures/markup-content';
import { Root } from 'mdast-util-from-markdown/lib';

describe('Converter: MdastToHast', () => {
  let sut: MdastToHastConverter;

  beforeEach(() => {
    sut = new MdastToHastConverter();
  });

  describe('execute', () => {
    it('should convert mdast to hast correctly', () => {
      const result = sut.execute(new Mdast(mdastObject as Root));

      console.log(JSON.stringify(result.syntaxTree, null, 2));

      expect(result.syntaxTree.type).toBe('root');

      expect((result.syntaxTree as any).children.at(0)?.tagName).toBe('h1');
      expect((result.syntaxTree as any).children.at(2)?.tagName).toBe('p');
    });
  });
});
