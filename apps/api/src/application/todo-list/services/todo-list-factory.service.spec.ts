import { Uuid } from "domain/shared/value-objects/uuid.vo";
import { TodoList } from "domain/todo-list/entities/todo-list.entity";
import type { ICreateTodoList } from "domain/todo-list/interfaces/create-todo-list.interface";
import { TodoListFactoryService } from "./todo-list-factory.service";

describe("TodoListFactoryService", () => {
	let todoListFactoryService: TodoListFactoryService;

	beforeEach(() => {
		const mockUuidService = {
			generateV4: jest.fn().mockReturnValue("3b70c153-3029-4cee-bb59-3ce5b4e63ec5"),
		};

		todoListFactoryService = new TodoListFactoryService(mockUuidService);
	});

	describe("create", () => {
		it("should create a new TodoList with the given parameters", () => {
			const createTodoListParams: ICreateTodoList = {
				title: "My Todo List",
				ownerUuid: "4a70d153-4029-5dee-cb59-4ce5b4e63ec6",
			};

			const todoList = todoListFactoryService.create(createTodoListParams);

			expect(todoList).toBeInstanceOf(TodoList);
			expect(todoList.uuid).toEqual(new Uuid("3b70c153-3029-4cee-bb59-3ce5b4e63ec5"));
			expect(todoList.title).toEqual(createTodoListParams.title);
			expect(todoList.ownerUuid).toEqual(new Uuid(createTodoListParams.ownerUuid));
			expect(todoList.todos).toBeInstanceOf(Map);
			expect(todoList.todos.size).toBe(0);
		});
	});
});
