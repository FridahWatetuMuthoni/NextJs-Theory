import React from "react";

type Post = {
  title: string;
  description: string;
  body: string;
};

/*
props looks like this: 
props = {
data:[
    { title: 'Title1', description: 'Description1', body: 'Body1' },
    { title: 'Title2', description: 'Description2', body: 'Body2' },
    { title: 'Title3', description: 'Description3', body: 'Body3' },
    { title: 'Title4', description: 'Description4', body: 'Body4' }
]
}
*/
const ExampleComponent = ({ data }: { data: Post[] }) => {
  return (
    <div>
      {data.map((post, index) => (
        <div key={index}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

function MyComponent() {
  const data: Post[] = [
    {
      title: "Title1",
      description: "Description1",
      body: "Body1",
    },
    {
      title: "Title2",
      description: "Description2",
      body: "Body2",
    },
    {
      title: "Title3",
      description: "Description3",
      body: "Body3",
    },
    {
      title: "Title4",
      description: "Description4",
      body: "Body4",
    },
  ];
  return (
    <div>
      <ExampleComponent data={data} />
    </div>
  );
}

export default MyComponent;
