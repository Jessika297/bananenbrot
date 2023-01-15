import Head from "next/head";
import HeadMenu from "../components/headMenu";
import RegisterComponent from "../components/register/registerComponent";

export default function Register() {
    return (
        <>
            <Head>
                <title>Bananenbrot</title>
            </Head>
            <HeadMenu/>
            <main className={"font-bold"}>
                <RegisterComponent/>
            </main>
        </>
    )
}