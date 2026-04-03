/**
 * ASA V1.0.0
 * (c) 2026 Joseph Morukhuladi. All rights reserved.
 */

/**
 *  A lightweight character animation library.
 */
const asa = {
	/**
	 * Extracts and sanitizes data using the dataset API.
	 * @param {HTMLElement} el - The target DOM element.
	 * @returns {AsaData|null}
	 */
	getAttrData: function (el) {
		try {
			if (!(el instanceof HTMLElement))
				throw new Error("Invalid element provided.")

			const ds = el.dataset

			return {
				run: ds.asaRun === "1",
				text: ds.asaText || el.innerText || "",
				itr: ds.asaIteration || "1",
				gap: parseInt(ds.asaGap, 10) || 100,
				cls: ds.asaClass || "",
				dr: ds.asaDuration ?? 2000,
				anm: ds.asaAnimation
			}
		} catch (error) {
			console.error("ASA [getAttrData]:", error.message)
			return null
		}
	},

	/**
	 * Automatically finds and triggers all elements with the data-asa attribute.
	 */
	init: function () {
		const elements = document.querySelectorAll("[data-asa]")
		elements.forEach((el) => this.run(el))
	},

	/**
	 * Processes and triggers the character-by-character animation.
	 * @param {HTMLElement} el - The element to animate.
	 */
	run: function (el) {
		try {
			if (!el) throw new Error("Element not found")
			let data = this.getAttrData(el)
			if (!data || data.run) return

			data = this.setClass(data)
			el.ariaLabel = data.text
			el.innerHTML = ""

			const chars = [...data.text]
			const fragment = document.createDocumentFragment()

			chars.forEach((char, index) => {
				const delay = data.gap * index
				const spanElement = this.span(char, delay, data)
				if (spanElement) fragment.appendChild(spanElement)
			})

			el.appendChild(fragment)
			el.dataset.asaRun = "1"
		} catch (error) {
			console.error("ASA [run]:", error.message)
		}
	},

	/**
	 * Constructs the class string based on animation data.
	 */
	setClass: function (data) {
		const base = "asa-animation-basic"
		const prefix = "asa-animation-"
		let classes = [data.cls]

		data.anm ? classes.push(`${prefix}${data.anm}`) : classes.push(base)
		data.cls = classes.filter(Boolean).join(" ")
		return data
	},

	/**
	 * Creates an individual character element.
	 */
	span: function (char, delay, data) {
		try {
			let sp = document.createElement("div")
			sp.innerText = char === " " ? "\u00A0" : char
			sp.className = "asa-char-rules " + (data.cls || "")
			sp.style.display = "inline-block"
			sp.style.animationDelay = `${delay}ms`
			sp.style.animationIterationCount = data.itr
			sp.style.animationDuration = `${parseInt(data.dr, 10)}ms`

			return sp
		} catch (error) {
			console.error("ASA [span]:", error.message)
			return null
		}
	}
}
