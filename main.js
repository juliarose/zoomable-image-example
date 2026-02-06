import OpenSeadragon from "openseadragon";

const prefixUrl = new URL(
	"openseadragon/build/openseadragon/images/",
	import.meta.url
).href;

window.addEventListener("DOMContentLoaded", () => {
	OpenSeadragon({
		id: "openseadragon1",
		prefixUrl,
		tileSources: "IMG_7881.dzi",
		minZoomLevel: 0.5,
		maxZoomLevel: 20,
		maxZoomPixelRatio: 10,
		showNavigator: false,
		showNavigationControl: false,
		showZoomControl: false,
		showHomeControl: false,
		showFullPageControl: false,
	});
});
