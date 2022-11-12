import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "../components/StyledFirebaseAuth";
import {
    getAuth,
    GoogleAuthProvider,
    EmailAuthProvider
} from "firebase/auth";
import { initFirebase } from "../firebase/clientApp";
import { mapUserData } from "../firebase/userData";
import { setUserCookie } from "../firebase/cookies";

const uiConfig = {
    signInSuccessUrl: "/",
    signInFlow: "popup",
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        }
    ],
    credentialHelper: "none",
    callbacks: {
        signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
            const userData = mapUserData(user);
            setUserCookie(userData);
        },
    },
};

initFirebase();

const auth = getAuth();

export default function Auth() {
    const [viewAuth, setViewAuth] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setViewAuth(true);
        }
    }, []);
    return (
        <div>
            {viewAuth ?
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> : null}
        </div>
    );
}