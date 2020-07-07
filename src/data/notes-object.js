import React from "react";

export const notes = [
  {
    id: 0,
    title: "Introduction",
    content: (
      <div>
        <h1>Introduction</h1>
        <hr />
        <p>
          <b>Database</b> is a collection of related data.
        </p>
        <p>
          <b>DBMS (Database Management System) </b>
          is the software used to create/manipulate/manage/update/delete
          database
        </p>
        <p>
          <b>Data</b> includes all the raw facts and figures
        </p>
        <p>
          <b>Information</b> is the processed data
        </p>

        <p>
          Data and information are subjective and the seperation depends on who
          uses it and the situation.
          <br /> <b>Eg.</b> A grocery list may be an information to the
          customer, but it may just be a data to a market analyst.
        </p>
        <hr />
        <h3>Why was DBMS developed?</h3>
        <h6>Disadvantages of traditional file-system</h6>
        <ul>
          <li>Data redundancy</li>
          <li>Data inconsistency</li>
          <li>Access difficulty</li>
          <li>Data isolation</li>
          <li>Security problem</li>
          <li>Atomicity problem</li>
          <li>Concurrent access problem</li>
          <li>Integrity issues</li>
        </ul>
        <hr />
        <h3>Online Data Processing Systems</h3>
        <h6>OLAP (Online Analytical Processing)</h6>
        <ul>
          <li>Consists of historical data</li>
          <li>Subject oriented</li>
          <li>Used for decision making</li>
          <li>Larger in size (TB, PB)</li>
          <li>Only Read operations</li>
        </ul>
        <h6>OLTP (Online Transaction Processing)</h6>
        <ul>
          <li>Consists of current data</li>
          <li>Application oriented</li>
          <li>Used for day to day operations</li>
          <li>Smaller in size (MB, GB)</li>
          <li>Both read and write operations</li>
        </ul>
      </div>
    ),
  },
  {
    id: 1,
    title: "ER diagram",
    content: (
      <div>
        <h1>ER diagram</h1>
        <hr />
        <h4>Entity Relationship Diagram</h4>
        High level diagram giving a conceptual understanding of the relational
        model (entities and their relationship)
        <br />
        Introduced by Peter Chen
        <hr />
        <h4>Entity</h4>
        <b>Entity </b>
        is a real world thing or object, distinguishable from others based on
        its attributes. <br />
        Types :
        <ol>
          <li>
            Tangible : physically exist. <b>Eg.</b> bank locker, car
          </li>
          <li>
            Intangible : exists logically. <b>Eg.</b> bank account
          </li>
        </ol>
        <hr />
        <h4>Attribute</h4>
        <b>Attributes </b>are entity's characteristics. Represented with oval
        (column)
        <br />
        Attribute types:
        <ol>
          <li>Simple : cannot be decomposed</li>
          <li>
            Composite : can be decomposed <b>Eg.</b> name = first name + last
            name
          </li>
          <li>Single-valued</li>
          <li>
            Multi-valued (double oval) (we have to make separate table for it){" "}
            <b>Eg.</b> phone no.
          </li>
          <li>Stored </li>
          <li>
            Derived (dotted oval) <b>Eg.</b> age can be derived from DOB
          </li>
        </ol>
        <hr />
        <h4>Relationship</h4>
        <b>Relationship</b> is represented by a diamond
        <br />A relationship has
        <ol>
          <li>Name</li>
          <li>
            Degree (no. of entites participating in the relation) (like unary,
            binary, ternary, ..., n-ary)
          </li>
          <li>
            Cardinality ratio / participation constraints (like one to one, one
            to many) (for binary relations)
          </li>
        </ol>
        <b>Cardinality ratio</b> express the number of entities to which an
        entity can be related. <br />
        It can be 1 : 1, 1 : n, n : 1 or n : n
        <br />
        <br />
        <b>Participation constraints </b>specifies the maximum and minimum no.
        of relationship an entity can/must participate in max cardinality and
        min cardinality. <b>Eg.</b> 1 project can have min 3 employees and 1
        project can have max 15 employees (min, max) = (3, 15)
        <br />
        partial participation - min cardinality = 0 (single line)
        <br /> total participation - min cardinality {">"}= 1 (double line)
        <hr />
        <h4>Entity set</h4>
        <b>Entity set </b>is the set of similar type of entities. Represented by
        a rectangle in ER diagram (tables)
        <br />
        ER diagram represents entity set (student) and not the entity (Sam)
        <br />
        <br />
        <b>Weak entity set </b>(double rectangle) is an entity that cannot be
        uniquely identified by its attributes alone. The entity sets which do
        not have sufficient attributes to form a primary key are known as weak
        entity sets.
        <br />
        <br />
        <b>Strong entity set </b>(simple rectangle) the entity sets which have a
        primary key are known as strong entity sets.
        <br />
        The relation between one strong and one weak entity is represented by
        double diamond. Weak entities always have total participation but strong
        entities may not have total participation.
      </div>
    ),
  },
  {
    id: 2,
    title: "Keys",
    content: (
      <div>
        <h1>Keys</h1>
        <hr />
        <p>
          <b>Keys</b> are the attribute or set of attributes which can uniquely
          identify a record.
        </p>
        <div>
          <b>Types of keys</b>
          <ul>
            <li>
              <b>Super key :</b> set of all possible keys
            </li>
            <li>
              <b>Candidate key :</b> minimal subset of superkey which can
              uniquely identify a record, i.e given a super key then no proper
              subset of the super key should uniquely identify a record, then
              that superkey is a candidate key
            </li>
            <li>
              <b>Primary key :</b> the candidate key chosen to uniquely identify
              a record
            </li>
            <li>
              <b>foriegn key :</b> an attribute in table which is used to define
              its relationship with another table
            </li>
            <li>
              <b>Composite key :</b> key with more than one attribute (if one
              attribute of composite key is foriegn key then it is called as{" "}
              <b>compound key</b>)
            </li>
            <li>
              <b>Alternate key :</b> candidate keys - primary key
            </li>
            <li>
              <b>Surrogate key :</b> if no attribute or its combination can
              uniquely identify a record then we introduce a new attribute
              called surrogate key only for the identification purpose
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Functional dependencies",
    content:
      "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaedoloremque delectus harum consectetur blanditiis iste dignissimos eligendi sequi esse sit illo quaerat aut maxime, laborum soluta tempore exercitationem magni dolorem!",
  },
  {
    id: 4,
    title: "Title 4",
    content:
      "4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaedoloremque delectus harum consectetur blanditiis iste dignissimos eligendi sequi esse sit illo quaerat aut maxime, laborum soluta tempore exercitationem magni dolorem!",
  },
];
