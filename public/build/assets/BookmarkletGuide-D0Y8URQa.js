import{r as t,U as c,j as s,L as W,$ as q}from"./app-Dn_AZamZ.js";import{H as J}from"./Header-Cb_NRIkm.js";import{S as K}from"./Stack-D2Z5wMDu.js";import{c as Q,V as N,n as Y,o as Z,B as z}from"./Button-BBTF50jd.js";import{u as ee}from"./useDecorators-aEKzmC17.js";import"./styled-components.browser.esm-bt7omeYQ.js";import"./index-FUwZcQZk.js";const D=(a,e)=>{let o=null;return function(...u){o!==null&&clearTimeout(o),o=setTimeout(()=>{a(...u)},e)}},C=a=>{const e=typeof a=="number"||typeof a=="string"?`${a}`:Array.isArray(a)?a.join(","):"",o=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;return e.length-(e.match(o)||[]).length},te={beforeMaxLettersCount:"あと",afterMaxLettersCount:"文字",afterMaxLettersCountExceeded:"オーバー",beforeScreenReaderMaxLettersDescription:"最大",afterScreenReaderMaxLettersDescription:"文字入力できます"},re=Q({slots:{textareaEl:["smarthr-ui-Textarea-textarea","shr-border-shorthand shr-my-[unset] shr-box-border shr-rounded-m shr-bg-white shr-p-0.5 shr-text-base shr-leading-normal shr-text-black shr-opacity-100","contrast-more:shr-border-high-contrast","placeholder:shr-text-grey","focus-visible:shr-focus-indicator","disabled:shr-pointer-events-none disabled:shr-bg-column disabled:shr-text-disabled disabled:placeholder:shr-text-disabled","aria-[invalid]:shr-border-danger"],counter:"smarthr-ui-Textarea-counter shr-block shr-text-sm",counterText:"shr-text-black"},variants:{error:{true:{counterText:"shr-text-danger"}}},defaultVariants:{error:!1}}),I=(a,e=Number.MAX_SAFE_INTEGER)=>{if(!a)return 0;const o=Math.floor(a.scrollHeight/(Y*Number(Z.normal)));return o<e?o:e},ae=t.forwardRef(({autoFocus:a,maxLetters:e,width:o,className:u,autoResize:h=!1,maxRows:x=1/0,rows:b=2,onInput:f,decorators:R,error:v,onChange:m,...g},F)=>{const E=t.useId(),M=`${E}-notice`,S=e?E:void 0,i=t.useRef(null),T=g.defaultValue||g.value,[U,y]=t.useState(b),[d,$]=t.useState(T?C(T):0),[B,H]=t.useState(""),l=ee(te,R),p=t.useCallback(r=>{if(e!==void 0)return r>e?c.createElement(c.Fragment,null,r-e,l.afterMaxLettersCount,l.afterMaxLettersCountExceeded):c.createElement(c.Fragment,null,l.beforeMaxLettersCount,e-r,l.afterMaxLettersCount)},[e,l.afterMaxLettersCountExceeded,l.afterMaxLettersCount,l.beforeMaxLettersCount]),V=t.useMemo(()=>p(d),[d,p]);t.useImperativeHandle(F,()=>i.current);const j=t.useCallback(D(r=>{t.startTransition(()=>{$(C(r))})},200),[]),k=t.useCallback(D(r=>{t.startTransition(()=>{const n=p(C(r));n&&H(n)})},1e3),[p]),A=t.useCallback(r=>{if(e){const n=r.currentTarget.value;j(n),k(n)}m==null||m(r)},[j,e,m,k]);t.useEffect(()=>{a&&i&&i.current&&i.current.focus()},[a]),t.useEffect(()=>{h&&i.current&&y(I(i.current,x))},[y,x,h]);const L=t.useCallback(r=>{if(r.target.rows=b,h){const n=I(r.target,x);r.target.rows=n,y(n)}f==null||f(r)},[h,x,f,b]),{textareaStyleProps:P,counterStyle:_,counterTextStyle:O}=t.useMemo(()=>{const{textareaEl:r,counter:n,counterText:X}=re();return{textareaStyleProps:{className:r({className:u}),style:{width:typeof o=="number"?`${o}px`:o}},counterStyle:n(),counterTextStyle:X({error:!!(e&&e-d<0)})}},[u,d,e,o]),G=t.useMemo(()=>{const r=e&&d>e;return v||r||void 0},[v,e,d]),w=c.createElement("textarea",{...g,...P,...e&&{"aria-describedby":`${M} ${S}`},"data-smarthr-ui-input":"true",onChange:A,ref:i,"aria-invalid":G||void 0,rows:U,onInput:L});return e?c.createElement("span",null,w,c.createElement("span",{className:_},c.createElement("span",{className:O,id:S,"aria-hidden":!0},V)),c.createElement(N,{"aria-live":"polite"},B),c.createElement(N,{id:M},l.beforeScreenReaderMaxLettersDescription,e,l.afterScreenReaderMaxLettersDescription)):w}),oe=()=>{const[a,e]=t.useState(!1),o=`javascript:(function(){
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let popupUrl;
    const homePath = "/";
  
    if (homePath === '/') {
      popupUrl = "http://localhost/favorite/create?title=" + title + "&url=" + url;
    } else {
      popupUrl = "https://snowtapir22.sakura.ne.jp" + homePath + "/favorite/create?title=" + title + "&url=" + url;
    }
  
    window.open(popupUrl, "BookmarkWindow", "width=600,height=500");
  })();`,u=async()=>{try{await navigator.clipboard.writeText(o),e(!0),setTimeout(()=>e(!1),2e3)}catch{alert("コピーに失敗しました")}};return s.jsxs(K,{className:"gap-y-4 max-w-3xl",children:[s.jsxs("ol",{className:"list-decimal pl-6 text-sm leading-relaxed",children:[s.jsxs("li",{children:["以下のコードをコピーして、ブラウザのブックマークバーに貼り付けてください。",s.jsx("br",{}),"通常のブックマークと同様に名前をつけることもできます。(例：音すくいリスト追加)"]}),s.jsx("li",{children:"クリックすると開いているページをお気に入りに登録できます。"})]}),s.jsx(ae,{readOnly:!0,value:o,rows:6,className:"font-mono text-xs"}),s.jsx(z,{onClick:u,variant:"primary",className:"h-[44px] bg-[var(--color-primary)] font-bold text-base/[1] border-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-primary-hover)] hover:border-[var(--color-primary-hover)]",children:a?"コピーしました！":"コードをコピー"})]})},he=({authUser:a})=>s.jsxs(s.Fragment,{children:[s.jsx(W,{title:"音すくい | お気に入り追加方法"}),s.jsx(J,{authUser:a}),s.jsxs("main",{className:"pt-[148px] px-4 md:px-8 text-[var(--color-text-primary)] max-w-3xl mx-auto",children:[s.jsx("h2",{className:"font-bold text-3xl text-center mb-8",children:"お気に入り登録用ブックマークレット"}),s.jsx(oe,{}),s.jsx("div",{className:"mt-12 text-center",children:s.jsx(q,{href:"/favorite",className:"text-base font-bold underline text-[var(--color-text)] hover:opacity-80",children:"お気に入り一覧に戻る"})})]})]});export{he as default};
