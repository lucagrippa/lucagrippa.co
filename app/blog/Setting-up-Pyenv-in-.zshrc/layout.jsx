import Utterances from '@/components/utterances'


export default async function BlogPost({ children }) {
    return (
        <>
            <article className="mx-auto py-4 sm:py-6">
                <div className="prose prose-zinc prose-sm sm:prose-base dark:prose-invert">
                {/* <div className="not-prose "> */}
                    {children}
                </div>
                {/* <div>
                    <h2 className="mt-12 mb-6 sm:mt-20 sm:mb-10 text-xl sm:text-2xl font-normal">Comments</h2>
                    <Utterances /> 
                </div> */}
            </article>
        </>
    )
}
