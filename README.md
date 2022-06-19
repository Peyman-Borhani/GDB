# CODB
### Constructible Objects Data Build
CODB is a customizable data format, a data template model to define new data structure & builder function to store main data without redundant/unneeded information, yet when loading, data be built and exported in the original or preferred state.
Define a descriptive template to abstract the main data and seperate redundant data, keys, dates... yet build and export the data in original/intended format at loading time.  
Instructions, descriptions, definitions can be seen in the comments of data.js file.  
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
