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
    content: (
      <div>
        <h1>Functional dependencies</h1>
        <hr />
        <div>
          <b>f: a -{">"} b</b>
          <p>
            Given the value of <b>a</b>, we can uniquely determine the value of
            <b> b</b>.
          </p>
          <p>
            <b>Trivial functional dependency : </b>
            <b>b</b> is a subset of
            <b> a</b>.
          </p>
          <p>
            <b>Non-trivial functional dependency : </b>
            <b>b</b> is a NOT a subset of
            <b> a</b>.
          </p>
          <p>
            <b>Attribute closure</b> of an attribute set <b>A</b> can be defined
            as a set of attributes which can be functionally determined from it.
            It is denoted by
            <b>
              {" "}
              F<sup>+</sup>.
            </b>
          </p>
        </div>
        <hr />
        <div>
          <h4>Armstrong axioms</h4>
          <p>
            Axioms are the rules which are considered true and used to derive
            other results.
          </p>
          <b>Primary rules</b>
          <ul>
            <li>
              <b>Reflexivity</b>
              <p>If y is subset of x then x -{">"} y</p>
            </li>
            <li>
              <b>Augmentation</b>
              <p>
                x -{">"} y then xz -{">"} yz
              </p>
            </li>
            <li>
              <b>Transitivity</b>
              <p>
                x -{">"} y and y -{">"} z then x -{">"} z
              </p>
            </li>
          </ul>
          <b>Secondary rules</b>
          <ul>
            <li>
              <b>Union</b>
              <p>
                x -{">"} y and x -{">"} z then x -{">"} yz
              </p>
            </li>
            <li>
              <b>Decomposition</b>
              <p>
                x -{">"} yz then x -{">"} y and x -{">"} z
              </p>
            </li>
            <li>
              <b>Pseudo transitivity</b>
              <p>
                x -{">"} y and wy -{">"} z then xw -{">"} zz
              </p>
            </li>
            <li>
              <b>Composition</b>
              <p>
                x -{">"} y and z -{">"} w then xz -{">"} yw
              </p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Canonical form</h4>
          <p>It is the irreducible set of functional dependencies.</p>
          <b>Steps</b>
          <ol>
            <li>Decompose all dependencies</li>
            <li>
              For all the rules :
              <ol>
                <li>Find closure of the LHS of a rule</li>
                <li>
                  Find closure of the lhs of the same rule ignoring that rule
                  itself
                </li>
                <li>
                  If both closures are same then that rule is redundant so
                  remove it otherwise include it
                </li>
              </ol>
            </li>
            <li>
              For all the rules :
              <ol>
                <li>
                  If LHS is compound then find its closure and closure of each
                  subset of elements in it
                </li>
                <li>
                  If closure of particular element matches the main closure then
                  other elements on LHS are redundant
                </li>
              </ol>
            </li>
          </ol>
          <p>
            Finally the set of rules you have is the canonical form/canonical
            cover/minimal cover/irreducible form.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Normalization",
    content: (
      <div>
        <h1>Normalization</h1>
        <hr />
        <p>
          <b>Normalization</b> is the method to organize data into multiple
          related tables to avoid data redundancy.
        </p>
        <div>
          <b>Redundancy issues</b>
          <br />
          Consider a table student table (roll no, name, branch name, HOD name,
          HOD phone no)
          <ul>
            <li>
              <b>Insertion anomaly</b>
              <p>
                Inserting redundant data (HOD info) for every new entry of a
                student. Also new student record cannot be created if HOD
                information is not available, even though both are logically
                seperate entities.
              </p>
            </li>
            <li>
              <b>Deletion anomaly</b>
              <p>
                This happens when two separate items have the same table and we
                wish to delete entry of one item and other also gets deleted.{" "}
                <br />
                <b>Eg.</b> If student info is deleted then HOD's info also gets
                deleted.
              </p>
            </li>
            <li>
              <b>Updation anomaly</b>
              <p>
                If a value is updated then all its redundant copies needs to be
                updated. <br />
                <b>Eg. </b>If HOD phone no. is updated then for every student
                entry we need to update it.
              </p>
            </li>
          </ul>
        </div>
        <hr />
        <h4>Normalization forms</h4>
        <div>
          <b>1 NF</b>
          <ul>
            <li>
              Each column should contain atomic values (i.e each column has a
              single value)
            </li>
            <li>A column should contain value of the same type</li>
            <li>Each column should have a unique name</li>
            <li>Order in which data is stored in table doesn't matter</li>
          </ul>
          <b>2 NF</b>
          <ul>
            <li>Table should be in 1 NF</li>
            <li>
              Table should not have any <b>partial dependencies</b> (partial
              prime attr. -{">"} non prime attr.) i.e. if primary key of the
              table is composition of more tham 1 columns and a particular
              column of the table only depends on a subset of the primary key
              columns and has nothing to do with other columns of the primary
              key
            </li>
            <li>
              While decomposing a table, we always make a seperate table for
              candidate keys otherwise it will be a lossy decomposition.
            </li>
          </ul>
          <b>3 NF</b>
          <ul>
            <li>Table should be in 2 NF</li>
            <li>
              Table should not have <b>transitive dependency</b> (non prime
              attr. -{">"} non prime attr.) i.e. when there is an attribute in a
              table which depends upon non-prime attribute which inturn depends
              on the prime attributes
            </li>
          </ul>
          <b>BCNF (Boyce Codd Normal Form - 3.5 NF)</b>
          <ul>
            <li>Table should be in 3 NF</li>
            <li>
              For any dependency A -{">"} B, A should be super key i.e no
              dependencty of type (non prime attr -{">"} prime attr)
            </li>
            <li>
              Conversions from 1 NF to 2 NF and 2 NF to 3 NF will not result in
              any loss of functional dependencies. But conversion from 3 NF to
              BCNF may sometimes result in functional dependency loss.
              <br />
              Decomposing R to R1 and R2 will be loss-less if :
              <ul style={{ listStyleType: "none" }}>
                <li>attr(R1) U attr(R2) = attr(R)</li>
                <li>attr(R1) &#x2229; attr(R2) = &#934;</li>
                <li>
                  attr(R1) &#x2229; attr(R2) = key of (R1) or attr(R1) &#x2229;
                  attr(RR2) = key of (R2)
                </li>
              </ul>
            </li>
          </ul>
          <b>4 NF</b>
          <ul>
            <li>Table should be in BCNF</li>
            <li>
              Table should not have multi-valued dependency i.e. if A -{">"} B
              then for a particular value of A there exists multiple values of B
            </li>
            <li>
              For table to have multi-valued dependency it should have at least
              3 columns (A,B,C) and B,C should be independent
            </li>
          </ul>
          <b>5 NF (PJNF - Project Join Normal Form)</b>
          <ul>
            <li>Table should be in 4 NF</li>
            <li>
              Table should not have join dependency i.e. if decomposing a table
              results in loss of information or creation of new info then don't
              do it.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "File structure & Indexing",
    content: (
      <div>
        <h1>File structure & Indexing</h1>
        <hr />
        <p>
          DB Files are stored in blocks in secondary memory in contiguous or
          non-contiguous manner.
        </p>
        <b>Sorted file</b>
        <ul>
          <li>Can be sorted only according to one attribute (search key)</li>
          <li>Searching is fast (binary search)</li>
          <li>Insertion and deletion will be hard</li>
        </ul>
        <b>Unsorted file</b>
        <ul>
          <li>Random order</li>
          <li>Searching is slow</li>
          <li>Insertion and deletion is easy</li>
        </ul>
        <b>Spanned mapping</b>
        <ul>
          <li>Internal fragmentation is avoided</li>
          <li>
            If space is left in a block after storing file then next file is
            stored in this void partially
          </li>
        </ul>
        <b>Unspanned mapping</b>
        <ul>
          <li>Internal fragmentation possible</li>
          <li>File is put only if it fits the available space</li>
        </ul>
        <hr />
        <h4>Indexing</h4>
        <p>
          To search a record in db file, first find the block in which the
          record lies then find the record in that block. To speed up search we
          maintain a separate index file. Index file is small hence search is
          faster.
          <br />
          <b>Index file (search key, block pointer)</b>
          <br />
          index file is always sorted (binary search applied)
          <br />
          Blocking factor = no. of records in a block = floor(block size /
          record size)
        </p>
        <p>
          <b>Dense indexing :</b> index record is present for all records in the
          main table. Sorted table not required
          <br />
          <b>Sparse indexing :</b> index record is present for selected records
          of the main table. Sorted table required
        </p>
        <div>
          <b>Types of Indexing</b>
          <ol>
            <li>
              <b>Single level indexing</b>
              <ol>
                <li>
                  Primary indexing
                  <ul>
                    <li>Search key is primary key</li>
                    <li>File should be sorted on primary key</li>
                    <li>Sparse indexing</li>
                    <li>
                      No. of index file entries = no. of blocks used by the main
                      file
                    </li>
                    <li>No. of accesses log(n) + 1</li>
                  </ul>
                </li>
                <li>
                  Secondary indexing
                  <ul>
                    <li>Main file is not sorted</li>
                    <li>Dense indexing</li>
                    <li>Search key can be prime key or non key</li>
                    <li>
                      Different techniques to store block pointers used when
                      search keys are duplicated
                    </li>
                    <li>Access time ceil(log(n)) + 1</li>
                  </ul>
                </li>
                <li>
                  Clustered indexing
                  <ul>
                    <li>
                      Similar to primary indexing but main file is sorted on non
                      primary key but the attribute to be searched is not
                      primary key
                    </li>
                    <li>
                      There will be one entry in the index for each unique value
                    </li>
                    <li>Access resuired >= log(n) + 1</li>
                    <li>
                      It satisfies condition of both sparse and dense indexing
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <b>Multi-level indexing</b>
              <p>
                If index is very large then we again split it to make multiple
                levels of indexing i.e we make index of index to speed up the
                search more.
              </p>
            </li>
          </ol>
        </div>
      </div>
    ),
  },
];
