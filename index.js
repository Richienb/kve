"use strict"

const { ValueViewerSymbol } = require("@runkit/value-viewer")
const { default: ow } = require("ow")
const { default: is } = require("@sindresorhus/is")

module.exports = (object, { HTML, html, title = "Custom Viewer", mutate = false }) => {
	ow(object, ow.object)
	ow(mutate, ow.boolean)
	ow(title, ow.any(ow.function, ow.string))
	html = HTML || html
	ow(html, ow.any(ow.function, ow.string))

	if (is.function_(title)) title = title(object)
	if (is.function_(html)) html = html(object)

	const obj = mutate ? object : ({ ...object })
	Object.defineProperty(obj, ValueViewerSymbol, {
		value: { title, HTML: html },
	})
	return obj
}
