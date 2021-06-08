---
title: Used Cars Comparator
---

This article describes a webapp that I developed to help me in my search for the most affordable used car in the market.

## The Goal
In Mars 2021, I decided to buy a second hand car, since I wanted to discover more France's cities. The goal was to buy
an affordable car, suitable for long distances and, since I'll make hundreds of miles each weekend, It should be 
economical. 

My search was essentially focussed on p2p cars marketplace like : LaCentrale, LeBonCoin, L'argus ... etc. It was a never
ending comparison. For that reason, I wanted to have an automated service, in which I can define custom scoring system, 
that also send alerts whenever a new opportunity is detected.

## Design phase
Even it's a simple application, I wanted to develop a scalable, production ready architecture that is easily deployed to 
kubernetes. Hence, all my application's components were dockerized. For the architecture, I went with the following 
design choice :
- Scrapper : The component that scraps websites and save new results to a database.
- ETL Module : The component that loads then enrich the scrapped data and saves the results to an indexed NoSQL
  database.
- WebApp : The presentation layer of the application. It also performs complex query against the NoSQL database.


### Scrapper
- Language : Scala, with a purely functional approach.
- Concurrency is ensured with the use of ZIO framework (a cool library that handles concurrent programming like charm).

### ETL
- Language : Scala / Spark
- Approach : The aim is to develop a general purpose framework to compute scoring & aggregations out of the box. The 
  entire development effort could be ported as a separate library, that could be reused later-on. Some example of 
  functionalities include : Scoring an entity, RollDown, RollUp. Aggregated Views, ScoreCards & Graph based scores.

### WebApp
- Language : Scala with Play Framework (or Spring Boot) for backend & Angular for front end.

## Development phase
### 1- Scrapper

### 2- ETL
