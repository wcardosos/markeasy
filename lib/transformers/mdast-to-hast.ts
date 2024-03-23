import { Hast } from '@/entities/hast';
import { Mdast } from '@/entities/mdast';
import { Root } from 'mdast-util-from-markdown/lib';
import { toHast } from 'mdast-util-to-hast';
import { HastNodes } from 'mdast-util-to-hast/lib';

export class MdastToHastTransformer {
  execute(mdast: Mdast<Root>): Hast<HastNodes> {
    const htmlSyntaxTree = toHast(mdast.syntaxTree);

    return new Hast(htmlSyntaxTree);
  }
}
