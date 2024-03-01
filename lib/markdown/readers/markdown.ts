import matter from 'gray-matter';
import { Markdown } from '../entities/markdown';

export class MarkdownReader {
  execute(rawContent: string): Markdown {
    const matterResult = matter(rawContent);

    return new Markdown(matterResult.content.toString(), matterResult.data);
  }
}
