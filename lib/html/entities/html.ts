export class Html {
  constructor(
    private _content: string,
    private _metadata: unknown,
  ) {}

  get content() {
    return this._content;
  }

  get metadata() {
    return this._metadata;
  }
}
