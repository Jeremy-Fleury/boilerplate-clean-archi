import { Configuration, UserApi } from "@org/api-client";
import type { CreateUserInputDto } from "@org/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const openapiConfig = new Configuration();
const userApi = new UserApi(openapiConfig);

export const useGetUserByEmail = (email: string) => {
	return useQuery({
		queryKey: ["user", email],
		queryFn: async () => {
			const response = await userApi.userControllerGetUserByEmail(email);
			return response.data;
		},
	});
};

export const useCreateUser = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (userData: CreateUserInputDto) => {
			await userApi.userControllerCreate(userData);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});
};
