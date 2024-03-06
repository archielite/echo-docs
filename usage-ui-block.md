# UI Block (Shortcode)

UI Blocks, also known as Shortcodes, are small pieces of code that allow you to add predefined elements to your website.
They are used to enhance the functionality of your website without the need to write custom code.

## Usage

To use a shortcode, simply add the shortcode to the content of a page or post.

For example, to add a Google Maps to a page, use the following shortcode:

```html
[google-map]New York, USA[/google-map]
```

![Shortcode](./images/shortcode-1.png)

The above shortcode will add a **Google Map** to the page with the location set to `New York, USA`.

Go to the frontend of your website to see the result:

![Shortcode](./images/shortcode-2.png)

## Available Shortcodes

### Hero Banner

```html
[hero-banner title="Sample title" subtitle="Sample subtitle" banner_image="path_to_media_image" url="/blog" button_label="Read more" shape_image_1="sports/backgrounds/shape.png" shape_image_2="path_to_media_image" background_image="path_to_media_image" background_color="transparent"][/hero-banner]
```

Demo UI:

![HeroBanner](./images/shortcode-hero-banner.png)

### Hero Slider

```html
[hero-slider quantity="3" title_1="Explore the Indonesia " media_1="path_to_media_video" thumb_1="path_to_media_image" button_url_1="/" button_label_1="Read more" title_2="Explore the Nepal" media_2="travel/videos/hero-video-2.mp4" thumb_2="path_to_media_image" button_url_2="/" button_label_2="Read more" title_3="Explore the India" media_3="path_to_media_video" thumb_3="path_to_media_image" button_url_3="/" button_label_3="Read more"][/hero-slider]
```

Shortcode using tabs, each tab includes: `title`, `thumb`, `video`. Currently, `videos` are only compatible with the `mp4` format.

Demo UI:

![HeroSlider](./images/shortcode-hero-slider.png)

### About

Display simple information about your website, company, or organization.

```html
[about-us title="Sample title" subtitle="Sample subtitle" description="Sample description" staff_name="Staff name" staff_description="Description of staff" staff_signature="Signature staff image" first_image="path_to_media_image" second_image="path_to_media_image"][/about-us]
```

![About Us](./images/shortcode-about-us.png)

### Intro Video

Display intro video on your website.

```html
[intro-video image="path_to_media_image" video_url="path_to_media_video" play_icon="icon"][/intro-video]
```

UI Demo:

![Intro Video](./images/shortcode-intro-video.png)

### Members

Display members featured.

```html
[members title="Sample title" member_ids="1,2,3,4,5,6,7,8"][/members]
```

`1,2,3,4,5,6,7,8` are the list of member ids selected for display.

UI Demo:

![Members](./images/shortcode-members.png)

### Follow Us

Display more socials to followers 

```html
[follow-us title="Sample title" subtitle="Sample subtitle" text_color="transparent" background_color="transparent" background_image="path_to_media_image" quantity="2" title_1="Facebook" icon_1="ti ti-brand-facebook" url_1="/" title_2="Google" icon_2="ti ti-brand-google" url_2="/"][/follow-us]
```

If you want to display information for five social media platforms, set the `quantity` to 5. This will include fields for `title_3`, `icon_3`, `url_3`, up to `title_5`, `icon_5`, `url_5`.

UI Demo:

![Follow Us](./images/shortcode-follow-us.png)

### App Downloads

Effortlessly showcase your app on two platforms with our display app. Simplify the download experience using intuitive shortcodes. Increase accessibility and reach across multiple platforms seamlessly.

```html
[app-downloads title="Sample title" subtitle="Sample subtitle" platform_google_label="Play Store" platform_google_icon="ti ti-brand-google-play" platform_google_url="https://play.google.com/" platform_apple_label="Apple Store" platform_apple_icon="ti ti-brand-apple" platform_apple_url="https://www.apple.com/app-store/" image="path_to_media_image" background_color="#537FE7"][/app-downloads]
```

UI Demo:

![App Downloads](./images/shortcode-app-downloads.png)

### Contact Form

Display contact form and your information

```html
[contact-form title="Sample title" description="Sample description" button_label="Send Message" button_icon="ti ti-arrow-right" quantity="3" title_1="Location" description_1="The Business Centre132, New York 12401. United States" icon_1="ti ti-map-pin" url_1="" open_in_new_tab_1="yes" title_2="Email Address" description_2="info@yourmail.com" icon_2="ti ti-mail" url_2="mailto:info@yourmail.com" open_in_new_tab_2="yes" title_3="Phone" description_3="(00) 123 456 789 99" icon_3="ti ti-phone" url_3="tel:(00) 123 456 789 99" open_in_new_tab_3="yes" address="Fortis Downtown Resort"][/contact-form]
```

UI Demo:

![Contact Form](./images/shortcode-contact-form.png)

### Blog Posts

Display a list of blog posts. There are 18 different styles available.

For example:

```html
[blog-posts style="style-1" category_ids="3,6" title="Sample title" title_align="start" sidebar="none" text_color="transparent" background_color="transparent" background_image="path_to_media_image" limit="4"][/blog-posts]
```

In there:

* `category_ids`: Get posts belonging to these category ids.
* `title_aligin`: Includes 3 options `start`, `center` and `end`.
* `sidebar`: If you're selected sidebar, your interface will have two columns: one for the main content and the other for the sidebar.


#### Style 1

![Blog Posts](./images/shortcode-blog-posts-1.png)

#### Style 2

![Blog Posts](./images/shortcode-blog-posts-2.png)

#### Style 3

![Blog Posts](./images/shortcode-blog-posts-3.png)

#### Style 4

![Blog Posts](./images/shortcode-blog-posts-4.png)

#### Style 5

![Blog Posts](./images/shortcode-blog-posts-5.png)

#### Style 6

![Blog Posts](./images/shortcode-blog-posts-6.png)

#### Style 7

![Blog Posts](./images/shortcode-blog-posts-7.png)

#### Style 8

![Blog Posts](./images/shortcode-blog-posts-8.png)

#### Style 9

![Blog Posts](./images/shortcode-blog-posts-9.png)

#### Style 10

![Blog Posts](./images/shortcode-blog-posts-10.png)

#### Style 11

![Blog Posts](./images/shortcode-blog-posts-11.png)

#### Style 12

![Blog Posts](./images/shortcode-blog-posts-12.png)

#### Style 13

![Blog Posts](./images/shortcode-blog-posts-13.png)

#### Style 14

![Blog Posts](./images/shortcode-blog-posts-14.png)

#### Style 15

![Blog Posts](./images/shortcode-blog-posts-15.png)

#### Style 16

![Blog Posts](./images/shortcode-blog-posts-16.png)

#### Style 17

![Blog Posts](./images/shortcode-blog-posts-17.png)

#### Style 18

![Blog Posts](./images/shortcode-blog-posts-18.png)

### Blog Categories

Display a list of blog posts or blog categories. There are 3 different styles available.

For example: 

```html
[blog-categories style="style-2" category_ids="2,3,4,5,6" title="Most Popular" number_of_post_per_category="8" title_align="start" text_color="transparent" background_color="transparent" background_image="path_to_media_image" sidebar="none"][/blog-categories]
```

In there:

* `category_ids`:Get categories by selected ids.
* `title_aligin`: Includes 3 options `start`, `center` and `end`.
* `sidebar`: If you're selected sidebar, your interface will have two columns: one for the main content and the other for the sidebar.

UI Demo:

#### Style 1

![Blog Categories](./images/shortcode-blog-categories-1.png)

#### Style 2

![Blog Categories](./images/shortcode-blog-categories-2.png)

#### Style 3

![Blog Categories](./images/shortcode-blog-categories-3.png)

### Newsletter

Display form subscriber newsletter.

```html
[newsletter title="Sample title" button_label="subscribe" text_color="rgb(255, 255, 255)" background_color="transparent" background_image="path_to_media_image"][/newsletter]
```

UI Demo:

![Newsletter](./images/shortcode-newsletter.png)

### Gallery

Display show gallery images

```html
[gallery limit="4" text_color="#fff" background_color="#181823"][/gallery]
```

* `limit`: number display images

UI Demo:

![Gallery](./images/shortcode-gallery.png)
