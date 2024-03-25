import { Button } from "@/components/ui/button"
import { CopyIcon } from "@radix-ui/react-icons";
import { Copy } from 'lucide-react';


export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    // img: (props) => (
    //   <Image
    //     sizes="100vw"
    //     style={{ width: '100%', height: 'auto' }}
    //     {...props}
    //   />
    // ),
    // Customizing the code block component with Tailwind CSS classes and language name
    pre: ({ children, style }) => {
      // access the programming language of the code block
      const { 'data-language': dataLanguage } = children.props;

      return (
        <div className="relative not-prose p-4 rounded-md font-mono group">
          {/* <Button className="invisible group-hover:visible group-hover:ease-in transition-opacity ease-out duration-300 absolute top-6 right-6 p-2 z-10" variant="ghost" size="icon" >
            <Copy className="text-" size={16} strokeWidth={2} />
            <span className="sr-only">Copy codeblock</span>
          </Button> */}
          <pre className="text-sm relative p-2 pr-10 border-[2px] rounded-md overflow-scroll bg-[#eff1f5] dark:bg-[#1e1e2e] " style={style}>
            {children}
          </pre>
        </div>
      );
    },
    // Customizing the code block component with Tailwind CSS classes and language name
    // code: ({ children, className }) => {
    //   // Extracting language from className
    //   const language = className && className.replace('language-', '');

    //   return (
    //     <div className="not-prose bg-gray-100 p-4 rounded-md overflow-auto font-mono">
    //       {/* Rendering language if available */}
    //       {language && <div className="text-sm font-semibold mb-2">{language}</div>}
    //       <pre><code className={className}>{children}</code></pre>
    //     </div>
    //   );
    // },
    ...components,
  }
}