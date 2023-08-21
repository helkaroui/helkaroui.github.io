"use strict";(self.webpackChunksharek_dev=self.webpackChunksharek_dev||[]).push([[3211],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9322:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Cheat Sheet"},s=void 0,p={unversionedId:"cheat_sheet",id:"cheat_sheet",title:"Cheat Sheet",description:"Shell script first line",source:"@site/notes/python_notes/cheat_sheet.md",sourceDirName:".",slug:"/cheat_sheet",permalink:"/python/cheat_sheet",draft:!1,tags:[],version:"current",frontMatter:{title:"Cheat Sheet"},sidebar:"docs",previous:{title:"Hacks & Tricks",permalink:"/python/tricks"},next:{title:"Quick start",permalink:"/python/asyncio/quick_start"}},c={},u=[{value:"Shell script first line",id:"shell-script-first-line",level:2},{value:"Set source code encoding",id:"set-source-code-encoding",level:2},{value:"Strings",id:"strings",level:2},{value:"lists",id:"lists",level:2},{value:"list and dictionary iteration",id:"list-and-dictionary-iteration",level:2},{value:"formal, positional, and keyword arguments",id:"formal-positional-and-keyword-arguments",level:2},{value:"lambda forms",id:"lambda-forms",level:2},{value:"documentation strings (doc strings)",id:"documentation-strings-doc-strings",level:2},{value:"built-in functions for list operations",id:"built-in-functions-for-list-operations",level:2},{value:"list comprehensions",id:"list-comprehensions",level:2},{value:"deleting elements from lists by index",id:"deleting-elements-from-lists-by-index",level:2},{value:"tuples",id:"tuples",level:2},{value:"sets",id:"sets",level:2},{value:"dictionaries",id:"dictionaries",level:2},{value:"looping over dictionaries and lists",id:"looping-over-dictionaries-and-lists",level:2},{value:"some interesting comparisons",id:"some-interesting-comparisons",level:2},{value:"How to force specific version with easy_install or pip",id:"how-to-force-specific-version-with-easy_install-or-pip",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"shell-script-first-line"},"Shell script first line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," #!/usr/bin/env python\n")),(0,i.kt)("h2",{id:"set-source-code-encoding"},"Set source code encoding"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: iso-8859-15 -*-\ncurrency = u"\u20ac"\n')),(0,i.kt)("h2",{id:"strings"},"Strings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\"multiline\\nstring\"\n'not multiline\\nstring'\n'abc' * 3\n'ab' + 'c' == 'a' + 'bc'\n' ab '.strip() == 'ab'\nword[4]\nword[2:]\nword[:-2]\nlen(word)\nu'this is a unicode string'\n")),(0,i.kt)("h2",{id:"lists"},"lists"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# replace some items\na[0:2] = [1, 12]\n# remove some\na[0:2] = []\n# insert some\na[1:1] = [1, 12]\n# clear\na[:] = []\n# insert a copy of itself at the beginning\na[:0] = a\n# length \nlen(a)\n")),(0,i.kt)("h2",{id:"list-and-dictionary-iteration"},"list and dictionary iteration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"for x in ['cat', 'dog']:\n    print x, len(x)\n\nfor i in range(a):\n    print i, a[i]\n    #pass\n    #continue\n    #break\n\nfor k, v in d.items():\n    print k, v\n")),(0,i.kt)("h2",{id:"formal-positional-and-keyword-arguments"},"formal, positional, and keyword arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def mymethod(arg1, arg2, *args, **kwargs):\n    pass\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"arg1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2"),' : "formal" arguments')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"*args")," : a ''tuple'' containing the positional arguments beyond the formal parameter list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"**kwargs")," : a ''dictionary'' of all keywords except for those corresponding to a formal parameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"More examples:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# arbitrary argument lists\ndef fprintf(file, format, *args):\n    file.write(format % args)\n\n# unpacking argument lists\nrange(3, 6)\nargs = [3, 6]\nrange(*args)\n\ndef parrot(voltage, state='a stiff'):\n    pass\n\nd = { 'voltage': 'four million', 'state': \"bleedin' demised\" }\nparrot(**d)\n")),(0,i.kt)("h2",{id:"lambda-forms"},"lambda forms"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> def make_incrementor(n):\n...     return lambda x: x + n\n...\n>>> f = make_incrementor(42)\n>>> f(0)\n42\n>>> f(1)\n43\n")),(0,i.kt)("h2",{id:"documentation-strings-doc-strings"},"documentation strings (doc strings)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def parrot():\n    """Summary starts with capital letter and ends with period.\n\n    Detailed text.\n    """\n')),(0,i.kt)("h2",{id:"built-in-functions-for-list-operations"},"built-in functions for list operations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter(function, sequence)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map(function, sequence)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reduce(function, sequence)"))),(0,i.kt)("h2",{id:"list-comprehensions"},"list comprehensions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']\n>>> [weapon.strip() for weapon in freshfruit]\n['banana', 'loganberry', 'passion fruit']\n\n>>> vec = [2, 4, 6]\n>>> [3*x for x in vec]\n[6, 12, 18]\n\n>>> [(x, x**2) for x in vec]\n[(2, 4), (4, 16), (6, 36)]\n\n>>> vec1 = [2, 4, 6]\n>>> vec2 = [4, 3, -9]\n>>> [x*y for x in vec1 for y in vec2]\n[8, 6, -18, 16, 12, -36, 24, 18, -54]\n>>> [x+y for x in vec1 for y in vec2]\n[6, 5, -7, 8, 7, -5, 10, 9, -3]\n>>> [vec1[i]*vec2[i] for i in range(len(vec1))]\n[8, 12, -54]\n\n# create new dict from otherdict but only with keys that have non-null value\ndd = dict([(k, v) for k, v in otherdict.items() if v is not None])\n")),(0,i.kt)("h2",{id:"deleting-elements-from-lists-by-index"},"deleting elements from lists by index"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"del a[0]\ndel a[2:4]\ndel a[:]\n")),(0,i.kt)("h2",{id:"tuples"},"tuples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"t = 1, 2, 3\nt = t, (1, 2)\nempty = ()\nsingleton = 'hello',    # <-- note trailing comma\n")),(0,i.kt)("h2",{id:"sets"},"sets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']\n>>> fruit = set(basket)               # create a set without duplicates\n>>> fruit\nset(['orange', 'pear', 'apple', 'banana'])\n>>> 'orange' in fruit                 # fast membership testing\nTrue\n>>> 'crabgrass' in fruit\nFalse\n\n>>> a = set('abracadabra')\n>>> b = set('alacazam')\n>>> a                                  # unique letters in a\nset(['a', 'r', 'b', 'c', 'd'])\n>>> a - b                              # letters in a but not in b\nset(['r', 'd', 'b'])\n>>> a | b                              # letters in either a or b\nset(['a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'])\n>>> a & b                              # letters in both a and b\nset(['a', 'c'])\n>>> a ^ b                              # letters in a or b but not both\nset(['r', 'd', 'b', 'm', 'z', 'l'])\n")),(0,i.kt)("h2",{id:"dictionaries"},"dictionaries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"tel = {}\ntel = {'jack': 4098, 'sape': 4139}\ntel['guido'] = 4127\ntel.keys()\ntel.has_key('guido')\ntel = dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])\n")),(0,i.kt)("h2",{id:"looping-over-dictionaries-and-lists"},"looping over dictionaries and lists"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"knights = {'gallahad': 'the pure', 'robin': 'the brave'}\nfor k, v in knights.items():\n    print k, v\n\nfor i, v in enumerate(['tic', 'tac', 'toe']):\n    print i, v\n\nquestions = ['name', 'quest', 'favorite color']\nanswers = ['lancelot', 'the holy grail', 'blue']\nfor q, a in zip(questions, answers):\n    print 'What is your %s?  It is %s.' % (q, a)\n\n# loop over in reverse, without changing the source\nfor i in reversed(xrange(1,10,2)):\n    print i\n\n# loop over in sorted order, without changing the source\nbasket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']\nfor f in sorted(set(basket)):\n    print f\n")),(0,i.kt)("h2",{id:"some-interesting-comparisons"},"some interesting comparisons"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> string1, string2, string3 = '', 'Trondheim', 'Hammer Dance'\n>>> non_null = string1 or string2 or string3\n>>> non_null\n'Trondheim'\n\n(1, 2, 3)              < (1, 2, 4)\n[1, 2, 3]              < [1, 2, 4]\n'ABC' < 'C' < 'Pascal' < 'Python'\n(1, 2, 3, 4)           < (1, 2, 4)\n(1, 2)                 < (1, 2, -1)\n(1, 2, 3)             == (1.0, 2.0, 3.0)\n(1, 2, ('aa', 'ab'))   < (1, 2, ('abc', 'a'), 4)\n")),(0,i.kt)("p",null,"To be continued from Section 6: Modules:\n",(0,i.kt)("a",{parentName:"p",href:"http://www.python.org/doc/current/tut/node8.html"},"http://www.python.org/doc/current/tut/node8.html")),(0,i.kt)("h2",{id:"how-to-force-specific-version-with-easy_install-or-pip"},"How to force specific version with easy_install or pip"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"easy_install lxml==2.2.8\npip install lxml==2.2.8\n")))}m.isMDXComponent=!0}}]);