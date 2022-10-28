(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2iKsX",summary:"CartItem_summary__2c-I1",price:"CartItem_price__2dd-v",amount:"CartItem_amount__2h6uU",actions:"CartItem_actions__1UFDG"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1VU3g",total:"Cart_total__2WA6P",actions:"Cart_actions__3nSj0","button--alt":"Cart_button--alt__3FvCN",button:"Cart_button__3_0ur"}},,function(e,t,n){e.exports={button:"HeaderCartBtn_button__3NC28",icon:"HeaderCartBtn_icon__3dT-h",badge:"HeaderCartBtn_badge__1Knu5",bump:"HeaderCartBtn_bump__2ZWfo"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__Wec0z",description:"MealItem_description__ihJDp",price:"MealItem_price__3DpWo"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2csDe",modal:"Modal_modal__2hTKQ","slide-down":"Modal_slide-down__3UZy_"}},function(e,t,n){e.exports={header:"Header_header__2m-dB","main-image":"Header_main-image__3331a"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__zvbNl"}},function(e,t,n){e.exports={card:"Card_card__3hqu2"}},function(e,t,n){e.exports={input:"Input_input__3I-lL"}},function(e,t,n){e.exports={form:"MealItemForm_form__2r9bZ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3WpWF","meals-appear":"AvailableMeals_meals-appear__23oXv"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(7),u=n.n(d),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(m),d=s.items.reduce((function(e,t){return e+t.amount}),0),j=s.items,b="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==j.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[j]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(o.jsx)("span",{className:u.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:u.a.badge,children:d})]})})},b=n.p+"static/media/meals.7024733e.jpg",x=n(12),O=n.n(x),h=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsx)("h1",{children:"Super meals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:O.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"a table full of food"})})]})},p=n(16),_=n.n(p),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(17),C=n.n(v),g=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},N=n(2),A=n(18),y=n.n(A),I=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:y.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(N.a)({ref:t},e.input))]})})),w=n(19),F=n.n(w),M=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount(1-5)"})]})},k=n(10),H=n.n(k),B=function(e){var t=Object(r.useContext)(m),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(M,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=n(20),S=n.n(D),R=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],T=function(){var e=R.map((function(e){return Object(o.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:S.a.meals,children:Object(o.jsx)(g,{children:Object(o.jsx)("ul",{children:e})})})})},E=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(T,{})]})},z=n(8),W=n.n(z),P=n(11),U=n.n(P),V=function(e){return Object(o.jsx)("div",{className:U.a.backdrop,onClick:e.onClose})},J=function(e){return Object(o.jsx)("div",{className:U.a.modal,children:Object(o.jsx)("div",{className:U.a.content,children:e.children})})},K=document.getElementById("overlays"),Z=function(e){return Object(o.jsxs)(o.Fragment,{children:[W.a.createPortal(Object(o.jsx)(V,{onClose:e.onClose}),K),W.a.createPortal(Object(o.jsx)(J,{children:e.children}),K)]})},$=n(4),q=n.n($),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:q.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:q.a.summary,children:[Object(o.jsx)("span",{className:q.a.price,children:t}),Object(o.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:q.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(5),Y=n.n(X),L=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(N.a)(Object(N.a)({},e),{},{amount:1}))},s=Object(o.jsx)("ul",{className:Y.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(o.jsxs)(Z,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:Y.a.total,children:[Object(o.jsx)("span",{children:"Total amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:Y.a.actions,children:[Object(o.jsx)("button",{className:Y.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:Y.a.button,children:"Order"})]})]})},Q=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(N.a)(Object(N.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Q.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(N.a)(Object(N.a)({},l),{},{amount:l.amount-1});(s=Object(Q.a)(e.items))[o]=d}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(m.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ne,{children:[n&&Object(o.jsx)(L,{onClose:function(){a(!1)}}),Object(o.jsx)(h,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(E,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.3315432b.chunk.js.map