import { useRouter } from "next/router";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { initFirebase, db } from "../../firebase/clientApp";
import { useUser } from "../../firebase/useUser";

initFirebase();

export default function Card() {
    const { user } = useUser();
    const router = useRouter();
    const { cardId } = router.query;
    const [resume, setResume] = useState();
    const [processing, setProcessing] = useState(false);

    const handleUpdate = async () => {
        if (user) {
            setProcessing(true);
            if (typeof resume?.skills === "string") {
                resume.skills = resume.skills.split(",");
            }
            const docRef = doc(db, "users", user.id, "resumes", cardId);
            await setDoc(docRef, resume);
            router.push("/dashboard");
        }
    }

    const handlePageLoad = async () => {
        const docRef = doc(db, "users", user.id, "resumes", cardId);
        const resDoc = await getDoc(docRef);
        if (resDoc.exists()) {
            console.log("Document data:", resDoc.data());
            setResume(resDoc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        console.log(user);
        if (user)
            handlePageLoad();
    }, [user])

    return (<>
        {user ?
            <main className="ml-4">
                <h1 className="text-6xl font-bold mt-2">Resume Data</h1>
                <button className="block bg-secondary px-4 py-2 mt-8 rounded text-highlight disabled:opacity-50" onClick={() => router.push(`/users/${user.id}/resumes/${cardId}`)} disabled={processing}>View Published Card</button>
                <div className="text-primary text-xl my-4">Update resume info</div>
                <div className="max-w-[50%]">
                    {typeof resume === "object" ? Object.keys(resume).map((k, index) => {
                        if (k === "resume") return;
                        return <div key={index} className="flex flex-col mb-3">
                            <label className="text-xl font-bold">{`${k}: `}</label>
                            <input className="block w-full bg-secondary border-0 rounded ml-4 mt-2 px-4 py-2 cursor-pointer" type="text" value={resume[k]} onChange={(e) => {
                                const newAiResponse = { ...resume };
                                newAiResponse[k] = e.target.value;
                                setResume(newAiResponse);
                            }} />
                        </div>
                    }) : null}
                    <div className="flex">
                        <button className="block bg-secondary px-4 py-2 mx-4 mt-8 rounded text-highlight disabled:opacity-50" onClick={() => router.push("/dashboard")}>Back</button>
                        <button className="block bg-secondary px-4 py-2 mt-8 rounded text-highlight disabled:opacity-50" onClick={handleUpdate} disabled={processing}>Update</button>
                    </div>
                </div>
            </main> : null}
    </>);
}