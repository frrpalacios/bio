import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customizar componentes MDX
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold mb-8 text-ink-950">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold mt-12 mb-6 text-ink-950">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-semibold mt-10 mb-4 text-ink-900">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-6 text-ink-800">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-gold pl-6 italic my-8 text-ink-700">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-ink-800">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-ink-800">{children}</ol>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-cream-400 bg-cream-200 px-4 py-3 text-left font-semibold text-ink-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-cream-300 px-4 py-3 text-ink-800">{children}</td>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent-sage hover:text-accent-sage/80 font-medium underline decoration-accent-sage/30 underline-offset-4 hover:decoration-accent-sage transition-all"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  }
}
