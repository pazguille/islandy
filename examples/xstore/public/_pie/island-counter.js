import{b as n}from"./chunk-KYFIC2JY.js";import{d as t}from"./chunk-HUUNSSFL.js";import"./chunk-NSU4EOFU.js";function s({start:o=0}){let e=n(o),r=()=>e.value+=1;return t("div",{style:`
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;
        margin: 25px auto;
    `,children:[t("button",{className:"btn",onClick:()=>e.value-=1,children:"-1"}),t("output",{children:e.value}),t("button",{className:"btn",onClick:r,children:"+1"})]})}export{s as default};
