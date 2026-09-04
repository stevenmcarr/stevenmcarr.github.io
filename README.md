# stevenmcarr.github.io

Personal academic site for Steven M. Carr — Professor and Chair of Computer Science and
Associate Dean for Research and Graduate Education, Western Michigan University.

Plain static HTML and one stylesheet. No build step, no JavaScript, no external dependencies.

## Files

| Path | Contents |
| --- | --- |
| `index.html` | Biography, appointments, education, contact |
| `research.html` | Research interests, projects, 23 funded grants, proposals under review |
| `publications.html` | 79 publications (journal, conference, workshop, invited) |
| `teaching.html` | Courses, mentoring, curriculum development, accreditation |
| `service.html` | Administrative initiatives, professional activities, university service |
| `css/style.css` | The whole stylesheet — light/dark, responsive, print-friendly |
| `cv/Steven-Carr-CV.pdf` | Downloadable CV |
| `img/` | Empty; drop `portrait.jpg` here and uncomment the block in `index.html` |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Publishing to GitHub Pages

Create a repository named `<your-username>.github.io` — that name makes it publish at
`https://<your-username>.github.io` with no extra configuration.

```sh
cd "path/to/web page"
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
git push -u origin main
```

Then in the repository: **Settings → Pages → Build and deployment → Source: Deploy from a
branch**, branch `main`, folder `/ (root)`. The site is live in a minute or two.

If you use a repository with any other name, the site publishes at
`https://<your-username>.github.io/<repo-name>/` instead. All links here are relative, so
that works without changes.

## Using vaccsedu.org as the address

Two options:

1. **Point the domain at GitHub Pages.** Add a file named `CNAME` containing just
   `www.vaccsedu.org` (one line, no protocol), then set the DNS `CNAME` record for `www` to
   `<your-username>.github.io`. Enter the same domain under Settings → Pages → Custom domain
   and enable "Enforce HTTPS."
2. **Host it yourself.** These are ordinary static files — copy the whole directory into the
   web root on the vaccsedu.org server and it works with no configuration.

## Updating

- **Publications** are generated but committed as plain HTML — edit `publications.html`
  directly to add an entry, following the pattern of the surrounding `<li>` elements.
- **DOI links** use `https://doi.org/<doi>`. 61 of the 79 entries have one; the remainder are
  older workshop, SIAM, and *Journal of Computing Sciences in Colleges* papers that were never
  assigned a DOI.
- **NSF grant links** use `https://www.nsf.gov/awardsearch/showAward?AWD_ID=<id>`. All 14 NSF
  awards in the CV are linked; the industry awards (HP, DEC, TI, Agere, LSI, AMD) have no
  public record.

## A note on the CV PDF

`cv/Steven-Carr-CV.pdf` is a verbatim copy of the source CV, which includes a home address,
a personal cell number, and the names, emails, and phone numbers of five references. Anything
in this repository is public once it is pushed. Consider replacing it with a version that
drops the home address, cell number, and references block before publishing. The HTML pages
themselves list only the email address and the university.
