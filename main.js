import OpenSeadragon from "openseadragon";

const prefixUrl = new URL(
	"openseadragon/build/openseadragon/images/",
	import.meta.url
).href;

window.addEventListener("DOMContentLoaded", () => {
	OpenSeadragon({
		id: "openseadragon1",
		prefixUrl,
		tileSources: [{
			type:"zoomifytileservice",
			width: 2000,
			height: 1332,
			tilesUrl: "IMG_7881/",
		}],
		maxZoomLevel: 100,
		maxZoomPixelRatio: 1,
		minZoomLevel: 0,
		showNavigator: false,
		showNavigationControl: false,
		showZoomControl: false,
		showHomeControl: false,
		showFullPageControl: false,
	});
});
