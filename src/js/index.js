function masonryLayout() {
	const masonryContainerStyle = getComputedStyle(
		document.querySelector(".content__card")
	);
	const autoRows = parseInt(
		masonryContainerStyle.getPropertyValue("grid-auto-rows")
	);
	document.querySelectorAll(".content__list").forEach((elt) => {
		elt.style.gridRowEnd = `span ${Math.ceil(
			elt.querySelector(".content__list-inner").scrollHeight / autoRows
		)}`;
	});
}

masonryLayout();
window.addEventListener("resize", masonryLayout);
window.addEventListener("load", masonryLayout);
