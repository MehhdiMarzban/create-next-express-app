import { getMethod } from "../services/configAxios";

export const useUserSession = async () => {
    const session = ["loading", {}];
    try {
        const {
            data: { data: user },
        } = await getMethod("/api/current-user");
        if (user) {
            return ["authorized", user];
        }
    } catch (e) {
        return ["unauthorized", undefined];
    }
    return session;
};
