import Link from "next/link";

export function NavBar() {
    return (
        <div className="bg-background text-primary py-4">
            <ul className="flex flex-row">
                <li className="mr-24 text-4xl font-bold">
                    <Link href="/">CONNEQT</Link>
                </li>
                <li className="grow" />
                <li className="mx-6 text-2xl font-bold my-auto">
                    <Link href="/about">About</Link>
                </li>
                <li className="mx-6 text-2xl font-bold my-auto">
                    <Link href="/Contact">Contact</Link>
                </li>
                <li className="mr-8 ml-6 text-2xl font-bold my-auto">
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}