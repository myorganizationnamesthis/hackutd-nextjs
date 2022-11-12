import Head from "next/head";
import { useRef, useState } from "react";
import { NavBar } from "../components/Navbar";
import { ref } from "@firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { Modal } from "../components/Modal";
import { initFirebase, storage } from "../firebase/clientApp";
import {useUser} from "../firebase/useUser";

initFirebase();

const snowflake = Date.now().toString();

export default function Dashboard() {
    const fRef = useRef();
    const {user, logout} = useUser();
    const [uploadFile, uploading, snapshot, error] = useUploadFile();
    const [result, setResult] = useState();
    const sRef = ref(storage, snowflake + ".pdf");
    const [selectedFile, setSelectedFile] = useState();
    const [showModal, setShowModal] = useState(false);
    const [showSelectFile, setShowSelectFile] = useState(false);
    

    const upload = async () => {
        if (selectedFile?.type === "application/pdf") {
            const r = await uploadFile(sRef, selectedFile, {
                contentType: "application/pdf"
            });
            setResult(r);
            console.log(snapshot)
        }
        else {
            setShowSelectFile(true);
        }
    }

    return (
        <div>
            <Head>
                <title>Dashboard | CONNEQT</title>
            </Head>
            <NavBar />
            <main>
                <h1 className="text-6xl font-bold">Dashboard</h1>
                <div className="text-secondary text-xl">Upload your resume here!</div>
                <Modal open={showModal} setOpen={setShowModal} />

                <input accept="application/pdf" className="block w-full file:bg-secondary file:border-0 file:rounded ml-4 mt-2 file:px-4 file:py-2 file:cursor-pointer" type="file" onChange={e => {
                    const file = e.target.files ? e.target.files[0] : undefined;
                    if (file.type !== "application/pdf") {
                        e.preventDefault();
                        setShowSelectFile(true);
                    }
                    setSelectedFile(file);
                }} ref={fRef} />
                {showSelectFile ? <p className="text-error ml-4 mt-2">Please select a PDF file!</p> : null}
                <div className="flex">
                    <button className="block bg-secondary px-4 py-2 ml-4 mt-8 rounded text-highlight disabled:opacity-50" disabled={uploading} onClick={upload}>{uploading ? "Uploading..." : "Upload"}</button>
                    <button className="block bg-error px-4 py-2 ml-4 mt-8 rounded text-highlight" onClick={() => {
                        setSelectedFile();
                        fRef.current.value = "";
                        setShowSelectFile(false);
                        }}>Clear</button>
                </div>
            </main>
        </div>
    );
}