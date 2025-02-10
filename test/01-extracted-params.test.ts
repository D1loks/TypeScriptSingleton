import { expect, it } from "@jest/globals";
import { getExtractedParamTypes, AppController } from "../index";

it("Should extract the param types from the AppController", () => {
  expect(getExtractedParamTypes(AppController)).toEqual(['AppService', 'AdService']);
});
