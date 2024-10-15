import type { UserFactoryService } from "application/user/services/user-factory.service";
import type { User } from "domain/user/entities/user.entity";
import type { ICreateUser } from "domain/user/interface/create-user.interface";
import type { IUserRepository } from "domain/user/repositories/user.repository.interface";
import { CreateUserUseCase } from "./create-user.use-cases";

describe("CreateUserUseCase", () => {
	let createUserUseCase: CreateUserUseCase;
	let mockUserRepository: jest.Mocked<IUserRepository>;
	let mockUserFactoryService: jest.Mocked<UserFactoryService>;

	beforeEach(() => {
		mockUserRepository = {
			create: jest.fn(),
		} as unknown as jest.Mocked<IUserRepository>;

		mockUserFactoryService = {
			create: jest.fn(),
		} as unknown as jest.Mocked<UserFactoryService>;

		createUserUseCase = new CreateUserUseCase(mockUserRepository, mockUserFactoryService);
	});

	it("Should create a user and save it in the repository", async () => {
		const params = {
			email: "contact@example.com",
			password: "!Password1234",
		} as unknown as ICreateUser;

		const user = {
			uuid: "2999b17d-cc62-44d9-97fc-dd9d303cb27a",
			email: "contact@example.com",
			hashPassword:
				"6f33e739c7bca2c150a868ba0c1606eb0e45a3ae5d35388ea88eae0f82a2a2b23194ced08967be4c7b262a30dbc8e34969c0af08975ace1e434fb43461320ef9",
		} as unknown as User;

		mockUserFactoryService.create.mockReturnValue(user);

		await createUserUseCase.execute(params);

		expect(mockUserFactoryService.create).toHaveBeenCalledWith(params);
		expect(mockUserRepository.create).toHaveBeenCalledWith(user);
	});
});
