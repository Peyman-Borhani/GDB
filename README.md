# CODB
### Constructible Objects Data Build
CODB is a customizable data format, a data template model to define new data structure & builder function to store main data without redundant/unwanted information, yet at data export it can be built in the original or preferred state.  

Define a descriptive template to make the main data abstract and seperate from redundant unwanted info, then make builder function to format data and its structure to export it in the preferred intended form. Example: auto generate id, dates, object tree structure, KV...  
The instructions, descriptions, definitions in the data.js sample file, it auto generate full year dates instead of cluttering the data with it.  

The goal is find a pattern, to reduce something, if id is in a sequence: 1,2,3... so autogenerate it.  
Another example is object keys, if the fields and data are in the same order, you can remove the keys, for example if id, value fields are all in a sequence, can save data like:  [1, 220, 2, 300, 4, 500...] and later when building object records, assign id and value keys to 2 data in the array, per item.  

.
## Benefits
- reduced data size by multiple times. 
- eliminate redundant keys, define once and trace by placement. (ex: 1st id, 2nd name, 3rd value) 
- eliminate generative predictable data (ex: continuous dates...)
- seperate main raw data from other keys, parameters, information.
- can customize the data structure and content, in build function, or file.
- if only raw data is needed can edit export line, and just receive it.
- no need to store generative data, just genererate it. (ex: full dates)
- no need to store extra space/symbols(:"',) or waste time modifying them when editing.
.
## When not to use
Use the original data if bellow issues overcome the benefits.
- the original data structure is already optimal and is what you want.
- very complex build function or data structure.
- possible to make mistakes, error or get wrong output.
- high processing power makes the original data a better choice.
- need to follow specific standards, configurations(json...)
- pre-defined API/configs or data is shared with other tools/programs.
.
## Future
extend to a multiple data toolset, for example tool to prepare, extract, remove specific data, symbols...
