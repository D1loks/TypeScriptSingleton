import { expect, it } from "@jest/globals";
import { AppController, getModuleSingleton, MenuController, myModule, TableController } from "../index";

it("Should create a singleton for the MenuController", () => {
  const firstInstance = getModuleSingleton(myModule, MenuController);
  const secondInstance = getModuleSingleton(myModule, MenuController);
  expect(firstInstance).toBe(secondInstance);
});

it("Should create a singleton for the AppController", () => {
  const firstInstance = getModuleSingleton(myModule, AppController);
  const secondInstance = getModuleSingleton(myModule, AppController);
  expect(firstInstance).toBe(secondInstance);
});

it("Make sure that TableController and MenuController use the same instance of DBConnectorService", () => {
  const tableController = getModuleSingleton(myModule, TableController) as TableController;
  const menuController = getModuleSingleton(myModule, MenuController) as MenuController;
  expect(tableController.workerService.dbConnectorService).toBe(menuController.chefService.dbConnectorService);
});
