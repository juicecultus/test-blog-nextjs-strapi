import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'travel', id: 111 },
  { name: 'fashion', id: 112 },
  { name: 'kitchen', id: 113 },
];

export default function Header() {
  return (
    <>
      <h2>
        <Link href='/'>
          <a>alldadstalk</a>
        </Link>
      </h2>
      <div>
        <nav>
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.id}`} href='/category/[id]'>
                    <a>{category.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
