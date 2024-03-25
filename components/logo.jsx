import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Terminal } from 'lucide-react';



export async function Logo() {

    return (
        <div className="flex flex-row items-end my-4">
            <Terminal className="mr-1.5 mb-0.5" size={24} strokeWidth={2}/>
            <h1 className="text-xl font-medium">Luca Grippa</h1>
            {/* <Button className="my-4 text-xl" variant="secondary" >Luca Grippa</Button> */}
        </div>
    )
}