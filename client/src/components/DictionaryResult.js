// import React from 'react'
// import { Container, Row, Col, Card, Form, Button, Alert, Spinner, ListGroup, Accordion } from "react-bootstrap";


// export default function DictionaryResult() {
//     return (
//         <Alert className="text-left " >
//             < Alert.Heading >Definition: </Alert.Heading>

//             {searchResult[0].shortdef
//                 ? searchResult[0].shortdef.map((def, index) => {
//                     var index = index + 1

//                     return (
//                         <>
//                             <p key={searchResult[0].meta.uuid}>
//                                 {index}: {def}                                                 </p>

//                         </>
//                     )
//                 })

//                 : <p>No results found</p>
//             }
//             {searchResult[1].shortdef &&
//                 <Accordion defaultActiveKey="0" >
//                     <Card style={{ textAlign: "left" }}>
//                         <Card.Header>
//                             <Accordion.Toggle as={Card.Header} eventKey="1">
//                                 More responses
//                                                         </Accordion.Toggle>
//                         </Card.Header>
//                         <Accordion.Collapse eventKey="1">
//                             <Card.Body>
//                                 {/* {searchResult.shift()} */}
//                                 {searchResult[0].shortdef
//                                     ? searchResult.map((definition, index) => {

//                                         var index = index + 1;
//                                         return (
//                                             <>
//                                                 <div key={definition.meta.uuid}>

//                                                     <strong>Definition {index}: ({definition.fl})</strong>
//                                                     <p key={definition.meta.uuid}>
//                                                         {definition.shortdef.join(", ")}
//                                                     </p>
//                                                     <hr />
//                                                 </div>
//                                             </>

//                                         )
//                                     })
//                                     : <p></p>
//                                 }
//                             </Card.Body>
//                         </Accordion.Collapse>
//                     </Card>
//                 </Accordion>
//             }
//             {/* <p>
//                                     {searchResult[0].shortdef.join(" | ")}
//                                 </p> */}



//         </Alert>
//     )
// }
