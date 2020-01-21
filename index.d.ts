import { MergeExclusive } from "type-fest"

type html<T extends object> = string | ((object: T) => string)

/**
 * Setup better Runkit custom value viewers.
 * @param object The object to modify.
 * @param options The options.
 * @example
 * ```
 * const kve = require("kve");
 *
 * kve(
 * 	{ a: 1, b: 2, c: 3 },
 * 	{
 * 		title: "Some Viewer",
 * 		html: obj =>
 * 			Object.entries(obj)
 * 				.map(([name, value]) => `${name}: ${value}`)
 * 				.join("<br>")
 * 	}
 * );
 * ```
*/
declare function kve<T extends object>(object: T, options: MergeExclusive<{
	/** The HTML of the value viewer. */
	html: html<T>
}, {
	/** The HTML of the value viewer. */
	HTML: html<T>
}> & {
	/**
	 * The title of the value viewer.
	 * @default "Custom Viewer"
	*/
	title?: string

	/**
	 * Mutate the provided object.
	 * @default false
	*/
	mutate?: boolean
}): T

export = kve
