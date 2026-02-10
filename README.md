# zoomable-image-example

Example static zoomable image site using [OpenSeadragon](https://github.com/openseadragon/openseadragon) and Vite.

View it live <https://juliarose.github.io/zoomable-image-example/>.

## Using a large JPG (Deep Zoom)

Large images must be served as tiles to avoid GPU/texture limits at high zoom. Convert your JPG to a Deep Zoom tiles and place the outputs in the public directory so Vite can serve them.

1. Generate a Deep Zoom image from your JPG using a tiling tool such as libvips or a Deep Zoom converter.
2. Output the generated tiles to `public/image`.
3. Ensure `main.js` points to `public/image` as the tile source.

## Installing libvips

### Debian
```bash
sudo apt install libvips libvips-tools
```

### Windows with winget
```bash
winget install --id=libvips.libvips -e
```

## libvips Deep Zoom command

Using [libvips](https://libvips.github.io/libvips/), run this command to create a Deep Zoom tiles from a large JPG:

```bash 
vips dzsave public/image.jpg public/image --suffix ".jpg[Q=95]" --layout zoomify
```

This saves the tiles in the zoomify layout, which is higher quality when zooming in close.

## License

[MIT](https://github.com/juliarose/zoomable-image-example/tree/main/LICENSE)
