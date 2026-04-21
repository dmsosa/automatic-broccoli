## UseMap 

the standard HTML <map> and <area> tags do not support responsive scaling because they rely on fixed pixel coordinates that do not adapt when an image changes size.  Browsers currently ignore the W3C specification for percentage-based coordinates, meaning clickable areas will misalign with the image if the image is resized via CSS. 

To make an image map responsive, you must use third-party JavaScript libraries that dynamically recalculate coordinates based on the image's actual dimensions.