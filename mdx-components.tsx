import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold">{children}</h1>
  ),
};

export function useMDXComponents(): MDXComponents { 
  return components
}