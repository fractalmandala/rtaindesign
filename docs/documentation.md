---
title: Documentation
---

###### Date: 4th Dec 2023

This documentation details the technical specifications, key standards, sources, code and build process of the Bṛhat Open Library. The Open Library's PDF collection and readers can be accessed at [this link.](https://brhat.in/bol) To know more about Bṛhat and explore other projects, visit our [main website.](https://brhat.in)

If you only need to use the Open Library to view, research and read, please see our [User Guide](#) instead. The steps given here will allow you to build *your own repository* from scratch. This is in line with our principle of free and open-source. 

---

#### Contents:
1. Introduction
2. Sources of Data
3. [Text Parsing](/docs/documentation/#text-parsing)
4. [Database and Storage](/docs/documentation/#database-and-storage)
5. [Query and Fetch](/docs/documentation/#query-and-fetch)
6. Frontend and UI
7. Links
8. Development Roadmap
9. Licenses

#### Introduction

First, the disclaimer - I am not a professional programmer or developer. For all the steps you find, there are certain to be better, more efficient ways to do them. But mine is a journey of learning by creation, and I begin with the cursory basics that I know. For example, there are quite a few ways to transfer a bucket of data from, say, XML format, to a Next/React front-end. But I know neither JS nor these frameworks (nor even the technical jargon entirely), so you'll find me doing the same with extra steps, routed through Google Sheets and Supabase. To know more about my background or about my organization, Bṛhat, visit the About section.

Second, the constant learning curve means a frequently changing codebase. While I will endeavor to keep the documentation updated, in crunch times priority will be keeping the User Guide up to date over the build specs. You may find the details here to be different to what's identifiable at front-end. Do forgive me in such a case, and please reach out at amrit.pandey@brhat.in for any queries/suggestions/issues. 

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

> `` column A: dataItem ``   
> `` column B: tag ``   
> `` column C: length ``   
> `` column D: fixedlength ``   
> `` column E: styled ``   
> `` column F: styled2-line ``   
> `` column G: styled2-num ``   
> `` column H: styled3-name ``   
> `` column I: styled3-num ``   
> `` column J: chapter ``   
> `` column K: verse ``   
> `` column L: primvalue ``

You can absolutely change the titles in any of these headers, but if you do, then make sure to similarly change the titles in the javascript functions used in later sections here. 

Download this sheet now as a plain .csv file, and upload the .csv file to Supabase as a new table. For larger indexing and scalability, all clean, front-ready tables are created with the prefix *'rep-'* in the name, where *rep* is short for *repository*. In Supabase, use the column L - 'primvalue' as the primary key. 

With upload complete, the data is now ready for querying and rendering at front-end! 

#### Query and Fetch

Next.js makes it quite simple to fetch data from a public API and customize the styling, while Supabase offers easy end-points for tables stored in its database. We've tried to document the steps here such that an absolute layperson with no knowledge of any of these terms could still recreate the end-result by following each step exactly as is. But even a bare understanding of React, Next.js and public APIs can make this step a breeze. 

For demonstration, imagine that the table we need to query data from is titled *'rep-mimamsasutra'* in Supabase. The output of our demonstration fetch can be viewed at [this page.](/#fetching). All we need to do is write a simple function, but before that please configure your setup to be able to query data from Supabase.

Our setup is on Next.js, so we create a *.env.local* file in the root directory and add the following code:

> `` NEXT_PUBLIC_SUPABASE_URL=https://rnfvzaelmwbbvfbsppir.supabase.co ``   
> `` NEXT_PUBLIC_SUPABASE_ANON_KEY=<insert_anon_key_here> ``

In the above, replace the url with the url of your public API. The link here is our public API, and it will remain public so you too can query from it. For the second field, replace *<insert_anon_key_here>* with your personal anon key. Both these values can be found in your Supabase/other db account. When deploying the build, make sure the .env.local data is transferred as environment variables to whatever CMS platform you host the front-end on. We host it on Vercel, which is the creator of Next.js. 

Then, create a new page titled 'fetching.tsx' (or any other name, in .js, .jsx or .tsx format) and paste the following code: 

> ```
> import Layout from '../components/layout'   
> import Post from '../interfaces/post'   
> import Link from 'next/link'   
> import { useEffect, useState } from 'react'   
> import supabase from '../lib/supaclient'   
> ```
> ```  
> const Foitch = () => {   
> const [fetchError, setFetchError] = useState(null)   
> const [smoothies, setSmoothies] = useState(null)   
> useEffect(() => {   
> const fetchSmoothies = async () => {   
> const { data, error } = await supabase   
> .from('vedicconcordance2')   
> .select()   
> if (error) {   
> setFetchError('Could not fetch the smoothies')   
> setSmoothies(null)   
> } if (data) {   
> setSmoothies(data)   
> setFetchError(null)   
> }   
> }   
> fetchSmoothies()   
> }, [])
> ```  
> ``` return (   
> <div className="page home">   
> <Link href="/">Return</Link>   
> {fetchError && (<p>{fetchError}</p>)}   
> {smoothies && (   
> <div className="smoothies">   
> {/* order-by buttons */}   
> <div className="smoothie-grid">   
> {smoothies.map(smoothie => (   
> <p>{smoothie.occurence}</p>   
> ))}   
> </div>   
> </div>   
> )}   
> </div>   
> )} 
> export default Foitch

Let us break down what happens on this page. 
