import Link from "next/link";


const HomePage = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <Link href="/about">About page</Link>
      <br />
      <Link href="/contact">Contact page</Link>
    </div>
  );
};

export default HomePage;