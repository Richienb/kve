const test = require("ava")
const kve = require(".")

test("main", t => {
	t.snapshot(kve(
		{ a: 1, b: 2, c: 3 },
		{
			title: "Some Viewer",
			html: object =>
				Object.entries(object)
					.map(([name, value]) => `${name}: ${value}`)
					.join("<br>")
		}
	))
})
