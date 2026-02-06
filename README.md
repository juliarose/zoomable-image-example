# zoomable-image-example

Example static zoomable image site using [OpenSeadragon](https://github.com/openseadragon/openseadragon) and Vite.

View it live <https://juliarose.github.io/zoomable-image-example/>.

## Using a large JPG (Deep Zoom)

Large images must be served as tiles to avoid GPU/texture limits at high zoom. Convert your JPG to a Deep Zoom tiles and place the outputs in the public folder so Vite can serve them.

1. Generate a Deep Zoom image (`.dzi` + tiles) from your JPG using a tiling tool such as libvips or a Deep Zoom converter.
2. Put the generated files in:
	- `public/tiles/IMG_7881.dzi`
	- `public/tiles/IMG_7881_files/` (tile folder created by the tool)
3. Ensure `main.js` points to the `.dzi` file as the tile source.

## Installing libvips

### Debian
```bash
sudo apt install libvips libvips-tools
```

### Windows with winget install --id=libvips.libvips -e
```bash
winget install --id=libvips.libvips -e
```

## libvips Deep Zoom command

Using [libvips](https://libvips.github.io/libvips/), run this command to create a Deep Zoom tiles from a large JPG:

```bash 
vips dzsave public/IMG_7881.jpg public/IMG_7881 --suffix ".jpg[Q=95]" --layout zoomify
```

## License

[MIT](https://github.com/juliarose/zoomable-image-example/tree/main/LICENSE)
