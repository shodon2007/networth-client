import globalEnv from "src/shared/config/global-variables";

const getAvatarUrl = (avatar_id: string = "default.png") => {
	return `${globalEnv.API_URL}/api/file/avatar/${avatar_id}`;
};

export default getAvatarUrl;
