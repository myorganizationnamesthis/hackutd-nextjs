import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { initFirebase } from "./clientApp";
import { getAuth } from "firebase/auth";
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
        const cancelAuthListener = auth.onIdTokenChanged(async (user) => {
            if (user) {
                const userData = mapUserData(user);
                setUser(userData);
                setUserCookie(userData);
            }
            else {
                setUser(null);
                removeUserCookie();
            }
        });

        const cookieUser = getUserFromCookie();
        console.log(cookieUser);
        if (!cookieUser) {
            router.push("/");
            return;
        }
        setUser(cookieUser);

        return () => {
            cancelAuthListener();
        }
    }, []);

    return { user, logout };
}

export { useUser };