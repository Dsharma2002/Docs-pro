import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Click <Link href="/documents"><span>here</span></Link> to view documents.
    </div>
  );
};

export default Home;
