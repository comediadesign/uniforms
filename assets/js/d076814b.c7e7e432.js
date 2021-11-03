"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[609],{22303:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>m,toc:()=>d,default:()=>c});var t=a(25773),r=a(30808),i=(a(27378),a(35318)),o=["components"],l={id:"api-bridges",title:"Bridges"},s=void 0,m={unversionedId:"api-bridges",id:"api-bridges",isDocsHomePage:!1,title:"Bridges",description:"To make use of any schema, uniforms have to create a bridge of it - a unified schema mapper.",source:"@site/../docs/api-bridges.md",sourceDirName:".",slug:"/api-bridges",permalink:"/docs/api-bridges",tags:[],version:"current",frontMatter:{id:"api-bridges",title:"Bridges"},sidebar:"docs",previous:{title:"Fields",permalink:"/docs/api-fields"},next:{title:"Context data",permalink:"/docs/api-context-data"}},d=[{value:"<code>GraphQLBridge</code>",id:"graphqlbridge",children:[{value:"Code example",id:"code-example",children:[]}]},{value:"<code>JSONSchemaBridge</code>",id:"jsonschemabridge",children:[{value:"Note on <code>allOf</code>/<code>anyOf</code>/<code>oneOf</code>",id:"note-on-allofanyofoneof",children:[]},{value:"Note on Bluebird",id:"note-on-bluebird",children:[]}]},{value:"<code>SimpleSchema2Bridge</code>",id:"simpleschema2bridge",children:[]},{value:"<code>SimpleSchemaBridge</code>",id:"simpleschemabridge",children:[]}],p={toc:d};function c(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To make use of any schema, uniforms have to create a ",(0,i.kt)("em",{parentName:"p"},"bridge")," of it - a unified schema mapper."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/bridge-concept.svg"})),(0,i.kt)("p",null,"Currently available bridges:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLBridge")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"uniforms-bridge-graphql")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JSONSchemaBridge")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"uniforms-bridge-json-schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSchema2Bridge")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"uniforms-bridge-simple-schema-2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSchemaBridge")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"uniforms-bridge-simple-schema"))),(0,i.kt)("p",null,"If you see a lot of ",(0,i.kt)("a",{parentName:"p",href:"https://fb.me/react-unknown-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"Warning: Unknown props..."))," logs, check if your schema or theme doesn't provide extra props. If so, consider ",(0,i.kt)("a",{parentName:"p",href:"api-helpers#filterdomprops"},"registering it with ",(0,i.kt)("inlineCode",{parentName:"a"},"filterDOMProps")),"."),(0,i.kt)("h2",{id:"graphqlbridge"},(0,i.kt)("inlineCode",{parentName:"h2"},"GraphQLBridge")),(0,i.kt)("p",null,"This bridge enables using GraphQL schema types as uniforms forms.\nThis saves you from not having to rewrite the form schema in your code.\nAs a trade-off, you have to write the validator from scratch. In some cases, it might be easier to rewrite the schema and use, for example, ",(0,i.kt)("a",{parentName:"p",href:"api-bridges#jsonschemabridge"},(0,i.kt)("inlineCode",{parentName:"a"},"JSONSchemaBridge")," with ",(0,i.kt)("inlineCode",{parentName:"a"},"ajv")),".\nIf only a simple or no validation is needed, this bridge is perfectly suited to work with GraphQL schemas."),(0,i.kt)("p",null,"The constructor accepts three arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema: GraphQLType")," can be any type parsed and extracted from a GraphQL schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator: (model: Record<string, any>) => any")," a custom validator function that should return a falsy value if no errors are present or information about errors in the model as described in the ",(0,i.kt)("a",{parentName:"li",href:"examples-custom-bridge#validator-definition"},"custom bridge section"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extras: Record<string, any> = {}")," used to extend the schema generated from GraphQL type with extra field configuration.")),(0,i.kt)("h3",{id:"code-example"},"Code example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GraphQLBridge } from 'uniforms-bridge-graphql';\nimport { buildASTSchema, parse } from 'graphql';\n\nconst schema = `\n    type Author {\n        id:        String!\n        firstName: String\n        lastName:  String\n    }\n\n    type Post {\n        id:     Int!\n        author: Author!\n        title:  String\n        votes:  Int\n    }\n\n    # This is required by buildASTSchema\n    type Query { anything: ID }\n`;\n\nconst schemaType = buildASTSchema(parse(schema)).getType('Post');\nconst schemaExtras = {\n  id: {\n    allowedValues: [1, 2, 3]\n  },\n  title: {\n    options: [\n      { label: 1, value: 'a' },\n      { label: 2, value: 'b' }\n    ]\n  },\n  'author.firstName': {\n    placeholder: 'John'\n  }\n};\n\nconst schemaValidator = (model: object) => {\n  const details = [];\n\n  if (!model.id) {\n    details.push({ name: 'id', message: 'ID is required!' });\n  }\n\n  if (!model.author.id) {\n    details.push({ name: 'author.id', message: 'Author ID is required!' });\n  }\n\n  if (model.votes < 0) {\n    details.push({\n      name: 'votes',\n      message: 'Votes must be a non-negative number!'\n    });\n  }\n\n  // ...\n\n  return details.length ? { details } : null;\n};\n\nconst bridge = new GraphQLBridge(schemaType, schemaValidator, schemaExtras);\n")),(0,i.kt)("h2",{id:"jsonschemabridge"},(0,i.kt)("inlineCode",{parentName:"h2"},"JSONSchemaBridge")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import Ajv from 'ajv';\nimport { JSONSchemaBridge } from 'uniforms-bridge-json-schema';\n\nconst ajv = new Ajv({ allErrors: true, useDefaults: true });\n\nconst schema = {\n  title: 'Person',\n  type: 'object',\n  properties: {\n    firstName: { type: 'string' },\n    lastName: { type: 'string' },\n    age: {\n      description: 'Age in years',\n      type: 'integer',\n      minimum: 0\n    }\n  },\n  required: ['firstName', 'lastName']\n};\n\nfunction createValidator(schema: object) {\n  const validator = ajv.compile(schema);\n\n  return (model: object) => {\n    validator(model);\n    return validator.errors?.length ? { details: validator.errors } : null;\n  };\n}\n\nconst schemaValidator = createValidator(schema);\n\nconst bridge = new JSONSchemaBridge(schema, schemaValidator);\n")),(0,i.kt)("h3",{id:"note-on-allofanyofoneof"},"Note on ",(0,i.kt)("inlineCode",{parentName:"h3"},"allOf"),"/",(0,i.kt)("inlineCode",{parentName:"h3"},"anyOf"),"/",(0,i.kt)("inlineCode",{parentName:"h3"},"oneOf")),(0,i.kt)("p",null,"The current handling of ",(0,i.kt)("inlineCode",{parentName:"p"},"allOf"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"anyOf"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf")," is not complete and does not work with all possible cases. For an in-detail discussion, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vazco/uniforms/issues/863"},"#","863"),". How it works, is that only a few properties are being used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties"),", where all subfields are merged (last definition wins),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required"),", where all properties are accumulated, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),", where the first one is being used.")),(0,i.kt)("p",null,"Below is an example of these implications:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "type": "object",\n  "properties": {\n    // This will render `NumField` WITHOUT `min` nor `max` properties.\n    // It will be properly validated, but without any UI guidelines.\n    "foo": {\n      "type": "number",\n      "allOf": [{ "minimum": 0 }, { "maximum": 10 }]\n    },\n    // This will render as `TextField`.\n    "bar": {\n      "oneOf": [{ "type": "string" }, { "type": "number" }]\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"note-on-bluebird"},"Note on Bluebird"),(0,i.kt)("p",null,"If you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/bluebird"},(0,i.kt)("inlineCode",{parentName:"a"},"bluebird"))," package, you may have seen the following warning (",(0,i.kt)("a",{parentName:"p",href:"http://bluebirdjs.com/docs/warning-explanations.html#warning-a-promise-was-rejected-with-a-non-error"},"docs"),"):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Warning: a promise was rejected with a non-error ","[object Object]")),(0,i.kt)("p",null,"In order to fix it, your ",(0,i.kt)("inlineCode",{parentName:"p"},"validator")," function should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Error"),"-like object instead of an object with a single ",(0,i.kt)("inlineCode",{parentName:"p"},"details")," property. The cleanest would be to create a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationError")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ErrorObject } from 'ajv';\n\nclass ValidationError extends Error {\n  name = 'ValidationError';\n\n  constructor(public details: ErrorObject[]) {\n    super('ValidationError');\n  }\n}\n\n// Usage.\nreturn validator.errors?.length ? new ValidationError(validator.errors) : null;\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vazco/uniforms/discussions/1047"},"#1047")," for more details."),(0,i.kt)("h2",{id:"simpleschema2bridge"},(0,i.kt)("inlineCode",{parentName:"h2"},"SimpleSchema2Bridge")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import SimpleSchema from 'simpl-schema';\nimport SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';\n\nconst PersonSchema = new SimpleSchema({\n  // ...\n\n  aboutMe: {\n    type: String,\n    uniforms: MyText, // Component...\n    uniforms: {\n      // ...or object...\n      component: MyText, // ...with component...\n      propA: 1 // ...and/or extra props.\n    }\n  }\n});\n\nconst bridge = new SimpleSchema2Bridge(PersonSchema);\n")),(0,i.kt)("h2",{id:"simpleschemabridge"},(0,i.kt)("inlineCode",{parentName:"h2"},"SimpleSchemaBridge")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import SimpleSchemaBridge from 'uniforms-bridge-simple-schema';\nimport { SimpleSchema } from 'aldeed:simple-schema';\n\nconst PersonSchema = new SimpleSchema({\n  // ...\n\n  aboutMe: {\n    type: String,\n    uniforms: MyText, // Component...\n    uniforms: {\n      // ...or object...\n      component: MyText, // ...with component...\n      propA: 1 // ...and/or extra props.\n    }\n  }\n});\n\nconst bridge = new SimpleSchemaBridge(PersonSchema);\n")))}c.isMDXComponent=!0}}]);