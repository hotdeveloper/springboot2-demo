(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),r=n.n(l),i=(n(16),n(1)),c=n(2),u=n(5),s=n(4),h=n(3),m=n(6),d=(n(17),n(9)),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={name:""},n.handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.name?(n.props.onHello(n.state),n.setState({name:""})):alert("Empty value not allowed.")},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,style:{"text-align":"center"}},o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"name",placeholder:"\uc774\ub984",value:this.state.name,onChange:this.handleChange}),o.a.createElement("button",{type:"submit"},"Say Hello")))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={id:0,content:""},n.handleHello=n.handleHello.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleHello",value:function(e){var t=this;fetch("/greeting?name="+e.name).then(function(e){return e.json()}).then(function(e){t.setState({id:e.id,content:e.content})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{onHello:this.handleHello}),this.state.id,", ",this.state.content)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.ea8cd2a1.chunk.js.map