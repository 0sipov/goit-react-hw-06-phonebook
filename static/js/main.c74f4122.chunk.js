(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__40RkM",input:"ContactForm_input__3lg1Q",addButton:"ContactForm_addButton__14MzW"}},13:function(t,e,n){t.exports={contacts:"ContactList_contacts__3u4C8",contact:"ContactList_contact__wq317",removeButton:"ContactList_removeButton__2WRqq"}},21:function(t,e,n){t.exports={input:"Filter_input__QgBIh"}},27:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c,a=n(0),o=n.n(a),r=n(11),i=n.n(r),u=(n(27),n(4)),s=n(5),b=n(8),j=n(7),l=n(9),O=n(16),d=n(10),f=n.n(d),p=n(6),m=n(37),h=n(3),v=Object(h.b)("contacts/createContact",(function(t){return{payload:{name:t.name,number:t.number,id:Object(m.a)()}}})),C=Object(h.b)("contacts/removeContact"),x=Object(h.b)("contacts/updateFilter"),_=n(1),y=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={contact:{name:"",number:""}},t.handleChange=function(e){t.setState((function(t){return{contact:Object(O.a)(Object(O.a)({},t.contact),{},Object(l.a)({},e.target.name,e.target.value))}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.contact,e=this.props.onCreateContact,n=this.handleChange;return Object(_.jsxs)("form",{className:f.a.form,onSubmit:function(n){n.preventDefault(),e(t)},children:[Object(_.jsxs)("label",{children:["Name",Object(_.jsx)("input",{className:f.a.input,name:"name",type:"text",value:t.name,onChange:n})]}),Object(_.jsxs)("label",{children:["Number",Object(_.jsx)("input",{className:f.a.input,name:"number",type:"text",value:t.number,onChange:n})]}),Object(_.jsx)("button",{className:f.a.addButton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=Object(p.b)(void 0,(function(t){return{onCreateContact:function(e){return t(v(e))}}}))(y),k=n(21),N=n.n(k),F=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.filterUpdate;return Object(_.jsxs)("label",{children:["Find contacts by name",Object(_.jsx)("input",{className:N.a.input,name:"filter",type:"text",onChange:function(e){return t(e.target.value)}})]})}}]),n}(a.Component),w=Object(p.b)(void 0,(function(t){return{filterUpdate:function(e){return t(x(e))}}}))(F),B=n(13),L=n.n(B),R=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filtredContacts,n=t.onRemoveContact;return Object(_.jsx)("ul",{className:L.a.contacts,children:e.map((function(t){return Object(_.jsxs)("li",{className:L.a.contact,children:[Object(_.jsxs)("p",{children:[t.name,": ",t.number]}),Object(_.jsx)("button",{className:L.a.removeButton,type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})}}]),n}(a.Component),S=function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},q=Object(p.b)((function(t){return{filtredContacts:S(t.contacts.filter,t.contacts.items)}}),(function(t){return{onRemoveContact:function(e){return t(C(e))}}}))(R),A=(n(34),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("h1",{children:"Phone book"}),Object(_.jsx)(g,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(w,{}),Object(_.jsx)(q,{})]})}}]),n}(a.Component)),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))},I=n(12),M=n(2),P=Object(h.c)([],(c={},Object(l.a)(c,v,(function(t,e){var n=e.payload;return[].concat(Object(I.a)(t),[n])})),Object(l.a)(c,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),T=Object(h.c)("",Object(l.a)({},x,(function(t,e){return e.payload}))),J=Object(M.c)({items:P,filter:T}),Q=n(22),U=n.n(Q),W=[].concat(Object(I.a)(Object(h.d)()),[U.a]),z=Object(h.a)({reducer:{contacts:J},middleware:W,devTools:!1});i.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(p.a,{store:z,children:Object(_.jsx)(A,{})})}),document.getElementById("root")),D()}},[[35,1,2]]]);
//# sourceMappingURL=main.c74f4122.chunk.js.map