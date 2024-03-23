import { Mdast } from '@/entities/mdast';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { Root } from 'mdast-util-from-markdown/lib';

export class MarkdownParser {
  execute(markdownRawContent: string): Mdast<Root> {
    const tree = fromMarkdown(markdownRawContent, {
      extensions: [gfm()],
      mdastExtensions: [gfmFromMarkdown()],
    });

    return new Mdast(tree);
  }
}
