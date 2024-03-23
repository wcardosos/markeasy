export const metadata = '---\ntitle: test\n---\n';
export const markdownContent = '# Testing Markdown\nThis is a markdown file.';
export const gfmMarkdownContent = `| Notação    | Definição        | Identificação                                                         | Avaliação |
| ---------- | ---------------- | --------------------------------------------------------------------- | --------- |
| O(1)       | Constante        | Não possui loops                                                      | Excelente |
`;
export const htmlContent = `<h1>Testing Markdown</h1>\n<p>This is a markdown file.</p>`;
export const mdastObject = {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Testing Markdown',
          position: {
            start: {
              line: 1,
              column: 3,
              offset: 2,
            },
            end: {
              line: 1,
              column: 19,
              offset: 18,
            },
          },
        },
      ],
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 1,
          column: 19,
          offset: 18,
        },
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is a markdown file.',
          position: {
            start: {
              line: 2,
              column: 1,
              offset: 19,
            },
            end: {
              line: 2,
              column: 25,
              offset: 43,
            },
          },
        },
      ],
      position: {
        start: {
          line: 2,
          column: 1,
          offset: 19,
        },
        end: {
          line: 2,
          column: 25,
          offset: 43,
        },
      },
    },
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0,
    },
    end: {
      line: 2,
      column: 25,
      offset: 43,
    },
  },
};
export const hastObject = {
  type: 'root',
  children: [
    {
      type: 'element',
      tagName: 'h1',
      properties: {},
      children: [
        {
          type: 'text',
          value: 'Testing Markdown',
          position: {
            start: {
              line: 1,
              column: 3,
              offset: 2,
            },
            end: {
              line: 1,
              column: 19,
              offset: 18,
            },
          },
        },
      ],
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 1,
          column: 19,
          offset: 18,
        },
      },
    },
    {
      type: 'text',
      value: '\n',
    },
    {
      type: 'element',
      tagName: 'p',
      properties: {},
      children: [
        {
          type: 'text',
          value: 'This is a markdown file.',
          position: {
            start: {
              line: 2,
              column: 1,
              offset: 19,
            },
            end: {
              line: 2,
              column: 25,
              offset: 43,
            },
          },
        },
      ],
      position: {
        start: {
          line: 2,
          column: 1,
          offset: 19,
        },
        end: {
          line: 2,
          column: 25,
          offset: 43,
        },
      },
    },
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0,
    },
    end: {
      line: 2,
      column: 25,
      offset: 43,
    },
  },
};
