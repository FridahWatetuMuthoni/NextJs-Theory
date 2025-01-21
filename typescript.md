# Typescript Theory

## Basic TypeScript Syntax

Primitive Types:

- string
- number
- boolean
- null
- undefined

```typescript
const message: string = "Hello, TypeScript";
const age: number = 25;
const isAdmin = true; // TypeScript infers boolean
```

## Interfaces and Types

- Interface

```typescript
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional property
}
const user: User = { name: "Alice", age: 30 };
```

- Type

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};
```

## Functions and Typing

Learn to type function parameters and return values.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
```

## Generics

Handle reusable components with different types.

- Generic Functions

```typescript
function identity<T>(value: T): T {
  return value;
}
```

- Generic Interfaces

```typescript
interface ApiResponse<T> {
  data: T;
  error?: string;
}

type ApiReponse<Data> = {
  data: Data;
  isError: boolean;
};

const response: ApiResponse = {
  data: {
    name: "Kyle",
    age: 28,
  },
  isError: false,
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
const response: UserResponse = {
  data: {
    name: "Kyle",
    age: 28,
  },
  isError: false,
};
```

## Unions and Intersections

- Unions

```typescript
let result: string | number;
```

- Intersection

```typescript
type Employee = User & { salary: number };
```

## Type Assertion

Inform TypeScript about the type of a value when it can’t infer it.

```typescript
const input = document.getElementById("name") as HTMLInputElement;
```

## Advanced TypeScript for Next.js

### Utility Types: Partial<T>, Pick<T>, Omit<T>, etc.

```typescript
type PartialUser = Partial<User>;
```

### enums

```typescript
enum Status {
  Active,
  Inactive,
  Pending,
}
```

### Discriminated Unions

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };
```

## Typescript and React Code

Passing functions

Parent Page

```jsx
import Button2 from "./components/Button2";

export default function Home() {
  const styles = {
    backgroundColor: "green",
    fontSize: "30px", // Changed to a string with units
    color: "white",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <section>
      <Button backgroundColor="red" fontSize="30px" color="white" />
      <Button2 styles={styles} handleClick={handleClick} />
    </section>
  );
}
```

Child Page

```jsx
type ButtonProps = {
  backgroundColor: string,
  fontSize: string, // fontSize as a string for proper style usage
  color: string,
};

function Button2({
  styles,
  handleClick,
}: {
  styles: ButtonProps,
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}) {
  return (
    <div>
      <button onClick={handleClick} style={styles}>
        Hello World
      </button>
    </div>
  );
}

export default Button2;
```

Passing React Children

```jsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode,
};

export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
```
