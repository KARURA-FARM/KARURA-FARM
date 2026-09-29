# Karura Farm & Foods

A responsive, GitHub Pages-ready website for a pig and chicken farm supplying local and international buyers.

## Run locally

This is a dependency-free static site. Open `index.html` directly in a browser, or serve the folder with any static server.

## Connect the database

1. Create a project at [supabase.com](https://supabase.com/).
2. Open the SQL Editor and run `supabase.sql`.
3. In Supabase project settings, copy the Project URL and anon key.
4. Put both values in the constants at the top of `app.js`.
5. Deploy the repository with GitHub Pages. The contact form will write inquiries to the `inquiries` table.

The inquiry form also opens a prepared WhatsApp message to `+254 716 160 586` and a prepared email to `carolinekinyanjjui15@gmail.com`. The photo panels respond to pointer movement and brighten on interaction. Replace the remote image URLs in `styles.css` with your own uploaded image paths when your farm photos are ready.

Only the public anon key belongs in a frontend site. Never put a Supabase service-role key in `app.js`.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. The site is static and requires no build step.
