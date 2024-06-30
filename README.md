# GDB
### `Generative Data Build`  

GDB, A conceptual data model to store data and meta-data, a data structure/store method, to store it raw or compose/generate structured data from raw data + meta-data based on described template.  

You define a declarative template, representing: data's structure, redundant info, meta-data, symbols, format etc.., then process and store raw section of data, yet on access generate/built/formatted into original form.

Extra information could be generated and composed instead of being stored raw, or data is dynamic in generated in realtime.
So feel free to customize the example to fit your use-case.  

In general this model consists of 3 concepts: `Template` -- `Raw generator` -- `Build function`

---
`Template`: used to define data structure and describe the process, functions and meta data.   
The descriptive template is to define it in a readable pattern. Human/logical/machine readable.   

In this example (data.js file) - The instructions, descriptions defined in the data.js template, and function generates full year dates instead of cluttering the data with it.  

`Raw generator`: flattens the structure, and make raw data, so you don't need to store redundant/unwanted information, such as fields and sequences, years, incremental IDs, etc...,  you must describe the reconstruction process in the template.  

`Build function` once data is to be exported or called(function), it will be reconstructed in the original or intended form, such as object/array/map/DB structure(or whatever described in template), adding data types, keys, fields, ids... and include/embed/refer raw data in it. (loaded/fethed...)  
for example, generated ids, dates, music notes, AI data in an object/array/map tree structure...  

---
  
## `Examples`
The goal is find a pattern, reduce data into a generative model for storage.

Simple example is for KV stores, if the Key is permanent(Ex: year, month, id) and is a sequence, you can remove the keys, and store raw data in correct order.  
.  

`Simple example`:
```
  // original data:  
      [{month: 1, price: 220}, {month:2, price:300} ,...] 
  // instead use:
      [220, 300, ...]
  // and later when building object records, reconstruct it:
      data = raw.map( (n,i)=> { {month: i+1,  price: n}  }
```
.
  
`Advanced example`:  

```
// Use around 10 lines of code:
classes = [  'Physics', 'Chemistry', 'Math' ] 
Math = [ 'Ana', '0123543', 'B+',  'Ben', '0142432', 'A', ... ]  
data = for(n of classes)  Math.map( (x, i)=> {
                               {  id: i+1,
                                  classID: n+i+1,
                                  name: Math[i],
                                  phone: Math[i+1],
                                  grade: Math[i+2]  }
                          }
                                               
// instead of 500 lines in original data:
data = [  { id: 1,  name: 'Ana',  phone: '0123543',  grade: 'B+'} ,
          { id: 2,  name: 'Ben',  phone: '0142432',  grade: 'A' } ,
            .
            .
            .
            500 more students means: 500 more data lines
```
---  
.  

## `Benefits`
- reduced data size by multiple times. 
- eliminate redundant keys, define once and trace by placement. (ex: 1st id, 2nd name, 3rd value) 
- eliminate generative predictable data (ex: continuous dates...)
- seperate main raw data from other keys, parameters, information.
- can customize the data structure and content, in build function, or file.
- if only raw data is needed can edit export line, and just receive it.
- no need to store generative data, just genererate it. (ex: full dates)
- no need to store extra space/symbols(:"',) or waste time modifying them when editing.

.  
## `When not to use`  

Use the original data if bellow issues overcome the benefits.  
- the original data structure is already optimal and is what you want.
- data is modified or stored in realtime and original structure is forced.
- not much to reduce: no keys, no generated data, one or two columned data(id, val)
- no matching data patterns, not sequential, not generative, no data order.
- very complex build function or data structure.
- possible to make mistakes, error or get wrong output.
- high processing power makes the original data a better choice.
- need to follow specific standards, configurations(json...)
- pre-defined API/configs or data is shared with other tools/programs.

.  
## `Todo`
extend to a multiple data toolset, for example tool to prepare, extract, remove specific data, symbols...
