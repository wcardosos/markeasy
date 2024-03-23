export class Hast<SyntaxTree> {
  constructor(private _syntaxTree: SyntaxTree) {}

  get syntaxTree() {
    return this._syntaxTree;
  }
}
