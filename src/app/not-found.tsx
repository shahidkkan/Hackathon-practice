import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-8">
            <h2 className="text-8xl font-bold ">404 Not Found</h2>
            <span className="text-sm">Your visited page not found. You may go home page.</span>
            <Link href='/'>
                <Button variant={'secondary'} size={'lg'}>Go Home</Button>
            </Link>
        </div>
    )
}

export default NotFound