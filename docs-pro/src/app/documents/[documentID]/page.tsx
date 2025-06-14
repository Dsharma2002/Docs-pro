interface documentIdPageParams {
  params: Promise<{ documentID: string }>;
}

const DocumentIdPage = async ({ params }: documentIdPageParams) => {
  const { documentID } = await params;

  return <div>Document ID: {documentID}</div>;
};

export default DocumentIdPage;
