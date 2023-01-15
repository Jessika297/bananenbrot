import Head from "next/head";
import HeadMenu from "../components/headMenu";
import LoginComponent from "../components/login/loginComponent";

export default function Login() {
    return (
        <>
            <Head>
                <title>Bananenbrot</title>
            </Head>
            <HeadMenu/>
            <main>
              <LoginComponent/>
            </main>
        </>
    )
}