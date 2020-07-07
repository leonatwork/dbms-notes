(this["webpackJsonpdbms-notes"]=this["webpackJsonpdbms-notes"]||[]).push([[0],{21:function(e,t,l){e.exports=l(34)},33:function(e,t,l){},34:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),r=l(14),i=l.n(r),c=(l(26),l(5)),o=l(6),u=l(8),s=l(7),m=l(12),d=l(18),E=function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(){var e;Object(c.a)(this,l);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={navExpanded:!1},e}return Object(o.a)(l,[{key:"render",value:function(){var e=this,t={backgroundColor:"#BBDEFB"},l={color:"white",fontSize:"28px",fontFamily:"'Merienda One', cursive"};return this.props.showNav?a.a.createElement(m.a,{collapseOnSelect:!0,style:t,expand:"lg"},a.a.createElement(m.a.Brand,{style:l,href:"/"},"DBMS Notes"),a.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(d.a,{className:"mr-auto"},this.props.notes.map((function(t){var l="list-group-item";return t.id===e.props.activeNoteID&&(l+=" active-me"),a.a.createElement(d.a.Link,{key:t.id,href:"#"+t.id,className:l,onClick:function(){return e.props.handleClick(t.id)},style:{cursor:"pointer",textAlign:"center"}},t.title)}))))):a.a.createElement(m.a,{expand:"lg",style:t},a.a.createElement(m.a.Brand,{href:"/",style:l},"DBMS Notes"))}}]),l}(n.Component),h=function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(){var e;Object(c.a)(this,l);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(o.a)(l,[{key:"render",value:function(){var e=this;return a.a.createElement("ul",{className:"list-group list-group-flush"},this.props.notes.map((function(t){var l="list-group-item";return t.id===e.props.activeNoteID&&(l+=" active"),a.a.createElement("li",{key:t.id,className:l,onClick:function(){return e.props.handleClick(t.id)},style:{cursor:"pointer"}},t.title)})))}}]),l}(n.Component),b=function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(){var e;Object(c.a)(this,l);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(o.a)(l,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.note)}}]),l}(n.Component),p=[{id:0,title:"Introduction",content:a.a.createElement("div",null,a.a.createElement("h1",null,"Introduction"),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("b",null,"Database")," is a collection of related data."),a.a.createElement("p",null,a.a.createElement("b",null,"DBMS (Database Management System) "),"is the software used to create/manipulate/manage/update/delete database"),a.a.createElement("p",null,a.a.createElement("b",null,"Data")," includes all the raw facts and figures"),a.a.createElement("p",null,a.a.createElement("b",null,"Information")," is the processed data"),a.a.createElement("p",null,"Data and information are subjective and the seperation depends on who uses it and the situation.",a.a.createElement("br",null)," ",a.a.createElement("b",null,"Eg.")," A grocery list may be an information to the customer, but it may just be a data to a market analyst."),a.a.createElement("hr",null),a.a.createElement("h3",null,"Why was DBMS developed?"),a.a.createElement("h6",null,"Disadvantages of traditional file-system"),a.a.createElement("ul",null,a.a.createElement("li",null,"Data redundancy"),a.a.createElement("li",null,"Data inconsistency"),a.a.createElement("li",null,"Access difficulty"),a.a.createElement("li",null,"Data isolation"),a.a.createElement("li",null,"Security problem"),a.a.createElement("li",null,"Atomicity problem"),a.a.createElement("li",null,"Concurrent access problem"),a.a.createElement("li",null,"Integrity issues")),a.a.createElement("hr",null),a.a.createElement("h3",null,"Online Data Processing Systems"),a.a.createElement("h6",null,"OLAP (Online Analytical Processing)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Consists of historical data"),a.a.createElement("li",null,"Subject oriented"),a.a.createElement("li",null,"Used for decision making"),a.a.createElement("li",null,"Larger in size (TB, PB)"),a.a.createElement("li",null,"Only Read operations")),a.a.createElement("h6",null,"OLTP (Online Transaction Processing)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Consists of current data"),a.a.createElement("li",null,"Application oriented"),a.a.createElement("li",null,"Used for day to day operations"),a.a.createElement("li",null,"Smaller in size (MB, GB)"),a.a.createElement("li",null,"Both read and write operations")))},{id:1,title:"ER diagram",content:a.a.createElement("div",null,a.a.createElement("h1",null,"ER diagram"),a.a.createElement("hr",null),a.a.createElement("h4",null,"Entity Relationship Diagram"),"High level diagram giving a conceptual understanding of the relational model (entities and their relationship)",a.a.createElement("br",null),"Introduced by Peter Chen",a.a.createElement("hr",null),a.a.createElement("h4",null,"Entity"),a.a.createElement("b",null,"Entity "),"is a real world thing or object, distinguishable from others based on its attributes. ",a.a.createElement("br",null),"Types :",a.a.createElement("ol",null,a.a.createElement("li",null,"Tangible : physically exist. ",a.a.createElement("b",null,"Eg.")," bank locker, car"),a.a.createElement("li",null,"Intangible : exists logically. ",a.a.createElement("b",null,"Eg.")," bank account")),a.a.createElement("hr",null),a.a.createElement("h4",null,"Attribute"),a.a.createElement("b",null,"Attributes "),"are entity's characteristics. Represented with oval (column)",a.a.createElement("br",null),"Attribute types:",a.a.createElement("ol",null,a.a.createElement("li",null,"Simple : cannot be decomposed"),a.a.createElement("li",null,"Composite : can be decomposed ",a.a.createElement("b",null,"Eg.")," name = first name + last name"),a.a.createElement("li",null,"Single-valued"),a.a.createElement("li",null,"Multi-valued (double oval) (we have to make separate table for it)"," ",a.a.createElement("b",null,"Eg.")," phone no."),a.a.createElement("li",null,"Stored "),a.a.createElement("li",null,"Derived (dotted oval) ",a.a.createElement("b",null,"Eg.")," age can be derived from DOB")),a.a.createElement("hr",null),a.a.createElement("h4",null,"Relationship"),a.a.createElement("b",null,"Relationship")," is represented by a diamond",a.a.createElement("br",null),"A relationship has",a.a.createElement("ol",null,a.a.createElement("li",null,"Name"),a.a.createElement("li",null,"Degree (no. of entites participating in the relation) (like unary, binary, ternary, ..., n-ary)"),a.a.createElement("li",null,"Cardinality ratio / participation constraints (like one to one, one to many) (for binary relations)")),a.a.createElement("b",null,"Cardinality ratio")," express the number of entities to which an entity can be related. ",a.a.createElement("br",null),"It can be 1 : 1, 1 : n, n : 1 or n : n",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("b",null,"Participation constraints "),"specifies the maximum and minimum no. of relationship an entity can/must participate in max cardinality and min cardinality. ",a.a.createElement("b",null,"Eg.")," 1 project can have min 3 employees and 1 project can have max 15 employees (min, max) = (3, 15)",a.a.createElement("br",null),"partial participation - min cardinality = 0 (single line)",a.a.createElement("br",null)," total participation - min cardinality ",">","= 1 (double line)",a.a.createElement("hr",null),a.a.createElement("h4",null,"Entity set"),a.a.createElement("b",null,"Entity set "),"is the set of similar type of entities. Represented by a rectangle in ER diagram (tables)",a.a.createElement("br",null),"ER diagram represents entity set (student) and not the entity (Sam)",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("b",null,"Weak entity set "),"(double rectangle) is an entity that cannot be uniquely identified by its attributes alone. The entity sets which do not have sufficient attributes to form a primary key are known as weak entity sets.",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("b",null,"Strong entity set "),"(simple rectangle) the entity sets which have a primary key are known as strong entity sets.",a.a.createElement("br",null),"The relation between one strong and one weak entity is represented by double diamond. Weak entities always have total participation but strong entities may not have total participation.")},{id:2,title:"Keys",content:a.a.createElement("div",null,a.a.createElement("h1",null,"Keys"),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("b",null,"Keys")," are the attribute or set of attributes which can uniquely identify a record."),a.a.createElement("div",null,a.a.createElement("b",null,"Types of keys"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("b",null,"Super key :")," set of all possible keys"),a.a.createElement("li",null,a.a.createElement("b",null,"Candidate key :")," minimal subset of superkey which can uniquely identify a record, i.e given a super key then no proper subset of the super key should uniquely identify a record, then that superkey is a candidate key"),a.a.createElement("li",null,a.a.createElement("b",null,"Primary key :")," the candidate key chosen to uniquely identify a record"),a.a.createElement("li",null,a.a.createElement("b",null,"foriegn key :")," an attribute in table which is used to define its relationship with another table"),a.a.createElement("li",null,a.a.createElement("b",null,"Composite key :")," key with more than one attribute (if one attribute of composite key is foriegn key then it is called as"," ",a.a.createElement("b",null,"compound key"),")"),a.a.createElement("li",null,a.a.createElement("b",null,"Alternate key :")," candidate keys - primary key"),a.a.createElement("li",null,a.a.createElement("b",null,"Surrogate key :")," if no attribute or its combination can uniquely identify a record then we introduce a new attribute called surrogate key only for the identification purpose"))))},{id:3,title:"Functional dependencies",content:a.a.createElement("div",null,a.a.createElement("h1",null,"Functional dependencies"),a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement("b",null,"f: a -",">"," b"),a.a.createElement("p",null,"Given the value of ",a.a.createElement("b",null,"a"),", we can uniquely determine the value of",a.a.createElement("b",null," b"),"."),a.a.createElement("p",null,a.a.createElement("b",null,"Trivial functional dependency : "),a.a.createElement("b",null,"b")," is a subset of",a.a.createElement("b",null," a"),"."),a.a.createElement("p",null,a.a.createElement("b",null,"Non-trivial functional dependency : "),a.a.createElement("b",null,"b")," is a NOT a subset of",a.a.createElement("b",null," a"),"."),a.a.createElement("p",null,a.a.createElement("b",null,"Attribute closure")," of an attribute set ",a.a.createElement("b",null,"A")," can be defined as a set of attributes which can be functionally determined from it. It is denoted by",a.a.createElement("b",null," ","F",a.a.createElement("sup",null,"+"),"."))),a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement("h4",null,"Armstrong axioms"),a.a.createElement("p",null,"Axioms are the rules which are considered true and used to derive other results."),a.a.createElement("b",null,"Primary rules"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("b",null,"Reflexivity"),a.a.createElement("p",null,"If y is subset of x then x -",">"," y")),a.a.createElement("li",null,a.a.createElement("b",null,"Augmentation"),a.a.createElement("p",null,"x -",">"," y then xz -",">"," yz")),a.a.createElement("li",null,a.a.createElement("b",null,"Transitivity"),a.a.createElement("p",null,"x -",">"," y and y -",">"," z then x -",">"," z"))),a.a.createElement("b",null,"Secondary rules"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("b",null,"Union"),a.a.createElement("p",null,"x -",">"," y and x -",">"," z then x -",">"," yz")),a.a.createElement("li",null,a.a.createElement("b",null,"Decomposition"),a.a.createElement("p",null,"x -",">"," yz then x -",">"," y and x -",">"," z")),a.a.createElement("li",null,a.a.createElement("b",null,"Pseudo transitivity"),a.a.createElement("p",null,"x -",">"," y and wy -",">"," z then xw -",">"," zz")),a.a.createElement("li",null,a.a.createElement("b",null,"Composition"),a.a.createElement("p",null,"x -",">"," y and z -",">"," w then xz -",">"," yw")))),a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement("h4",null,"Canonical form"),a.a.createElement("p",null,"It is the irreducible set of functional dependencies."),a.a.createElement("b",null,"Steps"),a.a.createElement("ol",null,a.a.createElement("li",null,"Decompose all dependencies"),a.a.createElement("li",null,"For all the rules :",a.a.createElement("ol",null,a.a.createElement("li",null,"Find closure of the LHS of a rule"),a.a.createElement("li",null,"Find closure of the lhs of the same rule ignoring that rule itself"),a.a.createElement("li",null,"If both closures are same then that rule is redundant so remove it otherwise include it"))),a.a.createElement("li",null,"For all the rules :",a.a.createElement("ol",null,a.a.createElement("li",null,"If LHS is compound then find its closure and closure of each subset of elements in it"),a.a.createElement("li",null,"If closure of particular element matches the main closure then other elements on LHS are redundant")))),a.a.createElement("p",null,"Finally the set of rules you have is the canonical form/canonical cover/minimal cover/irreducible form.")))},{id:4,title:"Normalization",content:a.a.createElement("div",null,a.a.createElement("h1",null,"Normalization"),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("b",null,"Normalization")," is the method to organize data into multiple related tables to avoid data redundancy."),a.a.createElement("div",null,a.a.createElement("b",null,"Redundancy issues"),a.a.createElement("br",null),"Consider a table student table (roll no, name, branch name, HOD name, HOD phone no)",a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("b",null,"Insertion anomaly"),a.a.createElement("p",null,"Inserting redundant data (HOD info) for every new entry of a student. Also new student record cannot be created if HOD information is not available, even though both are logically seperate entities.")),a.a.createElement("li",null,a.a.createElement("b",null,"Deletion anomaly"),a.a.createElement("p",null,"This happens when two separate items have the same table and we wish to delete entry of one item and other also gets deleted."," ",a.a.createElement("br",null),a.a.createElement("b",null,"Eg.")," If student info is deleted then HOD's info also gets deleted.")),a.a.createElement("li",null,a.a.createElement("b",null,"Updation anomaly"),a.a.createElement("p",null,"If a value is updated then all its redundant copies needs to be updated. ",a.a.createElement("br",null),a.a.createElement("b",null,"Eg. "),"If HOD phone no. is updated then for every student entry we need to update it.")))),a.a.createElement("hr",null),a.a.createElement("h4",null,"Normalization forms"),a.a.createElement("div",null,a.a.createElement("b",null,"1 NF"),a.a.createElement("ul",null,a.a.createElement("li",null,"Each column should contain atomic values (i.e each column has a single value)"),a.a.createElement("li",null,"A column should contain value of the same type"),a.a.createElement("li",null,"Each column should have a unique name"),a.a.createElement("li",null,"Order in which data is stored in table doesn't matter")),a.a.createElement("b",null,"2 NF"),a.a.createElement("ul",null,a.a.createElement("li",null,"Table should be in 1 NF"),a.a.createElement("li",null,"Table should not have any ",a.a.createElement("b",null,"partial dependencies")," (partial prime attr. -",">"," non prime attr.) i.e. if primary key of the table is composition of more tham 1 columns and a particular column of the table only depends on a subset of the primary key columns and has nothing to do with other columns of the primary key"),a.a.createElement("li",null,"While decomposing a table, we always make a seperate table for candidate keys otherwise it will be a lossy decomposition.")),a.a.createElement("b",null,"3 NF"),a.a.createElement("ul",null,a.a.createElement("li",null,"Table should be in 2 NF"),a.a.createElement("li",null,"Table should not have ",a.a.createElement("b",null,"transitive dependency")," (non prime attr. -",">"," non prime attr.) i.e. when there is an attribute in a table which depends upon non-prime attribute which inturn depends on the prime attributes")),a.a.createElement("b",null,"BCNF (Boyce Codd Normal Form - 3.5 NF)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Table should be in 3 NF"),a.a.createElement("li",null,"For any dependency A -",">"," B, A should be super key i.e no dependencty of type (non prime attr -",">"," prime attr)"),a.a.createElement("li",null,"Conversions from 1 NF to 2 NF and 2 NF to 3 NF will not result in any loss of functional dependencies. But conversion from 3 NF to BCNF may sometimes result in functional dependency loss.",a.a.createElement("br",null),"Decomposing R to R1 and R2 will be loss-less if :",a.a.createElement("ul",{style:{listStyleType:"none"}},a.a.createElement("li",null,"attr(R1) U attr(R2) = attr(R)"),a.a.createElement("li",null,"attr(R1) \u2229 attr(R2) = \u03a6"),a.a.createElement("li",null,"attr(R1) \u2229 attr(R2) = key of (R1) or attr(R1) \u2229 attr(RR2) = key of (R2)")))),a.a.createElement("b",null,"4 NF"),a.a.createElement("ul",null,a.a.createElement("li",null,"Table should be in BCNF"),a.a.createElement("li",null,"Table should not have multi-valued dependency i.e. if A -",">"," B then for a particular value of A there exists multiple values of B"),a.a.createElement("li",null,"For table to have multi-valued dependency it should have at least 3 columns (A,B,C) and B,C should be independent")),a.a.createElement("b",null,"5 NF (PJNF - Project Join Normal Form)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Table should be in 4 NF"),a.a.createElement("li",null,"Table should not have join dependency i.e. if decomposing a table results in loss of information or creation of new info then don't do it."))))},{id:5,title:"File structure & Indexing",content:a.a.createElement("div",null,a.a.createElement("h1",null,"File structure & Indexing"),a.a.createElement("hr",null),a.a.createElement("p",null,"DB Files are stored in blocks in secondary memory in contiguous or non-contiguous manner."),a.a.createElement("b",null,"Sorted file"),a.a.createElement("ul",null,a.a.createElement("li",null,"Can be sorted only according to one attribute (search key)"),a.a.createElement("li",null,"Searching is fast (binary search)"),a.a.createElement("li",null,"Insertion and deletion will be hard")),a.a.createElement("b",null,"Unsorted file"),a.a.createElement("ul",null,a.a.createElement("li",null,"Random order"),a.a.createElement("li",null,"Searching is slow"),a.a.createElement("li",null,"Insertion and deletion is easy")),a.a.createElement("b",null,"Spanned mapping"),a.a.createElement("ul",null,a.a.createElement("li",null,"Internal fragmentation is avoided"),a.a.createElement("li",null,"If space is left in a block after storing file then next file is stored in this void partially")),a.a.createElement("b",null,"Unspanned mapping"),a.a.createElement("ul",null,a.a.createElement("li",null,"Internal fragmentation possible"),a.a.createElement("li",null,"File is put only if it fits the available space")),a.a.createElement("hr",null),a.a.createElement("h4",null,"Indexing"),a.a.createElement("p",null,"To search a record in db file, first find the block in which the record lies then find the record in that block. To speed up search we maintain a separate index file. Index file is small hence search is faster.",a.a.createElement("br",null),a.a.createElement("b",null,"Index file (search key, block pointer)"),a.a.createElement("br",null),"index file is always sorted (binary search applied)",a.a.createElement("br",null),"Blocking factor = no. of records in a block = floor(block size / record size)"),a.a.createElement("p",null,a.a.createElement("b",null,"Dense indexing :")," index record is present for all records in the main table. Sorted table not required",a.a.createElement("br",null),a.a.createElement("b",null,"Sparse indexing :")," index record is present for selected records of the main table. Sorted table required"),a.a.createElement("div",null,a.a.createElement("b",null,"Types of Indexing"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("b",null,"Single level indexing"),a.a.createElement("ol",null,a.a.createElement("li",null,"Primary indexing",a.a.createElement("ul",null,a.a.createElement("li",null,"Search key is primary key"),a.a.createElement("li",null,"File should be sorted on primary key"),a.a.createElement("li",null,"Sparse indexing"),a.a.createElement("li",null,"No. of index file entries = no. of blocks used by the main file"),a.a.createElement("li",null,"No. of accesses log(n) + 1"))),a.a.createElement("li",null,"Secondary indexing",a.a.createElement("ul",null,a.a.createElement("li",null,"Main file is not sorted"),a.a.createElement("li",null,"Dense indexing"),a.a.createElement("li",null,"Search key can be prime key or non key"),a.a.createElement("li",null,"Different techniques to store block pointers used when search keys are duplicated"),a.a.createElement("li",null,"Access time ceil(log(n)) + 1"))),a.a.createElement("li",null,"Clustered indexing",a.a.createElement("ul",null,a.a.createElement("li",null,"Similar to primary indexing but main file is sorted on non primary key but the attribute to be searched is not primary key"),a.a.createElement("li",null,"There will be one entry in the index for each unique value"),a.a.createElement("li",null,"Access resuired >= log(n) + 1"),a.a.createElement("li",null,"It satisfies condition of both sparse and dense indexing"))))),a.a.createElement("li",null,a.a.createElement("b",null,"Multi-level indexing"),a.a.createElement("p",null,"If index is very large then we again split it to make multiple levels of indexing i.e we make index of index to speed up the search more.")))))},{id:6,title:"Transactions",content:a.a.createElement("div",null,a.a.createElement("h1",null,"Coming soon"))},{id:7,title:"Concurrency control",content:a.a.createElement("div",null,a.a.createElement("h1",null,"Coming soon"))}],y=function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(){var e;Object(c.a)(this,l);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(o.a)(l,[{key:"render",value:function(){return a.a.createElement("div",{className:"row",style:{width:"80%",margin:"0 auto",paddingTop:"15px"}},!this.props.showNav&&a.a.createElement("div",{className:"col-3",style:{borderRight:"1px solid #eee"}},a.a.createElement(h,{notes:p,activeNoteID:this.props.activeNoteID,handleClick:this.props.handleClick})),a.a.createElement("div",{className:"col"},a.a.createElement(b,{note:p[this.props.activeNoteID].content})))}}]),l}(n.Component),f=function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(){var e;Object(c.a)(this,l);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={showResponsiveNav:!1,activeNoteID:0},e.handleClick=function(t){e.setState({activeNoteID:t})},e}return Object(o.a)(l,[{key:"resize",value:function(){var e=window.innerWidth<950;e!==this.state.showNav&&this.setState({showResponsiveNav:e})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(E,{showNav:this.state.showResponsiveNav,notes:p,activeNoteID:this.state.activeNoteID,handleClick:this.handleClick}),a.a.createElement(y,{showNav:this.state.showResponsiveNav,activeNoteID:this.state.activeNoteID,handleClick:this.handleClick}))}}]),l}(n.Component);l(33);i.a.render(a.a.createElement(f,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.19b9560b.chunk.js.map