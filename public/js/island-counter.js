import{b as n}from"./chunk-MPXSTW66.js";import{d as t}from"./chunk-AJ2QNIM7.js";import"./chunk-FM7O2KMF.js";function s({start:o=0}){let e=n(o),r=()=>e.value+=1;return t("div",{style:`
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;
        margin: 25px auto;
    `,children:[t("button",{className:"btn",onClick:()=>e.value-=1,children:"-1"}),t("output",{children:e.value}),t("button",{className:"btn",onClick:r,children:"+1"})]})}export{s as default};
