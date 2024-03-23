import { Hast } from '@/entities/hast';
import { Html } from '@/entities/html';
import { toHtml } from 'hast-util-to-html';
import { HastNodes } from 'mdast-util-to-hast/lib';

export class HtmlSerializer {
  execute(hast: Hast<HastNodes>): Html {
    const htmlContent = toHtml(hast.syntaxTree);

    return new Html(htmlContent);
  }
}
