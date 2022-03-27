---
hide:
    - navigation

---

# REST(ful) Web Services

[:octicons-arrow-left-24: Return to Platform Development](/Knowledge-Notebook/Platform-Development/)

---

*Representational State Transfer* (REST) architectural pattern views web services as resources identified by unique URI on stateless servers. REST web services rely on existing HTTP methods to read and update resources, as well as possibly create and delete resources if allowed by the web server. Headers are used to communicate information like; metadata, authorizations, uniform resource identifiers, caching, cookies, HTTP Status Codes, timestamps, etc. 

## Design Principles (architectural constraints)

1. **Uniform interface** - All requests to a requested uniform resource identifier (URI) should return the same result (given the state of the resource hasn't changed) no matter where the request originated. 
2. **Client-server decoupling** - Client and server applications should be completely independent of each other. Client should only know the URI of the requested resource. Server should only pass data back via HTTP
3. **Statelessness** - each request must include all information necessary to complete it. Servers don't store any data related to a request
4. **Cacheability** - Resources should be cached when possible. Servers responses should indicate whether caching is allowed for a resource. 
5. **Layered system architecture** - Clients and servers may not connect directly. The client, nor server should be able to tell if it is connected directly or through an intermediary. 
6. **Code on demand (optional)** - If and when responses contain executable code, it should only run on-demand

## Operations

| RESTful Operation | HTTP Method | Notes |
| --- | --- | --- |
| Read resource | GET | Retrieve whatever information (in the form of an entity) is identified by the Request-URI.(4) Causes no side-effects |
| Create resource | POST | Accept the entity enclosed in the request as a new subordinate of the resource identified by the Request-URI. (4) |
| Update resource | PUT (or POST) | Requests that the enclosed entity be stored under the supplied Request-URI. (4) |
| Delete resource | DELETE (or POST) |  |

> "The fundamental difference between the POST and PUT requests is reflected in the different meaning of the Request-URI. The URI in a POST request identifies the resource that will handle the enclosed entity. That resource might be a data-accepting process, a gateway to some other protocol, or a separate entity that accepts annotations. In contrast, the URI in a PUT request identifies the entity enclosed with the request -- the user agent knows what URI is intended and the server MUST NOT attempt to apply the request to some other resource. If the server desires that the request be applied to a different URI,it MUST send a 301 (Moved Permanently) response; the user agent MAY then make its own decision regarding whether or not to redirect the request." (RFC 2616, pp. 55-56)

## Request

Accessing a resource is based on a URL pattern given in a HTTP request. URL patterns are typically organised into a tree structure with leaves representing the elements, with higher levels representing parent resource collections. Servers avoid session tracking between requests so are essentially stateless with state being pushed to server-side databases. 

## Response

Content is encoded using a MIME format, e.g. `text/plain`, `text/xml`, `application/json`. 

## OpenAPI

*TODO: Learn* [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md)

## Java EE Implementation

A servlet could be implemented with its `doGet`, `doPost`, `doPut` and `doDelete` methods utilising JAXB or JAX-WS.

However, the Java API for RESTful Services (JAX-RS, JSR-311) is more suitable. Using the `javax.ws.rs`, `javax.ws.rs.core` and `javax.ws.rs.ext` packages. 

### Annotations

- `@Path` - used to identify a URL pattern for a *resource class*
- `@Consumes` - used with `@Path` to indicate the MIME types that the method can accept in the request
- `@Produces` - used with `@Path` to indicate the MIME types that the method can produce in the response
- `@GET` - used to indicate the resource class method handles the HTTP GET method
- `@POST` - used to indicate the resource class method handles the HTTP POST method
- `@PUT` - used to indicate the resource class method handles the HTTP PUT method
- `@DELETE` - used to indicate the resource class method handles the HTTP DELETE method
- `@PathParam` - used to name path fragment so they can be extracted for use in a resource class method
- `@Query-Param` - used to extract request parameters with a `MultiValuedMap`
- `@Consumes(MediaType.APPLICATION_FORM_URLENCODED)` - used to extract request parameters with a `MultiValuedMap`
- `@Provider` - used by classes which implements `MessageBodyReader` or `MessageBodyWriter` to customize the de-serialization/ serialization of Java types in the request/ response respectively

### BTS

A Servlet called `ServletContainer` handles HTTP requests and forwards them to the correct resource class depending on the URL pattern.

## Further Reading

- OAuth 2.0
- [JSON](JSON.md)
- JSON Web Tokens
- HTTP

## Resources/ Bib

!!! cite ""

    1. Distributed and Mobile Systems, Andrew Ensor
    2. [IBM Learn REST APIs](https://www.ibm.com/in-en/cloud/learn/rest-apis)
    3. [IBM | Introduction to RESTful Web services](https://developer.ibm.com/articles/ws-restful/)
    4. [RFC 2616](https://datatracker.ietf.org/doc/html/rfc2616/)
    
