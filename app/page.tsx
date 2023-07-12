import monaco from "monaco-editor";

export default function Home() {
  monaco.editor.create(document.getElementsByTagName("main")[0], {
    value,
    language: "javascript",
    automaticLayout: true,
  });

  return <main>hi</main>;
}
