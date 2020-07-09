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
              <b>Foreign key :</b> an attribute in table which is used to define
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
        <h1>File structure {"&"} Indexing</h1>
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
                    <li>Access resuired {">"}= log(n) + 1</li>
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
  {
    id: 6,
    title: "Transactions",
    content: (
      <div>
        <h1>Transactions</h1>
        <hr />
        <p>
          <b>Transaction </b>is a set of instruction which performs a logical
          unit of work. They are atomic in nature, i.e if failure occur in the
          mid then it needs to rollback again to the start.
        </p>
        <hr />
        <div>
          <h4>Transaction ACID properties</h4>
          <ol>
            <li>
              <b>Atomicity</b>
              <ul>
                <li>
                  Either all instructions of a transaction will run or none
                </li>
                <li>
                  Transaction management component ensures atomicity in DBMS
                </li>
              </ul>
            </li>
            <li>
              <b>Consistency</b>
              <ul>
                <li>
                  If DB is consistent before transaction then it should remain
                  consistent after transaction
                </li>
                <li>
                  <b>Eg.</b> in case of account money transfer, total sum before
                  and after the transfer should be same
                </li>
                <li>
                  No separate component takes care of consistency, it is
                  automatically achieved if transaction is atomic, durable and
                  isolated
                </li>
              </ul>
            </li>
            <li>
              <b>Isolation</b>
              <ul>
                <li>
                  Transaction should be logically isolated i.e. transaction
                  should not be affected by other transaction running
                  concurrently
                </li>
                <li>
                  Transaction should produce same result as if it is running
                  alone in the absence of other transactions
                </li>
                <li>Concurrency control component ensures isolation in DBMS</li>
              </ul>
            </li>
            <li>
              <b>Durability</b>
              <ul>
                <li>
                  Changes made by a successful transaction should be persistent
                  in the system
                </li>
                <li>Recovery management component ensures durability</li>
              </ul>
            </li>
          </ol>
        </div>
        <hr />
        <div>
          <h4>Transaction states</h4>
          <ol>
            <li>Active (executing stage)</li>
            <li>Partially committed (result stored in local buffer)</li>
            <li>Committed (result copied to main store)</li>
            <li>
              Terminated (final state) (system ready for next transaction)
            </li>
            <li>Failed (some error occured and we then roll back)</li>
            <li>Aborted (reached from failed state after roll back)</li>
          </ol>
          <p>
            Committed transactions cannot be rollbacked. We can run a new
            transaction (compensating transaction) which undos the changed
            value.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Concurrency control",
    content: (
      <div>
        <h1>Concurrency control</h1>
        <hr />
        <div>
          <b>Advantages of concurrency</b>
          <ul>
            <li>Less wait time</li>
            <li>Less response time</li>
            <li>More resource utilization</li>
            <li>More efficiency</li>
          </ul>
          <p>
            Concurrency does not mean two instructions are running parallely.
            Transaction intructions are just interleaved.
          </p>
          <b>Disadvantages of concurrency</b>
          <ul>
            <li>
              <b>Dirty read problem</b>
              <ul>
                <li>
                  When a transaction reads an intermediate uncommitted value by
                  some other transaction and treats it as a true value and
                  commits to the main DB
                </li>
                <li>
                  <b>Sol :</b> the reading transaction commits after the other
                  transaction writing its value has committed
                </li>
              </ul>
            </li>
            <li>
              <b>Unrepeatable read problem</b>
              <ul>
                <li>
                  When a transaction reads a variable twice consecutively and
                  gets different value each time because some other transaction
                  has modified it in the time between.
                </li>
              </ul>
            </li>
            <li>
              <b>Phantom read problem</b>
              <ul>
                <li>
                  A transaction reads a variable, then another transaction
                  deletes that variable and then again first transaction reads
                  that variable and finds that the variable doesn't exist
                </li>
              </ul>
            </li>
            <li>
              <b>Lost update problem (write-write conflict)</b>
              <ul>
                <li>
                  A transaction reads and writes a variable then another
                  transaction performs blind write (write without reading
                  before) on that variable then commits, after that first
                  transaction commits. So here changes made by the first
                  transaction is lost.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Types of schedule</h4>
          <ul>
            <li>
              <b>Serial schedule</b>
              <ul>
                <li>Transaction instructions are not interleaved</li>
                <li>No context switching</li>
              </ul>
            </li>
            <li>
              <b>Non-serial schedule</b>
              <ul>
                <li>Transaction instructions are interleaved</li>
                <li>Context switching happens</li>
              </ul>
            </li>
            <li>
              <b>Conflict serializable</b>
              <ul>
                <li>
                  If we can make a non-serial schedule, serial by swapping
                  instructions then that non-serial schedule is conflict
                  serializable and is consistent. But if we cannot swap and make
                  it serial then we cannot definitely say that it is
                  inconsistent
                </li>
                <li>
                  If we can swap instruction then they are non-conflicting
                </li>
                <li>
                  When are instructions conflicting :
                  <ol>
                    <li>Instructions should be of different transactions</li>
                    <li>
                      If instruction are on different data items then they are
                      non-conflicting
                    </li>
                    <li>RR on same data is non-conflicting</li>
                    <li>WR on same data are conflicting</li>
                    <li>WR on same data are conflicting</li>
                    <li>WW on same data are conflicting</li>
                  </ol>
                </li>
                <li>
                  How to check for conflict serializability :
                  <ul>
                    <li>
                      Draw graph
                      <br />
                      T1 -{">"} T2 (transaction T1 must happen before T2)
                    </li>
                    <li>
                      If cycle present then it is not conflict serializable O(n
                      <sup>2</sup>)
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>View serializability</b>
              <ul>
                <li>Weaker form of consistency than conflict serializable</li>
                <li>If schedule is CS then it will surely be VS</li>
                <li>
                  If a schedule is VS then we cannot say that it is surely CS
                </li>
                <li>
                  If a schedule is not CS then for it to be VS it has to have at
                  least 1 blind write
                </li>
                <li>
                  To check for VS we have to check view equivalency of all
                  permutations of transaction in a serial schedule with the
                  given schedule
                  <ul>
                    <li>
                      All initial reads on data item should be done by same
                      transaction
                    </li>
                    <li>
                      All final writes on data should be done by same
                      transaction
                    </li>
                    <li>
                      For all intermediate reads, the transaction should read
                      the value written by same transaction in both the
                      schedules
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Recoverable schedule</b>
              <ul>
                <li>
                  Even if schedule is consistent a failure can make it
                  inconsistent
                </li>
                <li>If dirty read is absent then it is recoverable</li>
                <li>
                  If dirty read present then the transaction doing the dirty
                  read commits last then also its recoverable otherwise non
                  recoverable
                </li>
                <p>
                  <b>Cascading rollback :</b> when one transaction rollbacks and
                  on seeing this, another dependent transaction starts to roll
                  back and so on ...
                </p>
              </ul>
            </li>
            <li>
              <b>Cascadeless schedule</b>
              <ul>
                <li>
                  Transaction instantly commits before a dependent transaction
                  performs a dirty read, hence dirty read is prevented and it
                  becomes cascadeless
                </li>
                <li>This is more restrictive form of recoverable schedule</li>
                <li>
                  If transaction is cascadeless then it is surely recoverable
                  but vice versa is not always true
                </li>
              </ul>
            </li>
            <li>
              <b>Strict schedule</b>
              <ul>
                <li>
                  If a transaction is performing write operation on a data item,
                  then no other transaction can read or wire same data until
                  first transaction has committed
                </li>
                <li>It is most restrictive</li>
              </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Concurrency control techniques</h4>
          <div>
            <ul>
              <li>
                <b>Time stamping protocols</b>
                <div>
                  <ul>
                    <li>
                      Timestamp of a transaction : each transaction is stamped
                      with time which is unique to resolve conflict in case of
                      concurrency issues.
                    </li>
                    <li>
                      Timestamp TS(T<sub>i</sub>) of transaction i will be the
                      value of the system clock when T<sub>i</sub> entered into
                      the system
                    </li>
                    <li>
                      If TS(T<sub>i</sub>) {"<"} TS(T<sub>j</sub>) then it is
                      ensured that Ti runs before Tj Timestamp of data item
                    </li>
                    <li>
                      Each data item q maintains two timestamp (read and write)
                    </li>
                    <li>
                      R-timestamp(q) : largest timestamp of any transaction that
                      executed read operation successfully
                    </li>
                    <li>
                      W-timestamp(q) : largest timestamp of any transaction that
                      executed write operation successfully
                    </li>
                    <li>
                      T<sub>i</sub> requests for read(q)
                    </li>
                    <ul>
                      <li>
                        If TS(T<sub>i</sub>) {"<"} W.T.S(q) : Ti is rollbacked
                      </li>
                      <li>
                        If TS(T<sub>i</sub>) {">"}= W.T.S(q) : T<sub>i</sub> is
                        allowed and R.T.S(q) will be max(R.T.S(q), TS(T
                        <sub>i</sub>))
                      </li>
                    </ul>
                    <li>Ti requests for write(q)</li>
                    <ul>
                      <li>
                        If TS(Ti) {"<"} R.T.S(q) : T<sub>i</sub> is rollbacked
                      </li>
                      <li>
                        If TS(Ti) {"<"} W.T.S(q) : T<sub>i</sub> is rollbacked
                      </li>
                      <li>
                        Else all condition T<sub>i</sub> is allowed and W.T.S(q)
                        will be max(W.T.S(q), TS(T<sub>i</sub>))
                      </li>
                    </ul>
                    <li>It ensures conflict serializability</li>
                    <li>It ensures view serializability (obviously)</li>
                    <li>
                      Possibility of dirty read, no restrictions on commit,
                      irrecoverable schedules and cascading rollbacks are
                      possible
                    </li>
                    <li>
                      No possibility of deadlock (because we only allow or
                      reject , no wait)
                    </li>
                    <li>Slow</li>
                    <li>May suffer from from timestamp</li>
                    <li>
                      Schedule generated by timestamp protocol is subset of
                      conflict serializable schedule
                    </li>
                    <li>
                      <b>Thomas write rule : </b>modify timestamp protocol to
                      make some improvements and may generate those schedule
                      that are VS but not CS and provides better concurrency
                    </li>
                    <li>
                      It modifies timestamp protocol in obsolete write case when
                      T<sub>i</sub> request write(q) if TS(T<sub>i</sub>){"<"}
                      W.T.S(q)
                    </li>
                    <li>
                      Here T<sub>i</sub> attempts to write an obsolete value of
                      q. Rather than rolling back T<sub>i</sub>, the write
                      operation is just ignored.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <b>Lock based protocols</b>
                <div>
                  <ul>
                    <li>
                      Locking is done to achieve isolation and consistency
                    </li>
                    <li>
                      lock -{">"} perform operation -{">"} unlock
                    </li>
                    <li>modes of locks</li>
                    <ol>
                      <li>
                        <b>Shared mode Lock-S(x) : </b>transaction can perform
                        read operation. Any other transaction can also acquire
                        the same lock on the same data item at the same time
                      </li>
                      <li>
                        <b>Exclusive mode Lock-X(x) : </b>transaction can
                        perform both read and write operations. Any other cannot
                        acquire read/exclusive lock at the same time
                      </li>
                    </ol>
                    <li>
                      If unlocking is not properly managed then inconsistency
                      issues are possible. Hence we follow certain locking
                      protocols
                    </li>
                    <ul>
                      <li>
                        <b>2 phase locking</b> (basic, conservative, strict,
                        rigorous)
                      </li>
                      <ul>
                        <li>transaction can have only 2 phases</li>
                        <ol>
                          <li>
                            Growing phase : transaction can only acquire lock
                            and cannot release it
                          </li>
                          <li>
                            Shrinking phase : transaction can only release lock
                            and cannot acquire
                          </li>
                        </ol>
                        <li>W/R operation can be performed in both phases</li>
                        <li>
                          Ensures CS, the order of serializability is the order
                          in which transaction reaches the lock point (when
                          phase 1 ends and 2 begins)
                        </li>
                        <li>
                          May generate irrecoverable schedule and cascading
                          rollbacks
                        </li>
                        <li>May cause deadlock (waiting for locks)</li>
                        <ul>
                          <li>
                            <b>Conservative 2PL</b>
                          </li>
                          <ul>
                            <li>
                              All locks are required for data items required at
                              the start (lock point is the start point)
                            </li>
                            <li>
                              If lock is not available then it will release
                              acquired locks and wait and then start again later
                            </li>
                            <li>Free from deadlock</li>
                            <li>
                              Prior knowledge of what data item to be used
                              required
                            </li>
                            <li>
                              Possibility of irrecoverable schedule and
                              cascading rollbacks (dirty read, commit issues)
                            </li>
                          </ul>
                          <li>
                            <b>Rigorous 2PL</b>
                          </li>
                          <ul>
                            <li>
                              Improvement to provide recoverable and cascadeless
                              schedule (no dirty read, commit issues)
                            </li>
                            <li>
                              All locks must be held till the end of transaction
                            </li>
                            <li>Only in the end all locks are released</li>
                            <li>Lock point is the end of transaction</li>
                            <li>
                              Deadlock possible and inefficient because lock is
                              held throughout strict 2PL
                            </li>
                          </ul>
                          <li>
                            <b>Strict 2PL</b>
                          </li>
                          <ul>
                            <li>Improved version of rigorous 2PL</li>
                            <li>
                              In shrinking phase unlocking of exclusive locks
                              are not allowed but shared locks are allowed
                            </li>
                            <li>
                              All properties of rigorous 2PL + concurrency is
                              improved
                            </li>
                          </ul>
                        </ul>
                      </ul>
                      <li>
                        <b>Graph based</b>
                      </li>
                      <ul>
                        <li>
                          Info. about the order in which db items will be
                          accessed is required
                        </li>
                        <li>
                          Partial ordering is imposed d<sub>i</sub>-{">"}d
                          <sub>j</sub> (d<sub>i</sub> is accessed before d
                          <sub>j</sub>)
                        </li>
                        <li>
                          Set of all data items will be viewed as a DAG (aka db
                          graph)
                        </li>
                        <li>Will only use exclusive mode locks</li>
                        <li>Only considered rooted trees</li>
                        <ul>
                          <li>
                            <b>Tree protocol</b>
                            <ul>
                              <li>
                                A transaction T<sub>i</sub> may initially lock
                                any data item
                              </li>
                              <li>
                                Subsequently a data item q can be locked only if
                                q's parent is locked by Ti
                              </li>
                              <li>Data item may be unlocked any time</li>
                              <li>
                                Data item locked and then unlocked by Ti cannot
                                be relocked by Ti
                              </li>
                              <li>
                                All schedules under this protocol are CS and VS
                              </li>
                              <li>
                                Deadlock not possible but starvation possible
                              </li>
                              <li>
                                Do not ensures recoverable and cascadeless-ness
                                (it can be ensured by not unlocking before
                                commit)
                              </li>
                              <li>
                                Transaction may lock data item which it doesn't
                                require
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </ul>
                    </ul>
                  </ul>
                </div>
              </li>
              <li>Validation protocol</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Deadlocks",
    content: (
      <div>
        <h1>Deadlocks</h1>
        <hr />
        <p>Look OS Notes for intro</p>
        <hr />
        <h4>Dealing with deadlock problem</h4>
        <ul>
          <li>
            <b>deadlock prevention</b>
          </li>
          <ul>
            <li>To prevent hold and wait : use conservative-2PL</li>
            <li>To prevent cyclic wait : use tree protocol</li>
            <li>Wait and die approach (non preemptive)</li>
            <ul>
              <li>
                T<sub>j</sub> has lock on Q. T<sub>i</sub> wants to acquire lock
                on Q
              </li>
              <li>
                If TS(T<sub>i</sub>) {"<"} TS(T<sub>j</sub>) -{">"} Ti must wait
              </li>
              <li>
                If TS(T<sub>i</sub>) {">"} TS(T<sub>j</sub>) -{">"} T
                <sub>i</sub> is rollbacked (die)
              </li>
              <li>
                On rollback it retains its original time stamp otherwise it is
                possible that it may never get a chance
              </li>
            </ul>
            <li>Wound wait (preemptive)</li>
            <ul>
              <li>Tj has lock on Q. Ti wants to acquire lock on Q</li>
              <li>
                If TS(T<sub>i</sub>) {">"} TS(T<sub>j</sub>) -{">"} T
                <sub>i</sub> must wait
              </li>
              <li>
                If TS(T<sub>i</sub>) {"<"} TS(T<sub>j</sub>) -{">"} T
                <sub>j</sub> is rollbacked
              </li>
            </ul>
            <li>Lock timeouts</li>
            <ul>
              <li>Threshold time is set for a transaction to acquire lock</li>
              <li>
                If lock is not obtained within time, then it is rollbacked
              </li>
            </ul>
          </ul>
          <li>
            <b>Detection and recovery</b>
          </li>
        </ul>
        <hr />
        <p>
          <sup>*</sup>OS Notes cover deadlock in more detail
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "SQL",
    content: <h1>Coming soon</h1>,
  },
];
