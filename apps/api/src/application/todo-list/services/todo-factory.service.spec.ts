import { Uuid } from "domain/shared/value-objects/uuid.vo";
import { Todo } from "domain/todo-list/entities/todo.entity";
import type { ICreateTodo } from "domain/todo-list/interfaces/create-todo.interface";
import { TodoFactoryService } from "./todo-factory.service";

describe("TodoFactoryService", () => {
	let todoFactoryService: TodoFactoryService;

	beforeEach(() => {
		const mockUuidService = {
			generateV4: jest.fn().mockReturnValue("3b70c153-3029-4cee-bb59-3ce5b4e63ec5"),
		};

		todoFactoryService = new TodoFactoryService(mockUuidService);
	});

	describe("create", () => {
		it("should create a new Todo with the given parameters", () => {
			const createTodoParams: ICreateTodo = {
				title: "Test",
				description: "This is a test",
			};

			const todo = todoFactoryService.create(createTodoParams);

			expect(todo).toBeInstanceOf(Todo);
			expect(todo.uuid).toEqual(new Uuid("3b70c153-3029-4cee-bb59-3ce5b4e63ec5"));
			expect(todo.title).toEqual(createTodoParams.title);
			expect(todo.description).toEqual(createTodoParams.description);
			expect(todo.isDone).toEqual(false);
		});
	});
});
