import Link from "next/link";
import { Button, Space } from 'antd';



const HomePage = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <Button type="primary">Primary Button</Button>
      <br />
      <hr />
      <p>Catch all routes</p>
      <Link href="/news">Nested news home page </Link><br /><br />
      <Link href="/news/1">/news/1</Link><br /><br />
      <Link href="/news/1/ddd">/news/1/anything catch routes</Link><br /><br />
      <hr />
      <br />
      <p>Dynamic routing of Products</p>
      <Link href="/products">Nested Products home page </Link><br /><br />
      <Link href="/products/1">Dynamic /products/1 </Link><br /><br />
      <Link href="/products/kjkj">Dynamic /products/kjkj </Link><br /><br />

      <hr />
      <p>Nested routing</p>
      <br />
      <Link href="/article/news">Nested news page</Link><br /><br />
      <Link href="/article/blog">Nested Blog page</Link><br /><br />
      <Link href="/article">Article main page</Link><br /><br />
      <Link href="/article/posts">Nested posts page</Link><br /><br />
      <Link href="/article/posts/post">Nested post page</Link><br /><br />
      <hr />
      <p>File base routing</p>
      <Link href="/about">About page</Link>
      <br />
      <Link href="/contact">Contact page</Link>
    </div>
  );
};

export default HomePage;