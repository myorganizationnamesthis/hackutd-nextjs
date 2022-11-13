import { useUser } from "../firebase/useUser";
import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import { initFirebase, db } from "../firebase/clientApp";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

initFirebase();

export default function Dashboard() {
    const Router = useRouter();
    const { user } = useUser();
    const [resumes, setResumes] = useState([]);

    const handlePageLoad = async () => {
        if (user) {
            const cRef = collection(db, "users", user.id, "resumes");
            const docs = await getDocs(cRef);
            if (!docs.empty) {
                const data = docs.docs.map(doc => doc.data());
                setResumes(data);
            }
        }
    }

    useEffect(() => {
        handlePageLoad();
    }, [user])
    return (<>
        <Head>
            <title>Upload | CONNEQT</title>
        </Head>
        <div className="ml-4">
            <h1 className="text-6xl font-bold">Dashboard</h1>
            <p className="text-highlight mt-4 text-xl">Hello, {user?.name}!</p>
            {resumes.length > 0 ? <p className="text-highlight mt-4 text-xl">You have {resumes.length} resume{resumes.length > 1 ? "s" : ""} uploaded.</p> : <p className="text-highlight mt-4 text-xl">You have no resumes uploaded.</p>}
            <button className="block bg-secondary px-4 py-2 mt-4 rounded text-highlight disabled:opacity-50" onClick={() => Router.push("/upload")}>Add resumes</button>
        </div>
    </>

    );
}