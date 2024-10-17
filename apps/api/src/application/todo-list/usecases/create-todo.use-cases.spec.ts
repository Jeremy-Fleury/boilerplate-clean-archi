import type { TodoFactoryService } from "application/todo-list/services/todo-factory.service";
import type { Todo } from "domain/todo-list/entities/todo.entity";
import type { ICreateTodo } from "domain/todo-list/interfaces/create-todo.interface";
import type { ITodoRepository } from "~/domain/todo-list/repositories/todo.repository.interface";
import { CreateTodoUseCase } from "./create-todo.use-cases";

describe("CreateTodoUseCase", () => {
	let createTodoUseCase: CreateTodoUseCase;
	let todoRepository: jest.Mocked<ITodoRepository>;
	let todoFactoryService: jest.Mocked<TodoFactoryService>;

	beforeEach(() => {
		todoRepository = { create: jest.fn() } as unknown as jest.Mocked<ITodoRepository>;
		todoFactoryService = { create: jest.fn() } as unknown as jest.Mocked<TodoFactoryService>;
		createTodoUseCase = new CreateTodoUseCase(todoRepository, todoFactoryService);
	});

	it("should create a new todo", async () => {
		const createTodoParams = { property: "value" } as unknown as ICreateTodo;
		const createdTodo = { property: "value" } as unknown as Todo;

		todoFactoryService.create.mockReturnValue(createdTodo);
		todoRepository.create.mockResolvedValue(createdTodo);

		const todo = await createTodoUseCase.execute(createTodoParams);

		expect(todoFactoryService.create).toHaveBeenCalledWith(createTodoParams);
		expect(todoRepository.create).toHaveBeenCalledWith(createdTodo);
		expect(todo).toEqual(createdTodo);
	});
});
