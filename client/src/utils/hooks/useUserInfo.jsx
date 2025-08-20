import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { decrypt } from "@/lib/encrypt";

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState({});
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user && Object.keys(user)?.length > 0) {
            setUserInfo(JSON.parse(decrypt(user)));
        };

        return () => {
            setUserInfo({  });
        };
    }, [user]);

    return userInfo;
};

export default useUserInfo;