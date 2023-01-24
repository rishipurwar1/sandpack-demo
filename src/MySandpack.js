import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

export default function MySandpack() {
  return (
    <SandpackProvider>
      <SandpackLayout>
        <SandpackCodeEditor
          showTabs
          showLineNumbers
          showInlineErrors
          wrapContent
          closableTabs
        />
        <SandpackPreview showNavigator />
        <SandpackConsole />
      </SandpackLayout>
    </SandpackProvider>
  );
}
