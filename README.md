# backbone.js
---
## Description
A school project of a technology evaluation for Backbone.js

## Structure
- *root*: contains project.json generated by npm and README  
- *build*: Folder containing website for GitPages  
- *note_modules*: npm dependancies installed for the project (underscore and backbone)

## Notes
- requires Underscore is installed together with Backbone using:
```
npm install backbone
```
- 3 sections to Backbone:
    - Models: objects that are synchronized with the server
    - Collections: a group of Models
    - View: user interface to display models and collections
- models and collections have similar behaviours:
    - get: retrieves an attribute from the server
    - set: sends a local attribute to the server
    - fetch: retrieves a model/collection from the server
    - save: sends a local model/collection to the server
    - destroy: deletes a model/collection from the server
    - inherit Underscore methods
