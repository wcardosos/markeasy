import { Mdast } from '@/entities/mdast';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { Root } from 'mdast-util-from-markdown/lib';
import { Markdown } from '@/entities/markdown';

export class MarkdownParser {
  execute(mardown: Markdown): Mdast<Root> {
    const tree = fromMarkdown(mardown.content, {
      extensions: [gfm()],
      mdastExtensions: [gfmFromMarkdown()],
    });

    return new Mdast(tree);
  }
}
