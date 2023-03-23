/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.36.1(6c56744c3419458f0dd48864520b759d1a3a1ca8)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var e = {
  comments: {
    lineComment: "REM"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ],
  surroundingPairs: [
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*(::\\s*|REM\\s+)#region"),
      end: new RegExp("^\\s*(::\\s*|REM\\s+)#endregion")
    }
  }
}, s = {
  defaultToken: "",
  ignoreCase: !0,
  tokenPostfix: ".bat",
  brackets: [
    { token: "delimiter.bracket", open: "{", close: "}" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],
  keywords: /call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,
  symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [/^(\s*)(rem(?:\s.*|))$/, ["", "comment"]],
      [/(\@?)(@keywords)(?!\w)/, [{ token: "keyword" }, { token: "keyword.$2" }]],
      [/[ \t\r\n]+/, ""],
      [/setlocal(?!\w)/, "keyword.tag-setlocal"],
      [/endlocal(?!\w)/, "keyword.tag-setlocal"],
      [/[a-zA-Z_]\w*/, ""],
      [/:\w*/, "metatag"],
      [/%[^%]+%/, "variable"],
      [/%%[\w]+(?!\w)/, "variable"],
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, "delimiter"],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
      [/\d+/, "number"],
      [/[;,.]/, "delimiter"],
      [/"/, "string", '@string."'],
      [/'/, "string", "@string.'"]
    ],
    string: [
      [
        /[^\\"'%]+/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/%[\w ]+%/, "variable"],
      [/%%[\w]+(?!\w)/, "variable"],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/$/, "string", "@popall"]
    ]
  }
};
export {
  e as conf,
  s as language
};
