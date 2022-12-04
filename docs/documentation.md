---
title: Documentation
---

This documentation details the technical specifications, key standards, sources, code and build process of the Bṛhat Open Library. The Open Library's PDF collection and readers can be accessed at [this link.](https://brhat.in/bol) To know more about Bṛhat and explore other projects, visit our [main website.](https://brhat.in)

If you only need to use the Open Library to view, research and read, please see our [User Guide](#) instead. The steps given here will allow you to build *your own repository* from scratch. This is in line with our principle of free and open-source. 

---

#### Contents:
1. Overview
2. Sources of Data
3. [Text Parsing](/docs/documentation/#text-parsing)
4. [Database and Storage](/docs/documentation/#database-and-storage)
5. [Query and Fetch](/docs/documentation/#query-and-fetch)
6. Frontend and UI
7. Links
8. Development Roadmap
9. Licenses

#### Text Parsing

Copy all data from the XML file on a new Google Sheets. The XML link should look like this- [http://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_jaimini-mImAMsAsUtra.xml](http://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_jaimini-mImAMsAsUtra.xml), and the data should appear as it does on the sample link. Note that the link ends in a ".xml" format. Paste this data with clear formatting in column A of the Google Sheet.

Use this formula in column B for the first level parsing. In this level we parse out the data tags of cells we need to retain, and mark the rest as hide. The cells tagged "hide" will not be moved to database.

> ``
> =if(left(A3,7)="<title>","title",
> if(left(A3,8)="<author>","author",
> if(left(A3,6)="<bibl>","bibl",
> if(left(A3,6)="<term>","term",
> if(left(A3,5)="<div>","div",
> if(left(A3,6)="</div>","divclose",
> if(left(A3,3)="<l>","l",
> "hide")))))))
> ``

Copy the following formulae in columns C and D respectively. These are basic length calculators that will facilitate further parsing.

> ``
> =if(B3="hide","",len(B3)+2)
> ``

> ``
> =if(B3="hide","",(C3*2)+1)
> ``

In the columns so far, we pasted the data in all row-lines of the columns, regardless of the "hide" tag we inserted in column B. From here on, the formulae must be pasted ONLY in the row-lines NOT tagged "hide."

Column E is the first of the "extracted data" columns. Paste the following code in all row-lines of the column which are not tagged "hide." This extracts for us the final form of text Title, Author and Source. The main body will be extracted in consequent columns.

> ``
> =if(B10="div","<div>",if(B10="divclose","</div>",if(B10="hide","",mid(A10,C10+1,len(A10)-D10))))
> ``

In column F we work on the main body. The below formula separates out the verse itself and the *'text_index'* format that GRETIL uses to map chapter and verse numbers. The split *'text_index'* is rendered out in column G. Note again that the formulae must not be pasted in row-lines of items tagged "hide" in column B.

> ``
> =if(B368="l",split(E368,"/"),E368)
> ``

The final step in parsing is splitting the *'text_index'* to separate name and chapter/verse numbers. Copy these formulae in columns H and J respectively. The split values will be rendered in columns I and K, so be sure to have these columns clear and unformatted.

> ``
> =split(G368,"_")  
> ``

> ``
> =split(substitute(I368,"."," - "),",")
> ``

That's actually it! We now have all the data we need, in the clean formats that we can use for rendering on site front-end. What's left is uploading to database and fetching via API. So let's move on. 

#### Database and Storage

We store our API-ready data in [Supabase](https://supabase.com/). Their free-tier offers up to 500MB of database, which is more than enough for the repository's current size. They also have detailed documentation for tasks like data upload, Next.js integration and API querying.

Supabase stores data in dedicated PostgreSQL databases, which allows us to work with it with even the cursory SQL knowledge. The storage is scalable and interoperable, with enterprise-level durability promised. Basically, it works in all the ways we need it to. 

To prepare the Google Sheet extracted in previous step, filter the data to de-select all items marked "hide" in column B. Copy the remaining content to a fresh sheet, where you can paste the formula values and leave our parsing trail happily behind :). 

Here, add a final column K and give it an index numbering from 1 to *n*, where *n* is the number of the last row. This is to have column K act as the primary key, where each value must be unique and there cannot be null values.

Before downloading the sheet, give a final check to the header values of each column. These should be:

> ``
> column A: 
> column B:
> column C:
> column D: 
> column E:
> column F:
> column G:
> column H:
> column I: 
> column J:
> column K:
> column L: 
> ``

Download this sheet now as a plain .csv file, and upload the .csv file to Supabase as a new table. For larger indexing and scalability, all clean, front-ready tables are created with the prefix *'rep-'* in the name, where *rep* is short for *repository*. In Supabase, use the column L - 'primvalue' as the primary key. 

With upload complete, the data is now ready for querying and rendering at front-end! 

#### Query and Fetch

Next.js makes it quite simple to fetch data from a public API and customize the styling, while Supabase offers easy end-points for tables stored in its database. We've tried to document the steps here such that an absolute layperson with no knowledge of any of these terms could still recreate the end-result by following each step exactly as is. But even a bare understanding of React, Next.js and public APIs can make this step a breeze. 

For demonstration, imagine that the table we need to query data from is titled *'rep-mimamsasutra'* in Supabase. 