import { Editor } from "./editor";

interface documentIdPageParams {
  params: Promise<{ documentID: string }>;
}

const DocumentIdPage = async ({ params }: documentIdPageParams) => {
  const { documentID } = await params;

  return (
    <div>
        <h1>Document ID: {documentID}</h1>
      <div className="min-h-screen bg-[#FAFBFD]">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIdPage;
