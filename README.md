# Next.js Notes

## Getting Started

Creating a new Next.js Project

```bash
npx create-next-app@latest .
```

First, run the development server:

```bash
npm run dev
```

## Revalidating Content and fetching data every one hour

- On demand content revalidation
- Automatic revalidation of pages when data changes
- Automatic revalidation of pages when data changes after one hour

Solution One:

```tsx
export const revalidate = 3600;

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
```

Solution Two:

```tsx
export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog", {
    next: { revalidate: 3600 },
  });
  const posts = await data.json();

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
```
