# MQTT

Is a lightweight publish/ subscribe transport layer protocol designed for messaging with a small code base and header size. It can handle arbitrary messages up to 256MB. Usually runs over TCP/IP but can work with an bi-direction lossless protocol, e.g. TLS, Websockets. It's PRAM consistent in that there is guaranteed in-order delivery per-publisher

## Architecture

![MQTT Architecture](../Networking/assests/mqtt-publish-subscribe.png)

MQTT.org

### Client

### Broker



### Publish

Clients can publish messages as soon as they connect to a broker. After the broker receives a message it acknowledges it depending on the QoS. It then processes it by forwarding the message onto clients which have subscribed to the same topic. Publishers are only concerned with delivering the message to the broker (depending on QoS). The broker is then responsible for the deliver to subscribers. The publisher doesn't get any feedback about subscribers.

**Packet Contents:**
- packetId: unique number created by client library or broker for QoS greater than 0, else the number 0 is used. 
- topicName: string hierarchically structured with forward slashes as delimiters.
- qos: number 0, 1 or 2. See [Quality of Service](#quality-of-service)
- retainFlag: boolean flag indicates whether message should be retained. See [Retained Messages](#retained-messages)
- payload: Content in byte format. Text in any encoding (XML, JSON, etc.), encrypted data, images, binary, etc.
- dupFlag: boolean flag handled by client library or broker to indicate that the message is a duplicate resent because no acknowledgement was received when using a QoS greater than O. 



### Topics

### Quality of Service

Three levels of QoS for message delivery

- QoS 0: At most once; "fire & forget"
- QOS 1: At least once
- QoS 2: Exactly once; 2-phase commit

#### RetainFlag

#### Connect

#### Disconnect

#### Last Will & Testament

### Subscribe
 
**Packet Contents**
- packetId: unique number created by client library or broker. 
- qos1: number 0, 1 or 2 wanted. See [Quality of Service](#quality-of-service)
- topic1: 
- qos2
- topic2
- ...


#### Suback

A SUBACK acknowledgement message is return from the broker to the client to confirm a subscription. 

**Packet Contents**

- packetId
- returnCode

### Unsubscribe

### Retained Messages

## Implementations

### Eclipse Mosquitto (Broker) 

---

## Resources/ Bib.

- [MQTT Ver.3.1.1 OASIS Standard](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html)
- [mqtt.org](https://mqtt.org)
- [HiveMQ](https://www.hivemq.com/mqtt-essentials/)
- [Wikipedia](https://en.wikipedia.org/wiki/MQTT)
- [Mosquitto](https://mosquitto.org/)