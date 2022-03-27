---
hide:
    - navigation

---

# Apache Kafka

Distributed *event streaming platform* that lets you read, write, store, and process events across many machines

[:octicons-arrow-left-24: Return to Parallel and Distributed Computing](/Knowledge-Notebook/Parallel-Distributed/)

---

## Overview

**Event** (or record or message)
- Read or write data
- Headers: key, value, timestamp, optional metadata

**Producers**

- Publish events
- Decoupled and agnostic of consumers

**Consumers**

- Subscribe (read and process) to events
- Decoupled and agnostic of producers

**Topics**

- organised and durably storage for events
- multi-producer and multi-subscriber
- Events in a topic can be read as often as needed
- per-topic configure retainment period of events
- **partitioned**
    - spread over a number of &quot;buckets&quot; located on different Kafka brokers
    - distributed placement of your data is very important for scalability
    - client applications can both read and write the data from/to many brokers at the same time
    - ordered as they were written
    - each message within a partition gets an incremental id, called an offset
- Events are appended to one of the topic&#39;s partitions
- Events with the same event key are written to the same partition
- Can be **replicated** even across geo-regions or datacenters
    - multiple brokers have a copy of data
    - Commonly replication factor of 3


> More detail [Apache Kafka Design Section](https://kafka.apache.org/documentation/#design)


![](../../assets/streams-and-tables-p1_p4.png)

**Server**

- cluster of one or more servers
- Some form the storage layer, called the **brokers**
- Other servers run [Kafka Connect](https://kafka.apache.org/documentation/#connect) to continuously import and export data as event streams

**Client**

- write distributed applications and microservices that read, write, and process streams of events in parallel
- clients are available for Java and Scala
- higher-level [Kafka Streams](https://kafka.apache.org/documentation/streams/) library, for Go, Python, C/C++, REST APIs, etc.
- Communicate via a high-performance [TCP network protocol](https://kafka.apache.org/protocol.html)

## [Getting Started](https://kafka.apache.org/documentation/#quickstart)
[Download](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.1.0/kafka_2.13-3.1.0.tgz)

```bash
tar -xzf kafka_2.13-3.1.0.tgz
cd kafka_2.13-3.1.0
```

```bash
bin/zookeeper-server-start.sh config/zookeeper.properties
```

New Terminal

```bash
bin/kafka-server-start.sh config/server.properties
```

## APIs

- For Java and Scala

## Admin API

- manage and inspect topics, brokers, and other Kafka objects

## Producer API

- publish (write) a stream of events to one or more Kafka topics

> [Overview (kafka 3.1.0 API)](https://kafka.apache.org/31/javadoc/index.html?org/apache/kafka/clients/producer/KafkaProducer.html)

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>3.1.0</version>
</dependency>
```

## Consumer API

- subscribe to (read) one or more topics and to process the stream of events produced to them

> [Overview (kafka 3.1.0 API)](https://kafka.apache.org/31/javadoc/index.html?org/apache/kafka/clients/consumer/KafkaConsumer.html)

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>3.1.0</version>
</dependency>
```

## Kafka Connect

- build and run reusable data import/export connectors

- consume (read) or produce (write) streams of events from and to external systems and applications

- hundreds of ready-to-use connectors


## Kafka Streams

- Stream: unbounded, continuous, real-time flow of records
- implement stream processing applications and microservices
- higher-level functions to process event streams
- transformations
- stateful operations like aggregations and joins
- windowing
- processing based on event-time
- Input is read from one or more topics in order to generate output to one or more topics
- transforms and enriches data
- stateless processing:

- stateful processing:
- no separate processing cluster required

> [Apache Kafka Streams](https://kafka.apache.org/31/documentation/streams)

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-streams</artifactId>
    <version>3.1.0</version>
</dependency>
```

>  Scala: [Apache Kafka](https://kafka.apache.org/31/documentation/streams/developer-guide/dsl-api.html#scala-dsl)

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-streams-scala_2.13</artifactId>
    <version>3.1.0</version>
</dependency>
```

## Configuration

## Resources/ Bib

!!! cite ""

    - [Apache Kafka](https://kafka.apache.org/documentation/#gettingStarted)
    - [Apache Kafka Quickstart](https://kafka.apache.org/quickstart)
    - [Apache Kafka Docs](https://kafka.apache.org/documentation/)
