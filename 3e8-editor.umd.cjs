(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t["3e8-editor"]={}))})(this,function(t){"use strict";var b=Object.defineProperty;var v=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var r=(t,e,o)=>(v(t,typeof e!="symbol"?e+"":e,o),o);function e(d){return new Promise((n,s)=>{const i=document.createElement("script");i.src=d,i.onload=n,i.onerror=s,document.head.appendChild(i)})}const o="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs";document.head.insertAdjacentHTML("beforeend",`
    <link rel="stylesheet"
    data-name="vs/editor/editor.main"
    href="${o}/editor/editor.main.min.css">
`);async function c(){await e(`${o}/loader.min.js`);const d=window.require;return d.config({paths:{vs:o}}),new Promise(n=>{d(["vs/editor/editor.main"],()=>{n(monaco.editor)})})}let m=c();const l=`function x() {
    let a = 1
    let b = 2
    return a + b
}`;class a{constructor(n,s){r(this,"editorState");r(this,"pythonCodeCheckWorker");r(this,"pythonCodeCheckWorkerBusy");r(this,"parserTimeout");r(this,"monacoEditor");this.editorState=Object.assign({element:document.getElementById("editor")||document.createElement("div"),mode:"python",theme:"dark",fontSize:18,code:"",readOnly:!1,disableSelect:!1,showLineNumbers:!["html","css","svg"].includes(n.mode||""),minLines:4,showInvisibles:n.mode==="python",maxLines:20,showGutter:!0},n);const{code:i,element:h,minLines:w,maxLines:E,theme:C,mode:L,showGutter:u,showLineNumbers:f,readOnly:S,fontSize:j,showInvisibles:O}=this.editorState;this.monacoEditor=s.create(h,{value:l,language:"javascript",theme:"vs-dark",automaticLayout:!0,...(!u||!f)&&{lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0},renderLineHighlight:"none"});var p=this.monacoEditor.getOption(monaco.editor.EditorOption.lineHeight),y=this.monacoEditor.getModel().getLineCount(),g=p*y;this.monacoEditor.getDomNode().style.height=g+10+"px"}static async create(n){let s=await m;return new a(n,s)}}t.Editor=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
