interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

export default function WorkSpaceIdPage({ params }: WorkspaceIdPageProps) {
  return <div>ID: {params.workspaceId}</div>;
}
