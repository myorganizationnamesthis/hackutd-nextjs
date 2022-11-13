import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { initFirebase } from "./clientApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { removeUserCookie, setUserCookie, getUserFromCookie } from "./cookies";
import { mapUserData } from "./userData";

initFirebase();

const useUser = () => {
    const [user, setUser] = useState();
    const router = useRouter();
    const auth = getAuth();

    const logout = async () => {
        try {
            await auth.signOut();
            removeUserCookie();
            router.push("/auth");
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        const cancelAuthListener = onAuthStateChanged(auth, (u) => {
            if (u) {
                const userData = mapUserData(u);
                setUser(userData);
            } else {
                setUser();
            }
        });

        return () => cancelAuthListener();
    }, []);

    return { user, logout };
}

export { useUser };