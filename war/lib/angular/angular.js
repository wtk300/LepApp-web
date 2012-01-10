/*
 AngularJS v0.10.5
 (c) 2010-2011 AngularJS http://angularjs.org
 License: MIT
*/
'use strict';
(function(y,K,D){
    function k(a,b,c){
        var d;
        if(a)if(t(a))for(d in a)d!="prototype"&&d!=mc&&d!=nc&&a.hasOwnProperty(d)&&b.call(c,a[d],d);else if(a.forEach&&a.forEach!==k)a.forEach(b,c);
            else if(L(a)&&ma(a.length))for(d=0;d<a.length;d++)b.call(c,a[d],d);else for(d in a)b.call(c,a[d],d);return a
        }
        function sb(a){
        var b=[],c;
        for(c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()
        }
        function tb(a,b,c){
        for(var d=sb(a),e=0;e<d.length;e++)b.call(c,a[d[e]],d[e]);
        return d
        }
        function oc(a){
        a instanceof u&&
        (a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));
        return a
        }
        function Ra(){
        for(var a=R.length,b;a;){
            a--;
            b=R[a].charCodeAt(0);
            if(b==57)return R[a]="A",R.join("");
            if(b==90)R[a]="0";else return R[a]=String.fromCharCode(b+1),R.join("")
                }
                R.unshift("0");
        return R.join("")
        }
        function w(a){
        k(arguments,function(b){
            b!==a&&k(b,function(b,d){
                a[d]=b
                })
            });
        return a
        }
        function ua(a,b){
        return w(new (w(function(){},{
            prototype:a
        })),
        b)
        }
        function v(){}
    function da(a){
        return a
        }
        function Sa(a){
        return function(){
            return a
            }
        }
    function X(a,b,c){
    var d;
    return a[b]||(d=a[b]=function(a,b,g){
        a=(c||da)(a);
        p(b)&&(d[a]=w(b,g||{}));
        return d[a]
        })
    }
    function r(a){
    return typeof a==Ta
    }
    function p(a){
    return typeof a!=Ta
    }
    function L(a){
    return a!=null&&typeof a==ub
    }
    function s(a){
    return typeof a==pc
    }
    function ma(a){
    return typeof a==qc
    }
    function na(a){
    return a instanceof Date
    }
    function M(a){
    return a instanceof Array
    }
    function t(a){
    return typeof a=="function"
    }
    function S(a){
    return s(a)?
    a.replace(/^\s*/,"").replace(/\s*$/,""):a
    }
    function Ua(a){
    return a&&(a.nodeName||a.bind&&a.find)
    }
    function T(a){
    var b={},a=a.split(","),c;
    for(c=0;c<a.length;c++)b[a[c]]=!0;
    return b
    }
    function Va(a,b){
    this.html=a;
    this.get=z(b)=="unsafe"?Sa(a):function(){
        var b=[];
        vb(a,wb(b));
        return b.join("")
        }
    }
function rc(a,b,c){
    var d=[];
    k(a,function(a,f,g){
        d.push(b.call(c,a,f,g))
        });
    return d
    }
    function xb(a,b){
    var c=0,d;
    if(M(a)||s(a))return a.length;
    else if(L(a))for(d in a)(!b||a.hasOwnProperty(d))&&c++;return c
    }
    function yb(a,
    b){
    for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1
    }
    function sc(a){
    if(a)switch(a.nodeName){
        case "OPTION":case "PRE":case "TITLE":
            return!0
            }
            return!1
    }
    function A(a,b){
    if(b)if(M(a)){
        for(;b.length;)b.pop();
        for(var c=0;c<a.length;c++)b.push(A(a[c]))
            }else for(c in k(b,function(a,c){
        delete b[c]
    }),a)b[c]=A(a[c]);else(b=a)&&(M(a)?b=A(a,[]):na(a)?b=new Date(a.getTime()):L(a)&&(b=A(a,{})));
    return b
    }
    function P(a,b){
    if(a===b)return!0;
    if(a===null||b===null)return!1;
    var c=typeof a,d;
    if(c==typeof b&&c=="object")if(a instanceof
        Array){
        if((c=a.length)==b.length){
            for(d=0;d<c;d++)if(!P(a[d],b[d]))return!1;return!0
            }
        }else{
        c={};
        
        for(d in a){
            if(d.charAt(0)!=="$"&&!t(a[d])&&!P(a[d],b[d]))return!1;
            c[d]=!0
            }
            for(d in b)if(!c[d]&&d.charAt(0)!=="$"&&!t(b[d]))return!1;return!0
        }
        return!1
}
function N(a,b){
    var c=arguments.length>2?ea.call(arguments,2):[];
    return t(b)&&!(b instanceof RegExp)?c.length?function(){
        return arguments.length?b.apply(a,c.concat(ea.call(arguments,0))):b.apply(a,c)
        }:function(){
        return arguments.length?b.apply(a,arguments):
        b.call(a)
        }:b
    }
    function va(a){
    a&&a.length!==0?(a=z(""+a),a=!(a=="f"||a=="0"||a=="false"||a=="no"||a=="n"||a=="[]")):a=!1;
    return a
    }
    function Wa(a){
    return(new zb(Xa,Ab,C,G)).compile(a)
    }
    function wa(a){
    var b={},c,d;
    k((a||"").split("&"),function(a){
        a&&(c=a.split("="),d=decodeURIComponent(c[0]),b[d]=p(c[1])?decodeURIComponent(c[1]):!0)
        });
    return b
    }
    function Bb(a){
    var b=[];
    k(a,function(a,d){
        b.push(fa(d,!0)+(a===!0?"":"="+fa(a,!0)))
        });
    return b.length?b.join("&"):""
    }
    function xa(a){
    return fa(a,!0).replace(/%26/gi,
        "&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")
    }
    function fa(a,b){
    return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(b?null:/%20/g,"+")
    }
    function Cb(){
    (ga=y.jQuery)?(o=ga,w(ga.fn,{
        scope:Ya.scope,
        inheritedData:Ya.inheritedData
        }),Za("remove",!0),Za("empty"),Za("html")):o=$a;
    x.element=o
    }
    function ha(a,b){
    if(!t(a))throw new u("Argument '"+(b||"?")+"' is "+("not a function, got "+(typeof a=="object"?a.constructor.name:typeof a)||"required"));
    return a
    }
    function U(a,b){
    var c=[];
    ab(c,a,b?"\n  ":null,[]);
    return c.join("")
    }
    function ia(a,b){
    function c(a){
        if(s(a)&&a.length===Db)return aa.toDate(a);else(M(a)||L(a))&&k(a,function(b,d){
            a[d]=c(b)
            });
        return a
        }
        if(!s(a))return a;
    var d;
    try{
        return b&&y.JSON&&y.JSON.parse?(d=JSON.parse(a),c(d)):ya(a,!0).primary()()
        }catch(e){
        throw tc("fromJson error: ",a,e),e;
    }
}
function ab(a,b,c,d){
    if(L(b)){
        if(b===y){
            a.push("WINDOW");
            return
        }
        if(b===K){
            a.push("DOCUMENT");
            return
        }
        var e;
            a:{
            for(e=0;e<d.length;e++)if(b===d[e]){
                e=
                !0;
                break a
            }
            e=!1
            }
            if(e){
            a.push("RECURSION");
            return
        }
        d.push(b)
        }
        if(b===null)a.push(za);
    else if(b instanceof RegExp)a.push(aa.quoteUnicode(b.toString()));
    else if(t(b))return;
    else if(typeof b==uc)a.push(""+b);
    else if(ma(b))isNaN(b)?a.push(za):a.push(""+b);
    else if(s(b))return a.push(aa.quoteUnicode(b));
    else if(L(b))if(M(b)){
        a.push("[");
        e=b.length;
        for(var f=!1,g=0;g<e;g++){
            var h=b[g];
            f&&a.push(",");
            !(h instanceof RegExp)&&(t(h)||r(h))?a.push(za):ab(a,h,c,d);
            f=!0
            }
            a.push("]")
        }else if(Ua(b))a.push("DOM_ELEMENT");
        else if(na(b))a.push(aa.quoteUnicode(x.Date.toString(b)));
        else{
            a.push("{");
            c&&a.push(c);
            e=!1;
            f=c?c+"  ":!1;
            g=[];
            for(h in b)h!="this"&&h!="$parent"&&h.substring(0,2)!="$$"&&b.hasOwnProperty(h)&&b[h]!==D&&g.push(h);g.sort();
            for(h=0;h<g.length;h++){
                var j=g[h],i=b[j];
                t(i)||(e&&(a.push(","),c&&a.push(c)),a.push(aa.quote(j)),a.push(":"),ab(a,i,f,d),e=!0)
                }
                a.push("}")
            }
            L(b)&&d.pop()
    }
    function bb(){
    this.paths=[];
    this.children=[];
    this.linkFns=[];
    this.newScope=!1
    }
    function zb(a,b,c,d){
    this.markup=a;
    this.attrMarkup=
    b;
    this.directives=c;
    this.widgets=d
    }
    function vc(a,b){
    var c,d=a[0].childNodes||[],e;
    for(c=0;c<d.length;c++){
        var f=e=d[c];
        oa(f)=="#text"||b(o(e),c)
        }
    }
    function Aa(a,b){
    var c,d=a[0].attributes||[],e,f,g={};
    
    for(c=0;c<d.length;c++)e=d[c],f=e.name,e=e.value,O&&f=="href"&&(e=decodeURIComponent(a[0].getAttribute(f,2))),g[f]=e;
    tb(g,b)
    }
    function Eb(a,b){
    var c=new Fb;
    (c.$service=Gb(c,a,b)).eager();
    return c
    }
    function Fb(){
    this.$id=Ra();
    this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=
    this.$$childHead=this.$$childTail=null;
    this.$destructor=v;
    this["this"]=this.$root=this;
    this.$$asyncQueue=[];
    this.$$listeners={}
}
function Hb(a,b){
    var c=s(a)?Y(a):a;
    ha(c,b);
    return c
    }
    function Gb(a,b,c){
    function d(d){
        if(!(d in c)){
            var g=b[d];
            if(!g)throw u("Unknown provider for '"+d+"'.");
            cb(g);
            c[d]=e(a,g)
            }
            return c[d]
        }
        function e(a,b,c){
        for(var c=c||[],e=b.$inject||[],i=e.length;i--;)c.unshift(d(e[i]));
        return b.apply(a,c)
        }
        b=b||Ba;
    c=c||{};
    
    a=a||{};
    
    d.invoke=e;
    d.eager=function(){
        k(b,function(a,b){
            a.$eager&&
            d(b);
            if(a.$creation)throw new u("Failed to register service '"+b+"': $creation property is unsupported. Use $eager:true or see release notes.");
        })
        };
        
    return d
    }
    function pa(a,b){
    if(a instanceof Array)return b.$inject=a,b;
    else{
        for(var c=0,d=arguments.length-1,e=arguments[d].$inject=[];c<d;c++)e.push(arguments[c]);
        return arguments[d]
        }
    }
function F(a,b,c,d){
    Ba(a,b,{
        $inject:c,
        $eager:d
    })
    }
    function cb(a){
    ha(a);
    if(!a.$inject){
        var b=a.$inject=[],c=a.toString().replace(wc,"").match(xc);
        k(c[1].split(yc),function(a){
            a.replace(zc,
                function(a,c){
                    b.push(c)
                    })
            })
        }
        return a.$inject
    }
    function Ac(a,b){
    function c(a){
        return a.indexOf(k)!=-1
        }
        function d(){
        return q+1<a.length?a.charAt(q+1):!1
        }
        function e(a){
        return"0"<=a&&a<="9"
        }
        function f(a){
        return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"
        }
        function g(a){
        return a=="-"||a=="+"||e(a)
        }
        function h(b,c,d){
        d=d||q;
        throw u("Lexer Error: "+b+" at column"+(p(c)?"s "+c+"-"+q+" ["+a.substring(c,d)+"]":" "+d)+" in expression ["+a+"].");
    }
    function j(){
        for(var b="",c=q;q<a.length;){
            var f=z(a.charAt(q));
            if(f=="."||e(f))b+=f;
            else{
                var i=d();
                if(f=="e"&&g(i))b+=f;
                else if(g(f)&&i&&e(i)&&b.charAt(b.length-1)=="e")b+=f;
                else if(g(f)&&(!i||!e(i))&&b.charAt(b.length-1)=="e")h("Invalid exponent");else break
            }
            q++
        }
        b*=1;
        n.push({
            index:c,
            text:b,
            json:!0,
            fn:function(){
                return b
                }
            })
    }
    function i(){
    for(var b="",c=q,d;q<a.length;){
        d=a.charAt(q);
        if(d=="."||f(d)||e(d))b+=d;else break;
        q++
    }
    d=db[b];
    n.push({
        index:c,
        text:b,
        json:d,
        fn:d||w(Ib(b),{
            assign:function(a,c){
                return Jb(a,b,c)
                }
            })
    })
}
function l(b){
    var c=q;
    q++;
    for(var d="",e=
        b,g=!1;q<a.length;){
        var f=a.charAt(q);
        e+=f;
        if(g)f=="u"?(f=a.substring(q+1,q+5),f.match(/[\da-f]{4}/i)||h("Invalid unicode escape [\\u"+f+"]"),q+=4,d+=String.fromCharCode(parseInt(f,16))):(g=Bc[f],d+=g?g:f),g=!1;
        else if(f=="\\")g=!0;
        else if(f==b){
            q++;
            n.push({
                index:c,
                text:e,
                string:d,
                json:!0,
                fn:function(){
                    return d.length==m?x.String.toDate(d):d
                    }
                });
        return
    }else d+=f;
        q++
    }
    h("Unterminated quote",c)
}
for(var m=b?Db:-1,n=[],E,q=0,I=[],k,B=":";q<a.length;){
    k=a.charAt(q);
    if(c("\"'"))l(k);
    else if(e(k)||c(".")&&
        e(d()))j();
    else if(f(k)){
        if(i(),"{,".indexOf(B)!=-1&&I[0]=="{"&&(E=n[n.length-1]))E.json=E.text.indexOf(".")==-1
            }else if(c("(){}[].,;:"))n.push({
        index:q,
        text:k,
        json:":[,".indexOf(B)!=-1&&c("{[")||c("}]:,")
        }),c("{[")&&I.unshift(k),c("}]")&&I.shift(),q++;
    else if(k==" "||k=="\r"||k=="\t"||k=="\n"||k=="\u000b"||k=="\u00a0"){
        q++;
        continue
    }else{
        var J=k+d(),o=db[k],t=db[J];
        t?(n.push({
            index:q,
            text:J,
            fn:t
        }),q+=2):o?(n.push({
            index:q,
            text:k,
            fn:o,
            json:"[,:".indexOf(B)!=-1&&c("+-")
            }),q+=1):h("Unexpected next character ",
            q,q+1)
        }
        B=k
    }
    return n
}
function ya(a,b){
    function c(a){
        return function(){
            var b=a();
            p.length!==0&&d("is an unexpected token",p[0]);
            return b
            }
        }
    function d(b,c){
    throw u("Syntax Error: Token '"+c.text+"' "+b+" at column "+(c.index+1)+" of the expression ["+a+"] starting at ["+a.substring(c.index)+"].");
}
function e(){
    if(p.length===0)throw u("Unexpected end of expression: "+a);
    return p[0]
    }
    function f(a,b,c,d){
    if(p.length>0){
        var e=p[0],g=e.text;
        if(g==a||g==b||g==c||g==d||!a&&!b&&!c&&!d)return e
            }
            return!1
    }
    function g(a,
    c,e,g){
    return(a=f(a,c,e,g))?(b&&!a.json&&d("is not valid json",a),p.shift(),a):!1
    }
    function h(a){
    g(a)||d("is unexpected, expecting ["+a+"]",f())
    }
    function j(a,b){
    return function(c){
        return a(c,b)
        }
    }
function i(a,b,c){
    return function(d){
        return b(d,a,c)
        }
    }
function l(){
    return Ca(V)
    }
    function m(){
    for(var a=n(),b;;)if(b=g("||"))a=i(a,b.fn,n());else return a
        }
        function n(){
    var a=E(),b;
    if(b=g("&&"))a=i(a,b.fn,n());
    return a
    }
    function E(){
    var a=q(),b;
    if(b=g("==","!="))a=i(a,b.fn,E());
    return a
    }
    function q(){
    var a;
    a=k();
    for(var b;b=g("+","-");)a=i(a,b.fn,k());
    if(b=g("<",">","<=",">="))a=i(a,b.fn,q());
    return a
    }
    function k(){
    for(var a=ja(),b;b=g("*","/","%");)a=i(a,b.fn,ja());
    return a
    }
    function ja(){
    var a;
    return g("+")?B():(a=g("-"))?i(s,a.fn,ja()):(a=g("!"))?j(a.fn,ja()):B()
    }
    function B(){
    var a;
    if(g("("))a=eb(),h(")");
    else if(g("["))a=J();
    else if(g("{"))a=o();
    else{
        var b=g();
        (a=b.fn)||d("not a primary expression",b)
        }
        for(;b=g("(","[",".");)b.text==="("?a=y(a):b.text==="["?a=Kb(a):b.text==="."?a=x(a):d("IMPOSSIBLE");
    return a
    }
function J(){
    var a=[];
    if(e().text!="]"){
        do a.push(r());while(g(","))
    }
    h("]");
    return function(b){
        for(var c=[],d=0;d<a.length;d++)c.push(a[d](b));
        return c
        }
    }
function o(){
    var a=[];
    if(e().text!="}"){
        do{
            var b=g(),b=b.string||b.text;
            h(":");
            var c=r();
            a.push({
                key:b,
                value:c
            })
            }while(g(","))
    }
    h("}");
    return function(b){
        for(var c={},d=0;d<a.length;d++){
            var e=a[d],g=e.value(b);
            c[e.key]=g
            }
            return c
        }
    }
var s=Sa(0),p=Ac(a,b),r=function(){
    var b=m(),c,e;
    return(e=g("="))?(b.assign||d("implies assignment but ["+a.substring(0,
        e.index)+"] can not be assigned to",e),c=m(),function(a){
        return b.assign(a,c(a))
        }):b
    },z=m,y=function(a){
    var b=[];
    if(e().text!=")"){
        do b.push(r());while(g(","))
    }
    h(")");
    return function(c){
        for(var d=[],e=0;e<b.length;e++)d.push(b[e](c));
        e=a(c)||v;
        return e.apply?e.apply(c,d):e(d[0],d[1],d[2],d[3],d[4])
        }
    },x=function(a){
    var b=g().text,c=Ib(b);
    return w(function(b){
        return c(a(b))
        },{
        assign:function(c,d){
            return Jb(a(c),b,d)
            }
        })
},Kb=function(a){
    var b=r();
    h("]");
    return w(function(c){
        var d=a(c),c=b(c);
        return d?
        d[c]:D
        },{
        assign:function(c,d){
            return a(c)[b(c)]=d
            }
        })
},eb=function(){
    for(var a=r(),b;;)if(b=g("|"))a=i(a,b.fn,l());else return a
        },Lb=function(a){
    for(var b=g(),c=b.text.split("."),e,f=0;f<c.length;f++)e=c[f],a&&(a=a[e]);
    t(a)||d("should be a function",b);
    return a
    },Ca=function(a){
    for(var b=Lb(a),c=[];;)if(g(":"))c.push(r());
        else{
        var d=function(a,d){
            for(var e=[d],g=0;g<c.length;g++)e.push(c[g](a));
            return b.apply(a,e)
            };
            
        return function(){
            return d
            }
        }
    };

b&&(r=m,y=x=Kb=z=eb=Lb=Ca=function(){
    d("is not valid json",

    {
        text:a,
        index:0
    })
    });
return{
    assignable:c(z),
    primary:c(B),
    statements:c(function(){
        for(var a=[];;)if(p.length>0&&!f("}",")",";","]")&&a.push(eb()),!g(";"))return a.length==1?a[0]:function(b){
            for(var c,d=0;d<a.length;d++){
                var e=a[d];
                e&&(c=e(b))
                }
                return c
            }
        }),
filter:c(l)
}
}
function Jb(a,b,c){
    for(var b=b.split("."),d=0;b.length>1;d++){
        var e=b.shift(),f=a[e];
        f||(f={},a[e]=f);
        a=f
        }
        return a[b.shift()]=c
    }
    function Da(a,b,c){
    if(!b)return a;
    for(var b=b.split("."),d,e=a,f=b.length,g=0;g<f;g++)if(d=b[g],a&&(a=(e=a)[d]),
        r(a)&&d.charAt(0)=="$"){
        var h=Z.typeOf(e);
        if(d=(h=x[h.charAt(0).toUpperCase()+h.substring(1)])?h[[d.substring(1)]]:Cc)return N(e,d,e)
            }
            return!c&&t(a)?N(e,a):a
    }
    function Ib(a){
    var b=Mb[a];
    if(b)return b;
    var c="var l, fn, t;\n";
    k(a.split("."),function(a){
        a=Nb[a]?'["'+a+'"]':"."+a;
        c+="if(!s) return s;\nl=s;\ns=s"+a+';\nif(typeof s=="function" && !(s instanceof RegExp)) {\n fn=function(){ return l'+a+".apply(l, arguments); };\n fn.$unboundFn=s;\n s=fn;\n}\n";
        a.charAt(1)=="$"&&(a=a.substr(2),c+='if(!s) {\n t = angular.Global.typeOf(l);\n fn = (angular[t.charAt(0).toUpperCase() + t.substring(1)]||{})["'+
            a+'"];\n if (fn) s = function(){ return fn.apply(l, [l].concat(Array.prototype.slice.call(arguments, 0))); };\n}\n')
        });
    c+="return s;";
    b=Function("s",c);
    b.toString=function(){
        return c
        };
        
    return Mb[a]=b
    }
    function Y(a){
    if(t(a))return a;
    var b=Ob[a];
    b||(b=Ob[a]=ya(a).statements());
    return b
    }
    function Pb(a,b){
    this.template=a+="#";
    this.defaults=b||{};
    
    var c=this.urlParams={};
    
    k(a.split(/\W/),function(b){
        b&&a.match(RegExp(":"+b+"\\W"))&&(c[b]=!0)
        })
    }
    function Ea(a){
    this.xhr=a
    }
    function Dc(a,b,c,d,e,f){
    function g(a){
        try{
            a.apply(null,
                ea.call(arguments,1))
            }finally{
            if(B--,B===0)for(;J.length;)try{
                J.pop()()
                }catch(b){
                e.error(b)
                }
            }
            }
function h(a,b){
    (function Ca(){
        k(t,function(a){
            a()
            });
        p=b(Ca,a)
        })()
    }
    function j(){
    w!=i.url()&&(w=i.url(),k(y,function(a){
        a(i.url())
        }))
    }
    var i=this,l=b[0],m=a.location,n=a.history,E=a.setTimeout,q=a.clearTimeout,I={};

i.isMock=!1;
var ja=0,B=0,J=[];
i.xhr=function(b,e,f,h,j){
    B++;
    if(z(b)=="json"){
        var m=("angular_"+Math.random()+"_"+ja++).replace(/\d\./,"");
        a[m]=function(b){
            a[m].data=b
            };
            
        var n=i.addJs(e.replace("JSON_CALLBACK",
            m),function(){
            a[m].data?g(h,200,a[m].data):g(h);
            delete a[m];
            c[0].removeChild(n)
            })
        }else{
        var l=new d;
        l.open(b,e,!0);
        k(j,function(a,b){
            a&&l.setRequestHeader(b,a)
            });
        l.onreadystatechange=function(){
            l.readyState==4&&g(h,l.status==1223?204:l.status,l.responseText)
            };
            
        l.send(f||"")
        }
    };

i.notifyWhenNoOutstandingRequests=function(a){
    k(t,function(a){
        a()
        });
    B===0?a():J.push(a)
    };
    
var t=[],p;
i.addPollFn=function(a){
    r(p)&&h(100,E);
    t.push(a);
    return a
    };
    
var w=m.href;
i.url=function(a,b){
    return a?(w=a,f.history?b?n.replaceState(null,
        "",a):n.pushState(null,"",a):b?m.replace(a):m.href=a,i):m.href
    };
    
var y=[],x=!1;
i.onUrlChange=function(b){
    x||(f.history&&o(a).bind("popstate",j),f.hashchange?o(a).bind("hashchange",j):i.addPollFn(j),x=!0);
    y.push(b);
    return b
    };
    
var u={},A="";
i.cookies=function(a,b){
    var c,d,g,f;
    if(a)if(b===D)l.cookie=escape(a)+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        else{
        if(s(b))l.cookie=escape(a)+"="+escape(b),c=a.length+b.length+1,c>4096&&e.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+
            c+" > 4096 bytes)!"),u.length>20&&e.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+u.length+" > 20 )")
            }else{
        if(l.cookie!==A){
            A=l.cookie;
            c=A.split("; ");
            u={};
            
            for(g=0;g<c.length;g++)d=c[g],f=d.indexOf("="),f>0&&(u[unescape(d.substring(0,f))]=unescape(d.substring(f+1)))
                }
                return u
        }
    };

i.defer=function(a,b){
    var c;
    B++;
    c=E(function(){
        delete I[c];
        g(a)
        },b||0);
    I[c]=!0;
    return c
    };
    
i.defer.cancel=function(a){
    return I[a]?(delete I[a],q(a),g(v),!0):!1
    };
    
i.addCss=function(a){
    var b=
    o(l.createElement("link"));
    b.attr("rel","stylesheet");
    b.attr("type","text/css");
    b.attr("href",a);
    c.append(b)
    };
    
i.addJs=function(a,b){
    var d=l.createElement("script");
    d.type="text/javascript";
    d.src=a;
    if(O)d.onreadystatechange=function(){
        /loaded|complete/.test(d.readyState)&&b&&b()
        };
    else if(b)d.onload=d.onerror=b;
    c[0].appendChild(d);
    return d
    };
    
i.baseHref=function(){
    var a=b.find("base").attr("href");
    return a?a.replace(/^https?\:\/\/[^\/]*/,""):a
    }
}
function vb(a,b){
    function c(a,c,e,f){
        c=z(c);
        if(Qb[c])for(;g.last()&&
            Rb[g.last()];)d("",g.last());
        Sb[c]&&g.last()==c&&d("",c);
        (f=Tb[c]||!!f)||g.push(c);
        var h={};
        
        e.replace(Ec,function(a,b,c,d,e){
            h[b]=fb(c||d||e||"")
            });
        b.start&&b.start(c,h,f)
        }
        function d(a,c){
        var d=0,e;
        if(c=z(c))for(d=g.length-1;d>=0;d--)if(g[d]==c)break;if(d>=0){
            for(e=g.length-1;e>=d;e--)b.end&&b.end(g[e]);
            g.length=d
            }
        }
    var e,f,g=[],h=a;
for(g.last=function(){
    return g[g.length-1]
    };
    a;){
    f=!0;
    if(!g.last()||!Ub[g.last()]){
        if(a.indexOf("<\!--")===0)e=a.indexOf("--\>"),e>=0&&(b.comment&&b.comment(a.substring(4,
            e)),a=a.substring(e+3),f=!1);
        else if(Fc.test(a)){
            if(e=a.match(Vb))a=a.substring(e[0].length),e[0].replace(Vb,d),f=!1
                }else if(Gc.test(a)&&(e=a.match(Wb)))a=a.substring(e[0].length),e[0].replace(Wb,c),f=!1;
        f&&(e=a.indexOf("<"),f=e<0?a:a.substring(0,e),a=e<0?"":a.substring(e),b.chars&&b.chars(fb(f)))
        }else a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+g.last()+"[^>]*>","i"),function(a,c){
        c=c.replace(Hc,"$1").replace(Ic,"$1");
        b.chars&&b.chars(fb(c));
        return""
        }),d("",g.last());
    if(a==h)throw"Parse Error: "+a;
    h=a
    }
    d()
}
function fb(a){
    gb.innerHTML=a.replace(/</g,"&lt;");
    return gb.innerText||gb.textContent||""
    }
    function Xb(a){
    return a.replace(/&/g,"&amp;").replace(Jc,function(a){
        return"&#"+a.charCodeAt(0)+";"
        }).replace(/</g,"&lt;").replace(/>/g,"&gt;")
    }
    function wb(a){
    var b=!1,c=N(a,a.push);
    return{
        start:function(a,e,f){
            a=z(a);
            !b&&Ub[a]&&(b=a);
            !b&&Yb[a]==!0&&(c("<"),c(a),k(e,function(a,b){
                var d=z(b);
                if(Kc[d]==!0&&(Zb[d]!==!0||a.match(Lc)))c(" "),c(b),c('="'),c(Xb(a)),c('"')
                    }),c(f?"/>":">"))
            },
        end:function(a){
            a=z(a);
            !b&&
            Yb[a]==!0&&(c("</"),c(a),c(">"));
            a==b&&(b=!1)
            },
        chars:function(a){
            b||c(Xb(a))
            }
        }
}
function Mc(a){
    return a.replace(/\-(\w)/g,function(a,c,d){
        return d==0&&c=="w"?"w":c.toUpperCase()
        })
    }
    function Za(a,b){
    function c(){
        var e;
        for(var a=[this],c=b,g,h,j,i,l,m,n;a.length;){
            g=a.shift();
            h=0;
            for(j=g.length;h<j;h++){
                i=o(g[h]);
                c?(n=(l=i.data("events"))&&l.$destroy)&&k(n,function(a){
                    a.handler()
                    }):c=!c;
                l=0;
                for(e=(m=i.children()).length,i=e;l<i;l++)a.push(ga(m[l]))
                    }
                }
            return d.apply(this,arguments)
    }
    var d=ga.fn[a],d=d.$original||
d;
c.$original=d;
ga.fn[a]=c
}
function $a(a){
    if(s(a)&&a.charAt(0)!="<")throw new u("selectors not implemented");
    return new W(a)
    }
    function W(a){
    if(a instanceof W)return a;
    else if(s(a)){
        var b=K.createElement("div");
        b.innerHTML="<div>&nbsp;</div>"+a;
        b.removeChild(b.firstChild);
        hb(this,b.childNodes);
        this.remove()
        }else hb(this,a)
        }
        function qa(a){
    $b(a);
    for(var b=0,a=a.childNodes||[];b<a.length;b++)qa(a[b])
        }
        function $b(a){
    var b=a[Fa],c=Ga[b];
    c&&(c.bind&&k(c.bind,function(b,c){
        c=="$destroy"?b({}):ib(a,c,b)
        }),
    delete Ga[b],a[Fa]=D)
    }
    function Ha(a,b,c){
    var d=a[Fa],d=Ga[d||-1];
    if(p(c))d||(a[Fa]=d=Nc++,d=Ga[d]={}),d[b]=c;else return d?d[b]:null
        }
        function jb(a,b){
    return(" "+a.className+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" ")>-1
    }
    function ac(a,b){
    b&&k(b.split(" "),function(b){
        a.className=S((" "+a.className+" ").replace(/[\n\t]/g," ").replace(" "+S(b)+" "," "))
        })
    }
    function bc(a,b){
    b&&k(b.split(" "),function(b){
        if(!jb(a,b))a.className=S(a.className+" "+S(b))
            })
    }
    function hb(a,b){
    if(b)for(var b=!b.nodeName&&p(b.length)&&
        (!b||!b.document||!b.location||!b.alert||!b.setInterval)?b:[b],c=0;c<b.length;c++)a.push(b[c])
        }
        function ra(a){
    var b=typeof a,c=a;
    if(b=="object")if(typeof(c=a.$$hashKey)=="function")c=a.$$hashKey();
        else if(c===D)c=a.$$hashKey=Ra();
    return b+":"+c
    }
    function kb(a){
    k(a,this.put,this)
    }
    function lb(){}
function ba(a,b){
    x[a]=x[a]||{};
    
    k(b,function(b){
        w(x[a],b)
        })
    }
    function cc(a,b,c,d,e){
    if(isNaN(a)||!isFinite(a))return"";
    var f=a<0,a=Math.abs(a),g=a+"",h="",j=[];
    if(g.indexOf("e")!==-1)h=g;
    else{
        g=(g.split(dc)[1]||
            "").length;
        r(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));
        var g=Math.pow(10,e),a=Math.round(a*g)/g,a=(""+a).split(dc),g=a[0],a=a[1]||"",i=0,l=b.lgSize,m=b.gSize;
        if(g.length>=l+m)for(var i=g.length-l,n=0;n<i;n++)(i-n)%m===0&&n!==0&&(h+=c),h+=g.charAt(n);
        for(n=i;n<g.length;n++)(g.length-n)%l===0&&n!==0&&(h+=c),h+=g.charAt(n);
        for(;a.length<e;)a+="0";
        e&&(h+=d+a.substr(0,e))
        }
        j.push(f?b.negPre:b.posPre);
    j.push(h);
    j.push(f?b.negSuf:b.posSuf);
    return j.join("")
    }
    function Q(a,b,c){
    var d="";
    a<0&&(d="-",
        a=-a);
    for(a=""+a;a.length<b;)a="0"+a;
    c&&(a=a.substr(a.length-b));
    return d+a
    }
    function H(a,b,c,d){
    return function(e){
        e=e["get"+a]();
        if(c>0||e>-c)e+=c;
        e===0&&c==-12&&(e=12);
        return Q(e,b,d)
        }
    }
function Ia(a,b){
    return function(c,d){
        var e=c["get"+a](),f=Ja(b?"SHORT"+a:a);
        return d[f][e]
        }
    }
function ka(a){
    a.$valid=!(a.$invalid=!(a.$readonly||a.$disabled||P(a.$error,{})))
    }
    function ec(){
    function a(a,e,f){
        if(a){
            for(var f=f||this,g=0,h=a.length;g<h;g++)a[g]===f&&(a.splice(g,1),a.length||delete c[e]);
            ka(b)
            }
        }
    var b=
this,c=b.$error={};

b.$on("$destroy",function(d){
    d=d.targetScope;
    d.$widgetId&&delete b[d.$widgetId];
    k(c,a,d)
    });
b.$on("$valid",function(b,e){
    var f=b.targetScope;
    delete f.$error[e];
    ka(f);
    a(c[e],e,f)
    });
b.$on("$invalid",function(a,e){
    var f=a.targetScope;
        a:{
        var g=c[e];
        if(g)for(var h=0,j=g.length;h<j;h++){
            if(g[h]===f)break a
        }else c[e]=g=[];
        g.push(f);
        ka(b)
        }
        f.$error[e]=!0;
    ka(f)
    });
ka(b)
}
function fc(a){
    for(var a=a.split("/"),b=a.length;b--;)a[b]=xa(a[b]);
    return a.join("/")
    }
    function Ka(a,b){
    var c=Oc.exec(a),
    c={
        protocol:c[1],
        host:c[3],
        port:parseInt(c[5])||gc[c[1]]||null,
        path:c[6]||"/",
        search:c[8],
        hash:c[10]
        };
        
    if(b)b.$$protocol=c.protocol,b.$$host=c.host,b.$$port=c.port;
    return c
    }
    function sa(a,b,c){
    return a+"://"+b+(c==gc[a]?"":":"+c)
    }
    function Pc(a,b,c){
    var d=Ka(a);
    return decodeURIComponent(d.path)!=b||r(d.hash)||d.hash.indexOf(c)!=0?a:sa(d.protocol,d.host,d.port)+b.substr(0,b.lastIndexOf("/"))+d.hash.substr(c.length)
    }
    function Qc(a,b,c){
    var d=Ka(a);
    if(decodeURIComponent(d.path)==b)return a;
    else{
        var e=d.search&&
        "?"+d.search||"",f=d.hash&&"#"+d.hash||"",g=b.substr(0,b.lastIndexOf("/")),h=d.path.substr(g.length);
        if(d.path.indexOf(g)!=0)throw'Invalid url "'+a+'", missing path prefix "'+g+'" !';
        return sa(d.protocol,d.host,d.port)+b+"#"+c+h+e+f
        }
    }
function hc(a,b){
    b=b||"";
    this.$$parse=function(a){
        var d=Ka(a,this);
        if(d.path.indexOf(b)!=0)throw'Invalid url "'+a+'", missing path prefix "'+b+'" !';
        this.$$path=decodeURIComponent(d.path.substr(b.length));
        this.$$search=wa(d.search);
        this.$$hash=d.hash&&decodeURIComponent(d.hash)||
        "";
        this.$$compose()
        };
        
    this.$$compose=function(){
        var a=Bb(this.$$search),d=this.$$hash?"#"+xa(this.$$hash):"";
        this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;
        this.$$absUrl=sa(this.$$protocol,this.$$host,this.$$port)+b+this.$$url
        };
        
    this.$$parse(a)
    }
    function mb(a,b){
    var c;
    this.$$parse=function(a){
        var e=Ka(a,this);
        if(e.hash&&e.hash.indexOf(b)!=0)throw'Invalid url "'+a+'", missing hash prefix "'+b+'" !';
        c=e.path+(e.search?"?"+e.search:"");
        e=Rc.exec((e.hash||"").substr(b.length));
        this.$$path=e[1]?(e[1].charAt(0)==
            "/"?"":"/")+decodeURIComponent(e[1]):"";
        this.$$search=wa(e[3]);
        this.$$hash=e[5]&&decodeURIComponent(e[5])||"";
        this.$$compose()
        };
        
    this.$$compose=function(){
        var a=Bb(this.$$search),e=this.$$hash?"#"+xa(this.$$hash):"";
        this.$$url=fc(this.$$path)+(a?"?"+a:"")+e;
        this.$$absUrl=sa(this.$$protocol,this.$$host,this.$$port)+c+(this.$$url?"#"+b+this.$$url:"")
        };
        
    this.$$parse(a)
    }
    function La(a){
    return function(){
        return this[a]
        }
    }
function ic(a,b){
    return function(c){
        if(r(c))return this[a];
        this[a]=b(c);
        this.$$compose();
        return this
        }
    }
function nb(a){
    var b=jc[a];
    if(!b){
        var c=[];
        k(Ma(a),function(a){
            var b=Na(a);
            c.push(b?function(a){
                return a.$eval(b)
                }:function(){
                return a
                })
            });
        jc[a]=b=function(a,b,f){
            var g=[],h=a.hasOwnProperty("$element"),j=a.$element;
            a.$element=b;
            try{
                for(var i=0;i<c.length;i++){
                    var l=c[i](a,b);
                    Ua(l)?l="":L(l)&&(l=U(l,f));
                    g.push(l)
                    }
                    return g.join("")
                }finally{
                h?a.$element=j:delete a.$element
                }
            }
    }
return b
}
function ob(a){
    return function(b){
        return function(c){
            this.$watch(b,function(b,e,f){
                a(b.$index)&&(f&&c.removeClass(M(f)?
                    f.join(" "):f),e&&c.addClass(M(e)?e.join(" "):e))
                })
            }
        }
}
function Ma(a){
    for(var b=[],c=0,d;(d=a.indexOf("{{",c))>-1;)c<d&&b.push(a.substr(c,d-c)),c=d,d=a.indexOf("}}",d),d=d<0?a.length:d+2,b.push(a.substr(c,d-c)),c=d;
    c!=a.length&&b.push(a.substr(c,a.length-c));
    return b.length===0?[a]:b
    }
    function Na(a){
    return(a=a.replace(/\n/gm," ").match(/^\{\{(.*)\}\}$/))?a[1]:null
    }
    function kc(a,b){
    return function(c){
        var d=this,e=1*(c.attr("min")||Number.MIN_VALUE),f=1*(c.attr("max")||Number.MAX_VALUE);
        d.$on("$validate",
            function(){
                var c=d.$viewValue,h=c&&S(c)!="",j=s(c)&&c.match(a);
                d.$emit(!h||j?"$valid":"$invalid",b);
                h&&(c*=1);
                d.$emit(j&&c<e?"$invalid":"$valid","MIN");
                d.$emit(j&&c>f?"$invalid":"$valid","MAX")
                });
        d.$parseView=function(){
            if(d.$viewValue.match(a))d.$modelValue=1*d.$viewValue;
            else if(d.$viewValue=="")d.$modelValue=null
                };
                
        d.$parseModel=function(){
            if(ma(d.$modelValue))d.$viewValue=""+d.$modelValue
                }
            }
}
function ca(a,b,c,d){
    var e=ia(d.attr("ng:bind-attr")||"{}"),f=/\s*{{(.*)}}\s*/.exec(e[c]),g=Oa[c];
    b["$"+
    c]=g?s(d.prop(c))||!!d.prop(c)||!!d[0].attributes[c]:d.attr(c);
    e[c]&&f&&a.$watch(f[1],function(a,d){
        b["$"+c]=g?!!d:d;
        b.$emit("$validate")
        })
    }
    if(typeof K.getAttribute==Ta)K.getAttribute=function(){};
    
var z=function(a){
    return s(a)?a.toLowerCase():a
    },Ja=function(a){
    return s(a)?a.toUpperCase():a
    },Cc=D,uc="boolean",mc="length",nc="name",za="null",qc="number",ub="object",pc="string",Ta="undefined",u=y.Error,O=parseInt((/msie (\d+)/.exec(z(navigator.userAgent))||[])[1],10),o,ga,ea=[].slice,la=[].push,tc=y.console?
N(y.console,y.console.error||v):v,x=y.angular||(y.angular={}),Xa=X(x,"markup"),Ab=X(x,"attrMarkup"),C=X(x,"directive"),G=X(x,"widget",function(a){
    a=z(a);
    O<9&&a.charAt(0)!="@"&&K.createElement(a);
    return a
    }),V=X(x,"filter"),$=X(x,"inputType",z),Ba=X(x,"service");
X(x,"callbacks");
var oa,R=["0","0","0"],Db=24;
oa=O<9?function(a){
    a=a.nodeName?a:a[0];
    return a.scopeName&&a.scopeName!="HTML"?Ja(a.scopeName+":"+a.nodeName):a.nodeName
    }:function(a){
    return a.nodeName?a.nodeName:a[0].nodeName
    };
    
x.toJson=U;
x.fromJson=
ia;
bb.prototype={
    link:function(a,b){
        var c=b;
        this.newScope&&(c=t(this.newScope)?b.$new(this.newScope(b)):b.$new(),a.data("$scope",c));
        k(this.linkFns,function(b){
            try{
                c.$service.invoke(c,b,[a])
                }catch(d){
                c.$service("$exceptionHandler")(d)
                }
            });
    var d,e=a[0].childNodes,f=this.children,g=this.paths,h=g.length;
    for(d=0;d<h;d++)e[g[d]]?f[d].link(o(e[g[d]]),c):delete g[d]
},
addLinkFn:function(a){
    a&&this.linkFns.push(a)
    },
addChild:function(a,b){
    b&&(this.paths.push(a),this.children.push(b))
    },
empty:function(){
    return this.linkFns.length===
    0&&this.paths.length===0
    }
};

zb.prototype={
    compile:function(a){
        var a=o(a),b=0,c,d=a.parent();
        if(a.length>1)throw u("Cannot compile multiple element roots: "+o("<div>").append(a.clone()).html());
        if(d&&d[0])for(var d=d[0],e=0;e<d.childNodes.length;e++)d.childNodes[e]==a[0]&&(b=e);
        c=this.templatize(a,b)||new bb;
        return function(b,d){
            var e=d?Ya.clone.call(a):a,b=b||Eb();
            e.data("$scope",b);
            b.$element=e;
            (d||v)(e,b);
            c.link(e,b);
            return b
            }
        },
templatize:function(a,b){
    var c=this,d,e,f=c.directives,g=!0,h=!0,j=oa(a),
    i=j.indexOf(":")>0?z(j).replace(":","-"):"",l,m={
        compile:N(c,c.compile),
        descend:function(a){
            p(a)&&(g=a);
            return g
            },
        directives:function(a){
            p(a)&&(h=a);
            return h
            },
        scope:function(a){
            if(p(a))l.newScope=l.newScope||a;
            return l.newScope
            }
        };
    
a.addClass(i);
l=new bb;
Aa(a,function(b,e){
    if(!d&&(d=c.widgets("@"+e)))a.addClass("ng-attr-widget"),d=N(m,d,b,a)
        });
if(!d&&(d=c.widgets(j)))i&&a.addClass("ng-widget"),d=N(m,d,a);
d&&(h=g=!1,j=a.parent(),l.addLinkFn(d.call(m,a)),j&&j[0]&&(a=o(j[0].childNodes[b])));
if(g)for(var n=
    0,E=a[0].childNodes;n<E.length;n++)oa(E[n])=="#text"&&k(c.markup,function(b){
    if(n<E.length){
        var c=o(E[n]);
        b.call(m,c.text(),c,a)
        }
    });
h&&(Aa(a,function(b,d){
    k(c.attrMarkup,function(c){
        c.call(m,b,d,a)
        })
    }),Aa(a,function(b,c){
    if(e=f[c])a.addClass("ng-directive"),l.addLinkFn(f[c].call(m,b,a))
        }));
g&&vc(a,function(a,b){
    l.addChild(b,c.templatize(a,b))
    });
return l.empty()?null:l
}
};

Fb.prototype={
    $new:function(a,b){
        var c=function(){};
        
        c.prototype=this;
        c=new c;
        c["this"]=c;
        c.$$listeners={};
        
        c.$parent=this;
        c.$id=Ra();
        c.$$asyncQueue=[];
        c.$$phase=c.$$watchers=c.$$nextSibling=c.$$childHead=c.$$childTail=null;
        c.$$prevSibling=this.$$childTail;
        this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=c:this.$$childHead=this.$$childTail=c;
        if(a){
            var d=a.prototype,e;
            for(e in d)c[e]=N(c,d[e]);this.$service.invoke(c,a,b)
            }
            return c
        },
    $watch:function(a,b){
        var c=Hb(a,"watch"),d=this.$$watchers,e={
            fn:Hb(b||v,"listener"),
            last:Number.NaN,
            get:c,
            exp:a
        };
        
        if(!d)d=this.$$watchers=[];
        d.unshift(e);
        return function(){
            Pa.remove(d,e)
            }
        },
$digest:function(){
    var a,b,c,d,e,f,g=100,h,j=[];
    if(this.$$phase)throw u(this.$$phase+" already in progress");
    do{
        f=!1;
        h=this;
        do{
            h.$$phase="$digest";
            for(d=h.$$asyncQueue;d.length;)try{
                h.$eval(d.shift())
                }catch(i){
                h.$service("$exceptionHandler")(i)
                }
                if(d=h.$$watchers)for(e=d.length;e--;)try{
                if(a=d[e],(b=a.get(h))!==(c=a.last)&&!P(b,c))f=!0,a.last=A(b),a.fn(h,b,c),g<5&&(j[4-g]||(j[4-g]=[]),t(a.exp)?j[4-g].push("fn: "+(a.exp.name||a.exp.toString())):j[4-g].push(a.exp))
                    }catch(l){
                h.$service("$exceptionHandler")(l)
                }
                h.$$phase=
            null;
            if(!(d=h.$$childHead||h!==this&&h.$$nextSibling))for(;h!==this&&!(d=h.$$nextSibling);)h=h.$parent
                }while(h=d);
        if(!g--)throw u("100 $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+U(j));
    }while(f)
},
$destroy:function(){
    if(this.$root!=this){
        this.$emit("$destroy");
        var a=this.$parent;
        if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;
        if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;
        if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;
        if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling
            }
        },
$eval:function(a){
    return(s(a)?Y(a):a||v)(this)
    },
$evalAsync:function(a){
    this.$$asyncQueue.push(a)
    },
$apply:function(a){
    try{
        return this.$eval(a)
        }catch(b){
        this.$service("$exceptionHandler")(b)
        }finally{
        this.$root.$digest()
        }
    },
$on:function(a,b){
    var c=this.$$listeners[a];
    c||(this.$$listeners[a]=c=[]);
    c.push(b);
    return function(){
        Pa.remove(c,b)
        }
    },
$emit:function(a,b){
    var c=[],d,e=!1,f=this,g={
        name:a,
        targetScope:f,
        cancel:function(){
            e=
            !0
            }
        },h=[g].concat(ea.call(arguments,1)),j,i;
do{
    d=f.$$listeners[a]||c;
    g.currentScope=f;
    j=0;
    for(i=d.length;j<i;j++)try{
        if(d[j].apply(null,h),e)return
    }catch(l){
        f.$service("$exceptionHandler")(l)
        }
        f=f.$parent
    }while(f)
},
$broadcast:function(a,b){
    var c=this,d=this,e={
        name:a,
        targetScope:this
    },f=[e].concat(ea.call(arguments,1));
    do if(c=d,e.currentScope=c,k(c.$$listeners[a],function(a){
        try{
            a.apply(null,f)
            }catch(b){
            c.$service("$exceptionHandler")(b)
            }
        }),!(d=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&
    !(d=c.$$nextSibling);)c=c.$parent;while(c=d)
}
};

var xc=/^function\s*[^\(]*\(([^\)]*)\)/m,yc=/,/,zc=/^\s*(.+?)\s*$/,wc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,db={
    "null":function(){
        return null
        },
    "true":function(){
        return!0
        },
    "false":function(){
        return!1
        },
    $undefined:v,
    "+":function(a,b,c){
        b=b(a);
        c=c(a);
        return(p(b)?b:0)+(p(c)?c:0)
        },
    "-":function(a,b,c){
        b=b(a);
        c=c(a);
        return(p(b)?b:0)-(p(c)?c:0)
        },
    "*":function(a,b,c){
        return b(a)*c(a)
        },
    "/":function(a,b,c){
        return b(a)/c(a)
        },
    "%":function(a,b,c){
        return b(a)%c(a)
        },
    "^":function(a,
        b,c){
        return b(a)^c(a)
        },
    "=":v,
    "==":function(a,b,c){
        return b(a)==c(a)
        },
    "!=":function(a,b,c){
        return b(a)!=c(a)
        },
    "<":function(a,b,c){
        return b(a)<c(a)
        },
    ">":function(a,b,c){
        return b(a)>c(a)
        },
    "<=":function(a,b,c){
        return b(a)<=c(a)
        },
    ">=":function(a,b,c){
        return b(a)>=c(a)
        },
    "&&":function(a,b,c){
        return b(a)&&c(a)
        },
    "||":function(a,b,c){
        return b(a)||c(a)
        },
    "&":function(a,b,c){
        return b(a)&c(a)
        },
    "|":function(a,b,c){
        return c(a)(a,b(a))
        },
    "!":function(a,b){
        return!b(a)
        }
    },Bc={
    n:"\n",
    f:"\u000c",
    r:"\r",
    t:"\t",
    v:"\u000b",
    "'":"'",
    '"':'"'
},Mb={},Ob={},Nb={};

k("abstract,boolean,break,byte,case,catch,char,class,const,continue,debugger,default,delete,do,double,else,enum,export,extends,false,final,finally,float,for,function,goto,if,implements,import,ininstanceof,intinterface,long,native,new,null,package,private,protected,public,return,short,static,super,switch,synchronized,this,throw,throws,transient,true,try,typeof,var,volatile,void,undefined,while,with".split(/,/),function(a){
    Nb[a]=!0
    });
Pb.prototype={
    url:function(a){
        var b=
        this,c=this.template,d,a=a||{};
        
        k(this.urlParams,function(e,g){
            d=xa(a[g]||b.defaults[g]||"");
            c=c.replace(RegExp(":"+g+"(\\W)"),d+"$1")
            });
        var c=c.replace(/\/?#$/,""),e=[];
        tb(a,function(a,c){
            b.urlParams[c]||e.push(fa(c)+"="+fa(a))
            });
        c=c.replace(/\/*$/,"");
        return c+(e.length?"?"+e.join("&"):"")
        }
    };

Ea.DEFAULT_ACTIONS={
    get:{
        method:"GET"
    },
    save:{
        method:"POST"
    },
    query:{
        method:"GET",
        isArray:!0
        },
    remove:{
        method:"DELETE"
    },
    "delete":{
        method:"DELETE"
    }
};

Ea.prototype={
    route:function(a,b,c){
        function d(a){
            var c={};
            
            k(b||

            {},function(b,d){
                c[d]=b.charAt&&b.charAt(0)=="@"?Da(a,b.substr(1)):b
                });
            return c
            }
            function e(a){
            A(a||{},this)
            }
            var f=this,g=new Pb(a),c=w({},Ea.DEFAULT_ACTIONS,c);
        k(c,function(h,j){
            var i=h.method=="POST"||h.method=="PUT";
            e[j]=function(a,b,c,j){
                var q={},I,o=v,B=null;
                switch(arguments.length){
                    case 4:
                        B=j,o=c;
                    case 3:case 2:
                        if(t(b)){
                        if(t(a)){
                            o=a;
                            B=b;
                            break
                        }
                        o=b;
                        B=c
                        }else{
                        q=a;
                        I=b;
                        o=c;
                        break
                    }
                    case 1:
                        t(a)?o=a:i?I=a:q=a;
                        break;
                    case 0:
                        break;
                    default:
                        throw"Expected between 0-4 arguments [params, data, success, error], got "+
                        arguments.length+" arguments.";
                }
                var J=this instanceof e?this:h.isArray?[]:new e(I);
                f.xhr(h.method,g.url(w({},d(I),h.params||{},q)),I,function(a,b){
                    if(b)h.isArray?(J.length=0,k(b,function(a){
                        J.push(new e(a))
                        })):A(b,J);
                    (o||v)(J)
                    },B||h.verifyCache,h.verifyCache);
                return J
                };
                
            e.bind=function(d){
                return f.route(a,w({},b,d),c)
                };
                
            e.prototype["$"+j]=function(a,b,c){
                var g=d(this),f=v,h;
                switch(arguments.length){
                    case 3:
                        g=a;
                        f=b;
                        h=c;
                        break;
                    case 2:case 1:
                        t(a)?(f=a,h=b):(g=a,f=b||v);
                    case 0:
                        break;
                    default:
                        throw"Expected between 1-3 arguments [params, success, error], got "+
                        arguments.length+" arguments.";
                }
                e[j].call(this,g,i?this:D,f,h)
                }
            });
    return e
    }
};

var Sc=y.XMLHttpRequest||function(){
    try{
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        }catch(a){}
    try{
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        }catch(b){}
    try{
        return new ActiveXObject("Msxml2.XMLHTTP")
        }catch(c){}
    throw new u("This browser does not support XMLHttpRequest.");
},Wb=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,Vb=/^<\s*\/\s*([\w:-]+)[^>]*>/,Ec=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
Gc=/^</,Fc=/^<\s*\//,Hc=/<\!--(.*?)--\>/g,Ic=/<!\[CDATA\[(.*?)]]\>/g,Lc=/^((ftp|https?):\/\/|mailto:|#)/,Jc=/([^\#-~| |!])/g,Tb=T("area,br,col,hr,img,wbr"),Qa=T("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ta=T("rp,rt"),Sb=w({},ta,Qa),Qb=w({},Qa,T("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),Rb=w({},ta,T("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
Ub=T("script,style"),Yb=w({},Tb,Qb,Rb,Sb),Zb=T("background,cite,href,longdesc,src,usemap"),Kc=w({},Zb,T("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),gb=K.createElement("pre"),Ga={},Fa="ng-"+(new Date).getTime(),Nc=1,Tc=y.document.addEventListener?function(a,
    b,c){
    a.addEventListener(b,c,!1)
    }:function(a,b,c){
    a.attachEvent("on"+b,c)
    },ib=y.document.removeEventListener?function(a,b,c){
    a.removeEventListener(b,c,!1)
    }:function(a,b,c){
    a.detachEvent("on"+b,c)
    },Ya=W.prototype={
    ready:function(a){
        function b(){
            c||(c=!0,a())
            }
            var c=!1;
        this.bind("DOMContentLoaded",b);
        $a(y).bind("load",b)
        },
    toString:function(){
        var a=[];
        k(this,function(b){
            a.push(""+b)
            });
        return"["+a.join(", ")+"]"
        },
    eq:function(a){
        return a>=0?o(this[a]):o(this[this.length+a])
        },
    length:0,
    push:la,
    sort:[].sort,
    splice:[].splice
    },Oa={};

k("multiple,selected,checked,disabled,readOnly,required".split(","),function(a){
    Oa[z(a)]=a
    });
k({
    data:Ha,
    inheritedData:function(a,b,c){
        for(a=o(a);a.length;){
            if(c=a.data(b))return c;
            a=a.parent()
            }
        },
scope:function(a){
    return o(a).inheritedData("$scope")
    },
removeAttr:function(a,b){
    a.removeAttribute(b)
    },
hasClass:jb,
css:function(a,b,c){
    b=Mc(b);
    if(p(c))a.style[b]=c;
    else{
        var d;
        O<=8&&(d=a.currentStyle&&a.currentStyle[b],d===""&&(d="auto"));
        d=d||a.style[b];
        O<=8&&(d=d===""?D:d);
        return d
        }
    },
attr:function(a,b,c){
    var d=z(b);
    if(Oa[d])if(p(c))c?(a[b]=!0,a.setAttribute(b,d)):(a[b]=!1,a.removeAttribute(d));else return a[b]||a.getAttribute(b)!==null&&(O<9?a.getAttribute(b)!=="":1)?d:D;
    else if(p(c))a.setAttribute(b,c);
    else if(a.getAttribute)return a=a.getAttribute(b,2),a===null?D:a
        },
prop:function(a,b,c){
    if(p(c))a[b]=c;else return a[b]
        },
text:w(O<9?function(a,b){
    if(a.nodeType==3){
        if(r(b))return a.nodeValue;
        a.nodeValue=b
        }else{
        if(r(b))return a.innerText;
        a.innerText=b
        }
    }:function(a,b){
    if(r(b))return a.textContent;
    a.textContent=b
    },{
    $dv:""
}),
val:function(a,b){
    if(r(b))return a.value;
    a.value=b
    },
html:function(a,b){
    if(r(b))return a.innerHTML;
    for(var c=0,d=a.childNodes;c<d.length;c++)qa(d[c]);
    a.innerHTML=b
    }
},function(a,b){
    W.prototype[b]=function(b,d){
        var e,f;
        if((a.length==2?b:d)===D)if(L(b)){
            for(e=0;e<this.length;e++)for(f in b)a(this[e],f,b[f]);return this
            }else{
            if(this.length)return a(this[0],b,d)
                }else{
            for(e=0;e<this.length;e++)a(this[e],b,d);
            return this
            }
            return a.$dv
        }
    });
k({
    removeData:$b,
    dealoc:qa,
    bind:function(a,
        b,c){
        var d=Ha(a,"bind");
        d||Ha(a,"bind",d={});
        k(b.split(" "),function(b){
            var f=d[b];
            if(!f)d[b]=f=function(b){
                if(!b.preventDefault)b.preventDefault=function(){
                    b.returnValue=!1
                    };
                    
                if(!b.stopPropagation)b.stopPropagation=function(){
                    b.cancelBubble=!0
                    };
                    
                if(!b.target)b.target=b.srcElement||K;
                if(r(b.defaultPrevented)){
                    var c=b.preventDefault;
                    b.preventDefault=function(){
                        b.defaultPrevented=!0;
                        c.call(b)
                        };
                        
                    b.defaultPrevented=!1
                    }
                    b.isDefaultPrevented=function(){
                    return b.defaultPrevented
                    };
                    
                k(f.fns,function(c){
                    c.call(a,
                        b)
                    })
                },f.fns=[],Tc(a,b,f);
            f.fns.push(c)
            })
        },
    unbind:function(a,b,c){
        var d=Ha(a,"bind");
        d&&(r(b)?k(d,function(b,c){
            ib(a,c,b);
            delete d[c]
        }):r(c)?(ib(a,b,d[b]),delete d[b]):Pa.remove(d[b].fns,c))
        },
    replaceWith:function(a,b){
        var c,d=a.parentNode;
        qa(a);
        k(new W(b),function(b){
            c?d.insertBefore(b,c.nextSibling):d.replaceChild(b,a);
            c=b
            })
        },
    children:function(a){
        var b=[];
        k(a.childNodes,function(a){
            a.nodeName!="#text"&&b.push(a)
            });
        return b
        },
    append:function(a,b){
        k(new W(b),function(b){
            a.nodeType===1&&a.appendChild(b)
            })
        },
    prepend:function(a,b){
        if(a.nodeType===1){
            var c=a.firstChild;
            k(new W(b),function(b){
                c?a.insertBefore(b,c):(a.appendChild(b),c=b)
                })
            }
        },
remove:function(a){
    qa(a);
    var b=a.parentNode;
    b&&b.removeChild(a)
    },
after:function(a,b){
    var c=a,d=a.parentNode;
    k(new W(b),function(a){
        d.insertBefore(a,c.nextSibling);
        c=a
        })
    },
addClass:bc,
removeClass:ac,
toggleClass:function(a,b,c){
    r(c)&&(c=!jb(a,b));
    (c?bc:ac)(a,b)
    },
parent:function(a){
    return(a=a.parentNode)&&a.nodeType!==11?a:null
    },
next:function(a){
    return a.nextSibling
    },
find:function(a,
    b){
    return a.getElementsByTagName(b)
    },
clone:function(a){
    return a.cloneNode(!0)
    }
},function(a,b){
    W.prototype[b]=function(b,d){
        for(var e,f=0;f<this.length;f++)e==D?(e=a(this[f],b,d),e!==D&&(e=o(e))):hb(e,a(this[f],b,d));
        return e==D?this:e
        }
    });
var Z={
    typeOf:function(a){
        if(a===null)return za;
        var b=typeof a;
        if(b==ub){
            if(a instanceof Array)return"array";
            if(na(a))return"date";
            if(a.nodeType==1)return"element"
                }
                return b
        }
    },la={
    copy:A,
    size:xb,
    equals:P
},Qa={
    extend:w
},Pa={
    indexOf:yb,
    sum:function(a,b){
        for(var c=pb.compile(b),
            d=0,e=0;e<a.length;e++){
            var f=1*c(a[e]);
            isNaN(f)||(d+=f)
            }
            return d
        },
    remove:function(a,b){
        var c=yb(a,b);
        c>=0&&a.splice(c,1);
        return b
        },
    filter:function(a,b){
        var c=[];
        c.check=function(a){
            for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0
            };
            
        var d=function(a,b){
            if(b.charAt(0)==="!")return!d(a,b.substr(1));
            switch(typeof a){
                case "boolean":case "number":case "string":
                    return(""+a).toLowerCase().indexOf(b)>-1;
                case "object":
                    for(var c in a)if(c.charAt(0)!=="$"&&d(a[c],b))return!0;return!1;
                case "array":
                    for(c=
                    0;c<a.length;c++)if(d(a[c],b))return!0;return!1;
                default:
                    return!1
                    }
                };
        
    switch(typeof b){
        case "boolean":case "number":case "string":
            b={
            $:b
        };
        
        case "object":
            for(var e in b)e=="$"?function(){
            var a=(""+b[e]).toLowerCase();
            a&&c.push(function(b){
                return d(b,a)
                })
            }():function(){
            var a=e,g=(""+b[e]).toLowerCase();
            g&&c.push(function(b){
                return d(Da(b,a),g)
                })
            }();break;
        case "function":
            c.push(b);
            break;
        default:
            return a
            }
            for(var f=[],g=0;g<a.length;g++){
        var h=a[g];
        c.check(h)&&f.push(h)
        }
        return f
    },
add:function(a,b){
    a.push(r(b)?

    {}:b);
    return a
    },
count:function(a,b){
    if(!b)return a.length;
    var c=pb.compile(b),d=0;
    k(a,function(a){
        c(a)&&d++
    });
    return d
    },
orderBy:function(a,b,c){
    function d(a,b){
        return va(b)?function(b,c){
            return a(c,b)
            }:a
        }
        if(!b)return a;
    for(var b=M(b)?b:[b],b=rc(b,function(a){
        var b=!1,c=a||da;
        if(s(a)){
            if(a.charAt(0)=="+"||a.charAt(0)=="-")b=a.charAt(0)=="-",a=a.substring(1);
            c=Y(a)
            }
            return d(function(a,b){
            var d;
            d=c(a);
            var e=c(b),g=typeof d,f=typeof e;
            g==f?(g=="string"&&(d=d.toLowerCase()),g=="string"&&(e=e.toLowerCase()),
                d=d===e?0:d<e?-1:1):d=g<f?-1:1;
            return d
            },b)
        }),e=[],f=0;f<a.length;f++)e.push(a[f]);
    return e.sort(d(function(a,c){
        for(var d=0;d<b.length;d++){
            var e=b[d](a,c);
            if(e!==0)return e
                }
                return 0
        },c))
    },
limitTo:function(a,b){
    var b=parseInt(b,10),c=[],d,e;
    if(!a||!(a instanceof Array))return c;
    b>a.length?b=a.length:b<-a.length&&(b=-a.length);
    b>0?(d=0,e=b):(d=a.length+b,e=a.length);
    for(;d<e;d++)c.push(a[d]);
    return c
    }
},Uc=/^(\d{4})-(\d\d)-(\d\d)(?:T(\d\d)(?:\:(\d\d)(?:\:(\d\d)(?:\.(\d{3}))?)?)?Z)?$/,aa={
    quote:function(a){
        return'"'+
        a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v")+'"'
        },
    quoteUnicode:function(a){
        for(var a=x.String.quote(a),b=[],c=0;c<a.length;c++){
            var d=a.charCodeAt(c);
            d<128?b.push(a.charAt(c)):(d="000"+d.toString(16),b.push("\\u"+d.substring(d.length-4)))
            }
            return b.join("")
        },
    toDate:function(a){
        var b;
        if(s(a)&&(b=a.match(Uc)))a=new Date(0),a.setUTCFullYear(b[1],b[2]-1,b[3]),a.setUTCHours(b[4]||0,b[5]||0,b[6]||0,b[7]||
            0);
        return a
        }
    },ta={
    toString:function(a){
        if(!a)return a;
        var b=a.toISOString?a.toISOString():"";
        return b.length==24?b:Q(a.getUTCFullYear(),4)+"-"+Q(a.getUTCMonth()+1,2)+"-"+Q(a.getUTCDate(),2)+"T"+Q(a.getUTCHours(),2)+":"+Q(a.getUTCMinutes(),2)+":"+Q(a.getUTCSeconds(),2)+"."+Q(a.getUTCMilliseconds(),3)+"Z"
        }
    },pb={
    compile:function(a){
        return t(a)?a:a?Y(a):da
        }
    };

kb.prototype={
    put:function(a,b){
        this[ra(a)]=b
        },
    get:function(a){
        return this[ra(a)]
        },
    remove:function(a){
        var b=this[a=ra(a)];
        delete this[a];
        return b
        }
    };
lb.prototype={
    push:function(a,b){
        var c=this[a=ra(a)];
        c?c.push(b):this[a]=[b]
        },
    shift:function(a){
        var b=this[a=ra(a)];
        if(b)return b.length==1?(delete this[a],b[0]):b.shift()
            }
        };

ba("Global",[Z]);
ba("Collection",[Z,la]);
ba("Array",[Z,la,Pa]);
ba("Object",[Z,la,Qa]);
ba("String",[Z,aa]);
ba("Date",[Z,ta]);
x.Date.toString=ta.toString;
ba("Function",[Z,la,pb]);
V.currency=function(a,b){
    var c=this.$service("$locale").NUMBER_FORMATS;
    this.$element.toggleClass("ng-format-negative",a<0);
    if(r(b))b=c.CURRENCY_SYM;
    return cc(a,
        c.PATTERNS[1],c.GROUP_SEP,c.DECIMAL_SEP,2).replace(/\u00A4/g,b)
    };
    
var dc=".";
V.number=function(a,b){
    var c=this.$service("$locale").NUMBER_FORMATS;
    return cc(a,c.PATTERNS[0],c.GROUP_SEP,c.DECIMAL_SEP,b)
    };
    
var Vc={
    yyyy:H("FullYear",4),
    yy:H("FullYear",2,0,!0),
    y:H("FullYear",1),
    MMMM:Ia("Month"),
    MMM:Ia("Month",!0),
    MM:H("Month",2,1),
    M:H("Month",1,1),
    dd:H("Date",2),
    d:H("Date",1),
    HH:H("Hours",2),
    H:H("Hours",1),
    hh:H("Hours",2,-12),
    h:H("Hours",1,-12),
    mm:H("Minutes",2),
    m:H("Minutes",1),
    ss:H("Seconds",2),
    s:H("Seconds",
        1),
    EEEE:Ia("Day"),
    EEE:Ia("Day",!0),
    a:function(a,b){
        return a.getHours()<12?b.AMPMS[0]:b.AMPMS[1]
        },
    Z:function(a){
        a=a.getTimezoneOffset();
        return Q(a/60,2)+Q(Math.abs(a%60),2)
        }
    },Wc=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Xc=/^\d+$/;
V.date=function(a,b){
    var c=this.$service("$locale"),d="",e=[],f,g,b=b||"mediumDate",b=c.DATETIME_FORMATS[b]||b;
    s(a)&&(a=Xc.test(a)?parseInt(a,10):aa.toDate(a));
    ma(a)&&(a=new Date(a));
    if(!na(a))return a;
    for(;b;)(g=Wc.exec(b))?(e=e.concat(ea.call(g,
        1)),b=e.pop()):(e.push(b),b=null);
    k(e,function(b){
        f=Vc[b];
        d+=f?f(a,c.DATETIME_FORMATS):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")
        });
    return d
    };
    
V.json=function(a){
    this.$element.addClass("ng-monospace");
    return U(a,!0,/^(\$|this$)/)
    };
    
V.lowercase=z;
V.uppercase=Ja;
V.html=function(a,b){
    return new Va(a,b)
    };
    
var Yc=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/,Zc=/^mailto:/;
V.linky=function(a){
    if(!a)return a;
    for(var b=a,c=[],d=wb(c),e,f;a=b.match(Yc);)e=a[0],a[2]==a[3]&&(e="mailto:"+
        e),f=a.index,d.chars(b.substr(0,f)),d.start("a",{
        href:e
    }),d.chars(a[0].replace(Zc,"")),d.end("a"),b=b.substring(f+a[0].length);
    d.chars(b);
    return new Va(c.join(""))
    };
    
F("$cookieStore",function(a){
    return{
        get:function(b){
            return ia(a[b])
            },
        put:function(b,c){
            a[b]=U(c)
            },
        remove:function(b){
            delete a[b]
        }
    }
},["$cookies"]);
F("$cookies",function(a){
    var b=this,c={},d={},e,f=!1;
    a.addPollFn(function(){
        var g=a.cookies();
        e!=g&&(e=g,A(g,d),A(g,c),f&&b.$apply())
        })();
    f=!0;
    this.$watch(function(){
        var b,e,f;
        for(b in d)r(c[b])&&
            a.cookies(b,D);for(b in c)e=c[b],s(e)?e!==d[b]&&(a.cookies(b,e),f=!0):p(d[b])?c[b]=d[b]:delete c[b];if(f)for(b in e=a.cookies(),c)c[b]!==e[b]&&(r(e[b])?delete c[b]:c[b]=e[b])
            });
    return c
    },["$browser"]);
F("$defer",function(a){
    function b(b,e){
        return a.defer(function(){
            c.$apply(b)
            },e)
        }
        var c=this;
    b.cancel=function(b){
        return a.defer.cancel(b)
        };
        
    return b
    },["$browser"]);
F("$document",function(a){
    return o(a.document)
    },["$window"]);
F("$exceptionHandler",function(a){
    return function(b){
        a.error(b)
        }
    },["$log"]);
F("$formFactory",function(){
    function a(b){
        return(b||a.rootForm).$new(ec)
        }
        a.rootForm=a(this);
    a.forElement=function(b){
        return b.inheritedData("$form")||a.rootForm
        };
        
    return a
    });
ec.prototype.$createWidget=function(a){
    var b=a.scope,c=a.onChange,d=a.alias,e=ya(a.model).assignable(),f=e.assign,g=this.$new(a.controller,a.controllerArgs);
    g.$error={};
    
    g.$modelValue=Number.NaN;
    b.$watch(e,function(a,b){
        if(!P(g.$modelValue,b))g.$modelValue=b,g.$parseModel?g.$parseModel():g.$viewValue=b,g.$emit("$validate"),g.$render&&
            g.$render()
            });
    g.$on("$viewChange",function(a,d){
        if(!P(g.$viewValue,d))g.$viewValue=d,g.$parseView?g.$parseView():g.$modelValue=g.$viewValue,f(b,g.$modelValue),c&&b.$eval(c),g.$emit("$validate")
            });
    ka(g);
    d&&!this.hasOwnProperty(d)?(this[d]=g,g.$widgetId=d):d=null;
    return g
    };
    
var Oc=/^(file|ftp|http|https):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,lc=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,Rc=lc,gc={
    http:80,
    https:443,
    ftp:21
};

hc.prototype=mb.prototype={
    $$replace:!1,
    absUrl:La("$$absUrl"),
    url:function(a,b){
        if(r(a))return this.$$url;
        var c=lc.exec(a);
        this.path(decodeURIComponent(c[1]||"")).search(c[3]||"").hash(c[5]||"",b);
        return this
        },
    protocol:La("$$protocol"),
    host:La("$$host"),
    port:La("$$port"),
    path:ic("$$path",function(a){
        return a.charAt(0)=="/"?a:"/"+a
        }),
    search:function(a,b){
        if(r(a))return this.$$search;
        p(b)?b===null?delete this.$$search[a]:this.$$search[a]=fa(b):this.$$search=s(a)?wa(a):a;
        this.$$compose();
        return this
        },
    hash:ic("$$hash",da),
    replace:function(){
        this.$$replace=!0;
        return this
        }
    };
F("$location",function(a,b,c,d){
    var e=this,f,g=a.baseHref()||"/",h=g.substr(0,g.lastIndexOf("/")),j=c.hashPrefix||"",i=a.url();
    if(c.html5Mode){
        var b=f=b.history?new hc(Pc(i,g,j),h):new mb(Qc(i,g,j),j),l=sa(b.protocol(),b.host(),b.port())+h;
        d.bind("click",function(a){
            if(!a.ctrlKey&&!(a.metaKey||a.which==2)){
                for(var b=o(a.target);b.length&&z(b[0].nodeName)!=="a";)b=b.parent();
                var c=b.attr("href");
                c&&!p(b.attr("ng:ext-link"))&&!b.attr("target")&&(c=c.replace(l,""),c.substr(0,4)!="http"&&(c=c.indexOf(h)===
                    0?c.substr(h.length):c,f.url(c),e.$apply(),a.preventDefault(),y.angular["ff-684208-preventDefault"]=!0))
                }
            })
    }else f=new mb(i,j);
    f.absUrl()!=i&&a.url(f.absUrl(),!0);
    a.onUrlChange(function(a){
    f.absUrl()!=a&&(f.$$parse(a),e.$apply())
    });
var m=0;
e.$watch(function(){
    a.url()!=f.absUrl()&&(m++,e.$evalAsync(function(){
        a.url(f.absUrl(),f.$$replace);
        f.$$replace=!1
        }));
    return m
    });
return f
},["$browser","$sniffer","$locationConfig","$document"]);
x.service("$locationConfig",function(){
    return{
        html5Mode:!1,
        hashPrefix:""
    }
});
F("$log",function(a){
    function b(b){
        var d=a.console||{},e=d[b]||d.log||v;
        return e.apply?function(){
            var a=[];
            k(arguments,function(b){
                a.push(oc(b))
                });
            return e.apply(d,a)
            }:e
        }
        return{
        log:b("log"),
        warn:b("warn"),
        info:b("info"),
        error:b("error")
        }
    },["$window"]);
F("$resource",function(a){
    a=new Ea(a);
    return N(a,a.route)
    },["$xhr.cache"]);
F("$route",function(a,b){
    function c(){
        var b,c;
        k(e,function(d,e){
            if(!c&&(b=f(a.path(),e)))c=ua(d,{
                params:w({},a.search(),b),
                pathParams:b
            }),c.$route=d
            });
        return c||e[null]&&ua(e[null],

        {
            params:{},
            pathParams:{}
        })
    }
    function d(a,b){
    var c=[];
    k((a||"").split(":"),function(a,d){
        if(d==0)c.push(a);
        else{
            var e=a.match(/(\w+)(.*)/),g=e[1];
            c.push(b[g]);
            c.push(e[2]||"");
            delete b[g]
        }
    });
return c.join("")
    }
    var e={},f=function(a,b){
    var c="^"+b.replace(/([\.\\\(\)\^\$])/g,"\\$1")+"$",d=[],e={};
    
    k(b.split(/\W/),function(a){
        if(a){
            var b=RegExp(":"+a+"([\\W])");
            c.match(b)&&(c=c.replace(b,"([^\\/]*)$1"),d.push(a))
            }
        });
var g=a.match(RegExp(c));
g&&k(d,function(a,b){
    e[a]=g[b+1]
    });
return g?e:null
},g=this,h=this,
j=0,i=!1,l={
    routes:e,
    parent:function(a){
        a&&(g=a)
        },
    when:function(a,b){
        var c=e[a];
        c||(c=e[a]={
            reloadOnSearch:!0
            });
        b&&w(c,b);
        j++;
        return c
        },
    otherwise:function(a){
        l.when(null,a)
        },
    reload:function(){
        j++;
        i=!0
        }
    };

this.$watch(function(){
    return j+a.url()
    },function(){
    var e=c(),f=l.current,j;
    if(e&&f&&e.$route===f.$route&&P(e.pathParams,f.pathParams)&&!e.reloadOnSearch&&!i)l.current=e,A(e.params,b),f.scope&&f.scope.$emit("$routeUpdate");
    else{
        i=!1;
        h.$broadcast("$beforeRouteChange",e,f);
        f&&f.scope&&f.scope.$destroy();
        if(l.current=e)e.redirectTo?s(e.redirectTo)?a.path(d(e.redirectTo,e.params)).search(e.params).replace():a.url(e.redirectTo(e.pathParams,a.path(),a.search())).replace():(A(e.params,b),(j=e.controller)&&cb(j),e.scope=g.$new(j));
        h.$broadcast("$afterRouteChange",e,f)
        }
    });
return l
},["$location","$routeParams"]);
Ba("$routeParams",function(){
    return{}
});
F("$sniffer",function(a){
    return a.Modernizr?a.Modernizr:{
        history:!(!a.history||!a.history.pushState),
        hashchange:"onhashchange"in a&&(!a.document.documentMode||
            a.document.documentMode>7)
        }
    },["$window"]);
F("$window",N(y,da,y));
F("$xhr.bulk",function(a,b,c){
    function d(b,c,g,h,j){
        t(g)&&(j=h,h=g,g=null);
        var i;
        k(d.urls,function(a){
            if(t(a.match)?a.match(c):a.match.exec(c))i=a
                });
        if(i){
            if(!i.requests)i.requests=[];
            b={
                method:b,
                url:c,
                data:g,
                success:h
            };
            
            if(j)b.error=j;
            i.requests.push(b)
            }else a(b,c,g,h,j)
            }
            d.urls={};
    
    d.flush=function(e,f){
        ha(e=e||v,0);
        ha(f=f||v,1);
        k(d.urls,function(d,f){
            var j=d.requests;
            if(j&&j.length)d.requests=[],d.callbacks=[],a("POST",f,{
                requests:j
            },
            function(a,d){
                k(d,function(a,d){
                    try{
                        a.status==200?(j[d].success||v)(a.status,a.response):t(j[d].error)?j[d].error(a.status,a.response):b(j[d],a)
                        }catch(e){
                        c.error(e)
                        }
                    });
            e()
                },function(a,d){
                k(j,function(e){
                    try{
                        t(e.error)?e.error(a,d):b(e,d)
                        }catch(g){
                        c.error(g)
                        }
                    })
            })
        })
};

this.$watch(function(){
    d.flush()
    });
return d
},["$xhr","$xhr.error","$log"]);
F("$xhr.cache",function(a,b,c,d){
    function e(a,h,j,i,l,m,n){
        t(j)?(t(i)?(n=m,m=l,l=i):(m=i,n=l,l=null),i=j,j=null):t(l)||(n=m,m=l,l=null);
        if(a=="GET"){
            var E;
            if(E=
                e.data[h])if(n?i(200,A(E.value)):b(function(){
                i(200,A(E.value))
                }),!m)return;
            (m=f[h])?(m.successes.push(i),m.errors.push(l)):(f[h]={
                successes:[i],
                errors:[l]
                },e.delegate(a,h,j,function(a,b){
                a==200&&(e.data[h]={
                    value:b
                });
                var c=f[h].successes;
                delete f[h];
                k(c,function(c){
                    try{
                        (c||v)(a,A(b))
                        }catch(e){
                        d.error(e)
                        }
                    })
            },function(b,e){
                var i=f[h].errors,l=f[h].successes;
                delete f[h];
                k(i,function(f,i){
                    try{
                        t(f)?f(b,A(e)):c({
                            method:a,
                            url:h,
                            data:j,
                            success:l[i]
                            },{
                            status:b,
                            body:e
                        })
                        }catch(n){
                        d.error(n)
                        }
                    })
            }))
    }else e.data=

    {},e.delegate(a,h,j,i,l)
    }
    var f={};

e.data={};

e.delegate=a;
return e
},["$xhr.bulk","$defer","$xhr.error","$log"]);
F("$xhr.error",function(a){
    return function(b,c){
        a.error("ERROR: XHR: "+b.url,b,c)
        }
    },["$log"]);
F("$xhr",function(a,b,c){
    function d(d,h,j,i,l){
        t(j)&&(l=i,i=j,j=null);
        j&&L(j)&&(j=U(j));
        a.xhr(d,h,j,function(a,f){
            try{
                s(f)&&(f.match(/^\)\]\}',\n/)&&(f=f.substr(6)),/^\s*[\[\{]/.exec(f)&&/[\}\]]\s*$/.exec(f)&&(f=ia(f,!0))),e.$apply(function(){
                    200<=a&&a<300?i(a,f):t(l)?l(a,f):b({
                        method:d,
                        url:h,
                        data:j,
                        success:i
                    },{
                        status:a,
                        body:f
                    })
                    })
                }catch(k){
                c.error(k)
                }
            },w({
            "X-XSRF-TOKEN":a.cookies()["XSRF-TOKEN"]
            },f.common,f[z(d)]))
    }
    var e=this,f={
    common:{
        Accept:"application/json, text/plain, */*",
        "X-Requested-With":"XMLHttpRequest"
    },
    post:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    get:{},
    head:{},
    put:{},
    "delete":{},
    patch:{}
};

d.defaults={
    headers:f
};

return d
},["$browser","$xhr.error","$log"]);
F("$locale",function(){
    return{
        id:"en-us",
        NUMBER_FORMATS:{
            DECIMAL_SEP:".",
            GROUP_SEP:",",
            PATTERNS:[{
                minInt:1,
                minFrac:0,
                maxFrac:3,
                posPre:"",
                posSuf:"",
                negPre:"-",
                negSuf:"",
                gSize:3,
                lgSize:3
            },{
                minInt:1,
                minFrac:2,
                maxFrac:2,
                posPre:"\u00a4",
                posSuf:"",
                negPre:"(\u00a4",
                negSuf:")",
                gSize:3,
                lgSize:3
            }],
            CURRENCY_SYM:"$"
        },
        DATETIME_FORMATS:{
            MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            AMPMS:["AM","PM"],
            medium:"MMM d, y h:mm:ss a",
            "short":"M/d/yy h:mm a",
            fullDate:"EEEE, MMMM d, y",
            longDate:"MMMM d, y",
            mediumDate:"MMM d, y",
            shortDate:"M/d/yy",
            mediumTime:"h:mm:ss a",
            shortTime:"h:mm a"
        },
        pluralCat:function(a){
            return a===1?"one":"other"
            }
        }
});
C("ng:init",function(a){
    return function(){
        this.$eval(a)
        }
    });
C("ng:controller",function(a){
    this.scope(function(b){
        b=Da(b,a,!0)||Da(y,a,!0);
        ha(b,a);
        cb(b);
        return b
        });
    return v
    });
C("ng:bind",function(a,b){
    b.addClass("ng-binding");
    var c=ya(a).statements();
    return function(a){
        var b=Number.NaN;
        this.$watch(function(f){
            var g,h,j,i,l=f.hasOwnProperty("$element"),k=f.$element;
            f.$element=a;
            try{
                g=c(f);
                if(j=g instanceof Va)g=(h=g).html;
                b!==g&&(i=Ua(g),!j&&!i&&L(g)&&(g=U(g,!0)),g!=b&&(b=g,j?a.html(h.get()):i?(a.html(""),a.append(g)):a.text(g==D?"":g)))
                }catch(n){
                f.$service("$exceptionHandler")(n)
                }finally{
                l?f.$element=k:delete f.$element
                }
            })
    }
});
var jc={};

C("ng:bind-template",function(a,b){
    b.addClass("ng-binding");
    var c=nb(a);
    return function(a){
        var b;
        this.$watch(function(f){
            f=
            c(f,a,!0);
            f!=b&&(a.text(f),b=f)
            })
        }
    });
C("ng:bind-attr",function(a){
    return function(b){
        var c={};
        
        this.$watch(function(d){
            var e=d.$eval(a),f;
            for(f in e){
                var g=nb(e[f])(d,b);
                c[f]!==g&&(c[f]=g,b.attr(f,Oa[z(f)]?va(g):g))
                }
            })
    }
});
C("ng:click",function(a){
    return function(b){
        var c=this;
        b.bind("click",function(b){
            c.$apply(a);
            b.stopPropagation()
            })
        }
    });
C("ng:submit",function(a){
    return function(b){
        var c=this;
        b.bind("submit",function(b){
            c.$apply(a);
            b.preventDefault()
            })
        }
    });
C("ng:class",ob(function(){
    return!0
    }));
C("ng:class-odd",
    ob(function(a){
        return a%2===0
        }));
C("ng:class-even",ob(function(a){
    return a%2===1
    }));
C("ng:show",function(a){
    return function(b){
        this.$watch(a,function(a,d){
            b.css("display",va(d)?"":"none")
            })
        }
    });
C("ng:hide",function(a){
    return function(b){
        this.$watch(a,function(a,d){
            b.css("display",va(d)?"none":"")
            })
        }
    });
C("ng:style",function(a){
    return function(b){
        this.$watch(a,function(a,d,e){
            e&&k(e,function(a,c){
                b.css(c,"")
                });
            d&&b.css(d)
            })
        }
    });
C("ng:cloak",function(a,b){
    b.removeAttr("ng:cloak");
    b.removeClass("ng-cloak")
    });
Xa("{{}}",function(a,b,c){
    var d=Ma(a);
    if(d.length>1||Na(d[0])!==null)if(sc(c[0]))c.attr("ng:bind-template",a);
        else{
        var e=b,f;
        k(Ma(a),function(a){
            var b=Na(a);
            b?(f=o("<span>"),f.attr("ng:bind",b)):f=o(K.createTextNode(a));
            O&&a.charAt(0)==" "&&(f=o("<span>&nbsp;</span>"),b=f.html(),f.text(a.substr(1)),f.html(b+f.html()));
            e.after(f);
            e=f
            });
        b.remove()
        }
    });
Xa("option",function(a,b,c){
    z(oa(c))=="option"&&(O<=7?vb(c[0].outerHTML,{
        start:function(b,e){
            r(e.value)&&c.attr("value",a)
            }
        }):c[0].getAttribute("value")==
    null&&c.attr("value",a))
});
var qb={};

k("src,href,multiple,selected,checked,disabled,readonly,required".split(","),function(a){
    qb["ng:"+a]=a
    });
Ab("{{}}",function(a,b,c){
    if(!C(b)&&!C("@"+b)){
        O&&b=="src"&&(a=decodeURI(a));
        var d=Ma(a);
        if(d.length>1||Na(d[0])!==null||qb[b])c.removeAttr(b),d=ia(c.attr("ng:bind-attr")||"{}"),d[qb[b]||b]=a,c.attr("ng:bind-attr",U(d))
            }
        });
G("ng:include",function(a){
    var b=this,c=a.attr("src"),d=a.attr("scope")||"",e=a[0].getAttribute("onload")||"";
    if(a[0]["ng:compiled"])this.descend(!0),
        this.directives(!0);else return a[0]["ng:compiled"]=!0,w(function(a,g){
        var h=0,j=[],i,l;
        this.$watch(c,function(){
            h++
        });
        this.$watch(function(a){
            a=a.$eval(d);
            a!==l&&(l=a,h++)
            });
        this.$watch(function(){
            return h
            },function(h){
            for(var l=h.$eval(c),k=h.$eval(d);j.length;)j.pop().$destroy();
            l?a("GET",l,null,function(a,c){
                g.html(c);
                k?i=k:j.push(i=h.$new());
                b.compile(g)(i);
                h.$eval(e)
                },!1,!0):(i=null,g.html(""))
            })
        },{
        $inject:["$xhr.cache"]
        })
    });
G("ng:switch",function(a){
    var b=a.attr("on"),c=a.attr("change"),d=

    {},e,f=a.children(),g=f.length,h,j;
    if(!b)throw new u("Missing 'on' attribute.");
    for(;g--;)h=o(f[g]),h.remove(),j=h.attr("ng:switch-when"),s(j)?d[j]=this.compile(h):s(h.attr("ng:switch-default"))&&(e=this.compile(h));
    f=null;
    a.html("");
    return function(a){
        var f=0,g,h;
        this.$watch(b,function(b,j){
            a.html("");
            if(h=d[j]||e)f++,g&&g.$destroy(),g=b.$new(),g.$eval(c)
                });
        this.$watch(function(){
            return f
            },function(){
            a.html("");
            h&&h(g,function(b){
                a.append(b)
                })
            })
        }
    });
G("a",function(){
    this.descend(!0);
    this.directives(!0);
    return function(a){
        var b=(a.attr("ng:bind-attr")||"").indexOf('"href":')!==-1;
        !b&&!a.attr("name")&&!a.attr("href")&&a.attr("href","");
        a.attr("href")===""&&!b&&a.bind("click",function(a){
            a.preventDefault()
            })
        }
    });
G("@ng:repeat",function(a,b){
    b.removeAttr("ng:repeat");
    b.replaceWith(o("<\!-- ng:repeat: "+a+" --\>"));
    var c=this.compile(b);
    return function(b){
        var e=a.match(/^\s*(.+)\s+in\s+(.*)\s*$/),f,g,h,j;
        if(!e)throw u("Expected ng:repeat in form of '_item_ in _collection_' but got '"+a+"'.");
        f=e[1];
        g=
        e[2];
        e=f.match(/^([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\)$/);
        if(!e)throw u("'item' in 'item in collection' should be identifier or (key, value) but got '"+keyValue+"'.");
        h=e[3]||e[1];
        j=e[2];
        var i=this,l=new lb;
        this.$watch(function(a){
            var e,f=a.$eval(g),k=xb(f,!0),o,t=new lb,B,p,r,s,w=b;
            if(M(f))r=f||[];
            else{
                r=[];
                for(B in f)f.hasOwnProperty(B)&&B.charAt(0)!="$"&&r.push(B);r.sort()
                }
                e=0;
            for(a=r.length;e<a;e++){
                B=f===r?e:r[e];
                p=f[B];
                if(s=l.shift(p)){
                    o=s.scope;
                    t.push(p,s);
                    if(e!==s.index)s.index=e,w.after(s.element);
                    w=s.element
                    }else o=i.$new();
                o[h]=p;
                j&&(o[j]=B);
                o.$index=e;
                o.$position=e==0?"first":e==k-1?"last":"middle";
                s||c(o,function(a){
                    w.after(a);
                    s={
                        scope:o,
                        element:w=a,
                        index:e
                    };
                    
                    t.push(p,s)
                    })
                }
                for(B in l)if(l.hasOwnProperty(B))for(r=l[B];r.length;)p=r.pop(),p.element.remove(),p.scope.$destroy();l=t
            })
        }
    });
G("@ng:non-bindable",v);
G("ng:view",function(a){
    var b=this;
    if(a[0]["ng:compiled"])b.descend(!0),b.directives(!0);else return a[0]["ng:compiled"]=!0,pa("$xhr.cache","$route",function(a,d,e){
        var f=0;
        this.$on("$afterRouteChange",
            function(){
                f++
            });
        this.$watch(function(){
            return f
            },function(g,h){
            var j=d.current&&d.current.template;
            j?a("GET",j,function(a,c){
                h==f&&(e.html(c),b.compile(e)(d.current.scope))
                }):e.html("")
            })
        })
    });
G("ng:pluralize",function(a){
    var b=a.attr("count"),c=a.attr("when"),d=a.attr("offset")||0;
    return pa("$locale",function(a,f){
        var g=this,h=g.$eval(c),j={};
        
        k(h,function(a,c){
            j[c]=nb(a.replace(/{}/g,"{{"+b+"-"+d+"}}"))
            });
        g.$watch(function(){
            var c=parseFloat(g.$eval(b));
            return isNaN(c)?"":(h[c]||(c=a.pluralCat(c-
                d)),j[c](g,f,!0))
            },function(a,b){
            f.text(b)
            })
        })
    });
G("form",function(){
    this.descend(!0);
    this.directives(!0);
    return pa("$formFactory",function(a,b){
        function c(a){
            f.$watch("$"+a,function(c,d){
                b[d?"addClass":"removeClass"]("ng-"+a)
                })
            }
            var d=b.attr("name"),e=a.forElement(b),f=a(e);
        b.data("$form",f);
        b.bind("submit",function(a){
            a.preventDefault()
            });
        d&&(this[d]=f);
        c("valid");
        c("invalid")
        })
    });
G("ng:form",G("form"));
var $c=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
ad=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
$("email",function(){
    var a=this;
    this.$on("$validate",function(){
        var b=a.$viewValue;
        a.$emit(!b||b.match(ad)?"$valid":"$invalid","EMAIL")
        })
    });
$("url",function(){
    var a=this;
    this.$on("$validate",function(){
        var b=a.$viewValue;
        a.$emit(!b||b.match($c)?"$valid":"$invalid","URL")
        })
    });
$("list",function(){
    function a(a){
        var c=[];
        k(a.split(/\s*,\s*/),function(a){
            a&&c.push(S(a))
            });
        return c
        }
        this.$parseView=function(){
        s(this.$viewValue)&&(this.$modelValue=a(this.$viewValue))
        };
    this.$parseModel=function(){
        var b=this.$modelValue;
        if(M(b)&&(!s(this.$viewValue)||!P(a(this.$viewValue),b)))this.$viewValue=b.join(", ")
            }
        });
$("number",kc(/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,"NUMBER"));
$("integer",kc(/^\s*(\-|\+)?\d+\s*$/,"INTEGER"));
$("checkbox",function(a){
    var b=this,c=a.attr("ng:true-value"),d=a.attr("ng:false-value");
    s(c)||(c=!0);
    s(d)||(d=!1);
    a.bind("click",function(){
        b.$apply(function(){
            b.$emit("$viewChange",a[0].checked)
            })
        });
    b.$render=function(){
        a[0].checked=b.$viewValue
        };
        
    b.$parseModel=
    function(){
        b.$viewValue=this.$modelValue===c
        };
        
    b.$parseView=function(){
        b.$modelValue=b.$viewValue?c:d
        }
    });
$("radio",function(a){
    var b=this;
    a.attr("name",b.$id+"@"+a.attr("name"));
    a.bind("click",function(){
        b.$apply(function(){
            a[0].checked&&b.$emit("$viewChange",b.$value)
            })
        });
    b.$render=function(){
        a[0].checked=p(b.$value)&&b.$value==b.$viewValue
        };
        
    if(a[0].checked)b.$viewValue=b.$value
        });
var bd=T("search,tel,url,email,datetime,date,month,week,time,datetime-local,number,range,color,radio,checkbox,text,button,submit,reset,hidden,password");
G("input",function(a){
    this.directives(!0);
    this.descend(!0);
    var b=a.attr("ng:model");
    return b&&pa("$defer","$formFactory",function(a,d,e){
        var d=d.forElement(e),f=e[0].getAttribute("type")||"text",g,h=this,j,i,l=S(e.attr("ng:pattern")),m=parseInt(e.attr("ng:minlength"),10),n=parseInt(e.attr("ng:maxlength"),10);
        g=f.match(/^\s*\@\s*(.*)/);
        l?l.match(/^\/(.*)\/$/)?(l=RegExp(l.substr(1,l.length-2)),j=function(a){
            return l.test(a)
            }):j=function(a){
            var b=h.$eval(l);
            if(!b||!b.test)throw new u("Expected "+l+" to be a RegExp but was "+
                b);
            return b.test(a)
            }:j=Sa(!0);
        f=z(f);
        g=(g?ha(this.$eval(g[1]),g[1]).$unboundFn:$(f))||v;
        if(!bd[f])try{
            e[0].setAttribute("type","text")
            }catch(o){}!g.$inject&&(g.$inject=[]);
        i=d.$createWidget({
            scope:h,
            model:b,
            onChange:e.attr("ng:change"),
            alias:e.attr("name"),
            controller:g,
            controllerArgs:[e]
            });
        ca(this,i,"value",e);
        ca(this,i,"required",e);
        ca(this,i,"readonly",e);
        ca(this,i,"disabled",e);
        i.$pristine=!(i.$dirty=!1);
        i.$on("$validate",function(){
            var a=S(i.$viewValue),b=i.$required&&!a,c=n&&a&&a.length>n,d=
            m&&a&&a.length<m,a=a&&!j(a);
            i.$error.REQUIRED!=b&&i.$emit(b?"$invalid":"$valid","REQUIRED");
            i.$error.PATTERN!=a&&i.$emit(a?"$invalid":"$valid","PATTERN");
            i.$error.MINLENGTH!=d&&i.$emit(d?"$invalid":"$valid","MINLENGTH");
            i.$error.MAXLENGTH!=c&&i.$emit(c?"$invalid":"$valid","MAXLENGTH")
            });
        k(["valid","invalid","pristine","dirty"],function(a){
            i.$watch("$"+a,function(b,c){
                e[c?"addClass":"removeClass"]("ng-"+a)
                })
            });
        e.bind("$destroy",function(){
            i.$destroy()
            });
        if(f!="checkbox"&&f!="radio")i.$render=function(){
            e.val(i.$viewValue||
                "")
            },e.bind("keydown change",function(b){
            b=b.keyCode;
            b!=91&&!(15<b&&b<19)&&!(37<b&&b<40)&&a(function(){
                i.$dirty=!(i.$pristine=!1);
                var a=S(e.val());
                i.$viewValue!==a&&i.$emit("$viewChange",a)
                })
            })
        })
    });
G("textarea",G("input"));
var cd=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/;
G("select",function(a){
    this.directives(!0);
    this.descend(!0);
    return a.attr("ng:model")&&pa("$formFactory",function(a,c){
        function d(){
            var a=
            this;
            this.$render=function(){
                var a=new kb(this.$viewValue);
                k(c.children(),function(b){
                    b.selected=p(a.get(b.value))
                    })
                };
                
            c.bind("change",function(){
                a.$apply(function(){
                    var b=[];
                    k(c.children(),function(a){
                        a.selected&&b.push(a.value)
                        });
                    a.$emit("$viewChange",b)
                    })
                })
            }
            function e(){
            var a=this;
            a.$render=function(){
                c.val(a.$viewValue)
                };
                
            c.bind("change",function(){
                a.$apply(function(){
                    a.$emit("$viewChange",c.val())
                    })
                });
            a.$viewValue=c.val()
            }
            function f(){
            function a(){
                var d={
                    "":[]
                },e=[""],i,k,n,o,p;
                n=b.$modelValue;
                o=s(g)||[];
                var q=l?sb(o):o,z,u,v;
                u=ua(g);
                p=!1;
                var A,C;
                if(j)p=new kb(n);
                else if(n===null||y)d[""].push({
                    selected:n===null,
                    id:"",
                    label:""
                }),p=!0;
                for(v=0;z=q.length,v<z;v++){
                    u[h]=o[l?u[l]=q[v]:v];
                    i=m(u)||"";
                    if(!(k=d[i]))k=d[i]=[],e.push(i);
                    j?i=p.remove(r(u))!=D:(i=n===r(u),p=p||i);
                    k.push({
                        id:l?q[v]:v,
                        label:f(u)||"",
                        selected:i
                    })
                    }!j&&!p&&d[""].unshift({
                    id:"?",
                    label:"",
                    selected:!0
                    });
                u=0;
                for(q=e.length;u<q;u++){
                    i=e[u];
                    k=d[i];
                    if(x.length<=u)n={
                        element:w.clone().attr("label",i),
                        label:k.label
                        },o=[n],x.push(o),
                        c.append(n.element);
                    else if(o=x[u],n=o[0],n.label!=i)n.element.attr("label",n.label=i);
                    A=null;
                    v=0;
                    for(z=k.length;v<z;v++)if(i=k[v],p=o[v+1]){
                        A=p.element;
                        if(p.label!==i.label)A.text(p.label=i.label);
                        if(p.id!==i.id)A.val(p.id=i.id);
                        if(p.element.selected!==i.selected)A.prop("selected",p.selected=i.selected)
                            }else i.id===""&&y?C=y:(C=t.clone()).val(i.id).attr("selected",i.selected).text(i.label),o.push({
                        element:C,
                        label:i.label,
                        id:i.id,
                        selected:i.selected
                        }),A?A.after(C):n.element.append(C),A=C;for(v++;o.length>
                        v;)o.pop().element.remove()
                        }
                        for(;x.length>u;)x.pop()[0].element.remove()
                    }
                    var b=this,d;
            if(!(d=i.match(cd)))throw u("Expected ng:options in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+i+"'.");
            var e=this,f=Y(d[2]||d[1]),h=d[4]||d[6],l=d[5],m=Y(d[3]||""),r=Y(d[2]?d[1]:h),s=Y(d[7]),t=o(K.createElement("option")),w=o(K.createElement("optgroup")),y=!1,x=[[{
                element:c,
                label:""
            }]];
            k(c.children(),function(a){
                a.value==""&&(y=o(a).remove(),Wa(y)(g))
                });
            c.html("");
            c.bind("change",
                function(){
                    e.$apply(function(){
                        var a,b=s(g)||[],d=c.val(),f=ua(g),i,k,n,m,o,q;
                        if(j){
                            i=[];
                            m=0;
                            for(q=x.length;m<q;m++){
                                a=x[m];
                                n=1;
                                for(o=a.length;n<o;n++)if((k=a[n].element)[0].selected)l&&(f[l]=d),f[h]=b[k.val()],i.push(r(f))
                                    }
                                }else d=="?"?i=D:d==""?i=null:(f[h]=b[d],l&&(f[l]=d),i=r(f));
                        p(i)&&g.$viewVal!==i&&e.$emit("$viewChange",i)
                        })
                });
        e.$watch(a);
        e.$render=a
        }
        var g=this,h=a.forElement(c),j=c.attr("multiple"),i=c.attr("ng:options"),l=c.attr("ng:model"),m=h.$createWidget({
        scope:this,
        model:l,
        onChange:c.attr("ng:change"),
        alias:c.attr("name"),
        controller:i?f:j?d:e
        });
    c.bind("$destroy",function(){
        m.$destroy()
        });
    m.$pristine=!(m.$dirty=!1);
        ca(g,m,"required",c);
        ca(g,m,"readonly",c);
        ca(g,m,"disabled",c);
        m.$on("$validate",function(){
        var a=!m.$required||!!m.$modelValue;
        a&&j&&m.$required&&(a=!!m.$modelValue.length);
        a!==!m.$error.REQUIRED&&m.$emit(a?"$valid":"$invalid","REQUIRED")
        });
    m.$on("$viewChange",function(){
        m.$pristine=!(m.$dirty=!0)
        });
    k(["valid","invalid","pristine","dirty"],function(a){
        m.$watch("$"+a,function(b,d){
            c[d?
            "addClass":"removeClass"]("ng-"+a)
            })
        })
    })
});
var rb;
Ba("$browser",function(a,b){
    rb||(rb=new Dc(y,o(y.document),o(y.document.body),Sc,a,b));
    return rb
    },{
    $inject:["$log","$sniffer"]
    });
w(x,{
    compile:Wa,
    scope:Eb,
    copy:A,
    extend:w,
    equals:P,
    forEach:k,
    injector:Gb,
    noop:v,
    bind:N,
    toJson:U,
    fromJson:ia,
    identity:da,
    isUndefined:r,
    isDefined:p,
    isString:s,
    isFunction:t,
    isObject:L,
    isNumber:ma,
    isArray:M,
    version:{
        full:"0.10.5",
        major:0,
        minor:10,
        dot:5,
        codeName:"steel-fist"
    },
    isDate:na,
    lowercase:z,
    uppercase:Ja
});
Cb();
var dd=function(a){
    Cb();
    var a=a.getElementsByTagName("script"),a=a[a.length-1],b=a.src,c={},d;
    d=b.indexOf("#");
    d!=-1&&w(c,wa(b.substr(d+1)));
    Aa(o(a),function(a,b){
        /^ng:/.exec(b)&&(b=b.substring(3).replace(/-/g,"_"),c[b]=a||!0)
    });
return c
}(K);
$a(K).ready(function(){
    var a=K,b=dd.autobind;
    b&&(a=s(b)?a.getElementById(b):a,Wa(a)().$apply())
    })
})(window,document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],.ng-cloak{display:none;}.ng-format-negative{color:red;}ng\\:form{display:block;}</style>');
