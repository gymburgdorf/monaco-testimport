import { loadMonaco } from "./loadMonaco";

const monacoEditor = await loadMonaco()

export class Editor {
    static async create(element: HTMLElement) {
        const editor = monacoEditor.create(element, {
            value: `function x() {return 2}`,
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true
        });
        // set the editor height based on the number of lines
        var lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
        var lineCount = editor.getModel()!.getLineCount();
        var height = lineHeight * lineCount;
        editor.getDomNode()!.style.height = height + 10 + 'px';
        return editor
    }
}