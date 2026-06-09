## Responsive Images with Srcset

### The Problem: Different Resolutions and Screen Sizes
This is probably obvious to you (we hope), but not everyone browses the internet with the same size screen. We use everything from oversized desktop monitors to tiny screens we keep in our pockets. This presents some challenges around how we deal with page design, including images.

And it isn’t just size — resolution is an issue as well. 4K HD monitors and Apple’s Retina display are packing more pixels than ever into a smaller space, and that trend is likely to continue. to make images look good on these screens, the source files need to be much larger — two, three, or even four times the size of images intended for conventional displays.

### A Terrible Solution: Giant Images for Everyone
One way to handle support for high-resolutions screens is to simply serve the biggest image you can all the time.

This almost a good idea. Low-rez and small-size screens can display the giant, high-def image with no problem. They just won’t see any benefit.IT will look basically the same to them as if you had given them an image half the size. So, the user experience improves for the high-end viewers and every one else is unaffected. Great, right?

Hopefully, you can see the problem here. Providing much larger images does not leave everyone else unaffected. They still have to download them. This costs them bandwidth, and it costs you bandwidth. It also slows down their page load times and uses up more of their computer’s memory.

### A Better Solution: Serve Different Images to Different Visitors
What you really want to be able to do is serve the largest image that actually makes a difference to each user. If someone can see you high-quality, high-resolution, gigantic image, then you want to serve it to them. But to someone visiting you on a 5-year-old smart phone, you want to give them a smaller image.

Easy right?

### The Old Way(s)
The first wave of solutions to this problem involved complex media queries, JavaScript, or server-side image selection. They were difficult to setup, complicated to understand, and somewhat error prone. Worst of all, they required you (well, your system) to figure out which image version to select. This required a lot of guessing, and put the burden of future improvements on your website’s code.

But, thanks to HTML5, we can do all this pretty easily.

###  The New Way: srcset
Using the srcset attribute has made responsive image sizing much simpler. It allows you to define a list of differently-sized versions of the same image, and provide information about the size of each one. Then, the client (browser) gets to make the decision.

This last part is particularly worth noting, because the client device actually knows what it is capable of, whereas your website code has to make queries and guesses to figure it out. Moreover, browser technology continues to improve, whereas most website designs are on the “set it and forget it” development cycle.

