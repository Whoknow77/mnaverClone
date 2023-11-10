function masonryLayout() {
	const masonryContainerStyle = getComputedStyle(
		document.querySelector(".main .main__container")
	);
	const columnGap = parseInt(
		masonryContainerStyle.getPropertyValue("column-gap")
	);
	const autoRows = parseInt(
		masonryContainerStyle.getPropertyValue("grid-auto-rows")
	);

	document.querySelectorAll(".main .main__container .card").forEach((elt) => {
		console.log(elt);
		elt.style.gridRowEnd = `span ${Math.ceil(
			elt.querySelector(".card__item").scrollHeight / autoRows +
				columnGap / autoRows
		)}`;
	});
}

masonryLayout();
window.addEventListener("resize", masonryLayout);
