import { Greeting } from "@/components/Header/Greeting";
import { Settings } from "@/components/Header/Settings";

export function Header() {
    return (
            <header className='w-full flex gap-4'>
                <Greeting />
                <Settings />
            </header>
    )
}
