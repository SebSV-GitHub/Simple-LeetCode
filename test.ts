import fs from "node:fs";
import implementation from "./index";

const cases = fs.readFileSync("./cases.txt").toString("utf-8");

describe("Cases", () => {
	cases
		.split("\n")
		.filter((c) => c !== "")
		.forEach((c) => {
			const { inputValue, expectedResult } = splitter(c);

			const result = implementation((<unknown>inputValue) as string);

			it(`input ${inputValue} should return ${expectedResult}`, () => {
				expect(result).toBe(expectedResult);
			});
		});
});

function splitter(values: string) {
	const [input, result] = values.split(",");
	return {
		inputValue: input,
		expectedResult: Number(result),
	};
}
