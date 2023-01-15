import Head from "next/head";
import HeadMenu from "../components/headMenu";
import Link from "next/link";

export default function Login() {

    function addPresenceInput() {
        return true
    }

    return (
        <>
            <Head>
                <title>Bananenbrot</title>
            </Head>
            <HeadMenu/>
            <main className={"font-bold"}>
                <div className={"grid grid-cols-12 gap-2"}>
                <form className={"col-span-5"}>
                    <label>Enter your name:
                        <input className={"bg-gray-400 rounded-md"} type="text"/>
                    </label>
                </form>
                    <button className={"col-span-1 bg-blue-400 rounded-md"}>+</button>
                    <div className={"col-span-1 text-center"}>count</div>
                    <button className={"col-span-1  bg-blue-400 rounded-md"}>-</button>
                <button className={"bg-blue-400 rounded-md font-normal"} onClick={addPresenceInput()}>submit</button>
                </div>
            </main>
        </>
    )
}