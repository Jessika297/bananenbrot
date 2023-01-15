import Link from "next/link";

export default function HeadMenu() {
    return (
        <div>
            <div className={"space-x-1.5"}>
                <Link href="/">Home</Link>
                <Link href="/presence">Presence</Link>
            </div>
            <div className={"space-x-1.5"}>
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </div>
    )
}