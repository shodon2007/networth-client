import classNames from "./classNames";

describe("Testing classNames", () => {
	test("testing 1 arg", () => {
		expect(classNames("hello")).toBe("hello");
		expect(classNames("")).toBe("");
	});
	test("testing 1,2 arg", () => {
		expect(classNames("hello", {shodon: true, pro: false})).toBe(
			"hello shodon",
		);
		expect(classNames("hello", {})).toBe("hello");
		expect(classNames("hello", {hi: false})).toBe("hello");
	});
	test("testing 1,2,3 arg", () => {
		expect(
			classNames("hello", {hi: true, no: false, s: true}, ["megapro"]),
		).toBe("hello hi s megapro");
		expect(classNames("", {}, [])).toBe("");
	});
});
