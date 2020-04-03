"use strict"

const { ValueViewerSymbol } = require("@runkit/value-viewer")
const is = require("@sindresorhus/is")

const { assert } = is

module.exports = (object, { html, title = "Custom Viewer", mutate = false }) => {
	assert.object(object)
	assert.boolean(mutate)
	assert.any([is.function, is.string], title)
	assert.any([is.function, is.string], html)

	if (is.function_(title)) {
		title = title(object)
	}

	if (is.function_(html)) {
		html = html(object)
	}

	const object_ = mutate ? object : ({ ...object })
	Object.defineProperty(object_, ValueViewerSymbol, {
		value: { title, HTML: html }
	})
	return object_
}
