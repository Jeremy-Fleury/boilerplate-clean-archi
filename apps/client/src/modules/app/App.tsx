import { Configuration, UserApi } from "@org/api-client";
import { useCallback, useEffect } from "react";

function App() {
	const openapiConfig = new Configuration();
	const userApi = new UserApi(openapiConfig);

	const fetchUser = useCallback(async () => {
		const { data } = await userApi.userControllerGetUserByEmail("contact@exemple.com");
		console.log(data);
	}, [userApi]);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return <div>React</div>;
}

export default App;
