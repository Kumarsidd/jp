import { useDispatch } from "react-redux";
import { fetchMenuStart, fetchMenuSuccess, fetchMenuFailure } from "@/store/reducers/menuSlice";
import { useQuery } from "@tanstack/react-query"; // Assuming you're using React Query
import { getById } from "@/services/api";
import useUserInfo from "./useUserInfo";
const useFetchMenu = () => {
  const dispatch = useDispatch();
  const userInfo=useUserInfo()
  const userId = userInfo?._id;
  console.log("userid",userId)
  const { data, isLoading } = useQuery({
    queryKey: ["user/menu", userInfo],
    queryFn: async () => {
      dispatch(fetchMenuStart());
      try {
        const res = await getById("user/menu", userId);
        dispatch(fetchMenuSuccess([...res.data.data.menuItems,  {
          id: 10,
          name: "Change Password",
          icon: "la-lock",
          routePath: "/change-password",
          active: "",
         paramtype: "",
        },
        {
          id: 11,
          icon: "la-sign-out",
          name:"Logout",
          routePath: "/login",
          active: "",
         paramtype: "",
        },]));
        return res.data.data.menuItems;
      } catch (error) {
        dispatch(fetchMenuFailure(error.message));
        console.error("Error fetching menu:", error);
      }
    },
    enabled: Boolean(userId), // Only run if userId is defined
  });

  return { data, isLoading };
};

export default useFetchMenu;
