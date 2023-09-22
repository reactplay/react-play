# Image Compressor

App, where user will upload large image size and it will compress it down to small size.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: aks318
- Gihub Link: https://github.com/aks318
- Blog: null
- Video: null

## Implementation Details

Implementaion starts with `ImageCompressor` component.

- I have used `5 state` to manage component data. `2 state` for original image , `2 state` for compressed image and `1 state` for processing compression.
- To compress image I have used `imageCompression` function from `browser-image-compression` npm package. This function will compress image to `max size of 1MB` and `max-heigth and width of 1920` which I have mentioned in `options` variable.
- Common logic used in play is seperated in `Util` file.
- After compression user can download compressed file by clicking `download` button.

## Consideration

Update all considerations(if any)

## Resources

To compress image I have used `browser-image-compression` npm package.
