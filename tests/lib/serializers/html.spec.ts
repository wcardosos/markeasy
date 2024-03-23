import { Hast } from '@/entities/hast';
import { HtmlSerializer } from '@/serializers/html';
import { htmlContent } from '@tests/fixtures/html';
import { hastObject } from '@tests/fixtures/syntax-tree';
import { HastNodes } from 'mdast-util-to-hast/lib';

describe('Serializer: Html', () => {
  let sut: HtmlSerializer;

  beforeEach(() => {
    sut = new HtmlSerializer();
  });

  describe('execute', () => {
    it('should serialize html from hast', () => {
      const result = sut.execute(new Hast(hastObject as HastNodes));

      expect(result.content).toBe(htmlContent);
    });
  });
});
