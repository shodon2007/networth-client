type Mods = Record<string, boolean> 

function classNames(cls: string, mods: Mods = {}, additional: string[] = []) {
	return [
		cls,
		...Object.entries(mods).filter(([, value]) => value).map(([key]) => key),
		...additional,
	].join(" ");
}

export default classNames;