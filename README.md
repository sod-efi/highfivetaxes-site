# www.highfivetaxes.com

The High Five Taxes website as plain files, served by GitHub Pages at https://www.highfivetaxes.com.

It was copied from the old WordPress site in October 2026. Everything looks and works as before; the contact form sends its messages by email through a small AWS function (`static-site-forms`). There's no server, database or login, so there's nothing to hack or overload.

To change a page, edit its `index.html` and push to `main`; GitHub Pages publishes it within a minute or two. How it was made and how to redo the copy: the private repo `sod-efi/aws-migrations` (`tools/static-sites/`).
