type Mods = Record<string, boolean>;
type additional = string | undefined;

function classNames(
	cls: string,
	mods: Mods = {},
	additional: additional[] = [],
) {
	return [
		cls,
		...Object.entries(mods)
			.filter(([, value]) => value)
			.map(([key]) => key),
		...additional.filter((el) => el),
	].join(" ");
}

export default classNames;
