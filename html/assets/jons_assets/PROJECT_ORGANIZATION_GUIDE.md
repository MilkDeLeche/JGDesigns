# Project Organization Guide

## Current Folder Structure (Organized by Page)

```
jons_assets/
├── 01-hero/                    # Homepage hero carousel
│   ├── FORHERO.jpeg
│   ├── hero-custom-front.jpeg
│   └── facade01.jpeg
│
├── 02-about/                   # About Us section
│   ├── interior01.jpeg
│   ├── interior02.jpeg
│   └── rsmith01.jpeg
│
├── 03-projects/                # Our Works gallery (by family/project)
│   ├── vasquez/
│   │   └── project-left.jpeg       # Project 01 — Vasquez Family
│   ├── rodriguez/
│   │   └── project-interior.jpeg   # Project 02 — Rodriguez Family
│   ├── martinez/
│   │   └── project-zage-left.jpeg  # Project 03 — Martinez Family (ZAGE)
│   ├── downfalls/
│   │   └── project-interior.jpeg   # Project 04 — Downfalls
│   ├── lopez/
│   │   └── project-right.jpeg      # Project 05 — Lopez Family (Willow Cottage)
│   └── hernandez/
│       └── project-interior.jpeg   # Project 06 — Hernandez Family
│
├── 04-logos/                   # Partner/logo section
│   ├── WhatsApp Image 2025-12-10 at 7.47.10 PM (2).jpeg
│   ├── WhatsApp Image 2025-12-10 at 7.47.09 PM (2).jpeg
│   ├── WhatsApp Image 2025-12-10 at 7.47.08 PM (4).jpeg
│   ├── WhatsApp Image 2025-12-10 at 7.47.10 PM (15).jpeg
│   └── rsmith02.jpeg
│
├── 05-branding/                # Brand assets
│   ├── jglogo.jpg
│   └── logoanim.mp4
│
├── IMAGE_ASSET_CATALOG.md      # Full metadata for each asset
└── PROJECT_ORGANIZATION_GUIDE.md (this file)
```

## Page-to-Asset Mapping

| Page | Section | Assets Used |
|------|---------|-------------|
| **index.html** | Hero Carousel | 01-hero/* |
| **index.html** | About | 02-about/*, 05-branding/jglogo.jpg |
| **index.html** | Our Works | 03-projects/* |
| **index.html** | Logos | 04-logos/* |
| **index.html** | Splash | 05-branding/logoanim.mp4 |

## HTML Path Reference

All image paths in `index.html` use the format:
```
assets/jons_assets/[folder]/[filename]
```

Example: `assets/jons_assets/01-hero/FORHERO.jpeg`

## Adding New Assets

1. Place the file in the appropriate folder (01-hero, 02-about, 03-projects/xxx, etc.)
2. Add metadata to `IMAGE_ASSET_CATALOG.md` using the Spec #, Model Name, Short Description, Visual Reference, Website Features, and Keywords/Tags format
3. Update the HTML to reference the new path

## Remaining Unorganized Assets

The following files remain in the root `jons_assets/` folder for future use or archival:
- backyard01.jpeg, backyard2.jpeg, backyard3.jpeg
- custom01.jpeg (moved to vasquez), custom02.jpeg (→ hero), custom03.jpeg (moved to lopez)
- footer01.jpeg, footer02.jpeg
- project01.jpeg through project07.jpeg
- showcase.jpeg
- spec01.jpeg through spec05.jpeg
- zage01.jpeg (→ martinez), zage03.jpeg, zageo2.jpeg
- Additional WhatsApp images

These can be assigned to detail pages, our-works.html, or new project folders as needed.
