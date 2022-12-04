---
title: Documentation
---

This documentation details the technical specifications, key standards, sources, code and build process of the Bṛhat Open Library. The Open Library's PDF collection and readers can be accessed at [this link.](https://brhat.in/bol) To know more about Bṛhat and explore our other projects, visit our [main website.](https://brhat.in)

---

#### Contents:
1. Overview
2. Sources of Data
3. Purpose and Intent
4. Repository Backend
5. Frontend and UI
6. Links
7. Development Roadmap
8. Licenses

##### Text Parsing

###### GRETIL

Remove first four lines. Header components are:
- fileDesc
  - hide respStmt
  - publicationStmt retained as license information.
    - style publisher
    - hide availability p, style availability
  - hide notesStmt
  - style sourceDesc, remove bibl tags
- encodingDesc: hide
- profileDesc
  - hide langUsage
  - remove keywords tags
  - style textClass term
- revisionDesc: hide

Remove text tag
Remove body tag
Add class to div = mainSection; number the mainSections through id
Rename l tags to lineItem

For numbering:
- remove name abbreviations. Ex: in "/ Jaim_1,1.1 /" remove "Jaim_"
- add line break before first forward slash, then remove forwards slashes
- wrap numbering component in "number" tags
- wrap chapter component (number before the comma) in "chapter" tags
- wrap post comma component in "verse" tags
- clean any spaces

At document end, watch for and remove any extra closing tags for body, text and TEI
